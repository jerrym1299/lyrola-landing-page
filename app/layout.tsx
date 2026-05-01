import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap',
});

const quadrant = localFont({
  src: [
    { path: './fonts/quadrant.otf', weight: '400', style: 'normal' },
    { path: './fonts/quadrant-italic.otf', weight: '400', style: 'italic' },
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
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} ${quadrant.variable}`}>
      <body>{children}</body>
    </html>
  );
}
