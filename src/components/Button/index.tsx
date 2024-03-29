import * as S from './styles';
import { ComponentPropsWithoutRef } from 'react';

type ButtonProps = ComponentPropsWithoutRef<'button'> & {
  variant: 'default' | 'light' | 'dark';
};

export function Button({ children, variant, ...rest }: ButtonProps) {
  return (
    <S.StyledButton
      $variant={variant}
      {...rest}
    >
      {children}
    </S.StyledButton>
  );
}
