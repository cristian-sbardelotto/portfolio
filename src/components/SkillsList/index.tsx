import Image from 'next/image';

type SkillsListProps = {
  image: string;
  name: string;
};

export function SkillsList({ image, name }: SkillsListProps) {
  return (
    <ul>
      <li>
        <Image
          src={image}
          alt={`${name} image`}
          height={50}
        />

        <span>{name}</span>
      </li>
    </ul>
  );
}
