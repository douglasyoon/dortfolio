import style from './AboutArticle.module.scss';

export default function AboutArticle({
  children,
  title,
  isHiddenTitle = false,
}: {
  children: React.ReactNode;
  title: string;
  isHiddenTitle?: boolean;
}) {
  return (
    <article className={style.aboutArticle}>
      {isHiddenTitle ? <h3 className='hidden'>{title}</h3> : <h3>{title}</h3>}
      {children}
    </article>
  );
}
