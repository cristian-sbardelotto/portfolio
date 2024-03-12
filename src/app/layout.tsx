'use client';

import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';

import { GlobalStyle } from '@/styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';

import { useTheme } from '@/hooks/useTheme';
import { ChildrenComponentProps } from '@/types';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: ChildrenComponentProps) {
  const { theme, toggleTheme } = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <html lang='pt-br'>
        <GlobalStyle />

        <head>
          <title>My Portfolio</title>
        </head>

        <body
          className={inter.className}
          suppressHydrationWarning={true}
        >
          <Header
            toggleTheme={toggleTheme}
            theme={theme}
          />

          {children}

          <Footer />
        </body>
      </html>
    </ThemeProvider>
  );
}
