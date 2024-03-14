import * as S from './styles';
import { ComponentPropsWithoutRef } from 'react';

type ButtonProps = ComponentPropsWithoutRef<'button'>;

export function Button({ children, ...rest }: ButtonProps) {
  return <S.StyledButton {...rest}>{children}</S.StyledButton>;
}
