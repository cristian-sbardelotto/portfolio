'use client';

import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';

import { GlobalStyle } from '@/styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';

import theme from '@/styles/theme';
import { ChildrenComponentProps } from '@/types';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: ChildrenComponentProps) {
  return (
    <ThemeProvider theme={theme}>
      <html lang='en'>
        <GlobalStyle />

        <head>
          <title>My Portfolio</title>
        </head>

        <body
          className={inter.className}
          suppressHydrationWarning={true}
        >
          <Header />

          {children}

          <Footer />
        </body>
      </html>
    </ThemeProvider>
  );
}
