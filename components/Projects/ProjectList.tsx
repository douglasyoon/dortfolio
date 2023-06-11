import style from './ProjectList.module.scss';
import ProjectItem, { IProject } from './ProjectItem';

export default function ProjectList({
  title,
  isHiddenTitle = false,
  projectList,
}: {
  title: string;
  isHiddenTitle?: boolean;
  projectList: Array<IProject>;
}) {
  return (
    <article className={style.projectListBox}>
      {isHiddenTitle ? <h3 className='hidden'>{title}</h3> : <h3>{title}</h3>}
      <ul className={style.projectList}>
        {projectList.map((projectItem) => (
          <ProjectItem key={projectItem._id} projectInfo={projectItem} />
        ))}
      </ul>
    </article>
  );
}
