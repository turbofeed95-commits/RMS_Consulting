import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
/* ── RESET & ROOT ─────────────────────────────────────────── */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

:root {
  --night:     #0C1B2A;
  --night2:    #122032;
  --steel:     #1B3A5C;
  --steel-l:   #EAF0F8;
  --teal:      #0A6B6B;
  --teal-d:    #085555;
  --teal-l:    #E3F3F3;
  --gold:      #C49A0C;
  --gold-l:    #F0CC60;
  --gold-bg:   #FDF8EC;
  --cream:     #F8F5EF;
  --cream2:    #EDE8DF;
  --white:     #FFFFFF;
  --ink:       #1A1A1A;
  --ink-mid:   #3A3A3A;
  --gray-d:    #7A7A78;
  --gray-m:    #CCCCCC;
  --ruby:      #8B1A2E;
  --ruby-l:    #F9EAED;
  --serif: 'Cormorant Garamond', Georgia, serif;
  --sans:  'DM Sans', system-ui, sans-serif;
  --mono:  'DM Mono', monospace;
}

html { scroll-behavior: smooth; }
body { font-family: var(--sans); background: var(--cream); color: var(--ink); line-height: 1.7; -webkit-font-smoothing: antialiased; }
::selection { background: var(--gold-l); color: var(--night); }

.display { font-family: var(--serif); font-size: clamp(2.6rem, 5.5vw, 4.8rem); font-weight: 300; line-height: 1.1; letter-spacing: -0.02em; color: var(--night); }
.display em { font-style: italic; color: var(--teal); }
.display-light { color: var(--cream); }
.display-light em { color: var(--gold-l); }
.headline { font-family: var(--serif); font-size: clamp(1.7rem, 3vw, 2.6rem); font-weight: 400; line-height: 1.25; color: var(--night); }
.overline { font-family: var(--mono); font-size: 0.68rem; letter-spacing: 0.2em; text-transform: uppercase; color: var(--teal); margin-bottom: 0.85rem; display: block; }
.overline-gold { color: var(--gold); }
.lead { font-family: var(--serif); font-size: 1.18rem; font-weight: 300; line-height: 1.8; color: var(--ink-mid); }
.body-text { font-size: 0.95rem; line-height: 1.85; color: var(--ink-mid); }

.nav { position: fixed; top: 0; left: 0; right: 0; z-index: 200; background: rgba(12,27,42,0.97); backdrop-filter: blur(14px); border-bottom: 1px solid rgba(196,154,12,0.18); padding: 0 2rem; height: 64px; display: flex; align-items: center; justify-content: space-between; }
.nav-logo { font-family: var(--serif); font-size: 1.15rem; font-weight: 500; color: var(--cream); text-decoration: none; letter-spacing: 0.03em; cursor: pointer; display: flex; align-items: center; gap: 0.5rem; }
.nav-logo span { color: var(--gold-l); font-size: 0.82rem; }
.nav-links { display: flex; gap: 1.75rem; align-items: center; }
.nav-link { font-family: var(--sans); font-size: 0.78rem; font-weight: 500; letter-spacing: 0.11em; text-transform: uppercase; color: rgba(248,245,239,0.65); text-decoration: none; transition: color 0.2s; cursor: pointer; background: none; border: none; }
.nav-link:hover, .nav-link.active { color: var(--gold-l); }
.lang-toggle { font-family: var(--mono); font-size: 0.68rem; letter-spacing: 0.12em; color: rgba(248,245,239,0.45); background: none; border: 1px solid rgba(248,245,239,0.15); padding: 0.3rem 0.7rem; cursor: pointer; transition: all 0.2s; display: flex; gap: 0.4rem; align-items: center; }
.lang-toggle:hover { border-color: var(--gold-l); color: var(--gold-l); }
.lang-toggle .active-lang { color: var(--gold-l); font-weight: 500; }
.nav-cta { font-family: var(--sans); font-size: 0.73rem; font-weight: 500; letter-spacing: 0.1em; text-transform: uppercase; color: var(--night); background: var(--gold-l); padding: 0.5rem 1.2rem; border: none; cursor: pointer; transition: background 0.2s, transform 0.15s; text-decoration: none; }
.nav-cta:hover { background: var(--gold); transform: translateY(-1px); }

.page { padding-top: 64px; min-height: 100vh; }
.section { padding: 5.5rem 2rem; }
.container { max-width: 720px; margin: 0 auto; }
.container-wide { max-width: 1080px; margin: 0 auto; }
.rule { height: 1px; background: var(--cream2); }
.rule-gold { height: 1px; background: linear-gradient(90deg, transparent, var(--gold), transparent); }
.rule-teal { height: 1px; background: linear-gradient(90deg, transparent, var(--teal), transparent); }

.grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 2.5rem; }
.grid-3 { display: grid; grid-template-columns: repeat(3,1fr); gap: 1.5rem; }
@media (max-width: 860px) { .grid-2, .grid-3 { grid-template-columns: 1fr; } .nav-links .nav-link:not(.nav-cta):not(.lang-toggle) { display: none; } }
@media (max-width: 520px) { .section { padding: 4rem 1.25rem; } }

.card { background: var(--white); border: 1px solid var(--cream2); padding: 2.25rem; transition: box-shadow 0.3s, transform 0.25s; }
.card:hover { box-shadow: 0 6px 32px rgba(12,27,42,0.07); transform: translateY(-2px); }
.card-teal { border-top: 3px solid var(--teal); }
.card-gold { border-top: 3px solid var(--gold); }
.card-night { border-top: 3px solid var(--night); }

.btn { display: inline-block; font-family: var(--sans); font-size: 0.76rem; font-weight: 500; letter-spacing: 0.12em; text-transform: uppercase; padding: 0.88rem 2rem; border: none; cursor: pointer; text-decoration: none; transition: all 0.2s; }
.btn-primary { background: var(--gold-l); color: var(--night); }
.btn-primary:hover { background: var(--gold); transform: translateY(-1px); }
.btn-outline { background: transparent; color: var(--night); border: 1.5px solid var(--night); }
.btn-outline:hover { background: var(--night); color: var(--cream); }
.btn-ghost { background: transparent; color: var(--cream); border: 1.5px solid rgba(248,245,239,0.35); }
.btn-ghost:hover { border-color: var(--gold-l); background: rgba(240,204,96,0.07); }
.btn-teal { background: var(--teal); color: var(--white); }
.btn-teal:hover { background: var(--teal-d); transform: translateY(-1px); }

.footer { background: var(--night); color: rgba(248,245,239,0.45); text-align: center; padding: 2.5rem 2rem; font-size: 0.78rem; letter-spacing: 0.05em; border-top: 1px solid rgba(196,154,12,0.12); }
.footer a { color: rgba(196,154,12,0.65); text-decoration: none; transition: color 0.2s; }
.footer a:hover { color: var(--gold-l); }

@keyframes fadeUp { from { opacity:0; transform:translateY(22px); } to { opacity:1; transform:translateY(0); } }
.fade-up   { animation: fadeUp 0.65s ease both; }
.fade-up-1 { animation: fadeUp 0.65s 0.1s ease both; }
.fade-up-2 { animation: fadeUp 0.65s 0.22s ease both; }
.fade-up-3 { animation: fadeUp 0.65s 0.36s ease both; }
.fade-up-4 { animation: fadeUp 0.65s 0.5s ease both; }

.quiz-option { width: 100%; text-align: left; padding: 1rem 1.25rem; background: var(--white); border: 1.5px solid var(--cream2); cursor: pointer; font-family: var(--sans); font-size: 0.92rem; color: var(--ink-mid); transition: all 0.18s; border-radius: 0; margin-bottom: 0.6rem; display: block; }
.quiz-option:hover { border-color: var(--teal); color: var(--teal); background: var(--teal-l); }
.quiz-option.selected { border-color: var(--teal); background: var(--teal); color: var(--white); }
.quiz-progress-bar { height: 3px; background: var(--cream2); margin-bottom: 2.5rem; position: relative; overflow: hidden; }
.quiz-progress-fill { height: 100%; background: var(--teal); transition: width 0.4s ease; }
.email-input { width: 100%; padding: 0.9rem 1.1rem; border: 1.5px solid var(--cream2); background: var(--white); font-family: var(--sans); font-size: 0.95rem; color: var(--ink); outline: none; transition: border-color 0.2s; margin-bottom: 0.75rem; }
.email-input:focus { border-color: var(--teal); }
import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { LanguageProvider } from './i18n'
import { Nav } from './components/Layout'
import HomePage  from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import TestePage from './pages/TestePage'
import BlogPage  from './pages/BlogPage'
import './styles.css'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'smooth' }) }, [pathname])
  return null
}

export default function App() {
  return (
    <LanguageProvider>
      <ScrollToTop />
      <Nav />
      <Routes>
        <Route path="/"      element={<HomePage  />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/teste" element={<TestePage />} />
        <Route path="/test"  element={<TestePage />} />
        <Route path="/blog"  element={<BlogPage  />} />
        <Route path="*"      element={<HomePage  />} />
      </Routes>
    </LanguageProvider>
  )import { Link, useLocation } from 'react-router-dom'
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
  const { strings } = useLanguage()
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
  // ── QUIZ QUESTIONS (bilingual) ─────────────────────────────────────────────
export const questions = {
  en: [
    { id:1,  text:"When you take on a new project, your first instinct is to:", options:["Plan every step before acting","Jump in and figure it out","Rally others around the vision","Research deeply before committing"] },
    { id:2,  text:"At work, the thing that energizes you most is:", options:["Achieving a difficult goal","Discovering something new","Helping others grow","Building something that lasts"] },
    { id:3,  text:"When facing a major setback, you tend to:", options:["Push harder and overcome it","See it as a sign to change direction","Seek support from your network","Analyze what went wrong systematically"] },
    { id:4,  text:"The kind of recognition that means most to you:", options:["Being seen as the best at what you do","Being known as innovative or original","Being trusted by the people you lead","Being respected for your expertise"] },
    { id:5,  text:"In meetings, you're most likely to:", options:["Drive toward a decision","Introduce a new angle or idea","Make sure everyone's voice is heard","Provide the deep analysis"] },
    { id:6,  text:"Your relationship with rules and structure is:", options:["You follow them when they make sense","You often question or bypass them","You create them for others","You study them to understand the system"] },
    { id:7,  text:"When you imagine your ideal work environment:", options:["Competitive, high-stakes, clear winners","Open, exploratory, lots of autonomy","Collaborative, people-centered, purpose-driven","Quiet, rigorous, depth over breadth"] },
    { id:8,  text:"The professional legacy you want most is:", options:["Having conquered extraordinary challenges","Having changed how people think or work","Having developed people who went further","Having produced work of lasting depth and quality"] },
    { id:9,  text:"When you're at your best, people say you:", options:["Get things done that others can't","See possibilities others miss","Bring out the best in those around you","Know more about the subject than anyone"] },
    { id:10, text:"What frustrates you most in a professional context:", options:["Mediocrity and lack of ambition","Rigid thinking and closed doors","Disconnection and lack of trust","Superficiality and lack of rigor"] },
    { id:11, text:"Your natural role in a team is:", options:["The one who drives results","The one who questions assumptions","The one who holds the team together","The one who provides the knowledge base"] },
    { id:12, text:"When you think about changing careers, what feels most true:", options:["You want a bigger challenge","You want more freedom and exploration","You want more meaning and connection","You want more depth and specialization"] },
  ],
  pt: [
    { id:1,  text:"Quando você assume um novo projeto, seu primeiro instinto é:", options:["Planejar cada etapa antes de agir","Mergulhar de cabeça e descobrir pelo caminho","Engajar outros em torno da visão","Pesquisar profundamente antes de se comprometer"] },
    { id:2,  text:"No trabalho, o que mais te energiza é:", options:["Conquistar um objetivo difícil","Descobrir algo novo","Ajudar outros a crescer","Construir algo que dure"] },
    { id:3,  text:"Quando enfrenta um grande revés, você tende a:", options:["Se esforçar mais e superar","Ver como sinal para mudar de direção","Buscar apoio na sua rede","Analisar sistematicamente o que deu errado"] },
    { id:4,  text:"O tipo de reconhecimento que mais importa para você:", options:["Ser visto como o melhor no que faz","Ser conhecido como inovador ou original","Ser confiado pelas pessoas que lidera","Ser respeitado pela sua expertise"] },
    { id:5,  text:"Em reuniões, você mais provavelmente:", options:["Conduz em direção a uma decisão","Introduz um novo ângulo ou ideia","Garante que todas as vozes sejam ouvidas","Fornece a análise aprofundada"] },
    { id:6,  text:"Sua relação com regras e estrutura é:", options:["Você as segue quando fazem sentido","Você frequentemente as questiona ou contorna","Você as cria para os outros","Você as estuda para entender o sistema"] },
    { id:7,  text:"Ao imaginar seu ambiente de trabalho ideal:", options:["Competitivo, alto risco, vencedores claros","Aberto, exploratório, muita autonomia","Colaborativo, centrado nas pessoas, com propósito","Tranquilo, rigoroso, profundidade sobre amplitude"] },
    { id:8,  text:"O legado profissional que você mais quer é:", options:["Ter conquistado desafios extraordinários","Ter mudado a forma como as pessoas pensam ou trabalham","Ter desenvolvido pessoas que foram mais longe","Ter produzido trabalho de profundidade e qualidade duradoura"] },
    { id:9,  text:"Quando você está no seu melhor, as pessoas dizem que você:", options:["Realiza o que outros não conseguem","Enxerga possibilidades que outros não veem","Traz o melhor das pessoas ao redor","Sabe mais sobre o assunto do que qualquer um"] },
    { id:10, text:"O que mais te frustra em contexto profissional:", options:["Mediocridade e falta de ambição","Pensamento rígido e portas fechadas","Desconexão e falta de confiança","Superficialidade e falta de rigor"] },
    { id:11, text:"Seu papel natural em uma equipe é:", options:["O que conduz resultados","O que questiona premissas","O que mantém a equipe coesa","O que fornece a base de conhecimento"] },
    { id:12, text:"Quando pensa em mudar de carreira, o que parece mais verdadeiro:", options:["Você quer um desafio maior","Você quer mais liberdade e exploração","Você quer mais significado e conexão","Você quer mais profundidade e especialização"] },
  ]
}

export const scoring = [
  [0,1,2,3],[0,1,2,3],[0,1,2,3],[0,1,2,3],
  [0,1,2,3],[0,1,2,3],[0,1,2,3],[0,1,2,3],
  [0,1,2,3],[0,1,2,3],[0,1,2,3],[0,1,2,3],
]

export const archetypes = {
  en: [
    { id:'hero',      name:'The Hero',      tagline:'Conquer. Achieve. Prove.',    color:'#1B3A5C', traits:['High drive','Results-oriented','Competitive','Resilient under pressure'],          strength:"You get things done that most people can't. You thrive in high-stakes environments, lead through action, and inspire others with what you're willing to take on.",                                                              shadow:"Your identity can collapse into your performance. When results slow or stop, you risk equating that with who you are. Burnout often hits not from lack of effort, but from effort without meaning." },
    { id:'explorer',  name:'The Explorer',  tagline:'Discover. Question. Move.',   color:'#0A6B6B', traits:['Intellectual curiosity','Autonomy-driven','Adaptable','Resists convention'],       strength:"You see possibilities before others do. You bring fresh angles to stale problems, thrive on novelty, and have a rare capacity to operate well in ambiguity.",                                                                   shadow:"The impulse to move can become flight. When a context becomes repetitive, the Explorer often interprets discomfort as a signal to leave — when it may actually be the threshold of mastery." },
    { id:'caregiver', name:'The Caregiver', tagline:'Develop. Connect. Sustain.',  color:'#2D5B3F', traits:['High empathy','Purpose-driven','Relationship-builder','Naturally trusted'],        strength:"You bring out the best in people around you. Your leadership creates psychological safety that most executives only talk about. People follow you not from authority but from genuine trust.",                                  shadow:"You can disappear into service. When your identity is built on being needed, setting boundaries feels like betrayal. The Caregiver's shadow is chronic self-neglect dressed as generosity." },
    { id:'sage',      name:'The Sage',      tagline:'Understand. Refine. Know.',   color:'#8B4513', traits:['Analytical depth','High standards','Domain mastery','Independent thinker'],        strength:"You know more, go deeper, and think more rigorously than almost anyone in the room. Your analysis catches what others miss. When the context demands genuine expertise, you're the person others defer to.",                    shadow:"Depth can become a hiding place. The Sage often delays decisions waiting for more information, delays visibility waiting for more certainty, delays action waiting for the conditions to be right." },
  ],
  pt: [
    { id:'hero',      name:'O Herói',      tagline:'Conquistar. Realizar. Provar.',       color:'#1B3A5C', traits:['Alta determinação','Orientado a resultados','Competitivo','Resiliente sob pressão'],           strength:"Você realiza o que a maioria das pessoas não consegue. Prospera em ambientes de alto risco, lidera pela ação e inspira outros pelo que está disposto a enfrentar.",                                                         shadow:"Sua identidade pode colapsar no seu desempenho. Quando os resultados diminuem ou param, você corre o risco de confundir isso com quem você é. O burnout frequentemente ocorre não por falta de esforço, mas por esforço sem significado." },
    { id:'explorer',  name:'O Explorador', tagline:'Descobrir. Questionar. Mover.',       color:'#0A6B6B', traits:['Curiosidade intelectual','Orientado à autonomia','Adaptável','Resiste à convenção'],           strength:"Você enxerga possibilidades antes dos outros. Traz ângulos frescos a problemas velhos, prospera na novidade e tem rara capacidade de operar bem na ambiguidade.",                                                          shadow:"O impulso de se mover pode se tornar fuga. Quando um contexto se torna repetitivo, o Explorador frequentemente interpreta o desconforto como sinal para ir embora — quando pode ser o limiar do domínio." },
    { id:'caregiver', name:'O Cuidador',   tagline:'Desenvolver. Conectar. Sustentar.',   color:'#2D5B3F', traits:['Alta empatia','Orientado ao propósito','Construtor de relacionamentos','Naturalmente confiável'], strength:"Você traz o melhor das pessoas ao seu redor. Sua liderança cria segurança psicológica que a maioria dos executivos só fala. As pessoas te seguem não pela autoridade, mas pela confiança genuína.",                 shadow:"Você pode desaparecer no serviço aos outros. Quando sua identidade é construída sobre ser necessário, estabelecer limites parece traição. A sombra do Cuidador é a autodesatenção crônica disfarçada de generosidade." },
    { id:'sage',      name:'O Sábio',      tagline:'Compreender. Refinar. Conhecer.',     color:'#8B4513', traits:['Profundidade analítica','Altos padrões','Domínio do campo','Pensador independente'],            strength:"Você sabe mais, vai mais fundo e pensa com mais rigor do que quase qualquer um na sala. Sua análise captura o que os outros perdem. Quando o contexto exige expertise genuína, você é a pessoa a quem os outros recorrem.", shadow:"A profundidade pode se tornar um esconderijo. O Sábio frequentemente adia decisões esperando mais informação, adia visibilidade esperando mais certeza, adia ação esperando as condições certas." },
  ]
}import { createContext, useContext, useState } from 'react'

const LanguageContext = createContext()
export const useLanguage = () => useContext(LanguageContext)

export const t = {
  en: {
    nav: { home:'Home', about:'About', test:'Take the Test', blog:'Blog', cta:'Work With Me' },
    home: {
      heroOverline: 'Executive Coach & Behavioral Consultant',
      heroTitle: ["You've built what", "you were supposed", "to build.", "Now what?"],
      heroTitleEm: "Now what?",
      heroPara: "The career. The title. The numbers. And somewhere along the way, the work stopped feeling like yours. That's not a motivation problem — it's an alignment problem. And it has a precise solution.",
      heroCta1: 'Schedule a Consultation',
      heroCta2: 'Learn the Method →',
      problemOverline: 'The Problem',
      problemTitle: 'High achievement and deep fulfillment are not the same destination.',
      problemP1: "Most of the professionals I work with arrive having done everything right. Promotions earned. Goals exceeded. Teams led. What they can't explain is why it still feels like something essential is missing.",
      problemP2: "The issue is rarely performance. It's that the internal systems driving their decisions — the beliefs, emotional patterns, and nervous system responses built over decades — haven't been updated to match who they've become.",
      problemCta: 'See How the Work Happens →',
      methodOverline: 'The Method',
      methodTitle: 'Precision over positivity. Always.',
      phases: [
        { n:'01', title:'Identify', body:"We map the specific internal pattern generating the block — not the symptom you describe, but what's running beneath it." },
        { n:'02', title:'Interrupt', body:'Using HRV biofeedback and targeted behavioral work, we intervene at the level where the pattern actually operates.' },
        { n:'03', title:'Integrate', body:"Change that doesn't hold under pressure isn't real change. We embed the new pattern into how you actually lead and decide." },
      ],
      rosaOverline: 'Rosa Martins',
      rosaTitle: 'Executive Coach &\nBehavioral Consultant',
      rosaTagline: 'Design your career with clarity, strategy and intention.',
      rosaSubtagline: "You don't need a new job. You need a new system.",
      rosaPara: "Working at the intersection of neuroscience, heart-brain coherence research, and behavioral psychology — not to give you a framework to memorize, but to identify exactly what's running on autopilot and change it, precisely and permanently.",
      rosaCta: 'Full Story →',
      testOverline: 'Discover Your Archetype',
      testTitle: 'What professional pattern drives you?',
      testPara: "In 8 minutes, the Archetypal Assessment maps your dominant professional pattern — and shows you exactly where it's working for you and where it's working against you.",
      testCta: 'Take the Free Assessment →',
      ctaTitle: "If something here named what you've been carrying —",
      ctaPara: "The first conversation is a 45-minute diagnostic session. No pitch. No pressure. Just the most accurate read I can give you of what's actually happening.",
      ctaBtn: 'Schedule a Consultation',
    },
    about: {
      heroOverline: 'About RMS Consulting',
      heroTitle: "Precision coaching for high-achieving professionals who've outgrown generic answers.",
      heroSub: "You don't need a new job. You need a new system.",
      gapOverline: 'The Problem Worth Naming',
      gapTitle: 'The gap no career milestone can close.',
      gapP1: "Most of the professionals I work with arrive having done everything right. The career. The title. The numbers. What they can't explain is why it still feels like something essential is missing.",
      gapP2: "The issue is rarely performance. It's that the systems driving their decisions — the beliefs, emotional patterns, and nervous system responses built over decades — haven't been updated to match who they've become.",
      gapP3: "My work sits at the intersection of neuroscience, heart-brain coherence research, and behavioral psychology. Not to give you a framework to memorize, but to help you identify exactly what's running on autopilot — and change it, precisely and permanently.",
      gapQuote: "This isn't about working harder on yourself. It's about working accurately.",
      howOverline: 'How I Work',
      howTitle: 'Design your career with clarity, strategy and intention.',
      howQuote: '"You don\'t need a new job. You need a new system."',
      howP1: "I work with high-achieving professionals who have outgrown generic answers. People who've done everything they were supposed to do, and find themselves at a crossroads that no amount of additional effort seems to resolve.",
      howP2: "What I bring is precision. Before any strategy, we identify exactly which internal pattern is creating the block — not in general terms, but specifically, in your particular context, with your particular history.",
      howP3: "The result isn't a roadmap to follow. It's a fundamentally different relationship with the decisions, risks, and possibilities that define your professional life.",
      valuesOverline: 'How I Think Differently',
      values: [
        { title:'Precision over positivity.', body:"Motivation without diagnosis is noise. Before any strategy, I identify exactly which internal pattern is creating the block — and name it specifically, not generally." },
        { title:'The body is part of the data.', body:"Cognitive insight alone rarely creates lasting change. The nervous system holds patterns that the conscious mind can't access through thinking alone. My approach integrates heart-brain coherence measurement as a diagnostic layer most coaching skips entirely." },
        { title:'Root causes, not symptom management.', body:"Stress management techniques and productivity hacks treat the output of a deeper pattern. I work upstream — on the belief structures and nervous system responses that generate the symptoms in the first place." },
        { title:'Honest over comfortable.', body:"The professionals who get the most from this work are the ones willing to examine what they've been avoiding. That requires a space where difficult things can be named clearly — without judgment, but also without softening that protects the problem." },
      ],
      processOverline: 'The Process',
      processTitle: 'The work, in plain terms.',
      processIntro: "Most approaches start with strategy or mindset. I start with diagnosis. The question isn't what you should do differently — it's what pattern is generating the result you're trying to change.",
      phases: [
        { n:'Phase 1', title:'Identify the pattern,\nnot just the problem.', body:'We begin with a structured diagnostic process that maps the specific internal pattern driving the block — cognitive assessment, behavioral history, and nervous system state measurement using HRV biofeedback. Most people describe their situation accurately. They misdiagnose it almost entirely.' },
        { n:'Phase 2', title:'Interrupt the\nautomatic response.', body:"Once identified, we work directly at the level where the pattern operates — through precise intervention at the physiological and cognitive level. This is where HeartMath's coherence technology becomes a real-time tool. You see the pattern changing." },
        { n:'Phase 3', title:'Integrate into how\nyou actually work.', body:"Change that doesn't hold under pressure isn't real change. The final phase embeds the new pattern into the specific contexts where the old one used to fire — your leadership decisions, your relationship with risk, your capacity to stop without guilt." },
      ],
      processQuote: '"True transformation happens when you update the internal programming that\'s been running on autopilot."',
      processQuoteAfter: "That's not a metaphor. It's a description of what neuroscience and coherence research show happens when the intervention reaches the right level.",
      proofOverline: 'Results',
      proofTitle: 'What the work has made possible.',
      testimonials: [
        { quote:'Add your first client testimonial here — the more specific the outcome, the more trust it builds.', name:'[Client Name]', title:'[Title, Company]' },
        { quote:'Add a second testimonial — ideally from a different professional profile to show range.', name:'[Client Name]', title:'[Title, Company]' },
      ],
      heartmathOverline: 'A Tool I Use',
      heartmathTitle: 'HeartMath Inner Balance.',
      heartmathP1: "Heart Rate Variability biofeedback isn't a wellness trend — it's a real-time window into your nervous system's state. I use the HeartMath Inner Balance sensor as a diagnostic and training tool in sessions, because it makes visible what's otherwise invisible: how your body responds before your mind decides.",
      heartmathP2: "If you'd like to work with this tool independently, it's available through the partner link below.",
      heartmathBtn: 'Learn More →',
      ctaTitle: "If something on this page named what you've been carrying —",
      ctaPara: "The first step isn't a commitment. It's a 45-minute conversation to understand your situation precisely and tell you, honestly, whether this work is the right fit.",
      ctaSub: "No framework pitch. No pressure. Just the most accurate read I can give you.",
      ctaBtn: 'Schedule a Consultation →',
    },
    blog: {
      heroOverline: 'Thinking Out Loud',
      heroTitle: ['Insights on career,', 'neuroscience, and', 'the work that holds.'],
      heroSub: "Writing on the patterns that keep high-achieving professionals from doing the work they're built for.",
      filterLabel: 'FILTER:',
      readMore: 'Read →',
      featured: 'FEATURED',
      newsletterOverline: 'Stay Close',
      newsletterTitle: 'New writing, twice a month.',
      newsletterPara: 'No content calendar. No repurposed posts. Writing that earns the time it takes to read it.',
      newsletterBtn: 'Subscribe →',
    },
    test: {
      heroOverline: 'Free Assessment',
      heroTitle: 'Discover your professional archetype.',
      heroSub: "In 8 minutes, understand the pattern driving your career — and where it's working against you.",
      startBtn: 'Start the Assessment →',
      progressLabel: (c,t) => `Question ${c} of ${t}`,
      nextBtn: 'Next →',
      emailTitle: 'Your result is ready.',
      emailSub: 'Enter your name and email to unlock your full archetype profile.',
      namePlaceholder: 'Your name',
      emailPlaceholder: 'Your email address',
      submitBtn: 'Reveal My Archetype →',
      privacyNote: 'No spam. Your data is never shared. Unsubscribe anytime.',
      resultOverline: 'Your Dominant Archetype',
      traitLabel: 'Key Traits',
      strengthLabel: 'Where You Excel',
      shadowLabel: 'The Shadow to Watch',
      nextStepTitle: "What's the right next step for your archetype?",
      nextStepPara: "A 45-minute diagnostic conversation maps exactly where your archetype is serving you — and where it's keeping you stuck.",
      nextStepBtn: 'Schedule a Free Diagnostic →',
      retakeBtn: '← Retake the Assessment',
    },
  },
  pt: {
    nav: { home:'Início', about:'Sobre', test:'Faça o Teste', blog:'Blog', cta:'Trabalhe Comigo' },
    home: {
      heroOverline: 'Executive Coach & Consultora Comportamental',
      heroTitle: ["Você construiu tudo", "que deveria construir.", " ", "E agora?"],
      heroTitleEm: "E agora?",
      heroPara: "A carreira. O título. Os números. E em algum momento no caminho, o trabalho parou de parecer seu. Isso não é falta de motivação — é um problema de alinhamento. E tem uma solução precisa.",
      heroCta1: 'Agendar uma Consulta',
      heroCta2: 'Conheça o Método →',
      problemOverline: 'O Problema',
      problemTitle: 'Alta performance e realização profunda não são o mesmo destino.',
      problemP1: 'A maioria dos profissionais com quem trabalho chega tendo feito tudo certo. Promoções conquistadas. Metas superadas. Times liderados. O que não conseguem explicar é por que ainda parece faltar algo essencial.',
      problemP2: 'O problema raramente é desempenho. É que os sistemas internos que guiam as decisões deles — crenças, padrões emocionais e respostas do sistema nervoso construídos ao longo de décadas — não foram atualizados para corresponder a quem eles se tornaram.',
      problemCta: 'Ver Como o Trabalho Acontece →',
      methodOverline: 'O Método',
      methodTitle: 'Precisão em vez de positividade. Sempre.',
      phases: [
        { n:'01', title:'Identificar', body:'Mapeamos o padrão interno específico que gera o bloqueio — não o sintoma que você descreve, mas o que está operando por baixo dele.' },
        { n:'02', title:'Interromper', body:'Usando biofeedback de VFC e trabalho comportamental direcionado, intervimos no nível onde o padrão realmente opera.' },
        { n:'03', title:'Integrar', body:'Mudança que não se sustenta sob pressão não é mudança real. Incorporamos o novo padrão na forma como você realmente lidera e decide.' },
      ],
      rosaOverline: 'Rosa Martins',
      rosaTitle: 'Executive Coach &\nConsultora Comportamental',
      rosaTagline: 'Desenhe sua carreira com clareza, estratégia e intenção.',
      rosaSubtagline: 'Você não precisa de um novo emprego. Você precisa de um novo sistema.',
      rosaPara: 'Trabalho na interseção entre neurociência, pesquisa de coerência coração-cérebro e psicologia comportamental — não para te dar um framework para memorizar, mas para identificar exatamente o que está rodando no piloto automático e mudar isso, de forma precisa e permanente.',
      rosaCta: 'Conheça Minha História →',
      testOverline: 'Descubra Seu Arquétipo',
      testTitle: 'Qual padrão profissional te move?',
      testPara: 'Em 8 minutos, o Mapeamento Arquetípico identifica seu padrão profissional dominante — e mostra exatamente onde ele está trabalhando a seu favor e onde está trabalhando contra você.',
      testCta: 'Fazer o Teste Gratuito →',
      ctaTitle: 'Se algo aqui nomeou o que você está carregando —',
      ctaPara: 'A primeira conversa é uma sessão diagnóstica de 45 minutos. Sem pitch. Sem pressão. Só a leitura mais precisa que consigo fazer do que está realmente acontecendo.',
      ctaBtn: 'Agendar uma Consulta',
    },
    about: {
      heroOverline: 'Sobre a RMS Consulting',
      heroTitle: 'Coaching de precisão para profissionais de alta performance que superaram as respostas genéricas.',
      heroSub: 'Você não precisa de um novo emprego. Você precisa de um novo sistema.',
      gapOverline: 'O Problema que Vale Nomear',
      gapTitle: 'A lacuna que nenhuma conquista de carreira consegue fechar.',
      gapP1: 'A maioria dos profissionais com quem trabalho chega tendo feito tudo certo. A carreira. O título. Os números. O que não conseguem explicar é por que ainda parece faltar algo essencial.',
      gapP2: 'O problema raramente é desempenho. É que os sistemas que guiam as decisões deles — crenças, padrões emocionais e respostas do sistema nervoso construídas ao longo de décadas — não foram atualizados para corresponder a quem eles se tornaram.',
      gapP3: 'Meu trabalho está na interseção entre neurociência, pesquisa de coerência coração-cérebro e psicologia comportamental. Não para te dar um framework para memorizar, mas para te ajudar a identificar exatamente o que está rodando no piloto automático — e mudar isso, de forma precisa e permanente.',
      gapQuote: 'Não se trata de se esforçar mais em você mesmo. Trata-se de trabalhar com precisão.',
      howOverline: 'Como Trabalho',
      howTitle: 'Desenhe sua carreira com clareza, estratégia e intenção.',
      howQuote: '"Você não precisa de um novo emprego. Você precisa de um novo sistema."',
      howP1: 'Trabalho com profissionais de alta performance que superaram as respostas genéricas. Pessoas que fizeram tudo que deveriam fazer, e se encontram numa encruzilhada que nenhuma quantidade de esforço adicional parece resolver.',
      howP2: 'O que trago é precisão. Antes de qualquer estratégia, identificamos exatamente qual padrão interno está criando o bloqueio — não em termos gerais, mas especificamente, no seu contexto particular, com a sua história particular.',
      howP3: 'O resultado não é um roteiro a seguir. É uma relação fundamentalmente diferente com as decisões, riscos e possibilidades que definem sua vida profissional.',
      valuesOverline: 'Como Penso Diferente',
      values: [
        { title:'Precisão em vez de positividade.', body:'Motivação sem diagnóstico é ruído. Antes de qualquer estratégia, identifico exatamente qual padrão interno está criando o bloqueio — e nomeio especificamente, não genericamente.' },
        { title:'O corpo faz parte dos dados.', body:'Insight cognitivo sozinho raramente cria mudança duradoura. O sistema nervoso guarda padrões que a mente consciente não consegue acessar só pelo pensamento. Minha abordagem integra a medição de coerência coração-cérebro como uma camada diagnóstica que a maioria dos coaches ignora completamente.' },
        { title:'Causas raiz, não gerenciamento de sintomas.', body:'Técnicas de manejo do estresse e hacks de produtividade tratam o output de um padrão mais profundo. Trabalho a montante — nas estruturas de crenças e respostas do sistema nervoso que geram os sintomas.' },
        { title:'Honestidade em vez de conforto.', body:'Os profissionais que mais aproveitam esse trabalho são os que estão dispostos a examinar o que evitaram. Isso requer um espaço onde as coisas difíceis possam ser nomeadas claramente — sem julgamento, mas também sem suavização que protege o problema.' },
      ],
      processOverline: 'O Processo',
      processTitle: 'O trabalho, em termos diretos.',
      processIntro: 'A maioria das abordagens começa com estratégia ou mindset. Eu começo com diagnóstico. A questão não é o que você deveria fazer diferente — é qual padrão está gerando o resultado que você quer mudar.',
      phases: [
        { n:'Fase 1', title:'Identificar o padrão,\nnão só o problema.', body:'Começamos com um processo diagnóstico estruturado que mapeia o padrão interno específico que gera o bloqueio — avaliação cognitiva, histórico comportamental e medição do estado do sistema nervoso com biofeedback de VFC.' },
        { n:'Fase 2', title:'Interromper a\nresposta automática.', body:'Uma vez identificado, trabalhamos diretamente no nível onde o padrão opera — através de intervenção precisa no nível fisiológico e cognitivo. É aqui que a tecnologia de coerência do HeartMath se torna uma ferramenta em tempo real.' },
        { n:'Fase 3', title:'Integrar na forma como\nvocê realmente trabalha.', body:'Mudança que não se sustenta sob pressão não é mudança real. A fase final incorpora o novo padrão nos contextos específicos onde o antigo costumava disparar — suas decisões de liderança, sua relação com o risco, sua capacidade de parar sem culpa.' },
      ],
      processQuote: '"A transformação verdadeira acontece quando você atualiza a programação interna que rodou no piloto automático."',
      processQuoteAfter: 'Isso não é metáfora. É uma descrição do que a neurociência e a pesquisa de coerência mostram que acontece quando a intervenção alcança o nível certo.',
      proofOverline: 'Resultados',
      proofTitle: 'O que o trabalho tornou possível.',
      testimonials: [
        { quote:'Adicione aqui o primeiro depoimento de cliente — quanto mais específico o resultado, maior a confiança que gera.', name:'[Nome do Cliente]', title:'[Cargo, Empresa]' },
        { quote:'Adicione um segundo depoimento — idealmente de um perfil profissional diferente para mostrar alcance.', name:'[Nome do Cliente]', title:'[Cargo, Empresa]' },
      ],
      heartmathOverline: 'Uma Ferramenta que Uso',
      heartmathTitle: 'HeartMath Inner Balance.',
      heartmathP1: 'O biofeedback de Variabilidade da Frequência Cardíaca não é uma tendência de bem-estar — é uma janela em tempo real para o estado do seu sistema nervoso. Uso o sensor HeartMath Inner Balance como ferramenta diagnóstica e de treinamento nas sessões, porque torna visível o que é invisível: como seu corpo responde antes que sua mente decida.',
      heartmathP2: 'Se quiser trabalhar com essa ferramenta de forma independente, está disponível pelo link de parceiro abaixo.',
      heartmathBtn: 'Saiba Mais →',
      ctaTitle: 'Se algo nesta página nomeou o que você está carregando —',
      ctaPara: 'O primeiro passo não é um compromisso. É uma conversa de 45 minutos para entender sua situação com precisão e te dizer, honestamente, se esse trabalho é o ajuste certo para onde você está.',
      ctaSub: 'Sem pitch de metodologia. Sem pressão. Só a leitura mais precisa que consigo fazer.',
      ctaBtn: 'Agendar uma Consulta →',
    },
    blog: {
      heroOverline: 'Pensando em Voz Alta',
      heroTitle: ['Reflexões sobre carreira,', 'neurociência e', 'o trabalho que permanece.'],
      heroSub: 'Escrita sobre os padrões que impedem profissionais de alta performance de fazer o trabalho para o qual foram feitos.',
      filterLabel: 'FILTRAR:',
      readMore: 'Ler →',
      featured: 'DESTAQUE',
      newsletterOverline: 'Fique Por Perto',
      newsletterTitle: 'Novos textos, duas vezes por mês.',
      newsletterPara: 'Sem calendário editorial. Sem posts reaproveitados. Escrita que merece o tempo que leva para ser lida.',
      newsletterBtn: 'Assinar →',
    },
    test: {
      heroOverline: 'Avaliação Gratuita',
      heroTitle: 'Descubra seu arquétipo profissional.',
      heroSub: 'Em 8 minutos, entenda o padrão que move sua carreira — e onde ele está trabalhando contra você.',
      startBtn: 'Iniciar o Teste →',
      progressLabel: (c,t) => `Pergunta ${c} de ${t}`,
      nextBtn: 'Próxima →',
      emailTitle: 'Seu resultado está pronto.',
      emailSub: 'Digite seu nome e e-mail para desbloquear seu perfil arquetípico completo.',
      namePlaceholder: 'Seu nome',
      emailPlaceholder: 'Seu endereço de e-mail',
      submitBtn: 'Revelar Meu Arquétipo →',
      privacyNote: 'Sem spam. Seus dados nunca são compartilhados. Cancele quando quiser.',
      resultOverline: 'Seu Arquétipo Dominante',
      traitLabel: 'Características Principais',
      strengthLabel: 'Onde Você Se Destaca',
      shadowLabel: 'A Sombra a Observar',
      nextStepTitle: 'Qual é o próximo passo certo para o seu arquétipo?',
      nextStepPara: 'Uma conversa diagnóstica de 45 minutos mapeia exatamente onde seu arquétipo está te servindo — e onde está te mantendo preso.',
      nextStepBtn: 'Agendar um Diagnóstico Gratuito →',
      retakeBtn: '← Refazer o Teste',
    },
  },
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('pt')
  const toggle = () => setLang(l => l === 'en' ? 'pt' : 'en')
  const strings = t[lang]
  return (
    <LanguageContext.Provider value={{ lang, toggle, strings }}>
      {children}
    </LanguageContext.Provider>
  )
}import { Link } from 'react-router-dom'
import { useLanguage } from '../i18n'
import { Footer } from '../components/Layout'

export default function HomePage() {
  const { strings } = useLanguage()
  const s = strings.home

  return (
    <div className="page">
      <section style={{background:'linear-gradient(155deg, var(--night) 0%, var(--night2) 55%, #0A2A2A 100%)',padding:'7rem 2rem 6rem',position:'relative',overflow:'hidden'}}>
        <div style={{position:'absolute',top:0,left:0,right:0,height:'2px',background:'linear-gradient(90deg,transparent,var(--gold),transparent)'}} />
        <div className="container" style={{position:'relative'}}>
          <span className="overline overline-gold fade-up">{s.heroOverline}</span>
          <h1 className="display display-light fade-up-1" style={{marginBottom:'1.5rem'}}>
            {s.heroTitle[0]}<br/>{s.heroTitle[1]}<br/><em>{s.heroTitleEm}</em>
          </h1>
          <p className="lead fade-up-2" style={{color:'rgba(248,245,239,0.72)',marginBottom:'2.5rem',maxWidth:'500px'}}>{s.heroPara}</p>
          <div className="fade-up-3" style={{display:'flex',gap:'1rem',flexWrap:'wrap'}}>
            <a className="btn btn-primary" href="mailto:turbofeed95@gmail.com">{s.heroCta1}</a>
            <Link className="btn btn-ghost" to="/about">{s.heroCta2}</Link>
          </div>
        </div>
      </section>

      <div className="rule-gold" />

      <section className="section" style={{background:'var(--white)'}}>
        <div className="container">
          <span className="overline">{s.problemOverline}</span>
          <h2 className="headline" style={{marginBottom:'1.5rem'}}>{s.problemTitle}</h2>
          <p className="lead" style={{marginBottom:'1.25rem'}}>{s.problemP1}</p>
          <p className="body-text" style={{marginBottom:'2rem'}}>{s.problemP2}</p>
          <Link className="btn btn-outline" to="/about">{s.problemCta}</Link>
        </div>
      </section>

      <section className="section" style={{background:'var(--cream)'}}>
        <div className="container-wide">
          <div style={{textAlign:'center',marginBottom:'3.5rem'}}>
            <span className="overline">{s.methodOverline}</span>
            <h2 className="headline">{s.methodTitle}</h2>
          </div>
          <div className="grid-3">
            {s.phases.map((p,i) => (
              <div key={i} className="card card-teal">
                <div style={{fontFamily:'var(--mono)',fontSize:'0.68rem',letterSpacing:'0.15em',color:'var(--teal)',marginBottom:'1rem'}}>{p.n}</div>
                <h3 style={{fontFamily:'var(--serif)',fontSize:'1.45rem',fontWeight:400,marginBottom:'0.75rem',color:'var(--night)'}}>{p.title}</h3>
                <p className="body-text">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{background:'var(--night)',padding:'5.5rem 2rem'}}>
        <div className="container-wide">
          <div className="grid-2" style={{alignItems:'center',gap:'4rem'}}>
            <div>
              <img src="https://rmsconsulting.abacusai.app/rosa-martins.jpg" alt="Rosa Martins"
                style={{width:'100%',maxWidth:'420px',aspectRatio:'4/5',objectFit:'cover',display:'block',border:'1px solid rgba(196,154,12,0.2)'}} />
            </div>
            <div>
              <span className="overline overline-gold">{s.rosaOverline}</span>
              <h2 className="headline display-light" style={{marginBottom:'1.1rem',color:'var(--cream)',whiteSpace:'pre-line'}}>{s.rosaTitle}</h2>
              <p style={{fontFamily:'var(--serif)',fontSize:'1.18rem',fontWeight:300,lineHeight:1.75,color:'rgba(248,245,239,0.75)',marginBottom:'0.6rem'}}>{s.rosaTagline}</p>
              <p style={{fontFamily:'var(--serif)',fontSize:'1.05rem',fontStyle:'italic',color:'var(--gold-l)',marginBottom:'1.5rem'}}>{s.rosaSubtagline}</p>
              <p className="body-text" style={{color:'rgba(248,245,239,0.6)',marginBottom:'2rem'}}>{s.rosaPara}</p>
              <Link className="btn btn-ghost" to="/about">{s.rosaCta}</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{background:'var(--gold-bg)',borderTop:'1px solid var(--cream2)',borderBottom:'1px solid var(--cream2)'}}>
        <div className="container" style={{textAlign:'center'}}>
          <span className="overline overline-gold">{s.testOverline}</span>
          <h2 className="headline" style={{marginBottom:'1.25rem'}}>{s.testTitle}</h2>
          <p className="lead" style={{marginBottom:'2rem',maxWidth:'500px',margin:'0 auto 2rem'}}>{s.testPara}</p>
          <Link className="btn btn-teal" to="/teste">{s.testCta}</Link>
        </div>
      </section>

      <section style={{background:'var(--teal)',padding:'6rem 2rem',textAlign:'center'}}>
        <div className="container">
          <h2 className="headline display-light" style={{marginBottom:'1.25rem',color:'var(--white)'}}>{s.ctaTitle}</h2>
          <p style={{fontFamily:'var(--serif)',fontSize:'1.12rem',fontWeight:300,color:'rgba(255,255,255,0.78)',marginBottom:'2.5rem',maxWidth:'480px',margin:'0 auto 2.5rem'}}>{s.ctaPara}</p>
          <a className="btn btn-primary" href="mailto:turbofeed95@gmail.com">{s.ctaBtn}</a>
        </div>
      </section>

      <Footer />
    </div>
  )import { useLanguage } from '../i18n'
import { Footer } from '../components/Layout'

export default function AboutPage() {
  const { strings } = useLanguage()
  const s = strings.about

  return (
    <div className="page">
      <section style={{background:'linear-gradient(148deg,var(--night) 0%,var(--steel) 100%)',padding:'7rem 2rem 5rem',position:'relative',overflow:'hidden'}}>
        <div style={{position:'absolute',top:0,left:0,right:0,height:'2px',background:'linear-gradient(90deg,transparent,var(--gold),transparent)'}} />
        <div className="container" style={{position:'relative'}}>
          <span className="overline overline-gold fade-up">{s.heroOverline}</span>
          <h1 className="display display-light fade-up-1" style={{marginBottom:'1.25rem'}}>{s.heroTitle}</h1>
          <p className="lead fade-up-2" style={{color:'rgba(248,245,239,0.68)',maxWidth:'480px'}}>{s.heroSub}</p>
        </div>
      </section>
      <div className="rule-gold" />
      <section className="section" style={{background:'var(--white)'}}>
        <div className="container">
          <span className="overline">{s.gapOverline}</span>
          <h2 className="headline" style={{marginBottom:'1.5rem'}}>{s.gapTitle}</h2>
          <p className="lead" style={{marginBottom:'1.25rem'}}>{s.gapP1}</p>
          <p className="body-text" style={{marginBottom:'1rem'}}>{s.gapP2}</p>
          <p className="body-text" style={{marginBottom:'1.75rem'}}>{s.gapP3}</p>
          <p style={{fontFamily:'var(--serif)',fontSize:'1.1rem',fontStyle:'italic',color:'var(--teal)',borderLeft:'3px solid var(--teal)',paddingLeft:'1.25rem',lineHeight:1.7}}>{s.gapQuote}</p>
        </div>
      </section>
      <section className="section" style={{background:'var(--cream)'}}>
        <div className="container-wide">
          <div className="grid-2" style={{alignItems:'start',gap:'4rem'}}>
            <div style={{position:'sticky',top:'80px'}}>
              <img src="https://rmsconsulting.abacusai.app/rosa-martins.jpg" alt="Rosa Martins"
                style={{width:'100%',aspectRatio:'3/4',objectFit:'cover',border:'1px solid var(--cream2)',display:'block'}} />
              <div style={{background:'var(--night)',padding:'1.5rem',marginTop:'-1px'}}>
                <p style={{fontFamily:'var(--serif)',fontSize:'1.25rem',color:'var(--cream)',fontWeight:400,marginBottom:'0.3rem'}}>Rosa Martins</p>
                <p style={{fontFamily:'var(--mono)',fontSize:'0.68rem',letterSpacing:'0.12em',color:'var(--gold-l)'}}>Executive Coach & Behavioral Consultant</p>
              </div>
            </div>
            <div>
              <span className="overline">{s.howOverline}</span>
              <h2 className="headline" style={{marginBottom:'1.25rem'}}>{s.howTitle}</h2>
              <p style={{fontFamily:'var(--serif)',fontSize:'1.12rem',fontStyle:'italic',lineHeight:1.75,color:'var(--teal)',marginBottom:'1.5rem'}}>{s.howQuote}</p>
              <p className="body-text" style={{marginBottom:'1rem'}}>{s.howP1}</p>
              <p className="body-text" style={{marginBottom:'1rem'}}>{s.howP2}</p>
              <p className="body-text" style={{marginBottom:'2.5rem'}}>{s.howP3}</p>
              <div style={{height:'1px',background:'var(--cream2)',marginBottom:'2.5rem'}} />
              <span className="overline">{s.valuesOverline}</span>
              {s.values.map((v,i) => (
                <div key={i} style={{marginBottom:'1.75rem',paddingBottom:'1.75rem',borderBottom:i<3?'1px solid var(--cream2)':'none'}}>
                  <h4 style={{fontFamily:'var(--serif)',fontSize:'1.12rem',fontWeight:600,color:'var(--night)',marginBottom:'0.5rem'}}>{v.title}</h4>
                  <p className="body-text">{v.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="section" style={{background:'var(--night)'}}>
        <div className="container-wide">
          <div style={{textAlign:'center',marginBottom:'3.5rem'}}>
            <span className="overline overline-gold">{s.processOverline}</span>
            <h2 className="headline display-light">{s.processTitle}</h2>
            <p className="lead" style={{color:'rgba(248,245,239,0.6)',maxWidth:'500px',margin:'1rem auto 0'}}>{s.processIntro}</p>
          </div>
          <div className="grid-3">
            {s.phases.map((p,i) => {
              const colors = ['var(--teal)','var(--gold-l)','var(--cream)']
              return (
                <div key={i} style={{borderTop:`3px solid ${colors[i]}`,background:'rgba(255,255,255,0.03)',border:`1px solid rgba(255,255,255,0.06)`,borderTopColor:colors[i],borderTopWidth:'3px',padding:'2rem'}}>
                  <div style={{fontFamily:'var(--mono)',fontSize:'0.63rem',letterSpacing:'0.18em',color:colors[i],marginBottom:'0.85rem',textTransform:'uppercase'}}>{p.n}</div>
                  <h3 style={{fontFamily:'var(--serif)',fontSize:'1.25rem',fontWeight:400,color:'var(--cream)',marginBottom:'1rem',whiteSpace:'pre-line'}}>{p.title}</h3>
                  <p style={{fontSize:'0.87rem',lineHeight:1.82,color:'rgba(248,245,239,0.58)'}}>{p.body}</p>
                </div>
              )
            })}
          </div>
          <div style={{marginTop:'3rem',padding:'2rem',borderLeft:'3px solid var(--gold)',background:'rgba(196,154,12,0.05)'}}>
            <p style={{fontFamily:'var(--serif)',fontSize:'1.22rem',fontStyle:'italic',color:'var(--gold-l)',marginBottom:'0.75rem'}}>{s.processQuote}</p>
            <p style={{fontSize:'0.87rem',color:'rgba(248,245,239,0.5)'}}>{s.processQuoteAfter}</p>
          </div>
        </div>
      </section>
      <section className="section" style={{background:'var(--cream2)'}}>
        <div className="container-wide">
          <div style={{textAlign:'center',marginBottom:'3rem'}}>
            <span className="overline">{s.proofOverline}</span>
            <h2 className="headline">{s.proofTitle}</h2>
          </div>
          <div className="grid-2">
            {s.testimonials.map((t,i) => (
              <div key={i} className="card card-teal">
                <p style={{fontFamily:'var(--serif)',fontSize:'1.08rem',fontStyle:'italic',lineHeight:1.82,color:'var(--ink-mid)',marginBottom:'1.5rem'}}>"{t.quote}"</p>
                <div style={{borderTop:'1px solid var(--cream2)',paddingTop:'1rem'}}>
                  <p style={{fontFamily:'var(--sans)',fontWeight:500,fontSize:'0.85rem',color:'var(--night)'}}>{t.name}</p>
                  <p style={{fontFamily:'var(--mono)',fontSize:'0.68rem',letterSpacing:'0.08em',color:'var(--gray-d)'}}>{t.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section" style={{background:'var(--white)'}}>
        <div className="container">
          <span className="overline">{s.heartmathOverline}</span>
          <h2 className="headline" style={{marginBottom:'1.25rem'}}>{s.heartmathTitle}</h2>
          <p className="body-text" style={{marginBottom:'1rem'}}>{s.heartmathP1}</p>
          <p className="body-text" style={{marginBottom:'1.5rem'}}>{s.heartmathP2}</p>
          <div style={{display:'flex',alignItems:'center',gap:'2rem',flexWrap:'wrap',padding:'1.5rem',border:'1px solid var(--cream2)',background:'var(--cream)'}}>
            <img src="/heartmath-partner.png" alt="HeartMath Inner Balance" style={{height:'52px',objectFit:'contain'}} />
            <div style={{flex:1}}>
              <p style={{fontWeight:500,fontSize:'0.88rem',marginBottom:'0.2rem'}}>Inner Balance Coherence Plus</p>
              <p style={{fontSize:'0.8rem',color:'var(--gray-d)'}}>HRV biofeedback sensor + lifetime app access</p>
            </div>
            <a href="https://www.heartmath.com/rmsconsulting" target="_blank" rel="noopener noreferrer" className="btn btn-outline">{s.heartmathBtn}</a>
          </div>
        </div>
      </section>
      <section style={{background:'var(--teal)',padding:'6rem 2rem',textAlign:'center'}}>
        <div className="container">
          <h2 className="headline display-light" style={{marginBottom:'1.25rem',color:'var(--white)'}}>{s.ctaTitle}</h2>
          <p style={{fontFamily:'var(--serif)',fontSize:'1.12rem',fontWeight:300,color:'rgba(255,255,255,0.78)',marginBottom:'1rem'}}>{s.ctaPara}</p>
          <p style={{fontFamily:'var(--serif)',fontSize:'1rem',fontStyle:'italic',color:'rgba(255,255,255,0.55)',marginBottom:'2.5rem'}}>{s.ctaSub}</p>
          <a className="btn btn-primary" href="mailto:turbofeed95@gmail.com">{s.ctaBtn}</a>
        </div>
      </section>
      <Footer />
    </div>
  )import { useState } from 'react'
import { useLanguage } from '../i18n'
import { Footer } from '../components/Layout'
import { questions, scoring, archetypes } from '../data/quiz'

const FORMSPREE_ID = 'YOUR_FORM_ID'

async function sendLead(name, email, lang, archetype) {
  try {
    await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, archetype, lang, source: 'archetype-test' }),
    })
  } catch(e) { console.error('Lead capture failed:', e) }
}

function calcArchetype(answers) {
  const scores = [0,0,0,0]
  answers.forEach((answerIdx, qIdx) => { if (answerIdx !== null) scores[scoring[qIdx][answerIdx]]++ })
  return scores.indexOf(Math.max(...scores))
}

const SCREEN = { INTRO:'intro', QUIZ:'quiz', EMAIL:'email', RESULT:'result' }

export default function TestePage() {
  const { lang, strings } = useLanguage()
  const s = strings.test
  const qs = questions[lang]

  const [screen, setScreen]         = useState(SCREEN.INTRO)
  const [current, setCurrent]       = useState(0)
  const [answers, setAnswers]       = useState(Array(qs.length).fill(null))
  const [selected, setSelected]     = useState(null)
  const [name, setName]             = useState('')
  const [email, setEmail]           = useState('')
  const [loading, setLoading]       = useState(false)
  const [archetypeIdx, setArchetypeIdx] = useState(null)

  const progress = ((current + 1) / qs.length) * 100

  const handleNext = () => {
    if (selected === null) return
    const newAnswers = [...answers]
    newAnswers[current] = selected
    setAnswers(newAnswers)
    setSelected(null)
    if (current + 1 < qs.length) { setCurrent(current + 1) }
    else { setArchetypeIdx(calcArchetype(newAnswers)); setScreen(SCREEN.EMAIL) }
  }

  const handleSubmitEmail = async (e) => {
    e.preventDefault()
    if (!email || !name) return
    setLoading(true)
    await sendLead(name, email, lang, archetypes[lang][archetypeIdx].name)
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
      <section style={{background:'linear-gradient(148deg,var(--night) 0%,#0A2A2A 100%)',padding:'6rem 2rem 5rem',position:'relative'}}>
        <div style={{position:'absolute',top:0,left:0,right:0,height:'2px',background:'linear-gradient(90deg,transparent,var(--teal),transparent)'}} />
        <div className="container" style={{textAlign:'center',position:'relative'}}>
          <span className="overline overline-gold fade-up">{s.heroOverline}</span>
          <h1 className="display display-light fade-up-1" style={{marginBottom:'1.1rem'}}>{s.heroTitle}</h1>
          <p className="lead fade-up-2" style={{color:'rgba(248,245,239,0.68)',maxWidth:'480px',margin:'0 auto'}}>{s.heroSub}</p>
        </div>
      </section>
      <div className="rule-teal" />
      <section className="section" style={{background:'var(--cream)',minHeight:'60vh'}}>
        <div style={{maxWidth:'640px',margin:'0 auto',padding:'0 1rem'}}>

          {screen === SCREEN.INTRO && (
            <div style={{textAlign:'center',animation:'fadeUp 0.5s ease both'}}>
              <div style={{width:'80px',height:'80px',borderRadius:'50%',background:'var(--teal)',display:'flex',alignItems:'center',justifyContent:'center',margin:'0 auto 2rem',fontSize:'2rem'}}>✦</div>
              <h2 className="headline" style={{marginBottom:'1.25rem'}}>{s.heroTitle}</h2>
              <p className="lead" style={{marginBottom:'2.5rem'}}>{s.heroSub}</p>
              <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'1rem',marginBottom:'2.5rem'}}>
                {[{n:'12',label:lang==='pt'?'perguntas':'questions'},{n:'8',label:lang==='pt'?'minutos':'minutes'},{n:'4',label:lang==='pt'?'arquétipos':'archetypes'}].map((item,i) => (
                  <div key={i} style={{background:'var(--white)',border:'1px solid var(--cream2)',padding:'1.25rem',textAlign:'center'}}>
                    <div style={{fontFamily:'var(--serif)',fontSize:'2.2rem',fontWeight:400,color:'var(--teal)',lineHeight:1}}>{item.n}</div>
                    <div style={{fontFamily:'var(--mono)',fontSize:'0.65rem',letterSpacing:'0.12em',color:'var(--gray-d)',textTransform:'uppercase',marginTop:'0.35rem'}}>{item.label}</div>
                  </div>
                ))}
              </div>
              <button className="btn btn-teal" style={{fontSize:'0.9rem',padding:'1rem 2.5rem'}} onClick={() => setScreen(SCREEN.QUIZ)}>{s.startBtn}</button>
            </div>
          )}

          {screen === SCREEN.QUIZ && (
            <div style={{animation:'fadeUp 0.4s ease both'}}>
              <div style={{marginBottom:'0.5rem',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                <span style={{fontFamily:'var(--mono)',fontSize:'0.65rem',letterSpacing:'0.12em',color:'var(--gray-d)'}}>{s.progressLabel(current+1,qs.length)}</span>
                <span style={{fontFamily:'var(--mono)',fontSize:'0.65rem',color:'var(--teal)'}}>{Math.round(progress)}%</span>
              </div>
              <div className="quiz-progress-bar"><div className="quiz-progress-fill" style={{width:`${progress}%`}} /></div>
              <h3 style={{fontFamily:'var(--serif)',fontSize:'1.5rem',fontWeight:400,color:'var(--night)',lineHeight:1.4,marginBottom:'2rem'}}>{qs[current].text}</h3>
              {qs[current].options.map((opt,i) => (
                <button key={i} className={`quiz-option ${selected===i?'selected':''}`} onClick={() => setSelected(i)}>
                  <span style={{fontFamily:'var(--mono)',fontSize:'0.62rem',marginRight:'0.75rem',opacity:0.5}}>{String.fromCharCode(65+i)}.</span>{opt}
                </button>
              ))}
              <div style={{display:'flex',justifyContent:'flex-end',marginTop:'1.5rem'}}>
                <button className="btn btn-teal" onClick={handleNext} disabled={selected===null}
                  style={{opacity:selected===null?0.4:1,cursor:selected===null?'not-allowed':'pointer'}}>{s.nextBtn}</button>
              </div>
            </div>
          )}

          {screen === SCREEN.EMAIL && (
            <div style={{textAlign:'center',animation:'fadeUp 0.4s ease both'}}>
              <div style={{width:'72px',height:'72px',borderRadius:'50%',background:'var(--gold-bg)',border:'2px solid var(--gold)',display:'flex',alignItems:'center',justifyContent:'center',margin:'0 auto 1.75rem',fontSize:'1.75rem'}}>✦</div>
              <h2 className="headline" style={{marginBottom:'0.75rem'}}>{s.emailTitle}</h2>
              <p className="lead" style={{marginBottom:'2rem',maxWidth:'420px',margin:'0 auto 2rem'}}>{s.emailSub}</p>
              <form onSubmit={handleSubmitEmail}>
                <input type="text" className="email-input" placeholder={s.namePlaceholder} value={name} onChange={e => setName(e.target.value)} required />
                <input type="email" className="email-input" placeholder={s.emailPlaceholder} value={email} onChange={e => setEmail(e.target.value)} required />
                <button type="submit" className="btn btn-teal" style={{width:'100%',fontSize:'0.9rem',padding:'1rem',opacity:loading?0.7:1,cursor:loading?'wait':'pointer'}}>
                  {loading?(lang==='pt'?'Processando...':'Processing...'):s.submitBtn}
                </button>
                <p style={{fontFamily:'var(--mono)',fontSize:'0.62rem',letterSpacing:'0.08em',color:'var(--gray-d)',marginTop:'0.85rem'}}>{s.privacyNote}</p>
              </form>
            </div>
          )}

          {screen === SCREEN.RESULT && arch && (
            <div style={{animation:'fadeUp 0.5s ease both'}}>
              <div style={{borderTop:`4px solid ${arch.color}`,background:'var(--white)',padding:'2.5rem',marginBottom:'2rem',textAlign:'center'}}>
                <span className="overline" style={{color:arch.color}}>{s.resultOverline}</span>
                <h2 style={{fontFamily:'var(--serif)',fontSize:'2.8rem',fontWeight:400,color:arch.color,lineHeight:1.1,marginBottom:'0.5rem'}}>{arch.name}</h2>
                <p style={{fontFamily:'var(--mono)',fontSize:'0.7rem',letterSpacing:'0.18em',color:'var(--gray-d)',textTransform:'uppercase'}}>{arch.tagline}</p>
              </div>
              <div className="card card-night" style={{marginBottom:'1.5rem'}}>
                <p style={{fontFamily:'var(--mono)',fontSize:'0.65rem',letterSpacing:'0.15em',color:'var(--gray-d)',textTransform:'uppercase',marginBottom:'1rem'}}>{s.traitLabel}</p>
                <div style={{display:'flex',flexWrap:'wrap',gap:'0.5rem'}}>
                  {arch.traits.map((t,i) => (
                    <span key={i} style={{fontFamily:'var(--sans)',fontSize:'0.8rem',fontWeight:500,padding:'0.3rem 0.9rem',background:'var(--steel-l)',color:'var(--steel)',border:'1px solid rgba(27,58,92,0.15)'}}>{t}</span>
                  ))}
                </div>
              </div>
              <div className="card" style={{borderLeft:`3px solid ${arch.color}`,marginBottom:'1.5rem'}}>
                <p style={{fontFamily:'var(--mono)',fontSize:'0.65rem',letterSpacing:'0.15em',color:arch.color,textTransform:'uppercase',marginBottom:'0.75rem'}}>{s.strengthLabel}</p>
                <p className="body-text">{arch.strength}</p>
              </div>
              <div className="card" style={{borderLeft:'3px solid var(--ruby)',marginBottom:'2.5rem',background:'var(--ruby-l)'}}>
                <p style={{fontFamily:'var(--mono)',fontSize:'0.65rem',letterSpacing:'0.15em',color:'var(--ruby)',textTransform:'uppercase',marginBottom:'0.75rem'}}>{s.shadowLabel}</p>
                <p className="body-text">{arch.shadow}</p>
              </div>
              <div style={{background:'var(--night)',padding:'2.5rem',textAlign:'center'}}>
                <h3 style={{fontFamily:'var(--serif)',fontSize:'1.5rem',fontWeight:400,color:'var(--cream)',marginBottom:'1rem'}}>{s.nextStepTitle}</h3>
                <p style={{fontFamily:'var(--serif)',fontSize:'1rem',fontWeight:300,color:'rgba(248,245,239,0.65)',marginBottom:'2rem'}}>{s.nextStepPara}</p>
                <a className="btn btn-primary" href="mailto:turbofeed95@gmail.com" style={{marginBottom:'1rem',display:'inline-block'}}>{s.nextStepBtn}</a>
                <br/>
                <button onClick={restart} style={{background:'none',border:'none',cursor:'pointer',fontFamily:'var(--mono)',fontSize:'0.65rem',letterSpacing:'0.1em',color:'rgba(248,245,239,0.4)',marginTop:'0.75rem',textTransform:'uppercase'}}>{s.retakeBtn}</button>
              </div>
            </div>
          )}

        </div>
      </section>
      <Footer />
    </div>
  )import { useState } from 'react'
import { useLanguage } from '../i18n'
import { Footer } from '../components/Layout'

const POSTS = {
  en: [
    { id:1, date:'February 2026', category:'Clarity',      title:"You don't have a performance problem. You have an alignment problem.", excerpt:"Most high-achieving professionals who feel stuck aren't failing at execution. They're executing the wrong system. Here's the distinction that changes everything.", readTime:'6 min' },
    { id:2, date:'January 2026',  category:'Neuroscience', title:'What your heart rate variability reveals about your career decisions', excerpt:"HRV biofeedback isn't a wellness trend. It's a real-time window into the nervous system state that's shaping every decision you make under pressure.", readTime:'8 min' },
    { id:3, date:'January 2026',  category:'Behavioral Work', title:'The identity constraint: why successful people stay in the wrong place', excerpt:"The most common reason high-performers don't make the move they know they should make isn't fear of failure. It's something more subtle — and more fixable.", readTime:'7 min' },
    { id:4, date:'December 2025', category:'Leadership',   title:"The shadow in your leadership: what you're not seeing about how you show up", excerpt:"Every leader has patterns that operate automatically — patterns they can't observe from inside the pattern. This is what it looks like to see them for the first time.", readTime:'9 min' },
    { id:5, date:'December 2025', category:'Method',       title:'Working accurately, not harder: a different definition of self-development', excerpt:"The self-development industry is built on effort. More reflection. More discipline. More practice. Here's why that framing misses the point.", readTime:'5 min' },
    { id:6, date:'November 2025', category:'Neuroscience', title:'Heart-brain coherence explained: what it is and why it matters for executives', excerpt:"Coherence is not a metaphor. It's a measurable physiological state that predicts decision quality, emotional regulation, and leadership effectiveness.", readTime:'7 min' },
  ],
  pt: [
    { id:1, date:'Fevereiro 2026', category:'Clareza',     title:'Você não tem um problema de desempenho. Você tem um problema de alinhamento.', excerpt:'A maioria dos profissionais de alta performance que se sentem estagnados não está falhando na execução. Está executando o sistema errado. Eis a distinção que muda tudo.', readTime:'6 min' },
    { id:2, date:'Janeiro 2026',   category:'Neurociência', title:'O que a sua variabilidade da frequência cardíaca revela sobre suas decisões de carreira', excerpt:'O biofeedback de VFC não é uma tendência de bem-estar. É uma janela em tempo real para o estado do sistema nervoso que molda cada decisão que você toma sob pressão.', readTime:'8 min' },
    { id:3, date:'Janeiro 2026',   category:'Trabalho Comportamental', title:'A restrição de identidade: por que pessoas bem-sucedidas ficam no lugar errado', excerpt:'A razão mais comum pela qual profissionais de alto desempenho não fazem a mudança que sabem que deveriam não é medo de fracasso. É algo mais sutil — e mais corrigível.', readTime:'7 min' },
    { id:4, date:'Dezembro 2025',  category:'Liderança',   title:'A sombra na sua liderança: o que você não está vendo sobre como aparece', excerpt:'Todo líder tem padrões que operam automaticamente — padrões que não conseguem observar de dentro do padrão. É isso que parece quando os veem pela primeira vez.', readTime:'9 min' },
    { id:5, date:'Dezembro 2025',  category:'Método',      title:'Trabalhar com precisão, não mais: uma definição diferente de autodesenvolvimento', excerpt:'A indústria de autodesenvolvimento é construída sobre esforço. Mais reflexão. Mais disciplina. Mais prática. Eis por que esse enquadramento perde o ponto.', readTime:'5 min' },
    { id:6, date:'Novembro 2025',  category:'Neurociência', title:'Coerência coração-cérebro explicada: o que é e por que importa para executivos', excerpt:'Coerência não é metáfora. É um estado fisiológico mensurável que prevê qualidade de decisão, regulação emocional e eficácia de liderança.', readTime:'7 min' },
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
  const cats = CATS[lang]
  const [active, setActive] = useState(cats[0])
  const filtered = active === cats[0] ? posts : posts.filter(p => p.category === active)

  return (
    <div className="page">
      <section style={{background:'linear-gradient(150deg,var(--night) 0%,#0A2A2A 100%)',padding:'7rem 2rem 5rem',position:'relative'}}>
        <div style={{position:'absolute',top:0,left:0,right:0,height:'2px',background:'linear-gradient(90deg,transparent,var(--teal),transparent)'}} />
        <div className="container" style={{position:'relative'}}>
          <span className="overline overline-gold fade-up">{s.heroOverline}</span>
          <h1 className="display display-light fade-up-1" style={{marginBottom:'1rem'}}>
            {s.heroTitle[0]}<br/>{s.heroTitle[1]}<br/><em>{s.heroTitle[2]}</em>
          </h1>
          <p className="lead fade-up-2" style={{color:'rgba(248,245,239,0.65)',maxWidth:'460px'}}>{s.heroSub}</p>
        </div>
      </section>
      <div className="rule-teal" />
      <div style={{background:'var(--white)',padding:'1.5rem 2rem',borderBottom:'1px solid var(--cream2)',position:'sticky',top:'64px',zIndex:50}}>
        <div className="container-wide" style={{display:'flex',gap:'0.6rem',flexWrap:'wrap',alignItems:'center'}}>
          <span style={{fontFamily:'var(--mono)',fontSize:'0.63rem',letterSpacing:'0.15em',color:'var(--gray-d)',marginRight:'0.5rem'}}>{s.filterLabel}</span>
          {cats.map(cat => (
            <button key={cat} onClick={() => setActive(cat)} style={{fontFamily:'var(--sans)',fontSize:'0.7rem',fontWeight:500,letterSpacing:'0.1em',textTransform:'uppercase',padding:'0.38rem 0.9rem',border:'1px solid',borderColor:active===cat?'var(--teal)':'var(--gray-m)',background:active===cat?'var(--teal)':'transparent',color:active===cat?'white':'var(--gray-d)',cursor:'pointer',transition:'all 0.2s'}}>{cat}</button>
          ))}
        </div>
      </div>
      <section className="section" style={{background:'var(--cream)'}}>
        <div className="container-wide">
          {filtered.length > 0 && (
            <div style={{marginBottom:'2.5rem'}}>
              <div className="grid-2" style={{background:'var(--night)',gap:0,border:'1px solid rgba(255,255,255,0.05)'}}>
                <div style={{background:'linear-gradient(135deg,var(--teal) 0%,var(--night2) 100%)',minHeight:'260px',display:'flex',alignItems:'center',justifyContent:'center',padding:'3rem'}}>
                  <div style={{textAlign:'center'}}>
                    <div style={{fontFamily:'var(--mono)',fontSize:'0.63rem',letterSpacing:'0.2em',color:'rgba(240,204,96,0.8)',marginBottom:'1rem',textTransform:'uppercase'}}>{s.featured}</div>
                    <div style={{fontFamily:'var(--serif)',fontSize:'3.5rem',color:'rgba(255,255,255,0.12)',lineHeight:1}}>✦</div>
                  </div>
                </div>
                <div style={{padding:'3rem'}}>
                  <div style={{display:'flex',gap:'0.75rem',marginBottom:'1rem',alignItems:'center'}}>
                    <span style={{fontFamily:'var(--mono)',fontSize:'0.63rem',letterSpacing:'0.14em',color:'var(--teal)',textTransform:'uppercase'}}>{filtered[0].category}</span>
                    <span style={{color:'rgba(255,255,255,0.2)'}}>·</span>
                    <span style={{fontFamily:'var(--mono)',fontSize:'0.63rem',color:'rgba(255,255,255,0.3)'}}>{filtered[0].readTime}</span>
                  </div>
                  <h2 style={{fontFamily:'var(--serif)',fontSize:'1.65rem',fontWeight:400,color:'var(--cream)',lineHeight:1.3,marginBottom:'1rem'}}>{filtered[0].title}</h2>
                  <p style={{fontSize:'0.86rem',lineHeight:1.8,color:'rgba(248,245,239,0.52)',marginBottom:'1.5rem'}}>{filtered[0].excerpt}</p>
                  <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                    <span style={{fontFamily:'var(--mono)',fontSize:'0.63rem',letterSpacing:'0.08em',color:'rgba(255,255,255,0.28)'}}>{filtered[0].date}</span>
                    <a href="#" style={{fontFamily:'var(--sans)',fontSize:'0.7rem',fontWeight:500,letterSpacing:'0.1em',textTransform:'uppercase',color:'var(--gold-l)',textDecoration:'none'}}>{s.readMore}</a>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div className="grid-3">
            {filtered.slice(1).map(post => (
              <div key={post.id} className="card card-teal" style={{cursor:'pointer'}}>
                <div style={{display:'flex',gap:'0.6rem',marginBottom:'0.85rem',alignItems:'center'}}>
                  <span style={{fontFamily:'var(--mono)',fontSize:'0.6rem',letterSpacing:'0.12em',color:'var(--teal)',textTransform:'uppercase'}}>{post.category}</span>
                  <span style={{color:'var(--gray-m)'}}>·</span>
                  <span style={{fontFamily:'var(--mono)',fontSize:'0.6rem',color:'var(--gray-d)'}}>{post.readTime}</span>
                </div>
                <h3 style={{fontFamily:'var(--serif)',fontSize:'1.2rem',fontWeight:400,color:'var(--night)',lineHeight:1.35,marginBottom:'0.7rem'}}>{post.title}</h3>
                <p style={{fontSize:'0.83rem',lineHeight:1.78,color:'var(--gray-d)',marginBottom:'1.25rem'}}>{post.excerpt}</p>
                <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',borderTop:'1px solid var(--cream2)',paddingTop:'0.85rem'}}>
                  <span style={{fontFamily:'var(--mono)',fontSize:'0.6rem',letterSpacing:'0.08em',color:'var(--gray-m)'}}>{post.date}</span>
                  <a href="#" style={{fontFamily:'var(--sans)',fontSize:'0.68rem',fontWeight:500,letterSpacing:'0.1em',textTransform:'uppercase',color:'var(--teal)',textDecoration:'none'}}>{s.readMore}</a>
                </div>
              </div>
            ))}
          </div>
          {filtered.length === 0 && (
            <div style={{textAlign:'center',padding:'5rem 0',color:'var(--gray-d)'}}>
              <p style={{fontFamily:'var(--serif)',fontSize:'1.2rem'}}>{lang==='pt'?'Nenhum post nesta categoria ainda.':'No posts in this category yet.'}</p>
            </div>
          )}
        </div>
      </section>
      <section style={{background:'var(--night)',padding:'5rem 2rem'}}>
        <div className="container" style={{textAlign:'center'}}>
          <span className="overline overline-gold">{s.newsletterOverline}</span>
          <h2 className="headline display-light" style={{marginBottom:'1rem'}}>{s.newsletterTitle}</h2>
          <p style={{fontFamily:'var(--serif)',fontSize:'1.1rem',fontWeight:300,color:'rgba(248,245,239,0.58)',marginBottom:'2rem'}}>{s.newsletterPara}</p>
          <a className="btn btn-primary" href={`mailto:turbofeed95@gmail.com?subject=${lang==='pt'?'Assinar Newsletter':'Newsletter Subscription'}`}>{s.newsletterBtn}</a>
        </div>
      </section>
      <Footer />
    </div>
  )
}
}
}
}
}
}
