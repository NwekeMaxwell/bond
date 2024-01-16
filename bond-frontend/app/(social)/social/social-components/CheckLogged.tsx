'use client';
/*
Reusable component for validating users
*/
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { UserData } from '../Types/UserDataTypes';

export default function CheckLogged({ children }: any) {
  const [current_user, set_current_user] = useState<UserData | null>(null);
  const router = useRouter();
  useEffect(() => {
    function fetchdata_fromlocalstorage() {
      /*
        Fetches data from local storage to validate if the 
        user is signed in. If user is not found,
        sends the user to sign-up page
        */
      const data = localStorage.getItem('bond_user');
      if (data) {
        set_current_user(JSON.parse(data).user);
      } else {
        router.push('/sign-up');
      }
    }
    fetchdata_fromlocalstorage();
  }, []);
  return <>{current_user && children}</>;
}
