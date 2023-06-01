import { styled } from '@/stitches.config';

const SectionStyle = styled('section', {
  width: '100%',
  padding: '24px 20px',
  '& h2': {
    fontSize: '2rem',
  },
  '& .subTitle': {
    display: 'block',
    marginTop: '8px',
  },
});

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
    <SectionStyle>
      {isHiddenTitle ? <h2 className='hidden'>{title}</h2> : <h2>{title}</h2>}
      {subTitle && <span className='subTitle'>{subTitle}</span>}
      {children}
    </SectionStyle>
  );
}
