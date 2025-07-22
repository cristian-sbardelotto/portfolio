import { Inter } from 'next/font/google';
import StyledComponentsRegistry from '@/lib/registry';
import { ChildrenComponentProps } from '@/types';
import ClientLayout from './client-layout';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: "Sbardelotto's portfolio",
  description: 'Portfolio website showcasing my projects and skills',
};

export default function RootLayout({ children }: ChildrenComponentProps) {
  return (
    <html lang='en'>
      <body
        className={inter.className}
        suppressHydrationWarning={true}
      >
        <StyledComponentsRegistry>
          <ClientLayout>{children}</ClientLayout>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
