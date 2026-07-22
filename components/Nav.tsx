import Link from 'next/link';

/// Sticky glass navbar — ASTRA glassmorphism over warm paper, hairline base.
export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-hairline bg-paper/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <Link href="/" className="font-display text-2xl text-royal">
          ambit
        </Link>
        <nav className="astra-mono flex items-center gap-6 text-[12px]">
          <Link href="/support" className="text-ink-muted transition-colors hover:text-royal">
            Support
          </Link>
          <Link href="/privacy" className="text-ink-muted transition-colors hover:text-royal">
            Privacy
          </Link>
          <Link href="/terms" className="text-ink-muted transition-colors hover:text-royal">
            Terms
          </Link>
        </nav>
      </div>
    </header>
  );
}
