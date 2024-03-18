import { ReactNode } from 'react';

import * as S from './styles';

type ExperienceCardDescriptionProps = {
  children: ReactNode | string;
};

export function ExperienceCardDescription({
  children,
}: ExperienceCardDescriptionProps) {
  return (
    <S.Container>
      <p>{children}</p>
    </S.Container>
  );
}
