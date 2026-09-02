import type { Metadata } from 'next';
import { DM_Sans, Instrument_Serif } from 'next/font/google';
import './globals.css';

const sans = DM_Sans({ variable: '--font-sans', subsets: ['latin'] });
const serif = Instrument_Serif({ variable: '--font-serif', subsets: ['latin'], weight: '400' });

export const metadata: Metadata = {
  metadataBase: new URL('https://rafiquesyed.in'),
  title: 'Rafique Syed — Platform, Cloud & AI Engineering Leader',
  description: 'Technologist and engineering leader connecting platform engineering, cloud reliability, DevOps, FinOps, and AIOps into one operating discipline.',
  openGraph: {
    title: 'Rafique Syed — Platform, Cloud & AI Engineering Leader',
    description: 'Reliability, delivery, economics, and AI-driven operations—as one connected discipline.',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Rafique Syed — Platform, Cloud & AI Engineering Leader' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rafique Syed — Platform, Cloud & AI Engineering Leader',
    description: 'Reliability, delivery, economics, and AI-driven operations—as one connected discipline.',
    images: ['/og.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${sans.variable} ${serif.variable}`}>{children}</body></html>;
}
