import SectionComponent from '@/components/common/SectionComponent';
import { IProjectItem } from '@/components/Projects/ProjectItem';
import ProjectList from '@/components/Projects/ProjectList';
import { Metadata } from 'next';
import * as TeamProject from '../api/projects/team/route';
import * as PersonalProject from '../api/projects/personal/route';

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

interface ProjectResponse {
  status: string;
  list: Array<IProjectItem>;
}

const getTeamProjects = async () => {
  const res = await TeamProject.GET();
  const { list }: ProjectResponse = await res.json();

  return list;
};

const getPersonalProjects = async () => {
  const res = await PersonalProject.GET();
  const { list }: ProjectResponse = await res.json();

  return list;
};

export default async function ProjectsPage() {
  const [teamProjects, personalProjects] = await Promise.all([
    getTeamProjects(),
    getPersonalProjects(),
  ]);
  return (
    <SectionComponent title='Projects'>
      <ProjectList title='Team Projects' projectList={teamProjects} />
      <ProjectList title='Personal Projects' projectList={personalProjects} />
    </SectionComponent>
  );
}
