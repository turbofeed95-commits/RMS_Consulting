import { useState } from 'react'
import { useLanguage } from '../i18n'
import { Footer } from '../components/Layout'
import { questions, scoring, archetypes } from '../data/quiz'

// ── EMAIL CAPTURE via Formspree (free, no backend needed) ─────────────────────
// Replace YOUR_FORM_ID with your Formspree form ID from https://formspree.io
const FORMSPREE_ID = 'YOUR_FORM_ID'

async function sendLead(name, email, lang, archetype) {
  try {
    await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, archetype, lang, source: 'archetype-test' }),
    })
  } catch(e) {
    // fail silently — don't block user from seeing result
    console.error('Lead capture failed:', e)
  }
}

// ── SCORE CALCULATION ──────────────────────────────────────────────────────────
function calcArchetype(answers) {
  const scores = [0, 0, 0, 0] // Hero, Explorer, Caregiver, Sage
  answers.forEach((answerIdx, qIdx) => {
    if (answerIdx !== null) scores[scoring[qIdx][answerIdx]]++
  })
  const maxScore = Math.max(...scores)
  return scores.indexOf(maxScore) // 0=Hero 1=Explorer 2=Caregiver 3=Sage
}

// ── SCREENS ───────────────────────────────────────────────────────────────────
const SCREEN = { INTRO: 'intro', QUIZ: 'quiz', EMAIL: 'email', RESULT: 'result' }

export default function TestePage() {
  const { lang, strings } = useLanguage()
  const s = strings.test
  const qs = questions[lang]

  const [screen, setScreen]   = useState(SCREEN.INTRO)
  const [current, setCurrent] = useState(0)
  const [answers, setAnswers] = useState(Array(qs.length).fill(null))
  const [selected, setSelected] = useState(null)
  const [name, setName]       = useState('')
  const [email, setEmail]     = useState('')
  const [loading, setLoading] = useState(false)
  const [archetypeIdx, setArchetypeIdx] = useState(null)

  const progress = ((current + 1) / qs.length) * 100

  const handleNext = () => {
    if (selected === null) return
    const newAnswers = [...answers]
    newAnswers[current] = selected
    setAnswers(newAnswers)
    setSelected(null)
    if (current + 1 < qs.length) {
      setCurrent(current + 1)
    } else {
      const idx = calcArchetype(newAnswers)
      setArchetypeIdx(idx)
      setScreen(SCREEN.EMAIL)
    }
  }

  const handleSubmitEmail = async (e) => {
    e.preventDefault()
    if (!email || !name) return
    setLoading(true)
    const arch = archetypes[lang][archetypeIdx]
    await sendLead(name, email, lang, arch.name)
    setLoading(false)
    setScreen(SCREEN.RESULT)
  }

  const restart = () => {
    setScreen(SCREEN.INTRO); setCurrent(0)
    setAnswers(Array(qs.length).fill(null)); setSelected(null)
    setName(''); setEmail(''); setArchetypeIdx(null)
  }

  const arch = archetypeIdx !== null ? archetypes[lang][archetypeIdx] : null

  return (
    <div className="page">

      {/* ── HERO ── */}
      <section style={{background:'linear-gradient(148deg,var(--night) 0%,#0A2A2A 100%)',
        padding:'6rem 2rem 5rem',position:'relative'}}>
        <div style={{position:'absolute',top:0,left:0,right:0,height:'2px',
          background:'linear-gradient(90deg,transparent,var(--teal),transparent)'}} />
        <div className="container" style={{textAlign:'center',position:'relative'}}>
          <span className="overline overline-gold fade-up">{s.heroOverline}</span>
          <h1 className="display display-light fade-up-1" style={{marginBottom:'1.1rem'}}>{s.heroTitle}</h1>
          <p className="lead fade-up-2" style={{color:'rgba(248,245,239,0.68)',maxWidth:'480px',margin:'0 auto'}}>{s.heroSub}</p>
        </div>
      </section>

      <div className="rule-teal" />

      {/* ── MAIN AREA ── */}
      <section className="section" style={{background:'var(--cream)',minHeight:'60vh'}}>
        <div style={{maxWidth:'640px',margin:'0 auto',padding:'0 1rem'}}>

          {/* INTRO */}
          {screen === SCREEN.INTRO && (
            <div style={{textAlign:'center',animation:'fadeUp 0.5s ease both'}}>
              <div style={{width:'80px',height:'80px',borderRadius:'50%',
                background:'var(--teal)',display:'flex',alignItems:'center',justifyContent:'center',
                margin:'0 auto 2rem',fontSize:'2rem'}}>✦</div>
              <h2 className="headline" style={{marginBottom:'1.25rem'}}>{s.heroTitle}</h2>
              <p className="lead" style={{marginBottom:'2.5rem'}}>{s.heroSub}</p>
              <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'1rem',marginBottom:'2.5rem'}}>
                {[
                  { n:'12', label: lang==='pt' ? 'perguntas' : 'questions' },
                  { n:'8',  label: lang==='pt' ? 'minutos' : 'minutes' },
                  { n:'4',  label: lang==='pt' ? 'arquétipos' : 'archetypes' },
                ].map((item,i) => (
                  <div key={i} style={{background:'var(--white)',border:'1px solid var(--cream2)',padding:'1.25rem',textAlign:'center'}}>
                    <div style={{fontFamily:'var(--serif)',fontSize:'2.2rem',fontWeight:400,color:'var(--teal)',lineHeight:1}}>{item.n}</div>
                    <div style={{fontFamily:'var(--mono)',fontSize:'0.65rem',letterSpacing:'0.12em',color:'var(--gray-d)',textTransform:'uppercase',marginTop:'0.35rem'}}>{item.label}</div>
                  </div>
                ))}
              </div>
              <button className="btn btn-teal" style={{fontSize:'0.9rem',padding:'1rem 2.5rem'}}
                onClick={() => setScreen(SCREEN.QUIZ)}>{s.startBtn}</button>
            </div>
          )}

          {/* QUIZ */}
          {screen === SCREEN.QUIZ && (
            <div style={{animation:'fadeUp 0.4s ease both'}}>
              {/* progress */}
              <div style={{marginBottom:'0.5rem',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                <span style={{fontFamily:'var(--mono)',fontSize:'0.65rem',letterSpacing:'0.12em',color:'var(--gray-d)'}}>
                  {s.progressLabel(current+1, qs.length)}
                </span>
                <span style={{fontFamily:'var(--mono)',fontSize:'0.65rem',color:'var(--teal)'}}>{Math.round(progress)}%</span>
              </div>
              <div className="quiz-progress-bar">
                <div className="quiz-progress-fill" style={{width:`${progress}%`}} />
              </div>

              {/* question */}
              <h3 style={{fontFamily:'var(--serif)',fontSize:'1.5rem',fontWeight:400,
                color:'var(--night)',lineHeight:1.4,marginBottom:'2rem'}}>
                {qs[current].text}
              </h3>

              {/* options */}
              {qs[current].options.map((opt,i) => (
                <button key={i}
                  className={`quiz-option ${selected===i?'selected':''}`}
                  onClick={() => setSelected(i)}>
                  <span style={{fontFamily:'var(--mono)',fontSize:'0.62rem',
                    marginRight:'0.75rem',opacity:0.5}}>{String.fromCharCode(65+i)}.</span>
                  {opt}
                </button>
              ))}

              <div style={{display:'flex',justifyContent:'flex-end',marginTop:'1.5rem'}}>
                <button className="btn btn-teal"
                  onClick={handleNext}
                  disabled={selected===null}
                  style={{opacity: selected===null ? 0.4 : 1, cursor: selected===null ? 'not-allowed' : 'pointer'}}>
                  {s.nextBtn}
                </button>
              </div>
            </div>
          )}

          {/* EMAIL GATE */}
          {screen === SCREEN.EMAIL && (
            <div style={{textAlign:'center',animation:'fadeUp 0.4s ease both'}}>
              <div style={{width:'72px',height:'72px',borderRadius:'50%',
                background:'var(--gold-bg)',border:'2px solid var(--gold)',
                display:'flex',alignItems:'center',justifyContent:'center',
                margin:'0 auto 1.75rem',fontSize:'1.75rem'}}>✦</div>
              <h2 className="headline" style={{marginBottom:'0.75rem'}}>{s.emailTitle}</h2>
              <p className="lead" style={{marginBottom:'2rem',maxWidth:'420px',margin:'0 auto 2rem'}}>{s.emailSub}</p>
              <form onSubmit={handleSubmitEmail}>
                <input type="text" className="email-input" placeholder={s.namePlaceholder}
                  value={name} onChange={e => setName(e.target.value)} required />
                <input type="email" className="email-input" placeholder={s.emailPlaceholder}
                  value={email} onChange={e => setEmail(e.target.value)} required />
                <button type="submit" className="btn btn-teal"
                  style={{width:'100%',fontSize:'0.9rem',padding:'1rem',
                    opacity: loading ? 0.7 : 1, cursor: loading ? 'wait' : 'pointer'}}>
                  {loading ? (lang==='pt' ? 'Processando...' : 'Processing...') : s.submitBtn}
                </button>
                <p style={{fontFamily:'var(--mono)',fontSize:'0.62rem',letterSpacing:'0.08em',
                  color:'var(--gray-d)',marginTop:'0.85rem'}}>{s.privacyNote}</p>
              </form>
            </div>
          )}

          {/* RESULT */}
          {screen === SCREEN.RESULT && arch && (
            <div style={{animation:'fadeUp 0.5s ease both'}}>
              {/* archetype header */}
              <div style={{borderTop:`4px solid ${arch.color}`,background:'var(--white)',
                padding:'2.5rem',marginBottom:'2rem',textAlign:'center'}}>
                <span className="overline" style={{color:arch.color}}>{s.resultOverline}</span>
                <h2 style={{fontFamily:'var(--serif)',fontSize:'2.8rem',fontWeight:400,
                  color:arch.color,lineHeight:1.1,marginBottom:'0.5rem'}}>{arch.name}</h2>
                <p style={{fontFamily:'var(--mono)',fontSize:'0.7rem',letterSpacing:'0.18em',
                  color:'var(--gray-d)',textTransform:'uppercase'}}>{arch.tagline}</p>
              </div>

              {/* traits */}
              <div className="card card-night" style={{marginBottom:'1.5rem'}}>
                <p style={{fontFamily:'var(--mono)',fontSize:'0.65rem',letterSpacing:'0.15em',
                  color:'var(--gray-d)',textTransform:'uppercase',marginBottom:'1rem'}}>{s.traitLabel}</p>
                <div style={{display:'flex',flexWrap:'wrap',gap:'0.5rem'}}>
                  {arch.traits.map((t,i) => (
                    <span key={i} style={{fontFamily:'var(--sans)',fontSize:'0.8rem',fontWeight:500,
                      padding:'0.3rem 0.9rem',background:'var(--steel-l)',color:'var(--steel)',
                      border:'1px solid rgba(27,58,92,0.15)'}}>{t}</span>
                  ))}
                </div>
              </div>

              {/* strength */}
              <div className="card" style={{borderLeft:`3px solid ${arch.color}`,marginBottom:'1.5rem'}}>
                <p style={{fontFamily:'var(--mono)',fontSize:'0.65rem',letterSpacing:'0.15em',
                  color:arch.color,textTransform:'uppercase',marginBottom:'0.75rem'}}>{s.strengthLabel}</p>
                <p className="body-text">{arch.strength}</p>
              </div>

              {/* shadow */}
              <div className="card" style={{borderLeft:'3px solid var(--ruby)',marginBottom:'2.5rem',
                background:'var(--ruby-l)'}}>
                <p style={{fontFamily:'var(--mono)',fontSize:'0.65rem',letterSpacing:'0.15em',
                  color:'var(--ruby)',textTransform:'uppercase',marginBottom:'0.75rem'}}>{s.shadowLabel}</p>
                <p className="body-text">{arch.shadow}</p>
              </div>

              {/* next step CTA */}
              <div style={{background:'var(--night)',padding:'2.5rem',textAlign:'center'}}>
                <h3 style={{fontFamily:'var(--serif)',fontSize:'1.5rem',fontWeight:400,
                  color:'var(--cream)',marginBottom:'1rem'}}>{s.nextStepTitle}</h3>
                <p style={{fontFamily:'var(--serif)',fontSize:'1rem',fontWeight:300,
                  color:'rgba(248,245,239,0.65)',marginBottom:'2rem'}}>{s.nextStepPara}</p>
                <a className="btn btn-primary" href="mailto:turbofeed95@gmail.com"
                  style={{marginBottom:'1rem',display:'inline-block'}}>{s.nextStepBtn}</a>
                <br/>
                <button onClick={restart}
                  style={{background:'none',border:'none',cursor:'pointer',
                    fontFamily:'var(--mono)',fontSize:'0.65rem',letterSpacing:'0.1em',
                    color:'rgba(248,245,239,0.4)',marginTop:'0.75rem',textTransform:'uppercase'}}>
                  {s.retakeBtn}
                </button>
              </div>
            </div>
          )}

        </div>
      </section>

      <Footer />
    </div>
  )
}
