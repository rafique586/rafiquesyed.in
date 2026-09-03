import type { Metadata } from 'next';

const title = 'Software Configuration Management Still Matters';
const description = 'AI accelerates software change. SCM makes that change understandable, traceable, and reversible.';

export const metadata: Metadata = {
  title: `${title} | Rafique Syed`,
  description,
  alternates: { canonical: '/writing/software-configuration-management-still-matters' },
  openGraph: { title, description, type: 'article', images: [] },
  twitter: { card: 'summary', title, description, images: [] },
};

export default function ScmArticle() {
  return <main className="article-page">
    <header className="site-header article-nav">
      <a className="brand" href="/" aria-label="Rafique Syed, home"><span className="brand-mark">RS</span><span>Rafique Syed</span></a>
      <nav aria-label="Article navigation"><a href="/">Home</a><a href="/writing">All writing</a><a href="/#leadership">Leadership</a></nav>
      <a className="nav-cta" href="/writing">Writing <span aria-hidden="true">↗</span></a>
    </header>

    <article>
      <header className="article-hero">
        <p className="kicker">SCM + AI · FIELD NOTE 01</p>
        <h1>Software Configuration Management <em>Still Matters.</em></h1>
        <p className="article-dek">AI accelerates software change. SCM makes that change understandable, traceable, and reversible.</p>
        <div className="article-byline"><span>By Rafique Syed</span><span>Published September 2026</span><span>A field note from experience</span></div>
        <p className="article-margin-note">The boring question is often the useful one.</p>
      </header>

      <div className="article-visual" aria-label="A dependable path from AI-generated change to safe recovery">
        <div><small>01</small><strong>AI change</strong><span>Generate</span></div><b>→</b>
        <div><small>02</small><strong>Identify</strong><span>Understand</span></div><b>→</b>
        <div><small>03</small><strong>Control</strong><span>Review</span></div><b>→</b>
        <div><small>04</small><strong>Verify</strong><span>Trust</span></div><b>→</b>
        <div className="visual-accent"><small>05</small><strong>Recover</strong><span>Undo safely</span></div>
      </div>

      <div className="article-layout">
        <aside className="article-aside"><p>THE CORE QUESTION</p><strong>“If this breaks production, how do we get back to where we were?”</strong></aside>
        <div className="article-body">
          <p className="article-lead">A few weeks ago, I watched an AI coding agent rewrite forty files in about ninety seconds. The code was clean. The naming was sensible. Tests were included.</p>
          <p>Then someone asked a simple question: “If this breaks production, how do we return to where we were an hour ago?”</p>
          <p>Nobody answered immediately. That silence said more about engineering in the AI era than most product demonstrations do.</p>
          <p>AI can generate change at extraordinary speed. Engineering must also make that change understandable, controlled, reproducible, and safe to reverse. That is why Software Configuration Management still matters.</p>

          <h2>The discipline nobody demonstrates</h2>
          <p>AI tools get the highlight reel. We see assistants completing code, creating features, and changing entire repositories while we watch. Nobody demonstrates the discipline underneath that activity, quietly making it survivable.</p>
          <p>SCM identifies, tracks, and controls the components that make up a software system: code, configuration, dependencies, infrastructure, environments, build instructions, and release artifacts.</p>
          <p>When it works well, a team can answer two questions at any moment:</p>
          <ol><li>What exactly is running right now?</li><li>How do we return to a known-good state?</li></ol>

          <h2>More than Git</h2>
          <p>SCM is often reduced to “we use Git.” That is like describing air traffic control by saying, “We have radios.”</p>
          <p>Git records changes to source code. SCM asks more: What belongs to the system? Which version is running? How was it built? What changed? Was it approved and verified? Can we reproduce or reverse it?</p>

          <div className="article-callout"><span>PRINCIPLE</span><p>SCM is not simply about managing files. It is about maintaining a trustworthy understanding of a system as it changes.</p></div>

          <h2>The framework that shaped my thinking</h2>
          <p>When I began working in SCM, <a href="https://books.google.com/books?id=oogSmAEACAAJ" target="_blank" rel="noreferrer">Jessica Keyes’s work</a> strongly influenced how I understood the discipline. She presented configuration management as a framework for organizing the software lifecycle, covering identification, change control, status accounting, verification, and auditing.</p>
          <p>That distinction stayed with me. Early in my career, I saw a quick fix reach production without a clean rollback path. It appeared to be a coding failure, but the deeper problem was that we could not confidently reconstruct the previous state.</p>
          <p>It was a configuration-management failure wearing the clothes of a coding failure.</p>

          <h2>Why AI raises the stakes</h2>
          <p>An AI agent may change code, dependencies, configuration, tests, and deployment instructions in one session. Most changes may be useful. A few will not be.</p>
          <p>With an AI-generated change, intent may be incomplete or reconstructed after the fact. The reliable evidence is the engineering trail: the request, diff, review, tests, configuration, artifact, deployment, and previous trusted state.</p>
          <blockquote>Speed without memory is not agility. It is risk arriving faster.</blockquote>
          <p>AI increases the speed and volume of change. SCM provides the memory needed to manage it.</p>

          <h2>Five habits I still rely on</h2>
          <div className="practice-grid">
            <section><span>01</span><h3>Keep changes small</h3><p>Make generated work reviewable enough to understand and reverse.</p></section>
            <section><span>02</span><h3>Record intent</h3><p>Explain why a change exists, not only what the diff contains.</p></section>
            <section><span>03</span><h3>Define environments</h3><p>Version infrastructure and runtime configuration wherever practical.</p></section>
            <section><span>04</span><h3>Protect the trail</h3><p>Track dependencies, artifacts, approvals, tests, and deployments.</p></section>
            <section><span>05</span><h3>Plan recovery</h3><p>Know how to reverse a change before production needs the answer.</p></section>
          </div>

          <h2>The one thing worth remembering</h2>
          <p>The AI era will not reward only the engineers who can prompt fastest. It will reward the engineers who can explain what changed, why it changed, what is running, and how to undo it.</p>
          <p>That confidence does not come from the model. It comes from engineering discipline.</p>
          <p>So when an AI tool impresses you with how much it built in so little time, ask the boring question first:</p>
          <p className="article-ending">Can we undo it?</p>
          <div className="article-signoff"><span>Rafique</span><p>I write these field notes to connect what engineering has taught us with what AI is changing now.</p></div>
        </div>
      </div>
    </article>

    <section className="article-next"><p className="kicker light">NEXT FIELD NOTE</p><h2>DevOps did not replace SCM.<br/><em>It expanded it.</em></h2><a href="/writing">Follow the writing archive ↗</a></section>
  </main>;
}
