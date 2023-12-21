'use client';
import join_us from '../../../public/Account-assets/join-us.jpg';
import Image from 'next/image';
import Link from 'next/link';
import { FaGoogle } from 'react-icons/fa';
import axios from 'axios';

export default function page() {
  const bk_url = 'https://bond-hs2g.onrender.com/api/v1/signup';

  const handleUser = async (event) => {
    console.log('Hi');

    event.preventDefault();

    const new_user = {
      fullname: 'Nakachukwu',
      username: 'sitoaustin',
      email: 'onyedibesixtusna@gmail.com',
      password: '12345',
    };

    const header_ = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    async function postUser() {
      const response = await axios
        .post(bk_url, new_user, header_)
        .then((response) => console.log(response))
        .catch((error) => console.log(error));
    }
    postUser();
  };
  // async function postData(e: any) {
  //   e.preventDefault();

  //   // Default options are marked with *
  //   const response = await fetch(
  //     'https://bond-hs2g.onrender.com/api/v1/signup',
  //     {
  //       method: 'POST', // *GET, POST, PUT, DELETE, etc.
  //       mode: 'cors', // no-cors, *cors, same-origin
  //       cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
  //       credentials: 'same-origin', // include, *same-origin, omit
  //       headers: {
  //         'Content-Type': 'application/json',
  //         // 'Content-Type': 'application/x-www-form-urlencoded',
  //       },
  //       redirect: 'follow', // manual, *follow, error
  //       referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
  //       body: JSON.stringify(), // body data type must match "Content-Type" header
  //     }
  //   );
  //   console.log(response.json());

  //   return response.json(); // parses JSON response into native JavaScript objects
  // }
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
          <p className='font-medium text-2xl mb-10'>
            Refister with your e-mail
          </p>
          <form>
            {/* Name */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5 '>
              {/* first name */}
              <div className='flex flex-col'>
                <label htmlFor='firstname' className='text-gray-400 mb-2'>
                  FIRSTNAME (&#42;)
                </label>
                <input
                  type='text'
                  id='firstname'
                  className='bg-[#D7D5D3] border-b border-black focus:outline-none px-5 pb-1'
                  placeholder='Enter your firstname'
                />
              </div>
              {/* repeat password */}
              <div className='flex flex-col'>
                <label htmlFor='lastname' className='text-gray-400 mb-2'>
                  LASTNAME (&#42;)
                </label>
                <input
                  type='text'
                  id='lastname'
                  className='bg-[#D7D5D3] border-b border-black focus:outline-none px-5 pb-1'
                  placeholder='Enter your lastname'
                />
              </div>
            </div>
            {/* Username */}
            <div className='flex flex-col mb-5 mt-5'>
              <label htmlFor='username' className='text-gray-400 mb-2'>
                USERNAME (&#42;)
              </label>
              <input
                type='text'
                id='username'
                className='bg-[#D7D5D3] border-b border-black focus:outline-none px-5 pb-1'
                placeholder='Enter your username'
              />
            </div>
            {/* Username */}
            <div className='flex flex-col'>
              <label htmlFor='email' className='text-gray-400 mb-2'>
                EMAIL (&#42;)
              </label>
              <input
                type='email'
                id='email'
                className='bg-[#D7D5D3] border-b border-black focus:outline-none px-5 pb-1'
                placeholder='Enter your email'
              />
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mt-5'>
              {/* password */}
              <div className='flex flex-col'>
                <label htmlFor='password' className='text-gray-400 mb-2'>
                  PASSWORD (&#42;)
                </label>
                <input
                  type='password'
                  id='password'
                  className='bg-[#D7D5D3] border-b border-black focus:outline-none px-5 pb-1'
                  placeholder='Enter your password'
                />
              </div>
              {/* repeat password */}
              <div className='flex flex-col'>
                <label htmlFor='repeat-password' className='text-gray-400 mb-2'>
                  REPEAT PASSWORD (&#42;)
                </label>
                <input
                  type='password'
                  id='repeat-password'
                  className='bg-[#D7D5D3] border-b border-black focus:outline-none px-5 pb-1'
                  placeholder='Re-enter your password'
                />
              </div>
            </div>
            <div className='mt-5 '>
              <div className='flex'>
                <input
                  type='checkbox'
                  className='mr-3 bg-[#D7D5D3] outline-none border-none w-[30px]'
                />
                <p className='text-gray-400'>
                  I have read and accepted the terms and conditions
                </p>
              </div>
            </div>
            <div className='mt-5 flex'>
              <p className='text-base'>
                Alread have an account?
                <span className='inline-block ml-2 text-[#0F71F2]'>
                  <Link href='/sign-in'>sign in</Link>
                </span>
              </p>
            </div>
            <div className='w-full flex justify-center'>
              <button
                className='my-10 bg-[#0F71F2] text-white w-full h-[70px] text-lg font-medium rounded-xl'
                onClick={(event) => handleUser(event)}
              >
                Create Account
              </button>
            </div>
          </form>
          <p className='mb-5'>Or register with</p>
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
