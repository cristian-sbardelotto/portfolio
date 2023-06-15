import Image from 'next/image';

import * as S from './styles';

type SkillsListProps = {
  image: string;
  name: string;
};

export function SkillsList({ image, name }: SkillsListProps) {
  return (
    <S.ListItem>
      <Image
        src={image}
        alt={`${name} image`}
      />

      <span>{name}</span>
    </S.ListItem>
  );
}
