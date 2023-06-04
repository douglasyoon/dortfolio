'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import GithubIcon from '../common/icons/GithubIcon';
import style from './Header.module.scss';

export interface INav {
  id: string;
  name: string;
  path: string;
}

const navList: Array<INav> = [
  { id: 'menu2', name: 'About', path: '/about' },
  { id: 'menu3', name: 'Projects', path: '/projects' },
];

export default function Header() {
  const pathname = usePathname().split('/')[1];
  return (
    <header className={style.header}>
      <div className={style.inner}>
        <h1>
          <Link href='/'>Dortfolio</Link>
        </h1>
        <nav>
          <ul>
            {navList.map((navItem) => (
              <li key={navItem.id}>
                {navItem.path === `/${pathname}` ? (
                  <Link href={navItem.path} className='active'>
                    {navItem.name}
                  </Link>
                ) : (
                  <Link href={navItem.path}>{navItem.name}</Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
        <ul className={style.subNav}>
          <li>
            <Link href='https://github.com/douglasyoon' target='_blank'>
              <GithubIcon size={32} />
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
