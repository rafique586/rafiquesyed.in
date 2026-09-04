const fieldNotes = [
  { tag: 'FINOPS + AI', title: 'Your Context Window Is a Budget', href: '/writing/context-window-is-a-budget', status: 'PUBLISHED' },
  { tag: 'SCM + AI', title: 'Software Configuration Management Still Matters', href: '/writing/software-configuration-management-still-matters', status: 'PUBLISHED' },
  { tag: 'PLATFORM ENGINEERING', title: 'Why internal platforms must earn trust', href: '/writing', status: 'IN PROGRESS' },
];
const journey = [
  ['01 · FOUNDATIONS', 'SCM & the software lifecycle', 'Built depth in source control, branching, build engineering, release governance, and the discipline required to make software delivery repeatable.'],
  ['02 · TRANSFORMATION', 'SDLC & CI/CD evangelism', 'Helped teams rethink how software moves from an idea to production. This included automation, continuous integration, delivery pipelines, and faster engineering feedback.'],
  ['03 · SCALE', 'Cloud-native engineering & FinOps', 'Moved into cloud computing across AWS, Azure, and GCP, followed by Kubernetes, containers, and microservices. I used FinOps to help teams see what they were spending, understand why, and make practical choices about ownership, forecasting, and rightsizing.'],
  ['04 · NOW', 'Reliability, platforms & AI', 'Today I connect that full lifecycle: SRE, platform engineering, cloud reliability, developer productivity, and pragmatic AI that helps teams understand and operate complex systems.'],
];

const calmSystemsGuide = [
  {
    id: 'reliability',
    number: '01',
    title: 'Reliability',
    principle: 'Move quickly, but never let velocity replace verification.',
    copy: 'Reliability is not about writing perfect code. It is about finding problems before customers experience them and limiting the impact when something goes wrong. AI-generated changes should clear the same review, test, and SLO bar as human work.',
    takeaway: 'Start by defining what reliable means for the customer, then let those signals influence release decisions.',
  },
  {
    id: 'availability',
    number: '02',
    title: 'Availability',
    principle: 'A service is available only when the customer can complete the task.',
    copy: 'An external model in a critical journey brings its latency, limits, and outages with it. Plan for timeouts, controlled retries, and a simpler fallback that keeps the customer moving. Most importantly, practise recovery rather than only documenting it.',
    takeaway: 'List the dependencies in one critical journey and decide what should happen when each becomes slow or unavailable.',
  },
  {
    id: 'security',
    number: '03',
    title: 'Security',
    principle: 'Trust should be earned through evidence, not assumed from a clean-looking answer.',
    copy: 'AI-generated code can look convincing while carrying unsafe assumptions or excessive permissions. Give agents only the access needed for the task, keep that access easy to revoke, and require clear human approval for security-sensitive changes.',
    takeaway: 'Review what every agent can read, change, and execute. Remove anything it does not genuinely need.',
  },
  {
    id: 'scalability',
    number: '04',
    title: 'Scalability',
    principle: 'An elegant demo is a starting point, not proof that the design will scale.',
    copy: 'AI workloads can be bursty, and one feature may multiply model calls, searches, database requests, and background jobs. Test the whole customer journey under sudden demand and keep a human in the important architectural trade-offs.',
    takeaway: 'Test for spikes and dependency limits, not only comfortable averages.',
  },
  {
    id: 'sustainability',
    number: '05',
    title: 'Sustainability',
    principle: 'A system should remain understandable and operable long after launch day.',
    copy: 'AI can multiply weak engineering habits very quickly. Every new capability also creates ownership, maintenance, cost, and on-call responsibilities. If the team cannot explain who will operate and eventually retire it, the design is not complete.',
    takeaway: 'Name the owner, operating model, and retirement path before adding another service.',
  },
  {
    id: 'finops',
    number: '06',
    title: 'FinOps',
    principle: 'Cost is an engineering signal, not an invoice to inspect later.',
    copy: 'Tokens, model calls, and agent actions can create unfamiliar cost patterns. Engineers should understand the cost of a useful customer outcome while they can still improve the design. Cost belongs beside reliability, latency, security, and scale.',
    takeaway: 'Measure cost per successful outcome, then make that information visible to the team building the feature.',
  },
  {
    id: 'aiops',
    number: '07',
    title: 'AIOps',
    principle: 'Let AI reduce the noise before asking it to take control.',
    copy: 'AI is valuable when it groups alerts, explains an incident, spots unusual behaviour, or recommends the next step. For destructive or difficult-to-reverse actions, AI should propose and a person should approve until the system has earned greater trust.',
    takeaway: 'Begin with AI as an observer and adviser. Expand its authority only when actions are bounded, visible, and reversible.',
  },
];

export default function Home() {
  return <main>
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Rafique Syed, home"><span className="brand-mark">RS</span><span>Rafique Syed</span></a>
      <nav aria-label="Main navigation"><a href="#about">About</a><a href="#leadership">Leadership</a><a href="#calm-systems">Field Guide</a><a href="#experience">Experience</a><a href="/writing">Writing</a><a href="#beyond">Beyond</a></nav>
      <a className="nav-cta" href="https://www.linkedin.com/in/rafiquesyed/" target="_blank" rel="noreferrer">Connect <span aria-hidden="true">↗</span></a>
    </header>

    <section className="hero" id="top">
      <div className="hero-copy"><p className="eyebrow"><span /> Bengaluru · India · Global</p>
        <h1>I build the systems behind <em>fast, reliable, cost-aware</em> engineering.</h1>
        <p className="hero-intro">I’m Rafique. I work across platform engineering, cloud reliability, DevOps, FinOps, and AIOps. I see them as connected parts of the same engineering problem.</p>
        <div className="hero-actions"><a className="button primary" href="#calm-systems">Explore the field guide <span>↓</span></a><a className="text-link" href="https://www.linkedin.com/in/rafiquesyed/" target="_blank" rel="noreferrer">Start a conversation <span>↗</span></a></div>
      </div>
      <div className="hero-art" aria-label="Calm systems supported by reliability, availability, security, scalability, sustainability, FinOps and AIOps"><div className="orbit orbit-one"/><div className="orbit orbit-two"/><div className="core"><small>FOCUS</small><strong>Calm<br/>systems.</strong></div><a className="focus-label label-one" href="#guide-reliability">Reliability</a><a className="focus-label label-two" href="#guide-availability">Availability</a><a className="focus-label label-three" href="#guide-security">Security</a><a className="focus-label label-four" href="#guide-scalability">Scalability</a><a className="focus-label label-five" href="#guide-sustainability">Sustainability</a><a className="focus-label label-six" href="#guide-finops">FinOps</a><a className="focus-label label-seven" href="#guide-aiops">AIOps</a></div>
    </section>

    <section className="signal-bar" aria-label="Areas of expertise"><span>PLATFORM ENGINEERING</span><i>✦</i><span>SRE</span><i>✦</i><span>DEVOPS</span><i>✦</i><span>FINOPS</span><i>✦</i><span>AIOPS</span></section>

    <section className="calm-guide section" id="calm-systems">
      <div className="calm-guide-intro"><p className="kicker">THE CALM SYSTEMS FIELD GUIDE</p><h2>Seven ideas.<br/><em>One operating discipline.</em></h2><p>AI changes the speed of engineering. It does not remove the need for sound engineering judgement. Here is how I connect the practices that help teams move fast without creating unnecessary surprises.</p></div>
      <div className="calm-guide-list">{calmSystemsGuide.map(item => <article className="guide-entry" id={`guide-${item.id}`} key={item.id}><div className="guide-heading"><span>{item.number}</span><h3>{item.title}</h3></div><div className="guide-content"><strong>{item.principle}</strong><p>{item.copy}</p><p className="guide-takeaway"><span>TRY THIS</span>{item.takeaway}</p></div></article>)}</div>
    </section>

    <section className="about section" id="about">
      <div className="about-lead"><p className="kicker">ABOUT</p><h2>The titles changed.<br/><em>I stayed close to the problems.</em></h2></div>
      <div className="about-story"><p className="about-opening">I’ve spent more than two decades working in technology. I started by building and running continuous integration and continuous deployment systems inside regulated banks. Today, I lead platform engineering and cloud reliability for a large enterprise technology organization.</p><p>I have led large engineering teams working across multi-cloud platforms, DevOps, SRE, FinOps, and operations. The scope has changed over time, but the work has consistently been about helping people and systems operate well together.</p><p>I still enjoy getting close to the actual problem. That might be an availability issue, an unexpected cloud bill, a slow delivery process, or an operational task that takes too much of an engineer’s time.</p><div className="current-focus"><span>WHAT I AM WORKING ON NOW</span><strong>Composite SLO and SLI models · Availability at scale · Useful AI agents for engineering operations</strong></div></div>
      <figure className="about-portrait"><img src="/rafique-city-portrait.png" alt="Rafique Syed in a city setting at night"/><figcaption>Technology is global. Good engineering stays grounded in context.</figcaption></figure>
    </section>

    <section className="perspective section" id="perspective">
      <div className="perspective-heading"><p className="kicker">WHAT SHAPED HOW I LEAD</p><h2>The technical work matters.<br/><em>So does the context.</em></h2></div>
      <div className="perspective-grid">
        <article><span>01</span><h3>Discipline from banking</h3><p>My early years at Deutsche Bank Asia Pacific and Credit Suisse First Boston taught me to respect controls, traceability, and the operational details behind every release.</p></article>
        <article><span>02</span><h3>A global point of view</h3><p>I have worked with teams and stakeholders across India, Singapore, Japan, Finland, and the United States. It taught me to listen for context before offering a solution.</p></article>
        <article><span>03</span><h3>Change happens through people</h3><p>Tools are only part of a transformation. Training, mentoring, clear ownership, and helping teams understand why a change matters have been part of my work from SCM to platform engineering.</p></article>
      </div>
    </section>

    <section className="leadership section" id="leadership">
      <div className="leadership-heading"><p className="kicker light">LEADERSHIP PHILOSOPHY</p><h2>Build clarity.<br/>Create ownership.<br/><em>Stay close enough to help.</em></h2></div>
      <div className="leadership-copy"><p className="leadership-opening">I believe good leadership makes complex work feel more manageable. My role is to give teams a clear direction, create the conditions for people to take ownership, and remove the obstacles that slow them down.</p><p>I stay close enough to understand the real problems, without becoming the person who must solve everything. I encourage engineers to question assumptions, learn from failures, and make decisions with reliability, security, cost, and the customer in mind.</p><p>The goal is not to build teams that depend on a leader. It is to build teams that grow stronger, more confident, and more capable over time.</p><div className="leadership-principles"><span>CLARITY</span><i>✦</i><span>OWNERSHIP</span><i>✦</i><span>GROWTH</span></div></div>
    </section>

    <section className="experience section" id="experience"><div className="experience-story"><p className="kicker light">MY JOURNEY</p><h2>I’ve seen software delivery change from the inside.</h2><p>I started with configuration management, builds, and releases. Over time, the work expanded into CI/CD, cloud, platforms, reliability, cost, and AI. That history helps me understand how today’s problems are connected.</p><div className="operating-lens"><span>RELIABILITY</span><i>×</i><span>SPEED</span><i>×</i><span>COST</span><p>A technical decision is rarely about one thing. It usually affects how reliably we run, how quickly we deliver, and what the system costs.</p></div><p className="org-context">I have worked with ADP, Nokia, Microsoft, Jio, Deutsche Bank, Credit Suisse, and NetApp during my career.</p></div>
      <div className="journey-list">{journey.map(([label,title,copy])=><article className="journey-step" key={label}><span>{label}</span><h3>{title}</h3><p>{copy}</p></article>)}</div>
    </section>

    <section className="writing section" id="writing"><div className="section-heading compact"><p className="kicker">FIELD NOTES</p><h2>A record of what<br/>I’m learning.</h2><p>Essays and working notes on engineering leadership, AI, reliability, and the craft of building platforms.</p><a className="archive-link" href="/writing">Explore the writing archive <span>↗</span></a></div><div className="notes">{fieldNotes.map((note,i)=><a className="note" href={note.href} key={note.title}><span className="note-index">0{i+1}</span><div><p>{note.tag}</p><h3>{note.title}</h3><span className="coming">{note.status}</span></div><span className="arrow">↗</span></a>)}</div></section>

    <section className="offbeat" id="beyond">
      <div className="drum-art" aria-hidden="true"><div className="cymbal cymbal-one"/><div className="cymbal cymbal-two"/><div className="drum drum-one"/><div className="drum drum-two"/><div className="drum drum-three"/><span className="stick stick-one"/><span className="stick stick-two"/><div className="beat">1 · 2 · 3 · 4</div></div>
      <div className="offbeat-copy"><p className="kicker light">OFF THE CLOCK · ON THE BEAT</p><h2>When I’m not deploying,<br/><em>I’m playing drums.</em></h2><p>Technology gives me systems. Music gives me rhythm. Behind the kit, I explore Indian rhythm, percussion, and the joy of making something together.</p><a className="instagram-link" href="https://www.instagram.com/explore/tags/taalchemy/" target="_blank" rel="noreferrer" aria-label="Explore Taalchemy on Instagram"><span>◎</span><div><small>FOLLOW THE RHYTHM ON INSTAGRAM</small><strong>#Taalchemy</strong></div><b>↗</b></a></div>
    </section>

    <footer><div><p className="kicker light">LET’S COMPARE NOTES</p><h2>Working on similar problems?<br/><em>I’d like to hear what you’re seeing.</em></h2></div><div className="footer-links"><a href="https://www.linkedin.com/in/rafiquesyed/" target="_blank" rel="noreferrer">LinkedIn ↗</a><a href="https://github.com/rafique586" target="_blank" rel="noreferrer">GitHub ↗</a><a href="#top">Back to top ↑</a></div><p className="copyright">© 2026 Rafique Syed <span>Platforms · Cloud · Reliability · AI</span></p></footer>
  </main>;
}
