import style from './ProjectList.module.scss';
import SkeletonProjectItem from './SkeletonProjectItem';

export default function SkeletonProjectList({
  isHiddenTitle = false,
}: {
  isHiddenTitle?: boolean;
}) {
  return (
    <article className={style.projectListBox}>
      {isHiddenTitle ? (
        <h3 className='hidden skeleton-list-item'></h3>
      ) : (
        <h3 className='skeleton-list-item'></h3>
      )}
      <ul className={style.projectList}>
        {new Array(3).fill('').map((_, i) => (
          <SkeletonProjectItem key={i} />
        ))}
      </ul>
    </article>
  );
}
