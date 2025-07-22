import * as S from './styles';
import { ComponentPropsWithoutRef } from 'react';

export type ButtonVariants = 'default' | 'light' | 'dark' | 'outline';

type ButtonProps = ComponentPropsWithoutRef<'button'> & {
  variant?: ButtonVariants;
};

export function Button({ variant = 'default', ...rest }: ButtonProps) {
  return (
    <S.StyledButton
      $variant={variant}
      {...rest}
    />
  );
}
