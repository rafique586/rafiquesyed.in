import type { Metadata } from 'next';
import { DM_Sans, Instrument_Serif } from 'next/font/google';
import './globals.css';
import './article-overrides.css';

const sans = DM_Sans({ variable: '--font-sans', subsets: ['latin'] });
const serif = Instrument_Serif({ variable: '--font-serif', subsets: ['latin'], weight: '400' });

export const metadata: Metadata = {
  metadataBase: new URL('https://rafiquesyed.in'),
  title: 'Rafique Syed | Platform, Cloud & AI Engineering Leader',
  description: 'Rafique Syed writes about platform engineering, cloud reliability, DevOps, FinOps, and the practical use of AI in engineering operations.',
  openGraph: {
    title: 'Rafique Syed | Platform, Cloud & AI Engineering Leader',
    description: 'Notes from more than two decades working across software delivery, cloud platforms, reliability, cost, and engineering operations.',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Rafique Syed, Platform, Cloud & AI Engineering Leader' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rafique Syed | Platform, Cloud & AI Engineering Leader',
    description: 'Notes from more than two decades working across software delivery, cloud platforms, reliability, cost, and engineering operations.',
    images: ['/og.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${sans.variable} ${serif.variable}`}>{children}</body></html>;
}
