'use client';
import axios from 'axios';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { CiUser } from 'react-icons/ci';
import { CiHeart } from 'react-icons/ci';
import { BsChat } from 'react-icons/bs';
import CreateComment from './CreateComment';

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
  const [create_comment, setCreate_comment] = useState<boolean>(false);

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
          <div className='pl-5 w-full'>
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
            <div className='w-full flex px-3 py-5 items-center'>
              <CiHeart className='mr-5 text-[32px] cursor-pointer' />
              <div
                className=''
                onClick={() => setCreate_comment(!create_comment)}
              >
                <BsChat className='mr-5 text-2xl cursor-pointer' />
              </div>
            </div>
            {create_comment && (
              <CreateComment
                create_comment={create_comment}
                setCreate_comment={setCreate_comment}
                user_image={user.image1}
                post_id={user._id}
              />
            )}
          </div>
        </div>
      ))}
    </>
  );
}
