import Link from 'next/link';
import { HTMLAttributeAnchorTarget } from 'react';
import style from './IconLink.module.scss';

export default function IconLink({
  href,
  icon,
  target = '_blank',
}: {
  href: string;
  icon: React.ReactElement;
  target?: HTMLAttributeAnchorTarget;
}) {
  return (
    <Link href={href} target={target} className={style.iconLink}>
      {icon}
    </Link>
  );
}
