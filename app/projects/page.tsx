import SectionComponent from '@/components/common/SectionComponent';
import { IProjectItem } from '@/components/Projects/ProjectItem';
import ProjectList from '@/components/Projects/ProjectList';
import { Metadata } from 'next';

interface IProjectList {
  id: string;
  title: string;
  list: Array<IProjectItem>;
}

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

const projectListResponse: Array<IProjectList> = [
  {
    id: 'tprojectList',
    title: 'Team Project',
    list: [
      {
        id: 'tproject1',
        title: '성적 관리 시스템',
        coverImg:
          'https://images.unsplash.com/photo-1606761568499-6d2451b23c66?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=3600',
        notionUrl:
          'https://star-mat-4a8.notion.site/d955bbae21364b0fae40977d30de45be?pvs=4',
        gitHubUrl: 'https://github.com/HumanJSEngine/project_LMS',
        techStack: [
          'React.js',
          'JavaScript',
          'TypeScript',
          'Recoil',
          'Axios',
          'React-Query',
          'MUI',
          'Emotion',
          'Vite',
        ],
      },
      {
        id: 'tproject2',
        title: '문화비 - 가계부',
        coverImg:
          'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F994c9dbf-1c4f-4729-9860-cdad42294944%2F%25E1%2584%2589%25E1%2585%25B3%25E1%2584%258F%25E1%2585%25B3%25E1%2584%2585%25E1%2585%25B5%25E1%2586%25AB%25E1%2584%2589%25E1%2585%25A3%25E1%2586%25BA_2023-05-30_%25E1%2584%258B%25E1%2585%25A9%25E1%2584%2592%25E1%2585%25AE_8.54.40.png?table=block&id=5da69716-2770-4fbd-94f5-1db6864d57ef&spaceId=fdd0554f-db86-437e-b923-8efa6e1df059&width=2000&userId=92072895-8c1a-4ef1-bd1b-8d383525733c&cache=v2',
        notionUrl:
          'https://star-mat-4a8.notion.site/5da6971627704fbd94f51db6864d57ef?pvs=4',
        gitHubUrl: 'https://github.com/HumanJSEngine/project_culturebudget',
        youtubeUrl: 'https://youtu.be/If4hrmFJT6o',
        techStack: [
          'React.js',
          'JavaScript',
          'TypeScript',
          'Redux-Toolkit',
          'Axios',
          'styled-components',
          'Vite',
        ],
      },
      {
        id: 'tproject3',
        title: '버거왕 - 배달 서비스',
        coverImg:
          'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F91f24d79-f413-46dc-be15-16b49a5aaf00%2F%25E1%2584%2589%25E1%2585%25B3%25E1%2584%258F%25E1%2585%25B3%25E1%2584%2585%25E1%2585%25B5%25E1%2586%25AB%25E1%2584%2589%25E1%2585%25A3%25E1%2586%25BA_2023-05-30_%25E1%2584%258B%25E1%2585%25A9%25E1%2584%2592%25E1%2585%25AE_8.53.38.png?table=block&id=342bf94e-a0b7-48b5-9669-75d4a14f5398&spaceId=fdd0554f-db86-437e-b923-8efa6e1df059&width=2000&userId=92072895-8c1a-4ef1-bd1b-8d383525733c&cache=v2',
        notionUrl:
          'https://star-mat-4a8.notion.site/342bf94ea0b748b5966975d4a14f5398?pvs=4',
        gitHubUrl: 'https://github.com/goldjade/burgerwang',
        youtubeUrl: 'https://youtu.be/Lhi_UAp9xWI',
        techStack: [
          'React.js',
          'JavaScript',
          'Redux-Toolkit',
          'Axios',
          'Tailwind CSS',
        ],
      },
      {
        id: 'tproject4',
        title: '빙그레 메인 페이지 퍼블리싱',
        coverImg:
          'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F618f09b6-0423-429c-a655-0eed2322d141%2F%25E1%2584%2589%25E1%2585%25B3%25E1%2584%258F%25E1%2585%25B3%25E1%2584%2585%25E1%2585%25B5%25E1%2586%25AB%25E1%2584%2589%25E1%2585%25A3%25E1%2586%25BA_2023-05-25_%25E1%2584%258B%25E1%2585%25A9%25E1%2584%2592%25E1%2585%25AE_5.56.08.png?table=block&id=d30712e7-a7c2-4d20-98c2-4df611fb14e2&spaceId=fdd0554f-db86-437e-b923-8efa6e1df059&width=2000&userId=92072895-8c1a-4ef1-bd1b-8d383525733c&cache=v2',
        websiteUrl: 'https://douglasyoon.github.io/binggrae/',
        notionUrl:
          'https://star-mat-4a8.notion.site/d30712e7a7c24d2098c24df611fb14e2?pvs=4',
        gitHubUrl: 'https://github.com/douglasyoon/binggrae',
        techStack: ['HTML', 'SCSS', 'JavaScript'],
      },
    ],
  },
  {
    id: 'pprojectList',
    title: 'Personal Project',
    list: [
      {
        id: 'pproject1',
        title: 'Dortfolio',
        coverImg:
          'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F64ebbb02-4500-48c2-ad8b-40fbe8330c48%2F%25E1%2584%2589%25E1%2585%25B3%25E1%2584%258F%25E1%2585%25B3%25E1%2584%2585%25E1%2585%25B5%25E1%2586%25AB%25E1%2584%2589%25E1%2585%25A3%25E1%2586%25BA_2023-05-30_%25E1%2584%258B%25E1%2585%25A9%25E1%2584%2592%25E1%2585%25AE_11.48.27.png?table=block&id=f214d5ba-1885-4596-90cb-fb699bba008f&spaceId=fdd0554f-db86-437e-b923-8efa6e1df059&width=2000&userId=92072895-8c1a-4ef1-bd1b-8d383525733c&cache=v2',
        websiteUrl: 'https://dortfolio.vercel.app/',
        notionUrl:
          'https://star-mat-4a8.notion.site/Dortfolio-f214d5ba1885459690cbfb699bba008f?pvs=4',
        gitHubUrl: 'https://github.com/douglasyoon/dortfolio',
        techStack: ['Next.js', 'JavaScript', 'TypeScript', 'SCSS'],
      },
    ],
  },
];

export default function ProjectsPage() {
  return (
    <SectionComponent title='Projects'>
      {projectListResponse.map((projectList) => (
        <ProjectList
          key={projectList.id}
          title={projectList.title}
          projectList={projectList.list}
        />
      ))}
    </SectionComponent>
  );
}
