'use client';
import Right_panel_dashboard from './social-components/Right-panel-dashboard';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function page() {
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
      console.log(data);
    }
    fetchdata_fromlocalstorage();
  }, []);

  // useEffect(() => {
  //   if (current_user === null) {
  //     router.push('/sign-up');
  //   }
  // }, []);
  return (
    <section className='w-full bg-primary md:col-span-5 max-h-[100vh] md:grid md:grid-rows-[(10vh_1fr)]'>
      {/* <section className='w-full bg-primary md:col-span-5 md:grid md:grid-rows-[(10vh_1fr)]'> */}
      <Right_panel_dashboard />
    </section>
  );
}
