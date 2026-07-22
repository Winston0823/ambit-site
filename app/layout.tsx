import type { Metadata } from 'next';
import { Playfair_Display, Geist, Space_Mono } from 'next/font/google';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import './globals.css';

const playfair = Playfair_Display({ subsets: ['latin'], style: ['normal', 'italic'], variable: '--font-playfair' });
const geist = Geist({ subsets: ['latin'], variable: '--font-geist' });
const spaceMono = Space_Mono({ subsets: ['latin'], weight: ['400', '700'], variable: '--font-space-mono' });

export const metadata: Metadata = {
  title: 'Ambit — find your people on campus',
  description:
    'Ambit is where college students who build things find each other — post your project or join one.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${geist.variable} ${spaceMono.variable}`}>
      <body className="flex min-h-screen flex-col font-sans antialiased">
        <Nav />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
