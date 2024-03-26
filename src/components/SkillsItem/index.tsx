import Image from 'next/image';

import * as S from './styles';

type SkillsItemProps = {
  image: string;
  name: string;
};

export function SkillsItem({ image, name }: SkillsItemProps) {
  return (
    <S.Container>
      <Image
        src={image}
        alt={`${name} image`}
      />

      {/* <span>{name}</span> */}
    </S.Container>
  );
}
