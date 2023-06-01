import { styled } from '@/stitches.config';
import Link from 'next/link';

const FooterStyle = styled('footer', {
  width: '100%',
  height: '52px',
  '& .inner': {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    maxWidth: '1240px',
    height: '100%',
    margin: '0 auto',
    padding: '0 20px',
    '& span': {
      fontSize: '0.75rem',
    },
  },
});

export default function Footer() {
  return (
    <FooterStyle>
      <div className='inner'>
        <span>
          Copyrightⓒ<Link href='/'>Dortfolio</Link>. All rights reserved.
        </span>
      </div>
    </FooterStyle>
  );
}
