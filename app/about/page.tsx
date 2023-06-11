import style from './About.module.scss';
import SectionComponent from '@/components/common/SectionComponent';
import { Metadata } from 'next';
import IconLink from '@/components/common/IconLink';
import GithubIcon from '@/components/common/icons/GithubIcon';

interface ISkill {
  id: string;
  name: string;
  icon: string;
}

interface ISkillList {
  id: string;
  name: string;
  list: Array<ISkill>;
}

interface IContact {
  id: string;
  kind: string;
  info: string;
}

export const metadata: Metadata = {
  title: 'About - 프론트엔드 개발자 윤동규',
  description: 'Front-End 개발자 윤동규를 소개합니다.',
  keywords: ['Front-End', 'Portfolio'],
  authors: [{ url: 'https://github.com/douglasyoon/', name: '윤동규' }],
  verification: {
    google: process.env.NEXT_APP_GOOGLE_SITE_VERIFICATION,
  },
  openGraph: {
    title: 'About - 프론트엔드 개발자 윤동규',
    description: 'Front-End 개발자 윤동규를 소개합니다.',
    emails: 'douglasyoon9@gmail.com',
    url: 'https://dortfolio.vercel.app/about',
  },
};

const skillList: Array<ISkillList> = [
  {
    id: 'skilllist01',
    name: 'Front-End',
    list: [
      {
        id: 'skill01',
        name: 'HTML',
        icon: 'https://www.svgrepo.com/show/452228/html-5.svg',
      },
      {
        id: 'skill02',
        name: 'CSS',
        icon: 'https://www.svgrepo.com/show/452185/css-3.svg',
      },
      {
        id: 'skill03',
        name: 'SCSS',
        icon: 'https://www.svgrepo.com/show/374061/sass.svg',
      },
      {
        id: 'skill04',
        name: 'JavaScript',
        icon: 'https://www.svgrepo.com/show/349419/javascript.svg',
      },
      {
        id: 'skill05',
        name: 'TypeScript',
        icon: 'https://www.svgrepo.com/show/349540/typescript.svg',
      },
      {
        id: 'skill06',
        name: 'React.js',
        icon: 'https://www.svgrepo.com/show/452092/react.svg',
      },
      {
        id: 'skill07',
        name: 'Redux-Toolkit',
        icon: 'https://www.svgrepo.com/show/452093/redux.svg',
      },
    ],
  },
  {
    id: 'skilllist02',
    name: 'Design',
    list: [
      {
        id: 'skill01',
        name: 'Figma',
        icon: 'https://www.svgrepo.com/show/452202/figma.svg',
      },
      {
        id: 'skill02',
        name: 'Adobe Photoshop',
        icon: 'https://www.svgrepo.com/show/452149/adobe-photoshop.svg',
      },
    ],
  },
];

const contactList: Array<IContact> = [
  {
    id: 'contact01',
    kind: 'Mail',
    info: 'douglasyoon9@gmail.com',
  },
];

export default function AboutPage() {
  return (
    <SectionComponent title='About'>
      <div className={style.aboutBox}>
        <article>
          <h3 className='hidden'>About me</h3>
          <p>
            안녕하세요. Front-End 개발자 윤동규입니다.
            <br />
            <br />
            UI/UX에 관심이 있어 UI/UX Design과 Web Publishing를 시작했고
            <br />
            화면 구현이 재미있어 욕심이 생겨 Front-End 개발을 시작하게
            되었습니다.
            <br />
            <br />
            사용자가 있는 웹, 앱 커뮤니티 플랫폼에 관심이 많으며
            <br />
            사용자가 좋아하고 편하게 사용할 수 있는 서비스를 만들고 싶습니다.
          </p>
        </article>
        <article className={style.aboutSkills}>
          <h3>Skills</h3>
          {skillList.map((skills) => (
            <div className={style.aboutSkillList} key={skills.id}>
              <h4>{skills.name}</h4>
              <ul className={style.aboutSkills}>
                {skills.list.map((skill) => (
                  <li key={skill.id}>
                    <img src={skill.icon} alt={skill.name} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </article>
        <article>
          <h3>Links</h3>
          <ul>
            <li>
              <IconLink
                href={'https://github.com/douglasyoon'}
                icon={<GithubIcon color='#171515' />}
              />
            </li>
          </ul>
        </article>
        <article>
          <h3>Contact</h3>
          <ul>
            {contactList.map((contact) => (
              <li key={contact.id}>
                {contact.kind} : {contact.info}
              </li>
            ))}
          </ul>
        </article>
      </div>
    </SectionComponent>
  );
}
