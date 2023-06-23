import { ReactNode } from 'react';

type ContactLayoutProps = {
  children: ReactNode;
};

export const metadata = {
  title: 'Contact',
  description: 'Section to see how to contact me',
};

export default function ContactLayout({ children }: ContactLayoutProps) {
  return children;
}
