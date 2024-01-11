'use client';
import UsersData from './usersData';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { CiUser } from 'react-icons/ci';
import User_pic1 from '../Social-assets/pic1.jpg';
import User_pic2 from '../Social-assets/pic2.jpg';
import User_pic3 from '../Social-assets/pic3.jpg';
import User_pic4 from '../Social-assets/pic4.jpg';
import Image from 'next/image';

export default function Profile_LargeScreen_panelDash() {
  return (
    <section
      className={`max-h-[100vh] hidden md:grid bg-[#E8E8E6] border border-black pt-20 overflow-y-auto`}
    >
      <UsersData />
    </section>
  );
}
