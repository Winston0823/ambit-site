import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <h1 className="font-display text-5xl leading-tight [text-wrap:balance]">
        Find your people on campus.
      </h1>
      <p className="mt-5 max-w-prose text-lg text-ink-muted">
        Ambit is where college students who build things find each other — post
        your project or join one. No recruiters, no pressure. Just students
        making cool things together.
      </p>
      <Link
        href="/support"
        className="mt-9 inline-block rounded-full bg-royal px-7 py-3.5 text-sm font-semibold tracking-wide text-white no-underline"
      >
        Get support
      </Link>
    </main>
  );
}
