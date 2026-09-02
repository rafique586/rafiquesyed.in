const chapters = [
  ['01', 'Reliability', 'I work on SLOs, SLIs, availability models, observability, and incident practices that continue to work as systems and teams grow.'],
  ['02', 'Delivery', 'I use CI/CD and platform engineering to shorten feedback loops and make it easier for teams to move quickly with the right controls in place.'],
  ['03', 'Cost', 'For me, FinOps means giving engineering teams useful cost information, clear ownership, sensible forecasts, and the ability to make better design choices.'],
  ['04', 'AI in operations', 'I am exploring where agents can help with CI/CD, observability, and incident response. The test is simple: does it save engineers time, and can we trust it in production?'],
];
const fieldNotes = [['AI + Operations', 'From noisy telemetry to useful decisions'], ['Platform Engineering', 'Why internal platforms must earn trust'], ['Leadership', 'Reliability is an organizational capability']];
const journey = [
  ['01 · FOUNDATIONS', 'SCM & the software lifecycle', 'Built depth in source control, branching, build engineering, release governance, and the discipline required to make software delivery repeatable.'],
  ['02 · TRANSFORMATION', 'SDLC & CI/CD evangelism', 'Helped teams rethink how software moves from an idea to production. This included automation, continuous integration, delivery pipelines, and faster engineering feedback.'],
  ['03 · SCALE', 'Cloud-native engineering & FinOps', 'Moved into cloud computing across AWS, Azure, and GCP, followed by Kubernetes, containers, and microservices. I used FinOps to help teams see what they were spending, understand why, and make practical choices about ownership, forecasting, and rightsizing.'],
  ['04 · NOW', 'Reliability, platforms & AI', 'Today I connect that full lifecycle: SRE, platform engineering, cloud reliability, developer productivity, and pragmatic AI that helps teams understand and operate complex systems.'],
];

export default function Home() {
  return <main>
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Rafique Syed, home"><span className="brand-mark">RS</span><span>Rafique Syed</span></a>
      <nav aria-label="Main navigation"><a href="#about">About</a><a href="#perspective">Perspective</a><a href="#approach">Approach</a><a href="#experience">Experience</a><a href="/writing">Writing</a><a href="#beyond">Beyond</a></nav>
      <a className="nav-cta" href="https://www.linkedin.com/in/rafiquesyed/" target="_blank" rel="noreferrer">Connect <span aria-hidden="true">↗</span></a>
    </header>

    <section className="hero" id="top">
      <div className="hero-copy"><p className="eyebrow"><span /> Bengaluru · India · Global</p>
        <h1>I build the systems behind <em>fast, reliable, cost-aware</em> engineering.</h1>
        <p className="hero-intro">I’m Rafique. I work across platform engineering, cloud reliability, DevOps, FinOps, and AIOps. I see them as connected parts of the same engineering problem.</p>
        <div className="hero-actions"><a className="button primary" href="#approach">Explore my approach <span>↓</span></a><a className="text-link" href="https://www.linkedin.com/in/rafiquesyed/" target="_blank" rel="noreferrer">Start a conversation <span>↗</span></a></div>
      </div>
      <div className="hero-art" aria-label="Calm systems supported by reliability, availability, security, scalability, sustainability, FinOps and AIOps"><div className="orbit orbit-one"/><div className="orbit orbit-two"/><div className="core"><small>FOCUS</small><strong>Calm<br/>systems.</strong></div><span className="focus-label label-one">Reliability</span><span className="focus-label label-two">Availability</span><span className="focus-label label-three">Security</span><span className="focus-label label-four">Scalability</span><span className="focus-label label-five">Sustainability</span><span className="focus-label label-six">FinOps</span><span className="focus-label label-seven">AIOps</span></div>
    </section>

    <section className="signal-bar" aria-label="Areas of expertise"><span>PLATFORM ENGINEERING</span><i>✦</i><span>SRE</span><i>✦</i><span>DEVOPS</span><i>✦</i><span>FINOPS</span><i>✦</i><span>AIOPS</span></section>

    <section className="about section" id="about">
      <div className="about-lead"><p className="kicker">ABOUT</p><h2>The titles changed.<br/><em>I stayed close to the problems.</em></h2><figure className="about-portrait"><img src="/rafique-city-portrait.png" alt="Rafique Syed in a city setting at night"/><figcaption>Technology is global. Good engineering stays grounded in context.</figcaption></figure></div>
      <div className="about-story"><p className="about-opening">I’ve spent more than two decades working in technology. I started by building and running continuous integration and continuous deployment systems inside regulated banks. Today, I lead platform engineering and cloud reliability for a large enterprise technology organization.</p><p>I have led large engineering teams working across multi-cloud platforms, DevOps, SRE, FinOps, and operations. The scope has changed over time, but the work has consistently been about helping people and systems operate well together.</p><p>I still enjoy getting close to the actual problem. That might be an availability issue, an unexpected cloud bill, a slow delivery process, or an operational task that takes too much of an engineer’s time.</p><div className="current-focus"><span>WHAT I AM WORKING ON NOW</span><strong>Composite SLO and SLI models · Availability at scale · Useful AI agents for engineering operations</strong></div></div>
    </section>

    <section className="perspective section" id="perspective">
      <div className="perspective-heading"><p className="kicker">WHAT SHAPED HOW I LEAD</p><h2>The technical work matters.<br/><em>So does the context.</em></h2></div>
      <div className="perspective-grid">
        <article><span>01</span><h3>Discipline from banking</h3><p>My early years at Deutsche Bank Asia Pacific and Credit Suisse First Boston taught me to respect controls, traceability, and the operational details behind every release.</p></article>
        <article><span>02</span><h3>A global point of view</h3><p>I have worked with teams and stakeholders across India, Singapore, Japan, Finland, and the United States. It taught me to listen for context before offering a solution.</p></article>
        <article><span>03</span><h3>Change happens through people</h3><p>Tools are only part of a transformation. Training, mentoring, clear ownership, and helping teams understand why a change matters have been part of my work from SCM to platform engineering.</p></article>
      </div>
    </section>

    <section className="approach section" id="approach"><div className="section-heading"><p className="kicker">HOW I WORK</p><h2>Reliability, delivery,<br/><em>cost and AI.</em></h2></div>
      <div className="chapter-list">{chapters.map(([number,title,copy]) => <article className="chapter" key={number}><span>{number}</span><div><h3>{title}</h3><p>{copy}</p></div></article>)}</div>
    </section>

    <section className="experience section" id="experience"><div className="experience-story"><p className="kicker light">MY JOURNEY</p><h2>I’ve seen software delivery change from the inside.</h2><p>I started with configuration management, builds, and releases. Over time, the work expanded into CI/CD, cloud, platforms, reliability, cost, and AI. That history helps me understand how today’s problems are connected.</p><div className="operating-lens"><span>RELIABILITY</span><i>×</i><span>SPEED</span><i>×</i><span>COST</span><p>A technical decision is rarely about one thing. It usually affects how reliably we run, how quickly we deliver, and what the system costs.</p></div><p className="org-context">I have worked with ADP, Nokia, Microsoft, Jio, Deutsche Bank, Credit Suisse, and NetApp during my career.</p></div>
      <div className="journey-list">{journey.map(([label,title,copy])=><article className="journey-step" key={label}><span>{label}</span><h3>{title}</h3><p>{copy}</p></article>)}</div>
    </section>

    <section className="writing section" id="writing"><div className="section-heading compact"><p className="kicker">FIELD NOTES</p><h2>A record of what<br/>I’m learning.</h2><p>Essays and working notes on engineering leadership, AI, reliability, and the craft of building platforms.</p><a className="archive-link" href="/writing">Explore the writing archive <span>↗</span></a></div><div className="notes">{fieldNotes.map(([tag,title],i)=><a className="note" href="/writing" key={title}><span className="note-index">0{i+1}</span><div><p>{tag}</p><h3>{title}</h3><span className="coming">IN PROGRESS</span></div><span className="arrow">↗</span></a>)}</div></section>

    <section className="offbeat" id="beyond">
      <div className="drum-art" aria-hidden="true"><div className="cymbal cymbal-one"/><div className="cymbal cymbal-two"/><div className="drum drum-one"/><div className="drum drum-two"/><div className="drum drum-three"/><span className="stick stick-one"/><span className="stick stick-two"/><div className="beat">1 · 2 · 3 · 4</div></div>
      <div className="offbeat-copy"><p className="kicker light">OFF THE CLOCK · ON THE BEAT</p><h2>When I’m not deploying,<br/><em>I’m playing drums.</em></h2><p>Technology gives me systems. Music gives me rhythm. Behind the kit, I explore Indian rhythm, percussion, and the joy of making something together.</p><a className="instagram-link" href="https://www.instagram.com/explore/tags/taalchemy/" target="_blank" rel="noreferrer" aria-label="Explore Taalchemy on Instagram"><span>◎</span><div><small>FOLLOW THE RHYTHM ON INSTAGRAM</small><strong>#Taalchemy</strong></div><b>↗</b></a></div>
    </section>

    <footer><div><p className="kicker light">LET’S COMPARE NOTES</p><h2>Working on similar problems?<br/><em>I’d like to hear what you’re seeing.</em></h2></div><div className="footer-links"><a href="https://www.linkedin.com/in/rafiquesyed/" target="_blank" rel="noreferrer">Start a conversation ↗</a><a href="#top">Back to top ↑</a></div><p className="copyright">© 2026 Rafique Syed <span>Platforms · Cloud · Reliability · AI</span></p></footer>
  </main>;
}
