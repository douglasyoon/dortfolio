import style from './ProjectItem.module.scss';

export default function SkeletonProjectItem() {
  return (
    <li className={style.projectItem}>
      <div className={`${style.imageFrame} skeleton-list-item`}></div>
      <div className={style.projectInfo}>
        <p className={`${style.projectTitle} skeleton-list-item`}></p>
        <ul className={style.projectDescList}>
          <li>
            <ul className={style.projectUrlList}>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </li>
          <li>
            <span className={`skeleton-list-item`}></span>
          </li>
        </ul>
      </div>
    </li>
  );
}
