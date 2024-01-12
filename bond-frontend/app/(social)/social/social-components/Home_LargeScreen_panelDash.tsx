'use client';
import UsersData from './usersData';

export default function Profile_LargeScreen_panelDash() {
  return (
    <section
      className={`max-h-[100vh] hidden md:grid bg-[#E8E8E6] border border-black pt-20 overflow-y-auto`}
    >
      <UsersData />
    </section>
  );
}
