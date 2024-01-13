'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { CiUser } from 'react-icons/ci';

export default function LargeScreen_panelDash() {
  type UserData = {
    user: {
      username: string;
      _id: string;
      firstname: string;
      lastname: string;
    };
  };

  type UsersPost = {
    _id: string;
    author: {
      username: string;
      _id: string;
    };
    content: string;
    parentpost: {
      _id: string;
    };
    image1: string;
  };
  const [current_user, set_current_user] = useState<UserData | null>(null);
  const [userPosts, setUserPosts] = useState<[UsersPost] | null>(null);

  useEffect(() => {
    async function fetchdata_fromlocalstorage() {
      const data = localStorage.getItem('bond_user');
      if (data) {
        const new_data = JSON.parse(data);

        set_current_user(new_data);

        const bk_url = `https://bond-hs2g.onrender.com/api/v1/posts`;
        try {
          await axios
            .get(bk_url, {
              headers: {
                Authorization: `Bearer ${new_data.token}`,
                'Content-Type': 'application/json',
              },
            })
            .then((response) => {
              setUserPosts(response.data.data);
            });
        } catch (err) {
          console.log(err);
        }
      }
    }
    fetchdata_fromlocalstorage();
  }, []);

  console.log(userPosts);

  return (
    <section
      className={`col-span-5 max-h-[100vh] hidden md:grid bg-[#E8E8E6] `}
    >
      <div className='w-full h-full overflow-y-scroll' id='transactions'>
        {/* Profile*/}
        <div className='w-full grid grid-cols-3 gap-x-5 p-5 pt-10'>
          <div className='col-span-1 flex justify-center'>
            <div className='rounded-full h-[200px] w-[200px] border border-black flex justify-center items-center'>
              <CiUser className='text-[100px] p-2' />
            </div>
          </div>
          <div className='col-span-1 pt-10'>
            {current_user && (
              <>
                <h1 className='font-semibold'>{`${current_user?.user.firstname.toUpperCase()} ${current_user?.user.lastname.toUpperCase()} `}</h1>
                <p className='mb-3 text-gray-500'>
                  {`@${current_user?.user.username}`}
                </p>
              </>
            )}
          </div>
          <div className='col-span-1'></div>
        </div>

        {/* User Posts */}
        <div className='w-full pt-10 px-5 h-full'>
          <hr className='w-full h-[2px] bg-black mb-10' />
          <div className='w-full h-full pb-20' id='transactions'>
            <div className='w-full grid grid-cols-3 gap-1 pb-10'>
              {userPosts?.map((posts, index) => (
                <>
                  {posts.author._id === current_user?.user._id && (
                    <div className='aspect-square overflow-hidden' key={index}>
                      <Image
                        src={posts.image1}
                        alt='user profile picture'
                        className='h-full object-cover w-full'
                        width={100}
                        height={100}
                      />
                    </div>
                  )}
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
