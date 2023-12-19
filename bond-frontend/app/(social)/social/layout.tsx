import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Admin_Nav from './social-components/Nav';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Bond',
  description: 'A social media app tailored for you',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className='w-full bg-[#E8E8E6]'>
      <div className='w-full grid grid-cols-1 md:grid-cols-6 md:max-h-[100vh] md:overflow-hidden'>
        {/* <div className='w-full grid grid-cols-1 md:grid-cols-6'> */}
        <Admin_Nav />
        {children}
      </div>
    </main>
  );
}
