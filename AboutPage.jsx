import { useLanguage } from '../i18n'
import { Footer } from '../components/Layout'

export default function AboutPage() {
  const { strings } = useLanguage()
  const s = strings.about

  return (
    <div className="page">

      {/* HERO */}
      <section style={{background:'linear-gradient(148deg,var(--night) 0%,var(--steel) 100%)',
        padding:'7rem 2rem 5rem',position:'relative',overflow:'hidden'}}>
        <div style={{position:'absolute',top:0,left:0,right:0,height:'2px',
          background:'linear-gradient(90deg,transparent,var(--gold),transparent)'}} />
        <div className="container" style={{position:'relative'}}>
          <span className="overline overline-gold fade-up">{s.heroOverline}</span>
          <h1 className="display display-light fade-up-1" style={{marginBottom:'1.25rem'}}>{s.heroTitle}</h1>
          <p className="lead fade-up-2" style={{color:'rgba(248,245,239,0.68)',maxWidth:'480px'}}>{s.heroSub}</p>
        </div>
      </section>

      <div className="rule-gold" />

      {/* GAP */}
      <section className="section" style={{background:'var(--white)'}}>
        <div className="container">
          <span className="overline">{s.gapOverline}</span>
          <h2 className="headline" style={{marginBottom:'1.5rem'}}>{s.gapTitle}</h2>
          <p className="lead" style={{marginBottom:'1.25rem'}}>{s.gapP1}</p>
          <p className="body-text" style={{marginBottom:'1rem'}}>{s.gapP2}</p>
          <p className="body-text" style={{marginBottom:'1.75rem'}}>{s.gapP3}</p>
          <p style={{fontFamily:'var(--serif)',fontSize:'1.1rem',fontStyle:'italic',color:'var(--teal)',
            borderLeft:'3px solid var(--teal)',paddingLeft:'1.25rem',lineHeight:1.7}}>{s.gapQuote}</p>
        </div>
      </section>

      {/* ROSA + VALUES */}
      <section className="section" style={{background:'var(--cream)'}}>
        <div className="container-wide">
          <div className="grid-2" style={{alignItems:'start',gap:'4rem'}}>
            {/* sticky photo */}
            <div style={{position:'sticky',top:'80px'}}>
              <img src="https://rmsconsulting.abacusai.app/rosa-martins.jpg"
                alt="Rosa Martins"
                style={{width:'100%',aspectRatio:'3/4',objectFit:'cover',
                  border:'1px solid var(--cream2)',display:'block'}} />
              <div style={{background:'var(--night)',padding:'1.5rem',marginTop:'-1px'}}>
                <p style={{fontFamily:'var(--serif)',fontSize:'1.25rem',color:'var(--cream)',
                  fontWeight:400,marginBottom:'0.3rem'}}>Rosa Martins</p>
                <p style={{fontFamily:'var(--mono)',fontSize:'0.68rem',letterSpacing:'0.12em',color:'var(--gold-l)'}}>
                  Executive Coach & Behavioral Consultant
                </p>
              </div>
            </div>

            {/* content */}
            <div>
              <span className="overline">{s.howOverline}</span>
              <h2 className="headline" style={{marginBottom:'1.25rem'}}>{s.howTitle}</h2>
              <p style={{fontFamily:'var(--serif)',fontSize:'1.12rem',fontStyle:'italic',lineHeight:1.75,
                color:'var(--teal)',marginBottom:'1.5rem'}}>{s.howQuote}</p>
              <p className="body-text" style={{marginBottom:'1rem'}}>{s.howP1}</p>
              <p className="body-text" style={{marginBottom:'1rem'}}>{s.howP2}</p>
              <p className="body-text" style={{marginBottom:'2.5rem'}}>{s.howP3}</p>

              <div style={{height:'1px',background:'var(--cream2)',marginBottom:'2.5rem'}} />

              <span className="overline">{s.valuesOverline}</span>
              {s.values.map((v,i) => (
                <div key={i} style={{marginBottom:'1.75rem',paddingBottom:'1.75rem',
                  borderBottom: i<3 ? '1px solid var(--cream2)' : 'none'}}>
                  <h4 style={{fontFamily:'var(--serif)',fontSize:'1.12rem',fontWeight:600,
                    color:'var(--night)',marginBottom:'0.5rem'}}>{v.title}</h4>
                  <p className="body-text">{v.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section" style={{background:'var(--night)'}}>
        <div className="container-wide">
          <div style={{textAlign:'center',marginBottom:'3.5rem'}}>
            <span className="overline overline-gold">{s.processOverline}</span>
            <h2 className="headline display-light">{s.processTitle}</h2>
            <p className="lead" style={{color:'rgba(248,245,239,0.6)',maxWidth:'500px',margin:'1rem auto 0'}}>
              {s.processIntro}
            </p>
          </div>
          <div className="grid-3">
            {s.phases.map((p,i) => {
              const colors = ['var(--teal)','var(--gold-l)','var(--cream)']
              return (
                <div key={i} style={{borderTop:`3px solid ${colors[i]}`,
                  background:'rgba(255,255,255,0.03)',border:`1px solid rgba(255,255,255,0.06)`,
                  borderTopColor:colors[i],borderTopWidth:'3px',padding:'2rem'}}>
                  <div style={{fontFamily:'var(--mono)',fontSize:'0.63rem',letterSpacing:'0.18em',
                    color:colors[i],marginBottom:'0.85rem',textTransform:'uppercase'}}>{p.n}</div>
                  <h3 style={{fontFamily:'var(--serif)',fontSize:'1.25rem',fontWeight:400,
                    color:'var(--cream)',marginBottom:'1rem',whiteSpace:'pre-line'}}>{p.title}</h3>
                  <p style={{fontSize:'0.87rem',lineHeight:1.82,color:'rgba(248,245,239,0.58)'}}>{p.body}</p>
                </div>
              )
            })}
          </div>
          <div style={{marginTop:'3rem',padding:'2rem',borderLeft:'3px solid var(--gold)',
            background:'rgba(196,154,12,0.05)'}}>
            <p style={{fontFamily:'var(--serif)',fontSize:'1.22rem',fontStyle:'italic',
              color:'var(--gold-l)',marginBottom:'0.75rem'}}>{s.processQuote}</p>
            <p style={{fontSize:'0.87rem',color:'rgba(248,245,239,0.5)'}}>{s.processQuoteAfter}</p>
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <section className="section" style={{background:'var(--cream2)'}}>
        <div className="container-wide">
          <div style={{textAlign:'center',marginBottom:'3rem'}}>
            <span className="overline">{s.proofOverline}</span>
            <h2 className="headline">{s.proofTitle}</h2>
          </div>
          <div className="grid-2">
            {s.testimonials.map((t,i) => (
              <div key={i} className="card card-teal">
                <p style={{fontFamily:'var(--serif)',fontSize:'1.08rem',fontStyle:'italic',
                  lineHeight:1.82,color:'var(--ink-mid)',marginBottom:'1.5rem'}}>"{t.quote}"</p>
                <div style={{borderTop:'1px solid var(--cream2)',paddingTop:'1rem'}}>
                  <p style={{fontFamily:'var(--sans)',fontWeight:500,fontSize:'0.85rem',color:'var(--night)'}}>{t.name}</p>
                  <p style={{fontFamily:'var(--mono)',fontSize:'0.68rem',letterSpacing:'0.08em',color:'var(--gray-d)'}}>{t.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HEARTMATH */}
      <section className="section" style={{background:'var(--white)'}}>
        <div className="container">
          <span className="overline">{s.heartmathOverline}</span>
          <h2 className="headline" style={{marginBottom:'1.25rem'}}>{s.heartmathTitle}</h2>
          <p className="body-text" style={{marginBottom:'1rem'}}>{s.heartmathP1}</p>
          <p className="body-text" style={{marginBottom:'1.5rem'}}>{s.heartmathP2}</p>
          <div style={{display:'flex',alignItems:'center',gap:'2rem',flexWrap:'wrap',
            padding:'1.5rem',border:'1px solid var(--cream2)',background:'var(--cream)'}}>
            <img src="/heartmath-partner.png" alt="HeartMath Inner Balance"
              style={{height:'52px',objectFit:'contain'}} />
            <div style={{flex:1}}>
              <p style={{fontWeight:500,fontSize:'0.88rem',marginBottom:'0.2rem'}}>Inner Balance Coherence Plus</p>
              <p style={{fontSize:'0.8rem',color:'var(--gray-d)'}}>HRV biofeedback sensor + lifetime app access</p>
            </div>
            <a href="https://www.heartmath.com/rmsconsulting" target="_blank" rel="noopener noreferrer"
              className="btn btn-outline">{s.heartmathBtn}</a>
          </div>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section style={{background:'var(--teal)',padding:'6rem 2rem',textAlign:'center'}}>
        <div className="container">
          <h2 className="headline display-light" style={{marginBottom:'1.25rem',color:'var(--white)'}}>{s.ctaTitle}</h2>
          <p style={{fontFamily:'var(--serif)',fontSize:'1.12rem',fontWeight:300,
            color:'rgba(255,255,255,0.78)',marginBottom:'1rem'}}>{s.ctaPara}</p>
          <p style={{fontFamily:'var(--serif)',fontSize:'1rem',fontStyle:'italic',
            color:'rgba(255,255,255,0.55)',marginBottom:'2.5rem'}}>{s.ctaSub}</p>
          <a className="btn btn-primary" href="mailto:turbofeed95@gmail.com">{s.ctaBtn}</a>
        </div>
      </section>

      <Footer />
    </div>
  )
}
