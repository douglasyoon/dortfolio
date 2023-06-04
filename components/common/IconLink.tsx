import Link from 'next/link';
import style from './IconLink.module.scss';

export default function IconLink({
  href,
  icon,
}: {
  href: string;
  icon: React.ReactElement;
}) {
  return (
    <Link href={href} target='_blank' className={style.iconLink}>
      {icon}
    </Link>
  );
}
