'use client';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useState } from 'react';
// components
import logo from '@/assets/logo.png';
import Sidebar from './Sidebar';
import ToggleTheme from '../button/toggle-theme';
import { BiMenuAltLeft } from 'react-icons/bi'; // icons

export default function Header() {
  const path = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  function toggleSidebar(): void {
    setIsSidebarOpen((prev) => !prev);
  }

  return (
    <div className='mb-3 flex items-center justify-between border-b border-primary-800 px-6 pb-3 pt-4 lg:py-6'>
      <Link href='/' className='flex items-center justify-center gap-2'>
        <Image className='size-10' priority src={logo} alt='logo' />

        <p className='text-lg font-bold text-black dark:text-primary-200'>پـــــــــــارادایــســـــــــــــ</p>
      </Link>

      <div className='hidden lg:block'>
        <div className='text-xl text-white lg:flex lg:gap-24 lg:pl-4 xl:pl-16'>
          <Link href='/user-profile' className='flex items-center gap-2 hover:scale-105 dark:text-primary-200'>
            <span className={path.startsWith('/user-profile') ? 'border-b-2 border-accent-400 p-2' : ''}>پروفایل من</span>
          </Link>

          <Link href='/rooms' className='flex items-center gap-2 hover:scale-105 dark:text-primary-200'>
            <span className={path.startsWith('/rooms') ? 'border-b-2 border-accent-400 p-2' : ''}>دیدن اتاق‌ها</span>
          </Link>

          <Link href='/about' className='flex items-center gap-2 hover:scale-105 dark:text-primary-200'>
            <span className={path.startsWith('/about') ? 'border-b-2 border-accent-400 p-2' : ''}>درباره ما</span>
          </Link>

          <ToggleTheme className='flex items-center gap-2 dark:text-primary-200' />
        </div>
      </div>

      <div className='lg:hidden'>
        <button onClick={toggleSidebar} className='cursor-pointer text-4xl dark:text-accent-400'>
          <BiMenuAltLeft />
        </button>

        <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
      </div>
    </div>
  );
}
