export const metadata = { title: 'Ambit — Support' };

const CONTACT = 'ambitaimail@gmail.com';

function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="my-4 rounded-2xl border border-hairline bg-white px-6 py-5 shadow-[0_14px_34px_-26px_rgba(45,0,94,0.4)]">
      <h2 className="font-display mb-2 text-2xl">{title}</h2>
      {children}
    </div>
  );
}

export default function Support() {
  return (
    <main>
      <h1 className="font-display text-4xl leading-tight">Support</h1>
      <p className="mt-4 mb-8 max-w-prose text-lg text-ink-muted">
        Stuck, confused, or found something broken? We&apos;re students building
        this — we read everything and we reply.
      </p>

      <Card title="Contact us">
        <p className="mb-3 leading-relaxed">
          Email{' '}
          <a href={`mailto:${CONTACT}`} className="text-iris">
            {CONTACT}
          </a>{' '}
          and we&apos;ll get back to you, usually within a day.
        </p>
        <p className="leading-relaxed">
          Include your school email and what you were doing when the problem
          happened — it helps us fix things faster.
        </p>
      </Card>

      <Card title="Report a user or content">
        <p className="mb-3 leading-relaxed">
          The fastest way is in the app: tap ⋯ on any profile card, or open a
          conversation&apos;s menu, and choose <strong>Report</strong> or{' '}
          <strong>Block</strong>. Reports are confidential and reviewed within
          24 hours.
        </p>
        <p className="leading-relaxed">
          You can also email us at the address above with the word REPORT in the
          subject line.
        </p>
      </Card>

      <Card title="Delete your account">
        <p className="leading-relaxed">
          In the app: Profile → Edit → <strong>Delete account</strong>. This
          permanently removes your profile, projects, portfolio, messages, and
          matches.
        </p>
      </Card>
    </main>
  );
}
