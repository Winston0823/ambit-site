import type { LegalDoc as Doc } from '@/lib/legal';
import { LEGAL_CONTACT_EMAIL } from '@/lib/legal';

/// Renders a legal doc from the synced app source. Supports the same micro-
/// format the in-app LegalModal understands: "\n\n" paragraphs, "• " bullets,
/// **bold** runs — so hosted text is exactly what users agree to in-app.
/// Desktop gets a sticky "On this page" section nav so it reads like docs,
/// not a PDF scroll.

const slug = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

function Runs({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g).filter(Boolean);
  return (
    <>
      {parts.map((p, i) =>
        p.startsWith('**') && p.endsWith('**') ? (
          <strong key={i} className="text-ink">{p.slice(2, -2)}</strong>
        ) : (
          <Frag key={i} text={p} />
        ),
      )}
    </>
  );
}

function Frag({ text }: { text: string }) {
  const parts = text.split(LEGAL_CONTACT_EMAIL);
  return (
    <>
      {parts.map((p, i) => (
        <span key={i}>
          {i > 0 && (
            <a href={`mailto:${LEGAL_CONTACT_EMAIL}`} className="text-iris underline underline-offset-2">
              {LEGAL_CONTACT_EMAIL}
            </a>
          )}
          {p}
        </span>
      ))}
    </>
  );
}

function Body({ body }: { body: string }) {
  return (
    <>
      {body.split('\n\n').map((para, i) => {
        const lines = para.split('\n').filter((l) => l.trim());
        const bullets = lines.filter((l) => l.trim().startsWith('• '));
        const prose = lines.filter((l) => !l.trim().startsWith('• '));
        return (
          <div key={i}>
            {prose.length > 0 && (
              <p className="mb-3.5 max-w-prose leading-relaxed text-ink/85">
                <Runs text={prose.map((l) => l.trim()).join(' ')} />
              </p>
            )}
            {bullets.length > 0 && (
              <ul className="mb-3.5 ml-5 list-disc space-y-2">
                {bullets.map((l, j) => (
                  <li key={j} className="leading-relaxed text-ink/85">
                    <Runs text={l.trim().slice(2)} />
                  </li>
                ))}
              </ul>
            )}
          </div>
        );
      })}
    </>
  );
}

export function LegalDocPage({ doc, eyebrow }: { doc: Doc; eyebrow: string }) {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
      <p className="astra-mono text-[12px] text-iris">{eyebrow}</p>
      <h1 className="font-display mt-4 text-4xl leading-tight sm:text-5xl">{doc.title}</h1>
      <p className="mt-3 text-sm text-ink-muted">Updated {doc.updated}</p>

      <div className="mt-10 gap-12 lg:grid lg:grid-cols-[220px_1fr]">
        <aside className="hidden lg:block">
          <nav className="sticky top-24 border-l border-hairline pl-5">
            <p className="astra-mono mb-4 text-[10px] text-ink-muted">On this page</p>
            <ul className="space-y-2.5">
              {doc.sections.map((s) => (
                <li key={s.heading}>
                  <a
                    href={`#${slug(s.heading)}`}
                    className="block text-[13px] leading-snug text-ink-muted transition-colors hover:text-royal"
                  >
                    {s.heading}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        <div>
          <p className="mb-10 max-w-prose text-lg leading-relaxed text-ink-muted">
            <Runs text={doc.intro} />
          </p>
          {doc.sections.map((s) => (
            <section key={s.heading} id={slug(s.heading)} className="scroll-mt-24">
              <h2 className="font-display mt-10 mb-3 text-2xl">{s.heading}</h2>
              <Body body={s.body} />
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
