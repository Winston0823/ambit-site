import type { Metadata } from 'next';
import { Playfair_Display, Geist } from 'next/font/google';
import Link from 'next/link';
import './globals.css';

const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });
const geist = Geist({ subsets: ['latin'], variable: '--font-geist' });

export const metadata: Metadata = {
  title: 'Ambit — find your people on campus',
  description:
    'Ambit is where college students who build things find each other — post your project or join one.',
};

const CONTACT = 'ambitaimail@gmail.com';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${geist.variable}`}>
      <body className="font-sans antialiased">
        <div className="mx-auto max-w-2xl px-6 pt-16 pb-24">
          <nav className="mb-14 flex flex-wrap items-baseline gap-5">
            <Link href="/" className="font-display text-3xl text-royal no-underline">
              ambit
            </Link>
            <Link href="/support" className="text-sm text-ink-muted hover:text-iris">
              Support
            </Link>
            <Link href="/privacy" className="text-sm text-ink-muted hover:text-iris">
              Privacy
            </Link>
            <Link href="/terms" className="text-sm text-ink-muted hover:text-iris">
              Terms
            </Link>
          </nav>
          {children}
          <footer className="mt-20 border-t border-hairline pt-6 text-sm text-ink-muted">
            © 2026 Ambit ·{' '}
            <a href={`mailto:${CONTACT}`} className="text-iris">
              {CONTACT}
            </a>
          </footer>
        </div>
      </body>
    </html>
  );
}
