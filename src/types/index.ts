import { StaticImageData } from 'next/image';
import { ReactNode } from 'react';

export type ProjectProps = {
  id: string;
  title: string;
  image: string | StaticImageData;
  description: string;
  technologies: string[];
  url: string;
};

export type ChildrenComponentProps = {
  children: ReactNode;
};

export type RelatedProject = {
  id: string;
  name: string;
  url: string;
};

