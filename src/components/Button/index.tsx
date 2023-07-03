import { ChildrenComponentProps } from '@/types';
import * as S from './styles';

export function Button({ children }: ChildrenComponentProps) {
  return <S.StyledButton>{children}</S.StyledButton>;
}
