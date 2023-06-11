import SectionComponent from '@/components/common/SectionComponent';
import { IProject } from '@/components/Projects/ProjectItem';
import ProjectList from '@/components/Projects/ProjectList';
import { API_URL } from '@/lib/constant';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects - 프론트엔드 개발자 윤동규',
  description: 'Front-End 개발자 윤동규가 진행해온 프로젝트입니다.',
  keywords: ['Front-End', 'Portfolio'],
  authors: [{ url: 'https://github.com/douglasyoon/', name: '윤동규' }],
  openGraph: {
    title: 'Projects - 프론트엔드 개발자 윤동규',
    description: 'Front-End 개발자 윤동규가 진행해온 프로젝트입니다.',
    emails: 'douglasyoon9@gmail.com',
    url: 'https://dortfolio.vercel.app/projects',
  },
};

const getProjects = async (type: 'team' | 'personal') => {
  const res = await fetch(`${API_URL}/api/projects/${type}`);
  const { list }: Response<IProject> = await res.json();

  return list;
};

export default async function ProjectsPage() {
  const [teamProjects, personalProjects] = await Promise.all([
    getProjects('team'),
    getProjects('personal'),
  ]);
  return (
    <SectionComponent title='Projects'>
      <ProjectList title='Team Projects' projectList={teamProjects} />
      <ProjectList title='Personal Projects' projectList={personalProjects} />
    </SectionComponent>
  );
}
