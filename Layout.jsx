import { Link, useLocation } from 'react-router-dom'
import { useLanguage } from '../i18n'

export function Nav() {
  const { lang, toggle, strings } = useLanguage()
  const loc = useLocation()
  const s = strings.nav

  return (
    <nav className="nav">
      <Link to="/" className="nav-logo">
        RMS Consulting <span>🇺🇸🇧🇷</span>
      </Link>
      <div className="nav-links">
        <Link to="/"       className={`nav-link ${loc.pathname==='/'?'active':''}`}>{s.home}</Link>
        <Link to="/about"  className={`nav-link ${loc.pathname==='/about'?'active':''}`}>{s.about}</Link>
        <Link to="/teste"  className={`nav-link ${loc.pathname==='/teste'?'active':''}`}>{s.test}</Link>
        <Link to="/blog"   className={`nav-link ${loc.pathname==='/blog'?'active':''}`}>{s.blog}</Link>
        <button className="lang-toggle" onClick={toggle}>
          <span className={lang==='pt'?'active-lang':''}>PT</span>
          <span style={{opacity:0.3}}>|</span>
          <span className={lang==='en'?'active-lang':''}>EN</span>
        </button>
        <a className="nav-cta" href="mailto:turbofeed95@gmail.com">{s.cta}</a>
      </div>
    </nav>
  )
}

export function Footer() {
  const { strings, lang } = useLanguage()
  const s = strings.nav
  return (
    <footer className="footer">
      <div style={{marginBottom:'0.75rem', display:'flex', justifyContent:'center', gap:'2rem', flexWrap:'wrap'}}>
        <Link to="/"      style={{color:'rgba(196,154,12,0.65)', textDecoration:'none'}}>{s.home}</Link>
        <Link to="/about" style={{color:'rgba(196,154,12,0.65)', textDecoration:'none'}}>{s.about}</Link>
        <Link to="/teste" style={{color:'rgba(196,154,12,0.65)', textDecoration:'none'}}>{s.test}</Link>
        <Link to="/blog"  style={{color:'rgba(196,154,12,0.65)', textDecoration:'none'}}>{s.blog}</Link>
        <a href="mailto:turbofeed95@gmail.com">turbofeed95@gmail.com</a>
      </div>
      <div>© 2026 RMS Consulting. All rights reserved.</div>
    </footer>
  )
}
