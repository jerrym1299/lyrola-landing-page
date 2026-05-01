import type { Metadata } from 'next';
import { JetBrains_Mono, Spectral } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap',
});

const spectral = Spectral({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-spectral',
  display: 'swap',
});

const neueMontreal = localFont({
  src: [
    { path: './fonts/NeueMontreal-Regular.otf', weight: '400', style: 'normal' },
    { path: './fonts/NeueMontreal-Italic.otf', weight: '400', style: 'italic' },
    { path: './fonts/NeueMontreal-Medium.otf', weight: '500', style: 'normal' },
    { path: './fonts/NeueMontreal-Bold.otf', weight: '700', style: 'normal' },
  ],
  variable: '--font-sans',
  display: 'swap',
});

const ftBureau = localFont({
  src: [
    { path: './fonts/FTBureau-Light.otf', weight: '300', style: 'normal' },
    { path: './fonts/FTBureau-LightItalic.otf', weight: '300', style: 'italic' },
    { path: './fonts/FTBureau-Regular.otf', weight: '400', style: 'normal' },
    { path: './fonts/FTBureau-RegularItalic.otf', weight: '400', style: 'italic' },
  ],
  variable: '--font-serif',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Lyrola — The AI notepad for back-to-back meetings',
  description:
    "Lyrola sits quietly beside every meeting — listening, transcribing, and turning your messy notes into something you'll be proud to share.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${neueMontreal.variable} ${ftBureau.variable} ${spectral.variable} ${jetbrainsMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
