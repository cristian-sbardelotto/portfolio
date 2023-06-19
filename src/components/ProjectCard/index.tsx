import Image from 'next/image';

import * as S from './styles';

type ProjectCardProps = {
  title: string;
  image: string;
  description: string;
  technologies: string[];
};

export function ProjectCard({
  title,
  image,
  description,
  technologies,
}: ProjectCardProps) {
  return (
    <S.Container>
      <Image
        src={image}
        alt={`${title} Project Card`}
        height={100}
      />

      <h4>{title}</h4>

      <p>{description}</p>

      {technologies.map((technology, index) => (
        <span key={index}>{technology}</span>
      ))}
    </S.Container>
  );
}
