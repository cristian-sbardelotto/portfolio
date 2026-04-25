import { Analytics } from '@vercel/analytics/next';
import { Inter } from 'next/font/google';
import StyledComponentsRegistry from '@/lib/registry';
import { ChildrenComponentProps } from '@/types';
import ClientLayout from './client-layout';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Cristian Sbardelotto',
  description:
    'Cristian Sbardelotto’s portfolio with software development projects, web applications, and programming skills.',
};

export default function RootLayout({ children }: ChildrenComponentProps) {
  return (
    <html lang='en'>
      <body
        className={inter.className}
        suppressHydrationWarning={true}
      >
        <StyledComponentsRegistry>
          <ClientLayout>
            <Analytics />

            {children}
          </ClientLayout>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
