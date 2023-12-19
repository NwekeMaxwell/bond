'use client';
import Image from 'next/image';
import User_pic from '../Social-assets/result.png';

export default function LargeScreen_panelDash() {
  return (
    <section className={`col-span-5 max-h-[100vh] hidden md:grid bg-[#E8E8E6]`}>
      <div className='w-full h-full overflow-y-scroll' id='transactions'>
        {/* Profile*/}
        <div className='w-full grid grid-cols-3 gap-x-5 p-5 pt-10'>
          <div className='col-span-1 flex justify-center'>
            <div className='rounded-full w-[200px] overflow-hidden border-2 border-black'>
              <Image src={User_pic} alt='user profile picture' />
            </div>
          </div>
          <div className='col-span-1'>
            <p className='mb-3 text-gray-500'>@sitoaustin</p>
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
          <div className='col-span-1'></div>
        </div>

        {/* User Posts */}
        <div className='w-full pt-10 px-5 h-full'>
          <div className='w-full flex items-center px-5 bg-[#D0D4DA] h-[44px] font-medium text-lg'>
            Your posts
          </div>
          <div className='w-full h-full pb-20' id='transactions'>
            <div className='w-full grid grid-cols-3 gap-1'>
              <div>
                <Image src={User_pic} alt='user profile picture' />
              </div>
              <div>
                <Image src={User_pic} alt='user profile picture' />
              </div>
              <div>
                <Image src={User_pic} alt='user profile picture' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
