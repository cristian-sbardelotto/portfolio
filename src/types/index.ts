import { StaticImageData } from 'next/image';

export type AreaProps = 'frontend' | 'backend' | 'complementary';

export type ProjectProps = {
  title: string;
  image: string | StaticImageData;
  description: string;
  technologies: string[];
  githubUrl: string;
  deployUrl?: string;
};
