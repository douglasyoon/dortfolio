import SectionComponent from '@/components/common/SectionComponent';
import SkeletonProjectList from '@/components/Projects/SkeletonProjectList';

export default function ProjectsLoading() {
  return (
    <SectionComponent title='Projects'>
      <SkeletonProjectList />
      <SkeletonProjectList />
    </SectionComponent>
  );
}
