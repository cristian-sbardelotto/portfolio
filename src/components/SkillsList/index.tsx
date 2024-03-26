import Image from 'next/image';

import * as S from './styles';

type SkillsListProps = {
  image: string;
  name: string;
};

export function SkillsItem({ image, name }: SkillsListProps) {
  return (
    <S.Container>
      <Image
        src={image}
        alt={`${name} image`}
      />

      <span>{name}</span>
    </S.Container>
  );
}
