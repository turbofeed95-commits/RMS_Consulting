import { useState } from 'react'
import { useLanguage } from '../i18n'
import { Footer } from '../components/Layout'

const POSTS = {
  en: [
    { id:1, date:'February 2026', category:'Clarity',          title:"You don't have a performance problem. You have an alignment problem.",                           excerpt:"Most high-achieving professionals who feel stuck aren't failing at execution. They're executing the wrong system. Here's the distinction that changes everything.", readTime:'6 min' },
    { id:2, date:'January 2026',  category:'Neuroscience',     title:'What your heart rate variability reveals about your career decisions',                           excerpt:"HRV biofeedback isn't a wellness trend. It's a real-time window into the nervous system state that's shaping every decision you make under pressure.",             readTime:'8 min' },
    { id:3, date:'January 2026',  category:'Behavioral Work',  title:'The identity constraint: why successful people stay in the wrong place',                         excerpt:"The most common reason high-performers don't make the move they know they should make isn't fear of failure. It's something more subtle — and more fixable.",      readTime:'7 min' },
    { id:4, date:'December 2025', category:'Leadership',       title:"The shadow in your leadership: what you're not seeing about how you show up",                    excerpt:"Every leader has patterns that operate automatically — patterns they can't observe from inside the pattern. This is what it looks like to see them for the first time.", readTime:'9 min' },
    { id:5, date:'December 2025', category:'Method',           title:'Working accurately, not harder: a different definition of self-development',                     excerpt:"The self-development industry is built on effort. More reflection. More discipline. More practice. Here's why that framing misses the point.",                    readTime:'5 min' },
    { id:6, date:'November 2025', category:'Neuroscience',     title:'Heart-brain coherence explained: what it is and why it matters for executives',                  excerpt:"Coherence is not a metaphor. It's a measurable physiological state that predicts decision quality, emotional regulation, and leadership effectiveness.",          readTime:'7 min' },
  ],
  pt: [
    { id:1, date:'Fevereiro 2026', category:'Clareza',             title:'Você não tem um problema de desempenho. Você tem um problema de alinhamento.',                   excerpt:'A maioria dos profissionais de alta performance que se sentem estagnados não está falhando na execução. Está executando o sistema errado. Eis a distinção que muda tudo.', readTime:'6 min' },
    { id:2, date:'Janeiro 2026',   category:'Neurociência',        title:'O que a sua variabilidade da frequência cardíaca revela sobre suas decisões de carreira',          excerpt:'O biofeedback de VFC não é uma tendência de bem-estar. É uma janela em tempo real para o estado do sistema nervoso que molda cada decisão que você toma sob pressão.',  readTime:'8 min' },
    { id:3, date:'Janeiro 2026',   category:'Trabalho Comportamental', title:'A restrição de identidade: por que pessoas bem-sucedidas ficam no lugar errado',               excerpt:'A razão mais comum pela qual profissionais de alto desempenho não fazem a mudança que sabem que deveriam não é medo de fracasso. É algo mais sutil — e mais corrigível.',  readTime:'7 min' },
    { id:4, date:'Dezembro 2025',  category:'Liderança',           title:'A sombra na sua liderança: o que você não está vendo sobre como aparece',                          excerpt:'Todo líder tem padrões que operam automaticamente — padrões que não conseguem observar de dentro do padrão. É isso que parece quando os veem pela primeira vez.',         readTime:'9 min' },
    { id:5, date:'Dezembro 2025',  category:'Método',              title:'Trabalhar com precisão, não mais: uma definição diferente de autodesenvolvimento',                  excerpt:'A indústria de autodesenvolvimento é construída sobre esforço. Mais reflexão. Mais disciplina. Mais prática. Eis por que esse enquadramento perde o ponto.',             readTime:'5 min' },
    { id:6, date:'Novembro 2025',  category:'Neurociência',        title:'Coerência coração-cérebro explicada: o que é e por que importa para executivos',                   excerpt:'Coerência não é metáfora. É um estado fisiológico mensurável que prevê qualidade de decisão, regulação emocional e eficácia de liderança.',                             readTime:'7 min' },
  ]
}

const CATS = {
  en: ['All', 'Clarity', 'Neuroscience', 'Behavioral Work', 'Leadership', 'Method'],
  pt: ['Todos', 'Clareza', 'Neurociência', 'Trabalho Comportamental', 'Liderança', 'Método'],
}

export default function BlogPage() {
  const { lang, strings } = useLanguage()
  const s = strings.blog
  const posts = POSTS[lang]
  const cats  = CATS[lang]

  const [active, setActive] = useState(cats[0])
  const filtered = active === cats[0] ? posts : posts.filter(p => p.category === active)

  return (
    <div className="page">

      {/* HERO */}
      <section style={{background:'linear-gradient(150deg,var(--night) 0%,#0A2A2A 100%)',
        padding:'7rem 2rem 5rem',position:'relative'}}>
        <div style={{position:'absolute',top:0,left:0,right:0,height:'2px',
          background:'linear-gradient(90deg,transparent,var(--teal),transparent)'}} />
        <div className="container" style={{position:'relative'}}>
          <span className="overline overline-gold fade-up">{s.heroOverline}</span>
          <h1 className="display display-light fade-up-1" style={{marginBottom:'1rem'}}>
            {s.heroTitle[0]}<br/>{s.heroTitle[1]}<br/><em>{s.heroTitle[2]}</em>
          </h1>
          <p className="lead fade-up-2" style={{color:'rgba(248,245,239,0.65)',maxWidth:'460px'}}>
            {s.heroSub}
          </p>
        </div>
      </section>

      <div className="rule-teal" />

      {/* FILTERS */}
      <div style={{background:'var(--white)',padding:'1.5rem 2rem',
        borderBottom:'1px solid var(--cream2)',position:'sticky',top:'64px',zIndex:50}}>
        <div className="container-wide" style={{display:'flex',gap:'0.6rem',flexWrap:'wrap',alignItems:'center'}}>
          <span style={{fontFamily:'var(--mono)',fontSize:'0.63rem',letterSpacing:'0.15em',
            color:'var(--gray-d)',marginRight:'0.5rem'}}>{s.filterLabel}</span>
          {cats.map(cat => (
            <button key={cat} onClick={() => setActive(cat)} style={{
              fontFamily:'var(--sans)',fontSize:'0.7rem',fontWeight:500,
              letterSpacing:'0.1em',textTransform:'uppercase',
              padding:'0.38rem 0.9rem',border:'1px solid',
              borderColor: active===cat ? 'var(--teal)' : 'var(--gray-m)',
              background: active===cat ? 'var(--teal)' : 'transparent',
              color: active===cat ? 'white' : 'var(--gray-d)',
              cursor:'pointer',transition:'all 0.2s',
            }}>{cat}</button>
          ))}
        </div>
      </div>

      {/* POSTS */}
      <section className="section" style={{background:'var(--cream)'}}>
        <div className="container-wide">

          {/* Featured */}
          {filtered.length > 0 && (
            <div style={{marginBottom:'2.5rem'}}>
              <div className="grid-2" style={{background:'var(--night)',gap:0,
                border:'1px solid rgba(255,255,255,0.05)'}}>
                <div style={{background:'linear-gradient(135deg,var(--teal) 0%,var(--night2) 100%)',
                  minHeight:'260px',display:'flex',alignItems:'center',justifyContent:'center',padding:'3rem'}}>
                  <div style={{textAlign:'center'}}>
                    <div style={{fontFamily:'var(--mono)',fontSize:'0.63rem',letterSpacing:'0.2em',
                      color:'rgba(240,204,96,0.8)',marginBottom:'1rem',textTransform:'uppercase'}}>{s.featured}</div>
                    <div style={{fontFamily:'var(--serif)',fontSize:'3.5rem',color:'rgba(255,255,255,0.12)',lineHeight:1}}>✦</div>
                  </div>
                </div>
                <div style={{padding:'3rem'}}>
                  <div style={{display:'flex',gap:'0.75rem',marginBottom:'1rem',alignItems:'center'}}>
                    <span style={{fontFamily:'var(--mono)',fontSize:'0.63rem',letterSpacing:'0.14em',
                      color:'var(--teal)',textTransform:'uppercase'}}>{filtered[0].category}</span>
                    <span style={{color:'rgba(255,255,255,0.2)'}}>·</span>
                    <span style={{fontFamily:'var(--mono)',fontSize:'0.63rem',color:'rgba(255,255,255,0.3)'}}>{filtered[0].readTime}</span>
                  </div>
                  <h2 style={{fontFamily:'var(--serif)',fontSize:'1.65rem',fontWeight:400,
                    color:'var(--cream)',lineHeight:1.3,marginBottom:'1rem'}}>{filtered[0].title}</h2>
                  <p style={{fontSize:'0.86rem',lineHeight:1.8,color:'rgba(248,245,239,0.52)',marginBottom:'1.5rem'}}>
                    {filtered[0].excerpt}
                  </p>
                  <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                    <span style={{fontFamily:'var(--mono)',fontSize:'0.63rem',letterSpacing:'0.08em',
                      color:'rgba(255,255,255,0.28)'}}>{filtered[0].date}</span>
                    <a href="#" style={{fontFamily:'var(--sans)',fontSize:'0.7rem',fontWeight:500,
                      letterSpacing:'0.1em',textTransform:'uppercase',color:'var(--gold-l)',textDecoration:'none'}}>
                      {s.readMore}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Grid */}
          <div className="grid-3">
            {filtered.slice(1).map(post => (
              <div key={post.id} className="card card-teal" style={{cursor:'pointer'}}>
                <div style={{display:'flex',gap:'0.6rem',marginBottom:'0.85rem',alignItems:'center'}}>
                  <span style={{fontFamily:'var(--mono)',fontSize:'0.6rem',letterSpacing:'0.12em',
                    color:'var(--teal)',textTransform:'uppercase'}}>{post.category}</span>
                  <span style={{color:'var(--gray-m)'}}>·</span>
                  <span style={{fontFamily:'var(--mono)',fontSize:'0.6rem',color:'var(--gray-d)'}}>{post.readTime}</span>
                </div>
                <h3 style={{fontFamily:'var(--serif)',fontSize:'1.2rem',fontWeight:400,
                  color:'var(--night)',lineHeight:1.35,marginBottom:'0.7rem'}}>{post.title}</h3>
                <p style={{fontSize:'0.83rem',lineHeight:1.78,color:'var(--gray-d)',marginBottom:'1.25rem'}}>
                  {post.excerpt}
                </p>
                <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',
                  borderTop:'1px solid var(--cream2)',paddingTop:'0.85rem'}}>
                  <span style={{fontFamily:'var(--mono)',fontSize:'0.6rem',letterSpacing:'0.08em',color:'var(--gray-m)'}}>{post.date}</span>
                  <a href="#" style={{fontFamily:'var(--sans)',fontSize:'0.68rem',fontWeight:500,
                    letterSpacing:'0.1em',textTransform:'uppercase',color:'var(--teal)',textDecoration:'none'}}>
                    {s.readMore}
                  </a>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div style={{textAlign:'center',padding:'5rem 0',color:'var(--gray-d)'}}>
              <p style={{fontFamily:'var(--serif)',fontSize:'1.2rem'}}>
                {lang==='pt' ? 'Nenhum post nesta categoria ainda.' : 'No posts in this category yet.'}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* NEWSLETTER */}
      <section style={{background:'var(--night)',padding:'5rem 2rem'}}>
        <div className="container" style={{textAlign:'center'}}>
          <span className="overline overline-gold">{s.newsletterOverline}</span>
          <h2 className="headline display-light" style={{marginBottom:'1rem'}}>{s.newsletterTitle}</h2>
          <p style={{fontFamily:'var(--serif)',fontSize:'1.1rem',fontWeight:300,
            color:'rgba(248,245,239,0.58)',marginBottom:'2rem'}}>{s.newsletterPara}</p>
          <a className="btn btn-primary"
            href={`mailto:turbofeed95@gmail.com?subject=${lang==='pt'?'Assinar Newsletter':'Newsletter Subscription'}`}>
            {s.newsletterBtn}
          </a>
        </div>
      </section>

      <Footer />
    </div>
  )
}
