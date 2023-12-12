import Image from 'next/image';
import Cuddle from '../../public/Homepage-assets/cuddle.jpg';
import Moment from '../../public/Homepage-assets/moment.jpg';
import Photography from '../../public/Homepage-assets/photography.jpg';
import { GoChevronRight } from 'react-icons/go';

export default function Home() {
  return (
    <main className='bg-[#E8E8E6] min-h-[200vh] px-5 md:px-10 pt-[10vh]'>
      <section className='w-full bg-[gray] mt-10 rounded-xl h-[100vh] overflow-hidden relative'>
        <Image src={Cuddle} alt='cuddling' className='h-full object-cover' />
        <div className='bg-[#24170C] h-full w-full absolute top-0 left-0 opacity-[0.3]'></div>
        {/* <div className='bg-[#B7844D] h-full w-full absolute top-0 left-0 opacity-[0.1]'></div> */}
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
      <section className='w-full h-[100vh] grid grid-cols-2 '>
        <div className='w-full flex items-center justify-center'>
          <div className='w-[450px]'>
            <h1 className='text-5xl text-[#1C1E21]'>
              Never miss a moment and share without insecurity
            </h1>
            <p className='mt-5'>
              Capture and cherish your special moments effortlessly by instantly
              sharing them with the ones you hold dear through a simple click.
              Whether it's with friends or family, make memories more meaningful
              and connected as you seamlessly transmit your experiences with
              just a single click.
            </p>
            <div className='mt-10 flex pb-1 items-center'>
              <div className='border-b border-[#0F71F2] inline-block pb-1 items-center mr-2'>
                <button className='border border-b'>Learn more</button>
              </div>
              <GoChevronRight />
            </div>
          </div>
        </div>
        <div className='w-full flex justify-center items-center'>
          <div className='relative w-[400px]'>
            <Image
              src={Photography}
              alt='Photography'
              className='rounded-2xl'
            />
            <div className='bg-[#648083] rounded-full h-[50px] w-[50px] absolute bottom-20 -right-5'></div>
            <div className='bg-[#6a83b4] rounded-full h-[50px] w-[50px] absolute top-[200px] -left-5'></div>
            <div className='bg-[#8dc3f1] rounded-full h-[100px] w-[100px] absolute bottom-[100px] -left-10'></div>
            <div className='bg-[#6a83b4] rounded-full h-[100px] w-[100px] absolute -top-10 -right-10'></div>
          </div>
        </div>
      </section>
    </main>
  );
}
