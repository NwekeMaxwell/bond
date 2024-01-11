'use client';
import axios from 'axios';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { CiUser } from 'react-icons/ci';
import User_pic1 from '../Social-assets/pic1.jpg';

export default function UsersData() {
  type UsersData = {
    author: { _id: string; username: string };
    content: string;
    createdAt: string;
    image1: string;
    image2?: string;
    image3?: string;
    image4?: string;
    updatedAt: string;
    _v: number;
    _id: string;
  };
  const [users_data, setUsers_data] = useState<[UsersData] | null>(null);

  useEffect(() => {
    function fetchdata_fromlocalstorage() {
      const data = localStorage.getItem('bond_user');
      if (data) {
        return JSON.parse(data).token;
      }
    }
    async function getUsersPosts(current_user_token: string) {
      const bk_url = 'https://bond-hs2g.onrender.com/api/v1/posts';
      try {
        const response = await axios
          .get(bk_url, {
            headers: {
              Authorization: `Bearer ${current_user_token}`,
              'Content-Type': 'application/json',
            },
          })
          .then((response) => {
            // console.log('it ran');

            // console.log(response.data.data);
            setUsers_data(response.data.data);
          });
      } catch (err) {
        console.log(err);
      }
    }
    getUsersPosts(fetchdata_fromlocalstorage());
  }, []);

  function userDataModel() {
    if (users_data !== null) {
      return;
    }
  }
  return (
    <>
      <h1>Users data</h1>
      {users_data?.map((user, index) => (
        <div className='w-full flex p-5 border-t border-t-black' key={index}>
          <div className='rounded-full h-[40px] w-[40px] border border-black flex justify-center items-center'>
            <CiUser className='text-5xl p-2' />
          </div>
          <div className='pl-5'>
            <div className='flex items-center'>
              <h4 className='font-bold mr-1'>Sixtus Onyedibe</h4>
              <p className='text-sm'>@{user.author.username}</p>
            </div>
            <div className='w-full mt-2'>
              <p className='text-sm'>{user.content}</p>
            </div>
            <div className='mt-5 w-full rounded-2xl overflow-hidden'>
              <div className='w-full h-full aspect-square overflow-hidden'>
                <Image
                  src={user.image1}
                  alt='user profile picture'
                  className='h-full object-cover w-full'
                  width={500}
                  height={500}
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
