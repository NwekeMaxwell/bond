import { IoMenuOutline } from 'react-icons/io5';

export default function Nav() {
  return (
    <>
      <div className='bg-[#E8E8E6] opacity-[0.8] h-[10vh] fixed top-0 left-0 w-full z-[100]'></div>
      <nav className='bg-transparent fixed top-0 left-0 w-full z-[101]'>
        {/* Small Screen */}
        <div className='flex justify-between px-5 h-[10vh] items-center w-full md:hidden'>
          <h1 className='font-bold text-2xl text-[#0F71F2]'>Bond</h1>

          <IoMenuOutline className='text-3xl' />
        </div>

        {/* Large Screen */}
        <div className='w-full h-[10vh] justify-between px-5 md:px-10 items-center hidden md:flex'>
          <h1 className='font-bold text-3xl text-[#0F71F2]'>Bond</h1>
          <ul className='flex text-base'>
            <li className='mr-10'>Features</li>
            <li className='mr-10'>Privacy</li>
            <li className='mr-10'>Help Center</li>
            <li className='mr-10'>Blog</li>
            <li className='mr-10'>For Business</li>
            <li className='mr-10'>Contact us</li>
            <li className=''>Donates</li>
          </ul>
          <button className='bg-[#0F71F2] text-white py-3 px-7 rounded-full'>
            Get Started
          </button>
        </div>
      </nav>
    </>
  );
}
