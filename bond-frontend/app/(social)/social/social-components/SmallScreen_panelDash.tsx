'use client';
import Image from 'next/image';
import User_pic from '../Social-assets/result.png';
import User_pic1 from '../Social-assets/pic1.jpg';
import User_pic2 from '../Social-assets/pic2.jpg';
import User_pic3 from '../Social-assets/pic3.jpg';
import User_pic4 from '../Social-assets/pic4.jpg';
import User_pic5 from '../Social-assets/pic5.jpg';
import User_pic6 from '../Social-assets/pic6.jpg';
import { useEffect, useState } from 'react';

export default function SmallScreen_panelDash() {
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

  useEffect(() => {
    function fetchdata_fromlocalstorage() {
      const data = localStorage.getItem('bond_user');
      if (data) {
        set_current_user(JSON.parse(data).user);
      }
    }
    fetchdata_fromlocalstorage();
  }, []);
  console.log(current_user);
  return (
    <>
      <section className='w-full max-h-[100vh] md:hidden '>
        {/* Recent Activities */}
        <div className='w-full px-5 mt-5 flex justify-between items-center'>
          <div>
            <h1>Bold</h1>
          </div>
        </div>
        {/* Profile */}
        <div className='w-full grid grid-cols-1 gap-y-5 p-5'>
          {/* Profile*/}
          <div className='col-span-1 flex justify-center'>
            <div className='rounded-full w-[200px] overflow-hidden border-2 border-black'>
              <Image src={User_pic} alt='user profile picture' />
            </div>
          </div>
          <div className='col-span-1'>
            <p className='mb-3 text-gray-500'>
              {current_user && `@${current_user.username}`}
            </p>
            <p>
              Software Engineer | Tech Enthusiast 🚀
              <span className='block'>
                Exploring the world one line of code at a time. 💻✨
              </span>
              <span className='block'>🔧 Skills & Tools</span>
              <span className='block'>Languages: Python, JavaScript, Java</span>
              <span className='block'>Frameworks: React, Django, Node.js</span>
              <span className='block'>Tools: Git, Docker, AWS</span>
            </p>
          </div>
          {/* </div> */}
        </div>

        {/* User post */}
        <div className='w-full pt-h-full overflow-hidden'>
          <hr className='w-full h-[2px] bg-black mb-10' />
          <div className='w-full h-full pb-20' id='transactions'>
            <div className='w-full grid grid-cols-3 gap-1 pb-10'>
              <div className='aspect-square overflow-hidden'>
                <Image
                  src={User_pic6}
                  alt='user profile picture'
                  className='h-full object-cover'
                />
              </div>
              <div className='aspect-square overflow-hidden'>
                <Image
                  src={User_pic1}
                  alt='user profile picture'
                  className='h-full object-cover'
                />
              </div>
              <div className='aspect-square overflow-hidden'>
                <Image
                  src={User_pic2}
                  alt='user profile picture'
                  className='h-full object-cover'
                />
              </div>
              <div className='aspect-square overflow-hidden'>
                <Image
                  src={User_pic3}
                  alt='user profile picture'
                  className='h-full object-cover'
                />
              </div>
              <div className='aspect-square overflow-hidden'>
                <Image
                  src={User_pic4}
                  alt='user profile picture'
                  className='h-full object-cover'
                />
              </div>
              <div className='aspect-square overflow-hidden'>
                <Image
                  src={User_pic5}
                  alt='user profile picture'
                  className='h-full object-cover'
                />
              </div>
              <div className='aspect-square overflow-hidden'>
                <Image
                  src={User_pic6}
                  alt='user profile picture'
                  className='h-full object-cover'
                />
              </div>
              <div className='aspect-square overflow-hidden'>
                <Image
                  src={User_pic1}
                  alt='user profile picture'
                  className='h-full object-cover'
                />
              </div>
              <div className='aspect-square overflow-hidden'>
                <Image
                  src={User_pic2}
                  alt='user profile picture'
                  className='h-full object-cover'
                />
              </div>
              <div className='aspect-square overflow-hidden'>
                <Image
                  src={User_pic3}
                  alt='user profile picture'
                  className='h-full object-cover'
                />
              </div>
              <div className='aspect-square overflow-hidden'>
                <Image
                  src={User_pic4}
                  alt='user profile picture'
                  className='h-full object-cover'
                />
              </div>
              <div className='aspect-square overflow-hidden'>
                <Image
                  src={User_pic5}
                  alt='user profile picture'
                  className='h-full object-cover'
                />
              </div>
            </div>
          </div>
          {/* <div
            className='w-full h-full overflow-y-scroll pb-20'
            id='transactions'
          ></div> */}
        </div>
      </section>
    </>
  );
}
