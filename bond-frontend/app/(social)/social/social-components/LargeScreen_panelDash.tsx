'use client';


export default function LargeScreen_panelDash() {
  return (
    <section className={`col-span-5 max-h-[100vh] hidden md:grid bg-[#E8E8E6]`}>
      <div className='w-full h-full overflow-y-scroll' id='transactions'>
        {/* Profile*/}
        <div className='w-full grid grid-cols-3 gap-x-5 p-5'></div>

        {/* User Posts */}
        <div className='w-full pt-10 px-5 h-full'>
          <div className='w-full grid grid-cols-10 px-5 bg-[#D0D4DA] h-[44px] font-medium text-lg'>
            User Posts
          </div>
          <div className='w-full h-full pb-20' id='transactions'></div>
        </div>
      </div>
    </section>
  );
}
