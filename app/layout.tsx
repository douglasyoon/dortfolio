import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import { getCssText } from '@/stitches.config';
import { globalStyles } from '@/styles/global-styles';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dortfolio - 프론트엔드 개발자 윤동규',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  globalStyles();
  return (
    <html lang='ko' suppressHydrationWarning={true}>
      <head>
        <style
          id='stitches'
          dangerouslySetInnerHTML={{ __html: getCssText() }}
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
