import SectionComponent from '@/components/common/SectionComponent';
import { styled } from '@/stitches.config';

const HomeStyle = styled('div', {
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  height: 'calc(100vh - 76px - 52px - 24px - 24px)',
  '& .contents': {
    '& .main-text': {
      width: '100%',
      marginBottom: '20px',
      fontSize: '2rem',
    },
  },
  '@xl': { height: 'calc(100vh - 52px - 52px - 24px - 24px)' },
  '@sm': {
    '& .contents': {
      '& .main-text': {
        fontSize: '1.4rem',
      },
    },
  },
});

export default function HomePage() {
  return (
    <SectionComponent title='Home' isHiddenTitle={true}>
      <HomeStyle>
        <div className='contents'>
          <p className='main-text'>
            안녕하세요.
            <br /> Front-End 개발자 윤동규입니다.
          </p>
        </div>
      </HomeStyle>
    </SectionComponent>
  );
}
