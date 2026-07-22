import { LegalDocPage } from '@/components/LegalDoc';
import { TERMS_OF_USE } from '@/lib/legal';

export const metadata = { title: 'Ambit Terms of Use' };
export default function Terms() {
  return <LegalDocPage doc={TERMS_OF_USE} eyebrow="Legal" />;
}
