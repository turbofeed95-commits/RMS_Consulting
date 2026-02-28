import { Link } from 'react-router-dom'
import { useLanguage } from '../i18n'
import { Footer } from '../components/Layout'

export default function HomePage() {
  const { strings } = useLanguage()
  const s = strings.home

  return (
    <div className="page">

      {/* ── HERO ── */}
      <section style={{
        background:'linear-gradient(155deg, var(--night) 0%, var(--night2) 55%, #0A2A2A 100%)',
        padding:'7rem 2rem 6rem', position:'relative', overflow:'hidden'
      }}>
        <div style={{position:'absolute',inset:0,opacity:0.025,
          backgroundImage:"url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          backgroundSize:'180px'}} />
        <div style={{position:'absolute',top:0,left:0,right:0,height:'2px',
          background:'linear-gradient(90deg,transparent,var(--gold),transparent)'}} />

        <div className="container" style={{position:'relative'}}>
          <span className="overline overline-gold fade-up">{s.heroOverline}</span>
          <h1 className="display display-light fade-up-1" style={{marginBottom:'1.5rem'}}>
            {s.heroTitle[0]}<br/>{s.heroTitle[1]}<br/>
            <em>{s.heroTitleEm}</em>
          </h1>
          <p className="lead fade-up-2" style={{color:'rgba(248,245,239,0.72)',marginBottom:'2.5rem',maxWidth:'500px'}}>
            {s.heroPara}
          </p>
          <div className="fade-up-3" style={{display:'flex',gap:'1rem',flexWrap:'wrap'}}>
            <a className="btn btn-primary" href="mailto:turbofeed95@gmail.com">{s.heroCta1}</a>
            <Link className="btn btn-ghost" to="/about">{s.heroCta2}</Link>
          </div>
        </div>
      </section>

      <div className="rule-gold" />

      {/* ── PROBLEM ── */}
      <section className="section" style={{background:'var(--white)'}}>
        <div className="container">
          <span className="overline">{s.problemOverline}</span>
          <h2 className="headline" style={{marginBottom:'1.5rem'}}>{s.problemTitle}</h2>
          <p className="lead" style={{marginBottom:'1.25rem'}}>{s.problemP1}</p>
          <p className="body-text" style={{marginBottom:'2rem'}}>{s.problemP2}</p>
          <Link className="btn btn-outline" to="/about">{s.problemCta}</Link>
        </div>
      </section>

      {/* ── METHOD ── */}
      <section className="section" style={{background:'var(--cream)'}}>
        <div className="container-wide">
          <div style={{textAlign:'center',marginBottom:'3.5rem'}}>
            <span className="overline">{s.methodOverline}</span>
            <h2 className="headline">{s.methodTitle}</h2>
          </div>
          <div className="grid-3">
            {s.phases.map((p,i) => (
              <div key={i} className="card card-teal">
                <div style={{fontFamily:'var(--mono)',fontSize:'0.68rem',letterSpacing:'0.15em',
                  color:'var(--teal)',marginBottom:'1rem'}}>{p.n}</div>
                <h3 style={{fontFamily:'var(--serif)',fontSize:'1.45rem',fontWeight:400,
                  marginBottom:'0.75rem',color:'var(--night)'}}>{p.title}</h3>
                <p className="body-text">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ROSA ── */}
      <section className="section" style={{background:'var(--night)',padding:'5.5rem 2rem'}}>
        <div className="container-wide">
          <div className="grid-2" style={{alignItems:'center',gap:'4rem'}}>
            <div>
              <img src="https://rmsconsulting.abacusai.app/rosa-martins.jpg"
                alt="Rosa Martins"
                style={{width:'100%',maxWidth:'420px',aspectRatio:'4/5',
                  objectFit:'cover',display:'block',
                  border:'1px solid rgba(196,154,12,0.2)'}} />
            </div>
            <div>
              <span className="overline overline-gold">{s.rosaOverline}</span>
              <h2 className="headline display-light" style={{marginBottom:'1.1rem',color:'var(--cream)',whiteSpace:'pre-line'}}>
                {s.rosaTitle}
              </h2>
              <p style={{fontFamily:'var(--serif)',fontSize:'1.18rem',fontWeight:300,lineHeight:1.75,
                color:'rgba(248,245,239,0.75)',marginBottom:'0.6rem'}}>{s.rosaTagline}</p>
              <p style={{fontFamily:'var(--serif)',fontSize:'1.05rem',fontStyle:'italic',
                color:'var(--gold-l)',marginBottom:'1.5rem'}}>{s.rosaSubtagline}</p>
              <p className="body-text" style={{color:'rgba(248,245,239,0.6)',marginBottom:'2rem'}}>{s.rosaPara}</p>
              <Link className="btn btn-ghost" to="/about">{s.rosaCta}</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── TEST TEASER ── */}
      <section className="section" style={{background:'var(--gold-bg)',borderTop:'1px solid var(--cream2)',borderBottom:'1px solid var(--cream2)'}}>
        <div className="container" style={{textAlign:'center'}}>
          <span className="overline overline-gold">{s.testOverline}</span>
          <h2 className="headline" style={{marginBottom:'1.25rem'}}>{s.testTitle}</h2>
          <p className="lead" style={{marginBottom:'2rem',maxWidth:'500px',margin:'0 auto 2rem'}}>{s.testPara}</p>
          <Link className="btn btn-teal" to="/teste">{s.testCta}</Link>
        </div>
      </section>

      {/* ── CTA BAND ── */}
      <section style={{background:'var(--teal)',padding:'6rem 2rem',textAlign:'center'}}>
        <div className="container">
          <h2 className="headline display-light" style={{marginBottom:'1.25rem',color:'var(--white)'}}>{s.ctaTitle}</h2>
          <p style={{fontFamily:'var(--serif)',fontSize:'1.12rem',fontWeight:300,
            color:'rgba(255,255,255,0.78)',marginBottom:'2.5rem',maxWidth:'480px',margin:'0 auto 2.5rem'}}>
            {s.ctaPara}
          </p>
          <a className="btn btn-primary" href="mailto:turbofeed95@gmail.com">{s.ctaBtn}</a>
        </div>
      </section>

      <Footer />
    </div>
  )
}
