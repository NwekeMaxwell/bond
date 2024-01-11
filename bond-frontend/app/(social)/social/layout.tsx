'use client';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Admin_Nav from './social-components/Nav';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const inter = Inter({ subsets: ['latin'] });

// export const metadata: Metadata = {
//   title: 'Bond',
//   description: 'A social media app tailored for you',
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  type UserData = {
    createdAt: string;
    email: string;
    firstname: string;
    lastname: string;
    updatedAt: string;
    username: string;
    _v: number;
    _id: string;
  };
  const [current_user, set_current_user] = useState<UserData | null>(null);
  const router = useRouter();

  useEffect(() => {
    function fetchdata_fromlocalstorage() {
      const data = localStorage.getItem('bond_user');
      if (data) {
        set_current_user(JSON.parse(data).user);
      } else {
        router.push('/sign-up');
      }
    }
    fetchdata_fromlocalstorage();
  }, []);
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
