// components/layout/footer.tsx

import { BsInstagram, BsTelegram, BsTwitterX } from 'react-icons/bs';
import { GiMountains } from 'react-icons/gi';

export default function Footer() {
  return (
    <footer className='mt-20 border-t border-primary-100 bg-accent-50/30 px-6 py-8 dark:border-primary-800 dark:bg-primary-950'>
      <div className='mx-auto max-w-4xl text-center'>
        <p className='flex items-center justify-center gap-2 text-2xl font-bold text-accent-600 dark:text-accent-400'>
          {/* <LiaMountainSolid /> */}
          <GiMountains className='text-3xl' />
          <span>Paradise</span>
          <GiMountains className='text-3xl' />
          {/* <LiaMountainSolid /> */}
        </p>

        <p className='mt-2 text-sm text-gray-500 dark:text-primary-400'>کابین‌های لوکس در دل کوهستان</p>

        <div className='mt-6 flex items-center justify-center gap-4'>
          <a
            href='#'
            target='_blank'
            className='rounded-xl bg-gradient-to-tr from-yellow-500 via-pink-500 to-purple-600 p-2 text-xl text-white shadow-xl shadow-black dark:bg-primary-800'
          >
            <BsInstagram className='text-3xl' />
          </a>

          <a href='#' target='_blank' className='rounded-xl bg-black p-3 text-xl text-white shadow-xl shadow-black'>
            <BsTwitterX className='text-2xl' />
          </a>

          <a href='#' target='_blank' className='rounded-xl bg-[#26A5E4] p-2 text-xl text-white shadow-xl shadow-black'>
            <BsTelegram className='text-3xl' />
          </a>
        </div>

        <p className='mt-8 text-xs text-gray-400 dark:text-primary-500'>© 1405 - ساخته شده با عشق در دل طبیعت</p>
      </div>
    </footer>
  );
}
