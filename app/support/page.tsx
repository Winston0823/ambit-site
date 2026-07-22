import { Card, CardContent } from '@heroui/react/card';
import { Chip } from '@heroui/react/chip';
import {
  Accordion,
  AccordionHeading,
  AccordionIndicator,
  AccordionItem,
  AccordionPanel,
  AccordionTrigger,
} from '@heroui/react/accordion';

export const metadata = { title: 'Ambit — Support' };

const CONTACT = 'ambitaimail@gmail.com';

const FAQ = [
  {
    q: 'How fast do you reply?',
    a: 'Usually within a day. Include your school email and what you were doing when the problem happened — it helps us fix things faster.',
  },
  {
    q: 'What happens after I report someone?',
    a: 'Reports are confidential. We review them within 24 hours and act on violations — including removing content or removing the user. Blocking takes effect immediately and hides you from each other.',
  },
  {
    q: 'What gets deleted with my account?',
    a: 'Everything: your profile, projects, portfolio, messages, matches, and uploaded files. Deletion is permanent and takes effect right away.',
  },
];

export default function Support() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
      <p className="astra-mono text-[12px] text-iris">Support</p>
      <h1 className="font-display mt-4 text-4xl leading-tight sm:text-5xl">
        We read everything.
      </h1>
      <p className="mt-4 max-w-xl text-lg leading-relaxed text-ink-muted">
        Stuck, confused, or found something broken? We&apos;re students
        building this &mdash; tell us and we&apos;ll fix it.
      </p>

      <div className="mt-12 grid gap-5 sm:grid-cols-3">
        <Card className="rounded-astra border border-hairline bg-white shadow-[0_18px_40px_-30px_rgba(45,0,94,0.35)]">
          <CardContent className="p-6">
            <Chip className="astra-mono rounded-astra bg-lilac text-[10px] text-royal">
              Contact
            </Chip>
            <h2 className="font-display mt-4 text-2xl">Email us</h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-muted">
              <a href={`mailto:${CONTACT}`} className="text-iris underline underline-offset-2">
                {CONTACT}
              </a>{' '}
              &mdash; for bugs, questions, feedback, or anything else.
            </p>
          </CardContent>
        </Card>

        <Card className="rounded-astra border border-hairline bg-white shadow-[0_18px_40px_-30px_rgba(45,0,94,0.35)]">
          <CardContent className="p-6">
            <Chip className="astra-mono rounded-astra bg-lilac text-[10px] text-royal">
              Safety
            </Chip>
            <h2 className="font-display mt-4 text-2xl">Report or block</h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-muted">
              Fastest in the app: tap ⋯ on any profile card or open a
              conversation&apos;s menu, then choose <strong>Report</strong> or{' '}
              <strong>Block</strong>. Or email us with REPORT in the subject.
            </p>
          </CardContent>
        </Card>

        <Card className="rounded-astra border border-hairline bg-white shadow-[0_18px_40px_-30px_rgba(45,0,94,0.35)]">
          <CardContent className="p-6">
            <Chip className="astra-mono rounded-astra bg-lilac text-[10px] text-royal">
              Account
            </Chip>
            <h2 className="font-display mt-4 text-2xl">Delete your account</h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-muted">
              In the app: Profile &rarr; Edit &rarr;{' '}
              <strong>Delete account</strong>. This permanently removes
              everything tied to you.
            </p>
          </CardContent>
        </Card>
      </div>

      <section className="mt-16 max-w-2xl">
        <h2 className="font-display text-3xl">Common questions</h2>
        <Accordion className="mt-6">
          {FAQ.map((item) => (
            <AccordionItem key={item.q} id={item.q}>
              <AccordionHeading>
                <AccordionTrigger className="font-sans text-base font-medium text-ink">
                  {item.q}
                  <AccordionIndicator />
                </AccordionTrigger>
              </AccordionHeading>
              <AccordionPanel>
                <p className="pb-4 text-sm leading-relaxed text-ink-muted">{item.a}</p>
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </main>
  );
}
