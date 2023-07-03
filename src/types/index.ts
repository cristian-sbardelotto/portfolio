import { StaticImageData } from 'next/image';
import { ReactNode } from 'react';

export type AreaProps = 'frontend' | 'backend' | 'complementary';

export type ProjectProps = {
  title: string;
  image: string | StaticImageData;
  description: string;
  technologies: string[];
  githubUrl: string;
  deployUrl?: string;
};

export type ChildrenComponentProps = {
  children: ReactNode;
};
