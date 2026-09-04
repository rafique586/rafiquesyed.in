const notes = [
  {
    topic: 'AI + Operations',
    title: 'From noisy telemetry to useful decisions',
    summary: 'Where AI agents can genuinely help in observability and incident response, and where human judgement still matters.',
  },
  {
    topic: 'Platform Engineering',
    title: 'Why internal platforms must earn trust',
    summary: 'A platform becomes valuable when it removes friction, makes the safe path easier, and respects how engineers actually work.',
  },
  {
    topic: 'Reliability',
    title: 'Reliability is an organizational capability',
    summary: 'SLOs and automation matter, but durable reliability also comes from ownership, operating habits, and the quality of decisions.',
  },
  {
    topic: 'FinOps',
    title: 'Cloud cost is an engineering signal',
    summary: 'How visibility, ownership, forecasting, and design choices can make cost a useful part of engineering rather than a finance-only conversation.',
  },
];

export default function Writing() {
  return <main className="archive-page">
    <header className="site-header">
      <a className="brand" href="/" aria-label="Rafique Syed, home"><span className="brand-mark">RS</span><span>Rafique Syed</span></a>
      <nav aria-label="Writing navigation"><a href="/">Home</a><a href="/#about">About</a><a href="/#experience">Experience</a><a href="/#beyond">Beyond</a></nav>
      <a className="nav-cta" href="https://www.linkedin.com/in/rafiquesyed/" target="_blank" rel="noreferrer">Connect <span aria-hidden="true">↗</span></a>
    </header>

    <section className="archive-hero">
      <p className="kicker">WRITING & FIELD NOTES</p>
      <h1>Learning in public,<br/><em>one useful idea at a time.</em></h1>
      <p>I’m building this as a record of what I learn while working across platforms, cloud, reliability, delivery, cost, and AI. Some ideas will become essays. Others may remain shorter field notes. I’ll publish them when they are ready.</p>
    </section>

    <section className="archive-list" aria-label="Published writing and work in progress">
      <a className="published-feature tokenomics-feature" href="/writing/context-window-is-a-budget">
        <div><p className="archive-topic">FINOPS + AI · PUBLISHED SEPTEMBER 2026</p><h2>Your Context Window Is a Budget</h2><p>What cloud cost engineering taught me about preserving useful AI context.</p></div>
        <span>READ THE ARTICLE ↗</span>
      </a>
      <a className="published-feature" href="/writing/software-configuration-management-still-matters">
        <div><p className="archive-topic">SCM + AI · PUBLISHED SEPTEMBER 2026</p><h2>Software Configuration Management Still Matters</h2><p>The engineering discipline AI cannot automate away.</p></div>
        <span>READ THE ARTICLE ↗</span>
      </a>
      <div className="archive-list-heading"><p className="kicker">ON THE WORKBENCH</p><p>Ideas currently being developed</p></div>
      {notes.map((note, index) => <article className="archive-note" key={note.title}>
        <span className="archive-number">0{index + 1}</span>
        <div><p className="archive-topic">{note.topic}</p><h2>{note.title}</h2><p>{note.summary}</p></div>
        <span className="coming">IN PROGRESS</span>
      </article>)}
    </section>

    <section className="archive-empty">
      <p className="kicker light">LONGER WORK</p>
      <h2>Books and deeper guides<br/><em>will earn their place here.</em></h2>
      <p>Nothing to list yet. I’d rather keep this honest and add longer work when it is genuinely useful and ready to share.</p>
    </section>

    <footer className="archive-footer"><div><p className="kicker light">COMPARE NOTES</p><h2>Working on something similar?</h2></div><div className="footer-links"><a href="https://www.linkedin.com/in/rafiquesyed/" target="_blank" rel="noreferrer">LinkedIn ↗</a><a href="https://github.com/rafique586" target="_blank" rel="noreferrer">GitHub ↗</a><a href="/">Return home ←</a></div></footer>
  </main>;
}
