import SectionComponent from '@/components/common/SectionComponent';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About - 프론트엔드 개발자 윤동규',
};

export default function AboutPage() {
  return (
    <SectionComponent title='About'>
      <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </SectionComponent>
  );
}
