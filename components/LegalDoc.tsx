import type { LegalDoc as Doc } from '@/lib/legal';
import { LEGAL_CONTACT_EMAIL } from '@/lib/legal';

/// Renders a legal doc from the synced app source. Supports the same micro-
/// format the in-app LegalModal understands: "\n\n" paragraphs, "• " bullets,
/// **bold** runs — so hosted text is exactly what users agree to in-app.
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
            <a href={`mailto:${LEGAL_CONTACT_EMAIL}`} className="text-iris">
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
              <p className="mb-3.5 max-w-prose leading-relaxed">
                <Runs text={prose.map((l) => l.trim()).join(' ')} />
              </p>
            )}
            {bullets.length > 0 && (
              <ul className="mb-3.5 ml-5 list-disc space-y-2">
                {bullets.map((l, j) => (
                  <li key={j} className="leading-relaxed">
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

export function LegalDocPage({ doc }: { doc: Doc }) {
  return (
    <main>
      <h1 className="font-display text-4xl leading-tight">{doc.title}</h1>
      <p className="mt-2 mb-8 text-sm text-ink-muted">Updated {doc.updated}</p>
      <p className="mb-10 max-w-prose text-lg text-ink-muted leading-relaxed">
        <Runs text={doc.intro} />
      </p>
      {doc.sections.map((s) => (
        <section key={s.heading}>
          <h2 className="font-display mt-9 mb-2.5 text-2xl">{s.heading}</h2>
          <Body body={s.body} />
        </section>
      ))}
    </main>
  );
}
