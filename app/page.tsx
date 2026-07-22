import Link from 'next/link';
import { buttonVariants } from '@heroui/styles';
import { Card, CardContent } from '@heroui/react/card';

const PILLARS = [
  {
    label: 'Post',
    title: 'Put your project out there',
    body: 'One card: what you’re building, who you need. It lands in the decks of students nearby with the right skills.',
  },
  {
    label: 'Join',
    title: 'Swipe through what’s being built',
    body: 'Browse real projects from people on your campus. See a fit? Reach out with a note — not an application.',
  },
  {
    label: 'No pressure',
    title: 'Low stakes, on purpose',
    body: 'No recruiters, no résumé screens. If it’s not a fit, pass — people come back around as they grow.',
  },
];

export default function Home() {
  return (
    <main>
      {/* Hero — the app's VibeQuote treatment: an oversized iris quote glyph
          behind an italic serif line, like a vibe blurb about Ambit itself. */}
      <section className="relative mx-auto max-w-4xl px-6 pt-24 pb-20 sm:pt-32">
        <span
          aria-hidden
          className="font-display pointer-events-none absolute -top-2 left-2 select-none text-[11rem] leading-none text-iris/20 sm:text-[15rem]"
        >
          &ldquo;
        </span>
        <p className="astra-mono relative text-[12px] text-iris">
          A campus collaboration app
        </p>
        <h1 className="font-display relative mt-5 text-5xl leading-[1.08] [text-wrap:balance] sm:text-6xl">
          <em>Find your people</em> on campus.
        </h1>
        <p className="relative mt-6 max-w-xl text-lg leading-relaxed text-ink-muted">
          Ambit is where college students who build things find each other.
          Post the project you can&apos;t stop thinking about, or join someone
          else&apos;s &mdash; no recruiters, no pressure.
        </p>
        <div className="relative mt-10 flex flex-wrap gap-4">
          <Link
            className={`${buttonVariants({ variant: 'primary', size: 'lg' })} astra-mono rounded-astra bg-royal px-7 text-[12px] text-white shadow-[0_14px_30px_-14px_rgba(45,0,94,0.55)]`}
            href="/support"
          >
            Get support
          </Link>
          <Link
            className={`${buttonVariants({ variant: 'outline', size: 'lg' })} astra-mono rounded-astra border-hairline px-7 text-[12px] text-royal`}
            href="/privacy"
          >
            Read the privacy policy
          </Link>
        </div>
      </section>

      {/* What Ambit is — three quiet cards on a lilac wash. */}
      <section className="border-y border-hairline bg-lilac/60">
        <div className="mx-auto grid max-w-5xl gap-5 px-6 py-16 sm:grid-cols-3">
          {PILLARS.map((p) => (
            <Card
              key={p.label}
              className="rounded-astra border border-hairline bg-paper shadow-[0_18px_40px_-30px_rgba(45,0,94,0.35)]"
            >
              <CardContent className="p-6">
                <p className="astra-mono text-[11px] text-iris">{p.label}</p>
                <h2 className="font-display mt-3 text-2xl leading-snug">{p.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">{p.body}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Support strip */}
      <section className="mx-auto flex max-w-5xl flex-col items-start gap-6 px-6 py-16 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="font-display text-3xl">Stuck on something?</h2>
          <p className="mt-2 max-w-md text-ink-muted">
            We&apos;re students building this &mdash; we read everything and we
            reply, usually within a day.
          </p>
        </div>
        <Link
          className={`${buttonVariants({ variant: 'outline', size: 'lg' })} astra-mono rounded-astra border-royal/30 px-7 text-[12px] text-royal`}
          href="/support"
        >
          Visit support
        </Link>
      </section>
    </main>
  );
}
