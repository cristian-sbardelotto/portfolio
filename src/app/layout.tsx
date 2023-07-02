'use client';

import { useState } from 'react';

import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';

import { GlobalStyle } from '@/styles/GlobalStyle';
import dark from '@/styles/themes/dark';
import light from '@/styles/themes/light';
import { DefaultTheme, ThemeProvider } from 'styled-components';

import { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';

const jakartaSans = Plus_Jakarta_Sans({ subsets: ['latin'] });

type LayoutProps = {
  children: React.ReactNode;
};

export const metadata: Metadata = {
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
