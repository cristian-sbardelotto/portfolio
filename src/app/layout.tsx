'use client';

import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';

import { GlobalStyle } from '@/styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';

import { useTheme } from '@/hooks/useTheme';
import { ChildrenComponentProps } from '@/types';
import { Plus_Jakarta_Sans } from 'next/font/google';

const jakartaSans = Plus_Jakarta_Sans({ subsets: ['latin'] });

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
          className={jakartaSans.className}
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
