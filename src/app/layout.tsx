import './globals.css';
import type { Metadata } from 'next';
import { Inter, Pangolin } from 'next/font/google';

const inter = Inter({
  variable: '--inter-font',
  subsets: ['latin'],
});

const pangolin = Pangolin({
  variable: '--pangolin-font',
  weight: '400',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
