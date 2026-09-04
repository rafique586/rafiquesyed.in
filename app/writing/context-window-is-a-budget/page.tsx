import type { Metadata } from 'next';

const title = 'Your Context Window Is a Budget';
const description = 'What FinOps taught me about preserving the context that helps AI-assisted engineering stay coherent.';

export const metadata: Metadata = {
  title: `${title} | Rafique Syed`,
  description,
  alternates: { canonical: '/writing/context-window-is-a-budget' },
  openGraph: { title, description, type: 'article', images: [] },
  twitter: { card: 'summary', title, description, images: [] },
};

export default function ContextWindowArticle() {
  return <main className="article-page tokenomics-article">
    <header className="site-header article-nav">
      <a className="brand" href="/" aria-label="Rafique Syed, home"><span className="brand-mark">RS</span><span>Rafique Syed</span></a>
      <nav aria-label="Article navigation"><a href="/">Home</a><a href="/writing">All writing</a><a href="/#calm-systems">Field guide</a></nav>
      <a className="nav-cta" href="/writing">Writing <span aria-hidden="true">↗</span></a>
    </header>

    <article>
      <header className="article-hero">
        <p className="kicker">FINOPS + AI · FIELD NOTE 02</p>
        <h1>Your Context Window <em>Is a Budget.</em></h1>
        <p className="article-dek">What cloud cost engineering taught me about preserving the context that helps AI-assisted work stay coherent.</p>
        <div className="article-byline"><span>By Rafique Syed</span><span>Published September 2026</span><span>A field note from practice</span></div>
        <p className="article-margin-note">Available is not the same as valuable.</p>
      </header>

      <div className="context-ledger" aria-label="Context usage from one working session">
        <div className="ledger-heading"><p>ONE WORKING SESSION</p><strong>21% used</strong><span>Comfortable? Not quite.</span></div>
        <div className="ledger-chart">
          <div className="ledger-bar" aria-hidden="true"><i className="ledger-system"/><i className="ledger-tools"/><i className="ledger-skills"/><i className="ledger-messages"/><i className="ledger-free"/></div>
          <div className="ledger-legend"><span><i className="key-system"/>System 0.9%</span><span><i className="key-tools"/>Tools 2.2%</span><span><i className="key-skills"/>Skills 0.3%</span><span><i className="key-messages"/>Messages 17.7%</span><span><i className="key-free"/>Remaining capacity</span></div>
        </div>
      </div>

      <div className="article-layout">
        <aside className="article-aside"><p>THE QUESTION</p><strong>Is this context helping the work—or merely travelling with it?</strong></aside>
        <div className="article-body">
          <p className="article-lead">In cloud engineering, we learned an expensive lesson: just because a resource is available does not mean we should consume it.</p>
          <p>Teams provision generous capacity “just in case”, leave workloads running, and notice the waste only when the bill arrives. FinOps gave us a better habit: make usage visible, understand its value, and spend deliberately.</p>
          <p>I started seeing the same pattern in AI-assisted development. We open a coding session, keep adding requirements, logs, files, corrections and new directions, and treat the context window like an endless notebook.</p>
          <p>It is not endless. More importantly, a larger conversation is not automatically a better one.</p>

          <h2>The number that made me pause</h2>
          <p>In one live session, the context display reported 203,000 tokens in use—about 21% of the available window. Most of it, roughly 171,000 tokens, came from messages.</p>
          <p>Twenty-one per cent looked comfortable. But the session already carried something close to a small novel: repeated explanations, pasted material, exploratory turns and decisions that had become stale.</p>
          <blockquote>The problem was not that the window was full. The problem was that it was carrying too much that no longer helped.</blockquote>
          <p>The exact limits and categories will change across models and product versions. The lesson does not: context is finite working memory, and working memory deserves the same discipline we apply to any constrained engineering resource.</p>

          <h2>I call that discipline Tokenomics</h2>
          <p>Tokenomics is simply the intentional management of an AI session’s context budget. It asks a FinOps-style question of every piece of information:</p>
          <div className="article-callout"><span>THE TOKENOMICS QUESTION</span><p>Does this context still have a job?</p></div>
          <p>Some context is foundational: architecture, conventions, constraints and important decisions. Some is temporary: the current task, an error message or the files being changed. Some has expired but continues travelling because nobody removed it.</p>
          <p>The goal is not to use the fewest possible tokens. That would be like reducing a cloud bill by switching everything off. The goal is to spend context where it improves understanding, reasoning and verification.</p>

          <h2>A practical context budget</h2>
          <div className="practice-grid token-practices">
            <section><span>01</span><h3>Keep durable knowledge durable</h3><p>Put architecture, commands, conventions and non-negotiable constraints in concise project guidance such as <a href="https://docs.anthropic.com/en/docs/claude-code/memory" target="_blank" rel="noreferrer"><code>CLAUDE.md</code></a>. Anthropic describes these files as project memory that is loaded across sessions.</p></section>
            <section><span>02</span><h3>Reference before pasting</h3><p>When the assistant can read a file, point to the path. Paste only the fragment that needs special attention. Repeated copies become stale surprisingly quickly.</p></section>
            <section><span>03</span><h3>Close one loop at a time</h3><p>Finish a coherent unit of work before opening the next. A session that mixes architecture, debugging, copywriting and deployment collects competing assumptions.</p></section>
            <section><span>04</span><h3>Compact at natural boundaries</h3><p>Use compaction as a transition after exploration or a completed feature—not as an emergency response. Preserve decisions, current state, tests and next actions.</p></section>
            <section><span>05</span><h3>Let the repository remember</h3><p>Commits, tests, decision records and progress notes survive more reliably than conversation history. The filesystem is part of the collaboration.</p></section>
          </div>

          <h2>Do not turn the numbers into superstition</h2>
          <p>I do not believe every team needs a universal “healthy context percentage”. A complex migration may genuinely need more context than a small bug fix. Tool definitions, system instructions and model limits also differ.</p>
          <p>Watch the direction instead. Is the conversation growing faster than the work? Are old decisions being repeated? Is the assistant asking questions that were settled earlier? Does a fresh session recover faster from the repository than the existing session can reason through its history?</p>
          <p>Those are better signals than chasing one magic threshold.</p>

          <h2>The session boundary is useful</h2>
          <p>FinOps uses billing periods to make spending visible. AI-assisted development benefits from an intentional session boundary for the same reason.</p>
          <p>Before finishing meaningful work, leave behind a compact handover:</p>
          <ol><li>What changed?</li><li>Which decisions are now settled?</li><li>What was verified?</li><li>What remains uncertain?</li><li>What should happen next?</li></ol>
          <p>Save that information where the next session can find it. Anthropic’s <a href="https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/prompt-templates-and-variables" target="_blank" rel="noreferrer">current guidance for long-running work</a> also notes that starting fresh from well-maintained files can sometimes be better than repeatedly compacting an old conversation.</p>

          <h2>This is not really about tokens</h2>
          <p>Waste is often a symptom of a missing operating model. Cloud waste grows when nobody owns visibility, allocation or design trade-offs. Context waste grows when a team has no shared way to preserve decisions and end a line of exploration.</p>
          <p>The people who work well with coding agents will not only be good at prompting. They will build a dependable system around the collaboration: clear project guidance, small tasks, useful session boundaries, durable evidence and verification outside the conversation.</p>
          <p>That is the connection to FinOps. It is not about being miserly. It is about knowing what deserves the budget.</p>
          <p className="article-ending">Spend context on clarity.</p>
          <div className="article-signoff"><span>Rafique</span><p>This field note came from a real working session. The figures are a snapshot, not a universal benchmark; the operating principle is the part worth carrying forward.</p></div>
        </div>
      </div>
    </article>

    <section className="article-next"><p className="kicker light">KEEP READING</p><h2>AI accelerates change.<br/><em>Engineering preserves trust.</em></h2><div className="article-next-links"><a href="/writing/software-configuration-management-still-matters">Read the SCM field note ↗</a><a href="/writing">All writing ↗</a></div></section>
  </main>;
}
