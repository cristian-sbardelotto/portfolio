import { ReactNode } from 'react';

import * as S from './styles';

type ExperienceCardRootProps = {
  children: ReactNode;
};

export function ExperienceCardRoot({ children }: ExperienceCardRootProps) {
  return <S.Container>{children}</S.Container>;
}
