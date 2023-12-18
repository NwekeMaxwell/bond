'use client';
import Right_panel_dashboard from './social-components/Right-panel-dashboard';

export default function page() {
  return (
    <section className='w-full bg-primary md:col-span-5 max-h-[100vh] md:grid md:grid-rows-[(10vh_1fr)]'>
      <Right_panel_dashboard />
    </section>
  );
}
