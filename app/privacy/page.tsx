import { LegalDocPage } from '@/components/LegalDoc';
import { PRIVACY_POLICY } from '@/lib/legal';

export const metadata = { title: 'Ambit Privacy Policy' };
export default function Privacy() {
  return <LegalDocPage doc={PRIVACY_POLICY} />;
}
