import join_us from '../../../public/Account-assets/join-us.jpg';
import Image from 'next/image';

export default function page() {
  return (
    <main className='w-full bg-[#D7D5D3]'>
      <section className='w-full grid grid-cols-1 md:grid-cols-2 md:h-[100vh] overflow-hidden relative text-sm'>
        <div className='h-[100vh]'>
          <Image src={join_us} alt='join us' className='object-cover' />
        </div>
        <div className='w-full h-full pt-20 px-10'>
          <h1 className='font-medium text-5xl text-black mb-10'>Bond</h1>
          <p className='font-medium text-2xl mb-10'>
            Refister with your e-mail
          </p>
          <form>
            {/* Name */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5 '>
              {/* first name */}
              <div className='flex flex-col'>
                <label htmlFor='firstname' className='text-gray-400 mb-2'>
                  FIRSTNAME (*)
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
                  LASTNAME (*)
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
                USERNAME (*)
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
                EMAIL (*)
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
                  PASSWORD (*)
                </label>
                <input
                  type='password'
                  id='password'
                  className='bg-[#D7D5D3] border-b border-black focus:outline-none px-5 pb-1'
                  placeholder='Enter your email'
                />
              </div>
              {/* repeat password */}
              <div className='flex flex-col'>
                <label htmlFor='repeat-password' className='text-gray-400 mb-2'>
                  REPEAT PASSWORD (*)
                </label>
                <input
                  type='password'
                  id='repeat-password'
                  className='bg-[#D7D5D3] border-b border-black focus:outline-none px-5 pb-1'
                  placeholder='Enter your email'
                />
              </div>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
