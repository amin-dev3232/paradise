import Link from 'next/link';
import { useEffect } from 'react';
import ToggleTheme from '../button/toggle-theme';
import LogoutButton from '../button/logout-button';
// icons
import { LuLogOut, LuUser, LuUserPlus, LuInfo } from 'react-icons/lu';
import { BiHome } from 'react-icons/bi';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  // جلوگیری از اسکرول شدن صفحه وقتی سایدبار بازه
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  return (
    <>
      <div className={`fixed inset-0 z-40 h-[2000px] bg-black/70 transition duration-300 ${isOpen ? 'block' : 'hidden'}`} onClick={onClose} />

      <div
        className={`fixed right-0 top-0 z-50 h-[2000px] w-64 bg-white p-5 shadow-2xl transition duration-300 dark:bg-primary-900 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <button onClick={onClose} className='float-left mb-6 text-xl font-black dark:text-accent-400'>
          ✕
        </button>

        <div className='mt-12 flex flex-col gap-10 text-xl'>
          <LogoutButton className='flex items-center gap-2 text-right dark:text-primary-200'>
            <LuLogOut className='h-5 w-5 text-accent-400' />
            <span>خروج از حساب</span>
          </LogoutButton>

          <Link href='/user-profile' onClick={onClose} className='flex items-center gap-2 dark:text-primary-200'>
            <LuUser className='h-5 w-5 text-accent-400' />
            <span>پروفایل من</span>
          </Link>

          <Link href='/create-account' onClick={onClose} className='flex items-center gap-2 dark:text-primary-200'>
            <LuUserPlus className='h-5 w-5 text-accent-400' />
            <span>ساخت حساب کاربری</span>
          </Link>

          <Link href='/rooms' onClick={onClose} className='flex items-center gap-2 dark:text-primary-200'>
            <BiHome className='h-5 w-5 text-accent-400' />
            <span>دیدن اتاق‌ها</span>
          </Link>

          <Link href='/about' onClick={onClose} className='flex items-center gap-2 dark:text-primary-200'>
            <LuInfo className='h-5 w-5 text-accent-400' />
            <span>درباره ما</span>
          </Link>

          <ToggleTheme className='flex items-center gap-2 dark:text-primary-200' />
        </div>
      </div>
    </>
  );
}
