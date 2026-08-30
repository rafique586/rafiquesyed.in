import type { Metadata } from 'next';
import { DM_Sans, Instrument_Serif } from 'next/font/google';
import './globals.css';

const sans = DM_Sans({ variable: '--font-sans', subsets: ['latin'] });
const serif = Instrument_Serif({ variable: '--font-serif', subsets: ['latin'], weight: '400' });

export const metadata: Metadata = {
  metadataBase: new URL('https://rafiquesyed.in'),
  title: 'Rafique Syed — AI-first Reliability & Platform Engineering Leader',
  description: 'Rafique Syed is a senior SRE, platform engineering, and cloud reliability leader helping organizations move faster with calm, AI-enabled operations.',
  openGraph: {
    title: 'Rafique Syed — AI-first Reliability & Platform Engineering Leader',
    description: 'Helping engineering organizations move faster without losing reliability.',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Rafique Syed — AI-first Reliability & Platform Engineering Leader' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rafique Syed — AI-first Reliability & Platform Engineering Leader',
    description: 'Helping engineering organizations move faster without losing reliability.',
    images: ['/og.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${sans.variable} ${serif.variable}`}>{children}</body></html>;
}
