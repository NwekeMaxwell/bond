export default function Footer() {
  return (
    <footer className='bg-[#111B21] w-full h-[60vh] py-20 px-[120px] text-white'>
      <div className='grid grid-cols-5 w-full'>
        <div>
          <h1 className='font-bold text-5xl text-[#0F71F2]'>Bond</h1>
        </div>
        <div>
          <h4 className='mb-3 font-bold'>What we do</h4>
          <p className='mb-3 font-bold'>Features</p>
          <p className='mb-3 font-bold'>Blog</p>
          <p className='mb-3 font-bold'>Security</p>
          <p className='mb-3 font-bold'>For Business</p>
        </div>
        <div>
          <h4 className='mb-3 font-bold'>What we are</h4>
          <p className='mb-3 font-bold'>About us</p>
          <p className='mb-3 font-bold'>Careers</p>
          <p className='mb-3 font-bold'>Brand Center</p>
          <p className='mb-3 font-bold'>Privacy</p>
        </div>
        <div>
          <h4 className='mb-3 font-bold'>Use Bond</h4>
          <p className='mb-3 font-bold'>Android</p>
          <p className='mb-3 font-bold'>iPhone</p>
          <p className='mb-3 font-bold'>Mac/PC</p>
          <p className='mb-3 font-bold'>WhatsApp Web</p>
        </div>
        <div>
          <h4 className='mb-3 font-bold'>Need help?</h4>
          <p className='mb-3 font-bold'>Contact Us</p>
          <p className='mb-3 font-bold'>Help Center</p>
          <p className='mb-3 font-bold'>Use Bond</p>
          <p className='mb-3 font-bold'>Security Advirsories</p>
        </div>
      </div>
      <div className='mt-10 border-t border-t-white pt-5'>
        <p className='text-center'>2024 © Bond LLC</p>
      </div>
    </footer>
  );
}
