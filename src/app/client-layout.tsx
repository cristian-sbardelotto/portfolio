'use client';

import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { GlobalStyle } from '@/styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import theme from '@/styles/theme';
import { ChildrenComponentProps } from '@/types';
import * as S from './styles';

export default function ClientLayout({ children }: ChildrenComponentProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <Header />

      <S.Container>
        <S.Content>{children}</S.Content>

        <Footer />
      </S.Container>
    </ThemeProvider>
  );
}
