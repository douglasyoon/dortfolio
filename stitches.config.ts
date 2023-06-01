import { createStitches } from '@stitches/react';

export const { styled, createTheme, globalCss, getCssText } = createStitches({
  theme: {
    '@font-face': {
      fontFamily: 'Noto Sans KR',
      src: 'url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap")',
    },
    colors: {
      solidwhite: '#FDFEFF',
      darkgrey: '#121212',
      darkcard: '#181818',
      gray1: '#F5F5F5',
      gray2: '#EEEEEE',
      gray3: '#E0E0E0',
      gray4: '#BDBDBD',
      gray5: '#9E9E9E',
      gray6: '#757575',
      gray7: '#616161',
      gray8: '#424242',
      gray9: '#212121',
    },
  },
  media: {
    xl: '(max-width: 1280px)',
    lg: '(max-width: 1024px)',
    md: '(max-width: 750px)',
    sm: '(max-width: 540px)',
  },
});
