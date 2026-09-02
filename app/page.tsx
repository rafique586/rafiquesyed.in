const chapters = [
  ['01', 'Reliability', 'Composite SLO and SLI models, availability frameworks, observability, and incident practices that hold up when systems and organizations scale.'],
  ['02', 'Delivery', 'CI/CD and platform capabilities that shorten feedback loops, reduce cognitive load, and let engineers move quickly without weakening operational control.'],
  ['03', 'Economics', 'FinOps as an engineering discipline: cost visibility, ownership, forecasting, rightsizing, and unit economics built into everyday technical decisions.'],
  ['04', 'AI-driven operations', 'Practical agents for CI/CD, observability, and incident response—focused on work they can genuinely take off engineers’ plates and survive production.'],
];
const fieldNotes = [['AI + Operations', 'From noisy telemetry to useful decisions'], ['Platform Engineering', 'Why internal platforms must earn trust'], ['Leadership', 'Reliability is an organizational capability']];
const journey = [
  ['01 · FOUNDATIONS', 'SCM & the software lifecycle', 'Built depth in source control, branching, build engineering, release governance, and the discipline required to make software delivery repeatable.'],
  ['02 · TRANSFORMATION', 'SDLC & CI/CD evangelism', 'Helped teams rethink how software should move from an idea to production—championing automation, continuous integration, delivery pipelines, and better engineering feedback loops.'],
  ['03 · SCALE', 'Cloud-native engineering & FinOps', 'Moved into cloud computing across AWS, Azure, and GCP, then Kubernetes, containers, and microservices. Applied FinOps to make cloud cost visible and actionable—building ownership, forecasting, rightsizing, and unit-economics thinking into everyday engineering decisions without trading away reliability.'],
  ['04 · NOW', 'Reliability, platforms & AI', 'Today I connect that full lifecycle: SRE, platform engineering, cloud reliability, developer productivity, and pragmatic AI that helps teams understand and operate complex systems.'],
];

export default function Home() {
  return <main>
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Rafique Syed, home"><span className="brand-mark">RS</span><span>Rafique Syed</span></a>
      <nav aria-label="Main navigation"><a href="#about">About</a><a href="#approach">Approach</a><a href="#experience">Experience</a><a href="#writing">Thinking</a><a href="#beyond">Beyond</a></nav>
      <a className="nav-cta" href="https://www.linkedin.com/in/rafiquesyed/" target="_blank" rel="noreferrer">Connect <span aria-hidden="true">↗</span></a>
    </header>

    <section className="hero" id="top">
      <div className="hero-copy"><p className="eyebrow"><span /> Bengaluru · India · Global</p>
        <h1>I build the systems behind <em>fast, reliable, cost-aware</em> engineering.</h1>
        <p className="hero-intro">I’m Rafique—a technologist and engineering leader connecting platform engineering, cloud reliability, DevOps, FinOps, and AIOps into one operating discipline.</p>
        <div className="hero-actions"><a className="button primary" href="#approach">Explore my approach <span>↓</span></a><a className="text-link" href="https://www.linkedin.com/in/rafiquesyed/" target="_blank" rel="noreferrer">Start a conversation <span>↗</span></a></div>
      </div>
      <div className="hero-art" aria-label="Reliability, platform engineering and AI, connected"><div className="orbit orbit-one"/><div className="orbit orbit-two"/><div className="core"><small>FOCUS</small><strong>Calm<br/>systems.</strong></div><div className="satellite sat-one"><b>99.99</b><small>RELIABILITY</small></div><div className="satellite sat-two"><b>AI</b><small>OPERATIONS</small></div><div className="satellite sat-three"><b>DX</b><small>PLATFORMS</small></div></div>
    </section>

    <section className="signal-bar" aria-label="Areas of expertise"><span>PLATFORM ENGINEERING</span><i>✦</i><span>SRE</span><i>✦</i><span>DEVOPS</span><i>✦</i><span>FINOPS</span><i>✦</i><span>AIOPS</span></section>

    <section className="about section" id="about">
      <div className="about-lead"><p className="kicker">ABOUT</p><h2>Titles have changed.<br/><em>The work has stayed connected.</em></h2></div>
      <div className="about-story"><p className="about-opening">I’ve spent 25 years as a technologist—first building and running infrastructure inside regulated banks, and today leading platform engineering and cloud reliability for a large enterprise technology organization.</p><p>I lead a 100+ engineer organization across multi-cloud platforms. The remit spans reliability, delivery, cost, and AI-driven operations—not as four separate jobs, but as one connected system.</p><p>I’m still happiest close to the actual problem: availability, cost discipline, and the systems and habits that let engineering organizations move fast without breaking things or burning budget.</p><div className="current-focus"><span>CURRENTLY DEEP IN</span><strong>Composite SLO/SLI models · Availability at scale · Production-grade AI agents</strong></div></div>
    </section>

    <section className="approach section" id="approach"><div className="section-heading"><p className="kicker">THE OPERATING MODEL</p><h2>Four disciplines.<br/><em>One system.</em></h2></div>
      <div className="chapter-list">{chapters.map(([number,title,copy]) => <article className="chapter" key={number}><span>{number}</span><div><h3>{title}</h3><p>{copy}</p></div></article>)}</div>
    </section>

    <section className="experience section" id="experience"><div className="experience-story"><p className="kicker light">THE LONG VIEW</p><h2>I’ve worked through the full evolution of modern software delivery.</h2><p>My perspective wasn’t formed around one tool, cloud, or job title. It was built layer by layer—from the mechanics of configuration management to the organizational systems behind reliable, AI-enabled platforms.</p><div className="operating-lens"><span>RELIABILITY</span><i>×</i><span>SPEED</span><i>×</i><span>ECONOMICS</span><p>Engineering decisions work best when operational resilience, delivery flow, and cloud economics are considered together.</p></div><p className="org-context">Career experience includes ADP, Nokia, Microsoft, Jio, Deutsche Bank, Credit Suisse, and NetApp.</p></div>
      <div className="journey-list">{journey.map(([label,title,copy])=><article className="journey-step" key={label}><span>{label}</span><h3>{title}</h3><p>{copy}</p></article>)}</div>
    </section>

    <section className="datagridz section"><div className="datagridz-mark"><span>DG</span><i>BUILD MODE</i></div><div className="datagridz-copy"><p className="kicker">BUILDING ALONGSIDE LEADING</p><h2>DataGridz</h2><p>A cloud transformation venture where I can test ideas as a builder—not only as a leader reviewing someone else’s work. It keeps the thinking honest, practical, and close to what survives real implementation.</p></div><div className="builder-note"><span>LEADER</span><i>↔</i><span>BUILDER</span></div></section>

    <section className="writing section" id="writing"><div className="section-heading compact"><p className="kicker">FIELD NOTES</p><h2>Ideas for the<br/>next operating model.</h2><p>Essays and working notes on engineering leadership, AI, reliability, and the craft of building platforms.</p></div><div className="notes">{fieldNotes.map(([tag,title],i)=><article className="note" key={title}><span className="note-index">0{i+1}</span><div><p>{tag}</p><h3>{title}</h3><span className="coming">COMING SOON</span></div><span className="arrow">↗</span></article>)}</div></section>

    <section className="offbeat" id="beyond">
      <div className="drum-art" aria-hidden="true"><div className="cymbal cymbal-one"/><div className="cymbal cymbal-two"/><div className="drum drum-one"/><div className="drum drum-two"/><div className="drum drum-three"/><span className="stick stick-one"/><span className="stick stick-two"/><div className="beat">1 · 2 · 3 · 4</div></div>
      <div className="offbeat-copy"><p className="kicker light">OFF THE CLOCK · ON THE BEAT</p><h2>When I’m not deploying,<br/><em>I’m playing drums.</em></h2><p>Technology gives me systems. Music gives me rhythm. Behind the kit, I explore Indian rhythm, percussion, and the joy of making something together.</p><a className="instagram-link" href="https://www.instagram.com/explore/tags/taalchemy/" target="_blank" rel="noreferrer" aria-label="Explore Taalchemy on Instagram"><span>◎</span><div><small>FOLLOW THE RHYTHM ON INSTAGRAM</small><strong>#Taalchemy</strong></div><b>↗</b></a></div>
    </section>

    <footer><div><p className="kicker light">LET’S BUILD CALMER SYSTEMS</p><h2>Good engineering<br/>should feel <em>inevitable.</em></h2></div><div className="footer-links"><a href="https://www.linkedin.com/in/rafiquesyed/" target="_blank" rel="noreferrer">Start a conversation ↗</a><a href="#top">Back to top ↑</a></div><p className="copyright">© 2026 Rafique Syed <span>AI-first reliability · Thoughtfully engineered</span></p></footer>
  </main>;
}
