'use client';

export default function SmallScreen_panelDash() {
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
        <div className='w-full grid grid-cols-1 gap-y-5 p-5'>Profile</div>

        {/* User post */}
        <div className='w-full pt-10 px-5 h-full overflow-hidden'>
          <div className='w-full grid grid-cols-7 px-5 bg-[#D0D4DA] h-[44px] font-medium text-lg'>
            User Posts
          </div>
          <div
            className='w-full h-full overflow-y-scroll pb-20'
            id='transactions'
          ></div>
        </div>
      </section>
    </>
  );
}
