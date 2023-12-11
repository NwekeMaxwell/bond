import Image from 'next/image';
import Cuddle from '../../public/Homepage-assets/cuddle.jpg';

export default function Home() {
  return (
    <main className='bg-[#E8E8E6] min-h-[200vh] px-5 md:px-10 pt-[10vh]'>
      <section className='w-full bg-[gray] mt-10 rounded-xl h-[100vh] overflow-hidden relative'>
        <Image src={Cuddle} alt='cuddling' className='h-full object-cover' />
        <div className='text-white absolute top-[50%] left-0 w-[400px] -translate-y-[50%] ml-20'>
          <h1 className='text-7xl text-white font-bold '>
            Chat
            <span className='block mt-3'>privately</span>
          </h1>
          <p className='mt-10 '>
            Say "hello" to a different messaging experience. An unexpected focus
            on privacy, combined with all of the features you expect.
          </p>

          <button className='bg-[#0F71F2] text-white py-3 px-7 rounded-full mt-10'>
            Get Started
          </button>
        </div>
      </section>
      <section className='h-[100vh] w-full flex justify-center items-center'>
        <div className='w-[60%]'>
          <p className='text-4xl text-center'>
            Through private messaging and calls, you have the freedom to express
            yourself, communicate openly, and stay connected with the
            significant individuals in your life, regardless of their location.
          </p>
        </div>
      </section>
    </main>
  );
}
