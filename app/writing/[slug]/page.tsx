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

      <div className="article-layout">
        <aside className="article-aside"><p>FIELD NOTE</p><strong>{article.description}</strong></aside>
        <div className="article-body markdown-body" dangerouslySetInnerHTML={{ __html: markdownToHtml(article.body) }}/>
      </div>
    </article>

    <section className="article-next"><p className="kicker light">KEEP READING</p><h2>Ideas from practice,<br/><em>shared while they are useful.</em></h2><div className="article-next-links"><Link href="/writing">All writing ↗</Link><a href="https://github.com/rafique586" target="_blank" rel="noreferrer">GitHub ↗</a></div></section>
  </main>;
}
