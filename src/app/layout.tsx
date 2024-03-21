'use client';

import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';

import { GlobalStyle } from '@/styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';

import theme from '@/styles/theme';
import { ChildrenComponentProps } from '@/types';
import { Inter } from 'next/font/google';
import StyledComponentsRegistry from '@/lib/registry';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: ChildrenComponentProps) {
  return (
    <ThemeProvider theme={theme}>
      <StyledComponentsRegistry>
        <GlobalStyle />

        <html lang='en'>
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
      </StyledComponentsRegistry>
    </ThemeProvider>
  );
}
