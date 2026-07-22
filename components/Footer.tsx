import Link from 'next/link';

const CONTACT = 'ambitaimail@gmail.com';

/// Deep-aubergine footer band — the site's one dark surface.
export function Footer() {
  return (
    <footer className="bg-aubergine text-paper/70">
      <div className="mx-auto max-w-5xl px-6 py-14">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="font-display text-3xl text-paper">ambit</p>
            <p className="mt-2 max-w-xs text-sm leading-relaxed">
              A low-stakes way for college students to find people to build
              with.
            </p>
          </div>
          <nav className="astra-mono flex flex-col gap-3 text-[12px]">
            <Link href="/support" className="transition-colors hover:text-paper">
              Support
            </Link>
            <Link href="/privacy" className="transition-colors hover:text-paper">
              Privacy Policy
            </Link>
            <Link href="/terms" className="transition-colors hover:text-paper">
              Terms of Use
            </Link>
            <a href={`mailto:${CONTACT}`} className="transition-colors hover:text-paper">
              {CONTACT}
            </a>
          </nav>
        </div>
        <p className="mt-12 border-t border-paper/10 pt-6 text-xs">
          © 2026 Ambit. Made by students, for students.
        </p>
      </div>
    </footer>
  );
}
