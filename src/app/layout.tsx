import '@/styles/global.css';

import type { Metadata } from 'next';
import { Fira_Code } from 'next/font/google';

// import Footer from '@/components/Footer';
// import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import ProgressBarProvider from '@/components/ProgressBarProvider';
import Socials from '@/components/Socials';

export const metadata: Metadata = {
  icons: [
    {
      rel: 'apple-touch-icon',
      url: '/apple-touch-icon.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: '/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      url: '/favicon-16x16.png',
    },
    {
      rel: 'icon',
      url: '/favicon.ico',
    },
  ],
};

const firaCode = Fira_Code({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export default function RootLayout(props: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <html lang={props.params.locale}>
      <head>
        <title>Dexter - DeFAI Agent</title>
        <meta name="title" content="Dexter - DeFAI Agent" />
        <meta name="description" content="DeFi aint gonna DeFAI itself!" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://dexterai.xyz/" />
        <meta property="og:title" content="Dexter - DeFAI Agent" />
        <meta
          property="og:description"
          content="DeFi aint gonna DeFAI itself!"
        />
        <meta
          property="og:image"
          content="https://dexterai.xyz/assets/images/dexter.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://dexterai.xyz/" />
        <meta name="twitter:title" content="Dexter - DeFAI Agent" />
        <meta
          name="twitter:description"
          content="DeFi aint gonna DeFAI itself!"
        />
        <meta
          name="twitter:image"
          content="https://dexterai.xyz/assets/images/dexter.png"
        />
      </head>
      <body className={firaCode.className}>
        <ProgressBarProvider>
          <div className="relative w-full h-full flex flex-col items-center justify-center">
            <Header />
            <Socials />
            <div className="w-full flex flex-col items-center justify-center">
              {props.children}
            </div>
            <Footer />
          </div>
        </ProgressBarProvider>
      </body>
    </html>
  );
}

// Enable edge runtime but you are required to disable the `migrate` function in `src/libs/DB.ts`
// Unfortunately, this also means it will also disable the automatic migration of the database
// And, you will have to manually migrate it with `drizzle-kit push`
// export const runtime = 'edge';
