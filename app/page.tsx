const chapters = [
  ['01', 'Reliable by design', 'I build operating systems for engineering teams—clear service ownership, useful SLOs, resilient cloud foundations, and incident practices that turn hard lessons into durable improvements.'],
  ['02', 'Platforms people choose', 'The best platform is a product, not a mandate. I help teams remove friction from the path to production with paved roads, strong feedback loops, and developer experience that earns adoption.'],
  ['03', 'AI with operational judgment', 'I apply AI where it compounds human expertise: investigation, knowledge retrieval, change risk, repetitive operations, and the signal-to-decision gap—always with guardrails and accountability.'],
];
const fieldNotes = [['AI + Operations', 'From noisy telemetry to useful decisions'], ['Platform Engineering', 'Why internal platforms must earn trust'], ['Leadership', 'Reliability is an organizational capability']];
const journey = [
  ['01 · FOUNDATIONS', 'SCM & the software lifecycle', 'Built depth in source control, branching, build engineering, release governance, and the discipline required to make software delivery repeatable.'],
  ['02 · TRANSFORMATION', 'SDLC & CI/CD evangelism', 'Helped teams rethink how software should move from an idea to production—championing automation, continuous integration, delivery pipelines, and better engineering feedback loops.'],
  ['03 · SCALE', 'Cloud-native engineering', 'Moved into cloud computing with hands-on experience across AWS, Azure, and GCP, then Kubernetes, containers, microservices, and the operational patterns needed to run distributed systems well.'],
  ['04 · NOW', 'Reliability, platforms & AI', 'Today I connect that full lifecycle: SRE, platform engineering, cloud reliability, developer productivity, and pragmatic AI that helps teams understand and operate complex systems.'],
];

export default function Home() {
  return <main>
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Rafique Syed, home"><span className="brand-mark">RS</span><span>Rafique Syed</span></a>
      <nav aria-label="Main navigation"><a href="#approach">Approach</a><a href="#experience">Experience</a><a href="#writing">Thinking</a><a href="#beyond">Beyond work</a></nav>
      <a className="nav-cta" href="https://www.linkedin.com/in/rafiquesyed/" target="_blank" rel="noreferrer">Connect <span aria-hidden="true">↗</span></a>
    </header>

    <section className="hero" id="top">
      <div className="hero-copy"><p className="eyebrow"><span /> Bengaluru · India · Global</p>
        <h1>I help engineering organizations <em>move faster</em> without losing reliability.</h1>
        <p className="hero-intro">I’m Rafique—an AI-first SRE, platform engineering, and cloud reliability leader with 22+ years of experience turning complex operations into calm, scalable systems.</p>
        <div className="hero-actions"><a className="button primary" href="#approach">Explore my approach <span>↓</span></a><a className="text-link" href="https://www.linkedin.com/in/rafiquesyed/" target="_blank" rel="noreferrer">Start a conversation <span>↗</span></a></div>
      </div>
      <div className="hero-art" aria-label="Reliability, platform engineering and AI, connected"><div className="orbit orbit-one"/><div className="orbit orbit-two"/><div className="core"><small>FOCUS</small><strong>Calm<br/>systems.</strong></div><div className="satellite sat-one"><b>99.99</b><small>RELIABILITY</small></div><div className="satellite sat-two"><b>AI</b><small>OPERATIONS</small></div><div className="satellite sat-three"><b>DX</b><small>PLATFORMS</small></div></div>
    </section>

    <section className="signal-bar" aria-label="Areas of expertise"><span>AI-FIRST OPERATIONS</span><i>✦</i><span>SITE RELIABILITY</span><i>✦</i><span>PLATFORM ENGINEERING</span><i>✦</i><span>CLOUD STRATEGY</span></section>

    <section className="approach section" id="approach"><div className="section-heading"><p className="kicker">WHAT I BELIEVE</p><h2>Reliability is how<br/>teams earn <em>speed.</em></h2></div>
      <div className="chapter-list">{chapters.map(([number,title,copy]) => <article className="chapter" key={number}><span>{number}</span><div><h3>{title}</h3><p>{copy}</p></div></article>)}</div>
    </section>

    <section className="experience section" id="experience"><div className="experience-story"><p className="kicker light">THE LONG VIEW</p><h2>I’ve worked through the full evolution of modern software delivery.</h2><p>My perspective wasn’t formed around one tool, cloud, or job title. It was built layer by layer—from the mechanics of configuration management to the organizational systems behind reliable, AI-enabled platforms.</p><div className="stat-row"><div><strong>22+</strong><span>YEARS IN TECHNOLOGY</span></div><div><strong>3</strong><span>MAJOR CLOUDS</span></div><div><strong>4</strong><span>ENGINEERING ERAS</span></div></div><p className="org-context">Career experience includes ADP, Nokia, Microsoft, Jio, Deutsche Bank, Credit Suisse, and NetApp.</p></div>
      <div className="journey-list">{journey.map(([label,title,copy])=><article className="journey-step" key={label}><span>{label}</span><h3>{title}</h3><p>{copy}</p></article>)}</div>
    </section>

    <section className="flowops section"><div className="flow-badge">FO<span>✦</span></div><div><p className="kicker">FOUNDER / ADVISOR</p><h2>FlowOpsX</h2><p>Helping organizations build AI-enabled reliability practices, modern internal platforms, and cloud operations that scale with the business—not against it.</p></div><a className="circle-link" href="https://www.linkedin.com/in/rafiquesyed/" target="_blank" rel="noreferrer" aria-label="Discuss advisory work">↗</a></section>

    <section className="writing section" id="writing"><div className="section-heading compact"><p className="kicker">FIELD NOTES</p><h2>Ideas for the<br/>next operating model.</h2><p>Essays and working notes on engineering leadership, AI, reliability, and the craft of building platforms.</p></div><div className="notes">{fieldNotes.map(([tag,title],i)=><article className="note" key={title}><span className="note-index">0{i+1}</span><div><p>{tag}</p><h3>{title}</h3><span className="coming">COMING SOON</span></div><span className="arrow">↗</span></article>)}</div></section>

    <section className="offbeat" id="beyond">
      <div className="drum-art" aria-hidden="true"><div className="cymbal cymbal-one"/><div className="cymbal cymbal-two"/><div className="drum drum-one"/><div className="drum drum-two"/><div className="drum drum-three"/><span className="stick stick-one"/><span className="stick stick-two"/><div className="beat">1 · 2 · 3 · 4</div></div>
      <div className="offbeat-copy"><p className="kicker light">OFF THE CLOCK · ON THE BEAT</p><h2>When I’m not deploying,<br/><em>I’m playing drums.</em></h2><p>Technology gives me systems. Music gives me rhythm. Behind the kit, I explore Indian rhythm, percussion, and the joy of making something together.</p><a className="instagram-link" href="https://www.instagram.com/explore/tags/taalchemy/" target="_blank" rel="noreferrer" aria-label="Explore Taalchemy on Instagram"><span>◎</span><div><small>FOLLOW THE RHYTHM ON INSTAGRAM</small><strong>#Taalchemy</strong></div><b>↗</b></a></div>
    </section>

    <footer><div><p className="kicker light">LET’S BUILD CALMER SYSTEMS</p><h2>Good engineering<br/>should feel <em>inevitable.</em></h2></div><div className="footer-links"><a href="https://www.linkedin.com/in/rafiquesyed/" target="_blank" rel="noreferrer">Start a conversation ↗</a><a href="#top">Back to top ↑</a></div><p className="copyright">© 2026 Rafique Syed <span>AI-first reliability · Thoughtfully engineered</span></p></footer>
  </main>;
}
