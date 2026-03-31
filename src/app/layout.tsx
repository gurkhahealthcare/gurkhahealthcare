import React from 'react';
import type { Metadata } from 'next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import '../styles/globals.css';
import { ThemeProvider } from 'next-themes';
import { Analytics } from '@vercel/analytics/next';

export const metadata: Metadata = {
  title: {
    default: 'Gurkha Health  | Supported Living in Reading and Berkshire',
    template: '%s | Gurkha Health',
  },
  description:
    'Gurkha Health Ltd provides high-quality supported living and independent living care in Reading, Berkshire and surrounding areas, specialising in learning disabilities, autism, ADHD and complex needs.',
  keywords: [
    'Gurkha Health s Ltd',
    'supported living in Reading',
    'private supported living',
    'supported household',
    'independent living',
    'prompting houses',
    'self care support',
    'special needs kids support',
    'learning disability support',
    'autism support',
    'autism spectrum support',
    'Down syndrome support',
    'ADHD support',
    'supported living Berkshire',
    'supported living Slough',
    'supported living Oxfordshire',
    'supported living Buckinghamshire',
    'supported living Greater London',
    'home care Reading',
    'domiciliary care Reading',
    'supported living services UK',
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Gurkha Health Services Ltd | Supported Living & Independent Living Care',
    description:
      'Supported living and independent living services in Reading, Berkshire and surrounding areas for adults and children with learning disabilities, autism, ADHD and complex needs.',
    type: 'website',
    siteName: 'Gurkha Health Services Ltd',
    locale: 'en_GB',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gurkha Health Ltd | Supported Living & Independent Living Care',
    description:
      'Supported living and independent living services in Reading, Berkshire and surrounding areas for adults and children with learning disabilities, autism, ADHD and complex needs.',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/favicon.ico',
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="w-full min-h-screen flex flex-col bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-50 overflow-x-hidden transition-colors duration-300">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem storageKey="theme">
          <ScrollToTop />
          <Header />
          <main className="flex-grow w-full">{children}</main>
          <Footer />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}