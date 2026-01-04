import Script from 'next/script';
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
          <ClientLayout>
            <Script
              src='https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX'
              strategy='afterInteractive'
            />
            <Script
              id='google-analytics'
              strategy='afterInteractive'
            >
              {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'G-LDYBNX11X8', {
                          debug_mode: true
                        });
                      `}
            </Script>

            {children}
          </ClientLayout>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
