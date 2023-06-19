import Image, { StaticImageData } from 'next/image';

import * as S from './styles';

type ProjectCardProps = {
  title: string;
  image: string | StaticImageData;
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
      />

      <section>
        <h4>{title}</h4>

        <p>{description}</p>

        <div>
          {technologies.map((technology, index) => (
            <span key={index}>{technology}</span>
          ))}
        </div>
      </section>
    </S.Container>
  );
}
