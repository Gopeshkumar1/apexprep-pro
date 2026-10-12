import type { Metadata, Viewport } from 'next';
import './globals.css';
import { ToastProvider } from '@/components/ui/Toast';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: '⚡ ApexPrep Pro | Master Salesforce. Crack Interviews.',
  description:
    'A Free, Full-Stack Salesforce Career Platform. 1,500+ Interview Questions • 7 Free Courses • 2,244 Practice MCQs. Deep architectural explanations, code snippets, and one-liner answers. Built by a senior Salesforce developer for developers.',
  keywords: [
    'Salesforce developer interview questions',
    'Apex triggers scenario questions',
    'LWC interview questions 2026',
    'Salesforce Agentforce interview prep',
    'Salesforce Data Cloud guide',
    'Salesforce Admin practice test',
    'Deloitte Salesforce interview questions',
    'Accenture Salesforce developer questions',
  ],
  authors: [{ name: 'ApexPrep Pro' }],
  openGraph: {
    title: '⚡ ApexPrep Pro | Master Salesforce. Crack Interviews.',
    description:
      '1,500+ Interview Questions • 7 Free Courses • 2,244 Practice MCQs. Topic-wise Q&A with deep explanations, code snippets, and one-liner answers.',
    url: 'https://apexprep.in',
    siteName: 'ApexPrep Pro',
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased bg-surface-canvas text-slate-900 min-h-screen flex flex-col selection:bg-brand-500 selection:text-white">
        <ToastProvider>{children}</ToastProvider>
      </body>
    </html>
  );
}
