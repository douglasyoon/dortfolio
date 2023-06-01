import { globalCss } from '@/stitches.config';

export const globalStyles = globalCss({
  'blockquote, body, dd, dl, dt, fieldset, figure, h1, h2, h3, h4, h5, h6, hr, html, iframe, legend, li, ol, p, pre, textarea, ul':
    { margin: 0, padding: 0 },
  'h1, h2, h3, h4, h5, h6': { fontSize: '100%', fontWeight: 400 },
  ul: {
    listStyle: 'none',
  },
  'button, input, select': { margin: 0 },
  html: { boxSizing: 'border-box' },
  '*, :after, :before': { boxSizing: 'inherit' },
  'img, video': { height: 'auto', maxWidth: '100%' },
  iframe: { border: 0 },
  table: { borderCollapse: 'collapse', borderSpacing: 0 },
  'td, th': { padding: 0 },

  body: {
    fontFamily: 'Noto Sans KR',
    fontSize: '16px',
    fontWeight: 400,
  },

  a: {
    textDecoration: 'none',
    textUnderlineOffset: '2px',
    '&.active': {
      textDecoration: 'underline',
    },
  },

  '@media (hover: hover)': {
    'a:hover': { textDecoration: 'underline' },
  },

  'h1,h2,h3,h4,h5,h6,p,span,a': {
    color: '$gray9',
  },

  main: {
    width: '100%',
    maxWidth: '1240px',
    minHeight: 'calc(100vh - 52px - 76px)',
    margin: '0 auto',
    marginTop: '76px',
    '@xl': {
      minHeight: 'calc(100vh - 52px - 52px)',
      marginTop: '52px',
    },
  },

  '.hidden': {
    position: 'absolute',
    clip: 'rect(0 0 0 0)',
    width: '1px',
    height: '1px',
    margin: '-1px',
    overflow: 'hidden',
  },
});
