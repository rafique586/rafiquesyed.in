import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { generatedArticles } from '../../../lib/generated-articles';
import { markdownToHtml } from '../../../lib/markdown';

type ArticlePageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return generatedArticles.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = generatedArticles.find((entry) => entry.slug === slug);
  if (!article) return {};
  return {
    title: `${article.title} | Rafique Syed`,
    description: article.description,
    alternates: { canonical: `/writing/${article.slug}` },
    openGraph: { title: article.title, description: article.description, type: 'article', images: [] },
    twitter: { card: 'summary', title: article.title, description: article.description, images: [] },
  };
}

export default async function MarkdownArticle({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = generatedArticles.find((entry) => entry.slug === slug);
  if (!article) notFound();

  return <main className="article-page markdown-article">
    <header className="site-header article-nav">
      <Link className="brand" href="/" aria-label="Rafique Syed, home"><span className="brand-mark">RS</span><span>Rafique Syed</span></Link>
      <nav aria-label="Article navigation"><Link href="/">Home</Link><Link href="/writing">All writing</Link><Link href="/#leadership">Leadership</Link></nav>
      <Link className="nav-cta" href="/writing">Writing <span aria-hidden="true">↗</span></Link>
    </header>

    <article>
      <header className="article-hero">
        <p className="kicker">{article.topic} · {article.fieldNote}</p>
        <h1>{article.title}</h1>
        <p className="article-dek">{article.description}</p>
        <div className="article-byline"><span>By Rafique Syed</span><span>{article.displayDate}</span><span>A field note from experience</span></div>
        {article.marginNote && <p className="article-margin-note">{article.marginNote}</p>}
      </header>

      {article.visual === 'context-ledger' && <div className="context-ledger" aria-label="Context usage from one working session">
        <div className="ledger-heading"><p>ONE WORKING SESSION</p><strong>21% used</strong><span>203.2k of 967k tokens</span></div>
        <div className="ledger-chart"><div className="ledger-bar" aria-hidden="true"><i className="ledger-system"/><i className="ledger-tools"/><i className="ledger-skills"/><i className="ledger-messages"/><i className="ledger-free"/></div><div className="ledger-legend"><span><i className="key-system"/>System 0.9%</span><span><i className="key-tools"/>Tools 2.2%</span><span><i className="key-skills"/>Skills 0.3%</span><span><i className="key-messages"/>Messages 17.7%</span><span><i className="key-free"/>Remaining capacity</span></div></div>
      </div>}

      {article.visual === 'tool-context-map' && <div className="tool-context-map" aria-label="Context-management workflow across five AI coding tools">
        <div className="tool-map-heading"><p>ONE DISCIPLINE</p><strong>Memory → Focus → Boundary</strong><span>Applied across five tools</span></div>
        <div className="tool-map-grid">
          <section><span>CLAUDE CODE</span><b>CLAUDE.md</b><p>Files by path</p><em>/context · /compact</em></section>
          <section><span>CHATGPT / CODEX</span><b>Projects + AGENTS.md</b><p>Useful sources · repo files</p><em>One outcome per task</em></section>
          <section><span>CURSOR</span><b>.cursor/rules</b><p>@file · @folder · @code</p><em>Summarise or start fresh</em></section>
          <section><span>GITHUB COPILOT</span><b>copilot-instructions.md</b><p>Relevant files · prompt files</p><em>Record, then new chat</em></section>
          <section><span>GEMINI CODE ASSIST</span><b>Rules + repository docs</b><p>Context Drawer · @files</p><em>Remove context · new chat</em></section>
        </div>
      </div>}

      <div className="article-layout">
        <aside className="article-aside"><p>FIELD NOTE</p><strong>{article.description}</strong></aside>
        <div className="article-body markdown-body" dangerouslySetInnerHTML={{ __html: markdownToHtml(article.body) }}/>
      </div>
    </article>

    <section className="article-next"><p className="kicker light">KEEP READING</p><h2>Ideas from practice,<br/><em>shared while they are useful.</em></h2><div className="article-next-links"><Link href="/writing">All writing ↗</Link><a href="https://github.com/rafique586" target="_blank" rel="noreferrer">GitHub ↗</a></div></section>
  </main>;
}
