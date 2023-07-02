import { Metadata } from 'next';
import { ReactNode } from 'react';

type ContactLayoutProps = {
  children: ReactNode;
};

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Section to see how to contact me',
};

export default function ContactLayout({ children }: ContactLayoutProps) {
  return children;
}
