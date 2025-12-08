import { getAllProjects } from '@/lib/markdown';
import PortfolioClient from '@/components/PortfolioClient';

export default async function Home() {
  // Fetch all projects and work features
  const projects = await getAllProjects('projects');
  const workFeatures = await getAllProjects('work-experience/fold-features');

  return (
    <PortfolioClient
      projects={projects}
      workFeatures={workFeatures}
    />
  );
}
