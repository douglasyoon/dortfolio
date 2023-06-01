import style from './Home.module.scss';
import SectionComponent from '@/components/common/SectionComponent';

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
