import style from './Home.module.scss';
import SectionComponent from '@/components/common/SectionComponent';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dortfolio - 프론트엔드 개발자 윤동규',
  description: 'Front-End 개발자 윤동규의 포트폴리오입니다.',
  keywords: ['Front-End', 'Portfolio'],
  authors: [{ url: 'https://github.com/douglasyoon/', name: '윤동규' }],
  verification: {
    google: process.env.NEXT_APP_GOOGLE_SITE_VERIFICATION,
  },
  openGraph: {
    title: 'Dortfolio - 프론트엔드 개발자 윤동규',
    description: 'Front-End 개발자 윤동규의 포트폴리오입니다.',
    emails: 'douglasyoon9@gmail.com',
    url: 'https://dortfolio.vercel.app/',
  },
};

export default function HomePage() {
  return (
    <SectionComponent title='Home' isHiddenTitle={true}>
      <div className={style.homeContents}>
        <div className={style.box}>
          <p className={style.mainText}>
            안녕하세요.
            <br /> Front-End 개발자 윤동규입니다.
          </p>
        </div>
      </div>
    </SectionComponent>
  );
}
