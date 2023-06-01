import style from './Footer.module.scss';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.inner}>
        <span>
          Copyrightⓒ<Link href='/'>Dortfolio</Link>. All rights reserved.
        </span>
      </div>
    </footer>
  );
}
