'use client';
import Home_Right_panel_dashboard from './components/Home_Right_panel_dashboard';
export default function page() {
  return (
    <section className='w-full bg-primary md:col-span-3 max-h-[100vh] md:grid md:grid-rows-[(10vh_1fr)]'>
      <Home_Right_panel_dashboard />
    </section>
  );
}
