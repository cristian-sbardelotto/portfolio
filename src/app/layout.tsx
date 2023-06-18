'use client';

import { useState } from 'react';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

import { GlobalStyle } from '@/styles/GlobalStyle';
import light from '@/styles/themes/light';
import dark from '@/styles/themes/dark';
import { ThemeProvider, DefaultTheme } from 'styled-components';

import { Plus_Jakarta_Sans } from 'next/font/google';

const jakartaSans = Plus_Jakarta_Sans({ subsets: ['latin'] });

type LayoutProps = {
  children: React.ReactNode;
};

export const metadata = {
  title: 'My Portfolio',
  description:
    'Website to show my abilities and my best projects in Web Development',
};

export default function RootLayout({ children }: LayoutProps) {
  const [theme, setTheme] = useState<DefaultTheme>(dark);

  function toggleTheme() {
    setTheme(theme.title === 'light' ? dark : light);
  }

  return (
    <ThemeProvider theme={theme}>
      <html lang='pt-br'>
        <GlobalStyle />

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
