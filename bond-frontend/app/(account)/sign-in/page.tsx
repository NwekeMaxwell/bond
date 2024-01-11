'use client';
import join_us from '../../../public/Account-assets/join-us.jpg';
import Image from 'next/image';
import Link from 'next/link';
import { FaGoogle } from 'react-icons/fa';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function page() {
  const router = useRouter();
  const [user_form_data, set_user_form_data] = useState({
    username: '',
    password: '',
  });

  const bk_url = 'https://bond-hs2g.onrender.com/api/v1/auth/login';

  const handleUserLogin = async (event: any) => {
    // confirming the data
    console.log(user_form_data);
    event.preventDefault();
    async function postUser() {
      try {
        const response = await axios
          .post(bk_url, user_form_data)
          .then((response) => {
            console.log(response.data);
            if (response.status == 200) {
              localStorage.setItem('bond_user', JSON.stringify(response.data));
              router.push('/social');
            }

            return response;
          })
          .catch((error) => console.log(error));
      } catch (error) {
        console.log(error);
      }
    }
    postUser();
  };
  return (
    <main className='w-full bg-[#D7D5D3]'>
      <section className='w-full grid grid-cols-1 md:grid-cols-2 md:h-[100vh] overflow-hidden relative text-sm'>
        <div className='h-[100vh]'>
          <Image src={join_us} alt='join us' className='object-cover' />
        </div>
        <div className='w-full h-full py-20 px-10 overflow-y-auto'>
          <Link href='/'>
            <h1 className='font-extrabold text-5xl text-[#0F71F2] mb-5'>
              Bond
            </h1>
          </Link>
          <p className='font-medium text-2xl mb-10'>Sign in</p>
          <form>
            {/* Username */}
            <div className='flex flex-col mb-5 mt-5'>
              <label htmlFor='username' className='text-gray-400 mb-2'>
                USERNAME
              </label>
              <input
                type='text'
                id='username'
                className='bg-[#D7D5D3] border-b border-black focus:outline-none px-5 pb-1'
                placeholder='Enter your username'
                onChange={(e) => {
                  set_user_form_data((userdata) => ({
                    ...userdata,
                    username: e.target.value,
                  }));
                }}
              />
            </div>
            <div className='flex flex-col mb-5 mt-5'>
              {/* password */}
              <div className='flex flex-col'>
                <label htmlFor='password' className='text-gray-400 mb-2'>
                  PASSWORD
                </label>
                <input
                  type='password'
                  id='password'
                  className='bg-[#D7D5D3] border-b border-black focus:outline-none px-5 pb-1'
                  placeholder='Enter your email'
                  onChange={(e) =>
                    set_user_form_data((user_data) => ({
                      ...user_data,
                      password: e.target.value,
                    }))
                  }
                />
              </div>
            </div>
            <div className='mt-5 '>
              <div className='flex'>
                <input
                  type='checkbox'
                  className='mr-3 bg-[#D7D5D3] outline-none border-none w-[30px]'
                />
                <p className='text-gray-400'>Keep me logged in?</p>
              </div>
            </div>
            <div className='mt-5 flex'>
              <p className='text-base'>
                Don't have an account?
                <span className='inline-block ml-2 text-[#0F71F2]'>
                  <Link href='/sign-up'>sign up</Link>
                </span>
              </p>
            </div>
            <div className='w-full flex justify-center'>
              <button
                className='mt-10 mb-5 bg-[#0F71F2] text-white w-full h-[70px] text-lg font-medium rounded-xl'
                onClick={handleUserLogin}
              >
                Log in Now
              </button>
            </div>
            <div className='flex justify-end'>
              <div className='border-b mb-10 pb-1 border-black cursor-pointer'>
                <p className=''>Forgot your password?</p>
              </div>
            </div>
          </form>
          <p className='mb-5'>Or login with</p>
          <div className='grid grid-cols-3'>
            <div className='border border-[#0F71F2] text-[#0F71F2] h-[60px] rounded-xl font-medium flex items-center justify-center text-base cursor-pointer'>
              <FaGoogle className='mr-3' />
              <p>Google</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
