import SectionComponent from '@/components/common/SectionComponent';
import { Metadata } from 'next';
import IconLink from '@/components/common/IconLink';
import GithubIcon from '@/components/common/icons/GithubIcon';
import { API_URL } from '@/lib/constant';
import SkillsList, { ISkill } from '@/components/About/SkillsList';
import AboutArticle from '@/components/About/AboutArticle';

export const metadata: Metadata = {
  title: 'About - 프론트엔드 개발자 윤동규',
  description: 'Front-End 개발자 윤동규를 소개합니다.',
  keywords: ['Front-End', 'Portfolio'],
  authors: [{ url: 'https://github.com/douglasyoon/', name: '윤동규' }],
  openGraph: {
    title: 'About - 프론트엔드 개발자 윤동규',
    description: 'Front-End 개발자 윤동규를 소개합니다.',
    emails: 'douglasyoon9@gmail.com',
    url: 'https://dortfolio.vercel.app/about',
  },
};

interface IContact {
  _id: string;
  type: string;
  info: string;
}

const getSkills = async (type: 'Front-End' | 'Design') => {
  const res = await fetch(`${API_URL}/api/about/skills?type=${type}`);
  const { list }: Response<ISkill> = await res.json();

  return list;
};

const getContacts = async () => {
  const res = await fetch(`${API_URL}/api/about/contact`);
  const { list }: Response<IContact> = await res.json();

  return list;
};

export default async function AboutPage() {
  const [feSkills, designSkills, contacts] = await Promise.all([
    getSkills('Front-End'),
    getSkills('Design'),
    getContacts(),
  ]);
  return (
    <SectionComponent title='About'>
      <AboutArticle title='About me' isHiddenTitle>
        <p>
          안녕하세요. Front-End 개발자 윤동규입니다.
          <br />
          <br />
          UI/UX에 관심이 있어 UI/UX Design과 Web Publishing를 시작했고
          <br />
          화면 구현이 재미있어 욕심이 생겨 Front-End 개발을 시작하게 되었습니다.
          <br />
          <br />
          사용자가 있는 웹, 앱 커뮤니티 플랫폼에 관심이 많으며
          <br />
          사용자가 좋아하고 편하게 사용할 수 있는 서비스를 만들고 싶습니다.
        </p>
      </AboutArticle>
      <AboutArticle title='Skills'>
        <SkillsList title='Front-End' skillsList={feSkills} />
        <SkillsList title='Design' skillsList={designSkills} />
      </AboutArticle>
      <AboutArticle title='Links'>
        <ul>
          <li>
            <IconLink
              href={'https://github.com/douglasyoon'}
              icon={<GithubIcon color='#171515' />}
            />
          </li>
        </ul>
      </AboutArticle>
      <AboutArticle title='Contacts'>
        <ul>
          {contacts.map((contact) => (
            <li key={contact._id}>
              {contact.type} : {contact.info}
            </li>
          ))}
        </ul>
      </AboutArticle>
    </SectionComponent>
  );
}

export const dynamic = 'force-dynamic';
