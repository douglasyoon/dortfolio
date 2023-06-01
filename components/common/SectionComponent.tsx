import style from './Section.module.scss';

export default function SectionComponent({
  children,
  title,
  isHiddenTitle = false,
  subTitle,
  isHiddenLine = true,
}: {
  children: React.ReactNode;
  title: string;
  isHiddenTitle?: boolean;
  subTitle?: string;
  isHiddenLine?: boolean;
}) {
  return (
    <section className={style.section}>
      {isHiddenTitle ? <h2 className='hidden'>{title}</h2> : <h2>{title}</h2>}
      {subTitle && <span className={style.subTitle}>{subTitle}</span>}
      {children}
    </section>
  );
}
