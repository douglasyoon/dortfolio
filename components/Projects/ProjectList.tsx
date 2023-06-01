import { styled } from '@/stitches.config';
import ProjectItem, { IProjectItem } from './ProjectItem';

const ProjectListStyle = styled('section', {
  padding: '40px 0',
  borderBottom: '1px solid $gray3',
  '&:last-child': {
    borderBottom: 0,
  },
  '& h3': {
    fontSize: '1.5rem',
  },
  '& .project-list': {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gap: '40px 24px',
    width: '100%',
    marginTop: '16px',
  },
  '@lg': {
    '& .project-list': {
      gridTemplateColumns: '1fr 1fr',
    },
  },
  '@sm': {
    '& .project-list': {
      gridTemplateColumns: '1fr',
    },
  },
});

export default function ProjectList({
  title,
  isHiddenTitle = false,
  projectList,
}: {
  title: string;
  isHiddenTitle?: boolean;
  projectList: Array<IProjectItem>;
}) {
  return (
    <ProjectListStyle>
      {isHiddenTitle ? <h3 className='hidden'>{title}</h3> : <h3>{title}</h3>}
      <ul className='project-list'>
        {projectList.map((projectItem) => (
          <ProjectItem key={projectItem.id} projectInfo={projectItem} />
        ))}
      </ul>
    </ProjectListStyle>
  );
}
