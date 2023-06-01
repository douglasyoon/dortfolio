'use client';

import { gitHubLink } from '@/lib/constant';
import { styled } from '@/stitches.config';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import GithubIcon from '../common/icons/GithubIcon';

export interface INav {
  id: string;
  name: string;
  path: string;
}

const navList: Array<INav> = [
  { id: 'menu1', name: 'Home', path: '/' },
  { id: 'menu2', name: 'About', path: '/about' },
  { id: 'menu3', name: 'Projects', path: '/projects' },
];

const HeaderStyle = styled('header', {
  position: 'fixed',
  left: 0,
  top: 0,
  width: '100%',
  height: '76px',
  zIndex: 1000,
  '& .inner': {
    '& h1': {
      fontSize: '1rem',
    },
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    maxWidth: '1240px',
    height: '52px',
    margin: '12px auto',
    padding: '0 20px',
    borderRadius: '16px',
    background: 'rgba($color: $solidwhite, $alpha: 1)',
    backdropFilter: 'blur(12px)',
    boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
    '& nav': {
      '& ul': {
        display: 'flex',
        gap: '52px',
      },
    },
    '& .sub-nav': {
      display: 'flex',
      gap: '52px',
      '& li': {
        '& a': {
          display: 'block',
          width: '32px',
          height: '32px',
        },
      },
    },
  },
  '@xl': {
    position: 'fixed',
    left: 0,
    top: 0,
    width: '100%',
    height: '52px',
    background: 'rgba($color: $solidwhite, $alpha: 1)',
    backdropFilter: 'blur(12px)',
    boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
    zIndex: 1000,
    '& .inner': {
      '& h1': {
        fontSize: '1rem',
      },
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
      maxWidth: '1240px',
      height: '100%',
      margin: '0 auto',
      padding: '0 20px',
      background: 'transparent',
      backdropFilter: 'none',
      boxShadow: 'none',
      '& nav': {
        '& ul': {
          display: 'flex',
          gap: '52px',
        },
      },
      '& .sub-nav': {
        display: 'flex',
        gap: '52px',
        '& li': {
          '& a': {
            display: 'block',
            width: '32px',
            height: '32px',
          },
        },
      },
    },
  },
});

export default function Header() {
  const pathname = usePathname().split('/')[1];
  return (
    <HeaderStyle>
      <div className='inner'>
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
        <ul className='sub-nav'>
          <li>
            <Link href='https://github.com/douglasyoon' target='_blank'>
              <GithubIcon />
            </Link>
          </li>
        </ul>
      </div>
    </HeaderStyle>
  );
}
