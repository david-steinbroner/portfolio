import PortfolioClient from '@/components/PortfolioClient';
import { getSelectedWork } from '@/lib/markdown';

export default async function Home() {
  const entries = await getSelectedWork();
  return <PortfolioClient entries={entries} />;
}
