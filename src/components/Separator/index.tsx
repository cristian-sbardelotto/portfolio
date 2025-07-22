import * as S from './styles';

type SeparatorProps = {
  variant?: 'dot' | 'line';
};

export function Separator({ variant = 'dot' }: SeparatorProps) {
  return <S.Separator $variant={variant} />;
}
