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

// ── ARCHETYPE SCORING ─────────────────────────────────────────────────────────
// Each question option maps to an archetype: [Hero, Explorer, Caregiver, Sage]
export const scoring = [
  [0,1,2,3],[0,1,2,3],[0,1,2,3],[0,1,2,3],
  [0,1,2,3],[0,1,2,3],[0,1,2,3],[0,1,2,3],
  [0,1,2,3],[0,1,2,3],[0,1,2,3],[0,1,2,3],
]

// ── ARCHETYPE RESULTS ─────────────────────────────────────────────────────────
export const archetypes = {
  en: [
    {
      id: 'hero',
      name: 'The Hero',
      tagline: 'Conquer. Achieve. Prove.',
      color: '#1B3A5C',
      traits: ['High drive', 'Results-oriented', 'Competitive', 'Resilient under pressure'],
      strength: 'You get things done that most people can't. You thrive in high-stakes environments, lead through action, and inspire others with what you're willing to take on. You don't back down from hard things.',
      shadow: 'Your identity can collapse into your performance. When results slow or stop, you risk equating that with who you are. Burnout often hits not from lack of effort, but from effort without meaning. The Hero's shadow is mistaking motion for purpose.',
    },
    {
      id: 'explorer',
      name: 'The Explorer',
      tagline: 'Discover. Question. Move.',
      color: '#0A6B6B',
      traits: ['Intellectual curiosity', 'Autonomy-driven', 'Adaptable', 'Resists convention'],
      strength: 'You see possibilities before others do. You bring fresh angles to stale problems, thrive on novelty, and have a rare capacity to operate well in ambiguity. Your career has a distinct originality because you've never followed the obvious path.',
      shadow: 'The impulse to move can become flight. When a context becomes repetitive, the Explorer often interprets discomfort as a signal to leave — when it may actually be the threshold of mastery. The shadow is mistaking depth for stagnation.',
    },
    {
      id: 'caregiver',
      name: 'The Caregiver',
      tagline: 'Develop. Connect. Sustain.',
      color: '#2D5B3F',
      traits: ['High empathy', 'Purpose-driven', 'Relationship-builder', 'Naturally trusted'],
      strength: 'You bring out the best in people around you. Your leadership creates psychological safety that most executives only talk about. People follow you not from authority but from genuine trust. You build cultures that last past your presence.',
      shadow: 'You can disappear into service. When your identity is built on being needed, setting boundaries feels like betrayal. The Caregiver's shadow is chronic self-neglect dressed as generosity — and the quiet resentment that follows.',
    },
    {
      id: 'sage',
      name: 'The Sage',
      tagline: 'Understand. Refine. Know.',
      color: '#8B4513',
      traits: ['Analytical depth', 'High standards', 'Domain mastery', 'Independent thinker'],
      strength: 'You know more, go deeper, and think more rigorously than almost anyone in the room. Your analysis catches what others miss. When the context demands genuine expertise, you're the person others defer to — not from politics, but from actual knowledge.',
      shadow: 'Depth can become a hiding place. The Sage often delays decisions waiting for more information, delays visibility waiting for more certainty, delays action waiting for the conditions to be right. The shadow is analysis as avoidance.',
    },
  ],
  pt: [
    {
      id: 'hero',
      name: 'O Herói',
      tagline: 'Conquistar. Realizar. Provar.',
      color: '#1B3A5C',
      traits: ['Alta determinação', 'Orientado a resultados', 'Competitivo', 'Resiliente sob pressão'],
      strength: 'Você realiza o que a maioria das pessoas não consegue. Prospera em ambientes de alto risco, lidera pela ação e inspira outros pelo que está disposto a enfrentar. Você não recua diante do difícil.',
      shadow: 'Sua identidade pode colapsar no seu desempenho. Quando os resultados diminuem ou param, você corre o risco de confundir isso com quem você é. O burnout frequentemente ocorre não por falta de esforço, mas por esforço sem significado. A sombra do Herói é confundir movimento com propósito.',
    },
    {
      id: 'explorer',
      name: 'O Explorador',
      tagline: 'Descobrir. Questionar. Mover.',
      color: '#0A6B6B',
      traits: ['Curiosidade intelectual', 'Orientado à autonomia', 'Adaptável', 'Resiste à convenção'],
      strength: 'Você enxerga possibilidades antes dos outros. Traz ângulos frescos a problemas velhos, prospera na novidade e tem rara capacidade de operar bem na ambiguidade. Sua carreira tem uma originalidade distinta porque você nunca seguiu o caminho óbvio.',
      shadow: 'O impulso de se mover pode se tornar fuga. Quando um contexto se torna repetitivo, o Explorador frequentemente interpreta o desconforto como sinal para ir embora — quando pode ser o limiar do domínio. A sombra é confundir profundidade com estagnação.',
    },
    {
      id: 'caregiver',
      name: 'O Cuidador',
      tagline: 'Desenvolver. Conectar. Sustentar.',
      color: '#2D5B3F',
      traits: ['Alta empatia', 'Orientado ao propósito', 'Construtor de relacionamentos', 'Naturalmente confiável'],
      strength: 'Você traz o melhor das pessoas ao seu redor. Sua liderança cria segurança psicológica que a maioria dos executivos só fala. As pessoas te seguem não pela autoridade, mas pela confiança genuína. Você constrói culturas que persistem além da sua presença.',
      shadow: 'Você pode desaparecer no serviço aos outros. Quando sua identidade é construída sobre ser necessário, estabelecer limites parece traição. A sombra do Cuidador é a autodesatenção crônica disfarçada de generosidade — e o ressentimento silencioso que se segue.',
    },
    {
      id: 'sage',
      name: 'O Sábio',
      tagline: 'Compreender. Refinar. Conhecer.',
      color: '#8B4513',
      traits: ['Profundidade analítica', 'Altos padrões', 'Domínio do campo', 'Pensador independente'],
      strength: 'Você sabe mais, vai mais fundo e pensa com mais rigor do que quase qualquer um na sala. Sua análise captura o que os outros perdem. Quando o contexto exige expertise genuína, você é a pessoa a quem os outros recorrem — não por política, mas por conhecimento real.',
      shadow: 'A profundidade pode se tornar um esconderijo. O Sábio frequentemente adia decisões esperando mais informação, adia visibilidade esperando mais certeza, adia ação esperando as condições certas. A sombra é a análise como esquiva.',
    },
  ]
}
