import Link from 'next/link';
import { Metadata } from 'next';
import { cookies } from 'next/headers';
// components
import LogoutButton from '@/components/button/logout-button';
import ReservedDetails from '@/components/user-profile/reserved-details';
// icons
import { LuDiamond } from 'react-icons/lu';
import { FaUser } from 'react-icons/fa6';

interface UserData {
  name?: string;
  username?: string;
  bio?: string;
}

export const metadata: Metadata = {
  title: 'پروفایل کاربری',
};

export default async function UserProfilePage() {
  // cookies
  const cookie = await cookies();
  const token = cookie.get('client-token');
  const clientCookie: UserData | null = token ? JSON.parse(token.value) : null;

  return (
    <div className='mx-auto max-w-7xl px-4 py-8'>
      <div className='mb-8'>
        <h1 className='text-3xl font-bold text-accent-400 dark:text-accent-400'>پـروفایـل کاربـری</h1>

        <p className='mt-2 text-gray-600 dark:text-primary-200'>مدیریت اطلاعات حساب ، رزروها و تنظیمات شما</p>
      </div>

      <div className='grid gap-6 lg:grid-cols-3'>
        <div className='lg:col-span-1'>
          <div className='rounded-2xl bg-white p-6 shadow-inner shadow-black dark:bg-primary-900'>
            <div className='flex flex-col items-center'>
              <Link
                href='/user-profile/edit-profile'
                className='flex size-28 items-center justify-center rounded-full bg-accent-400 text-7xl shadow-xl shadow-black/80 active:scale-90 active:shadow-inner active:shadow-black dark:bg-primary-800/40'
              >
                <FaUser className='text-accent-500' />
              </Link>
            </div>

            <div className='mt-9 space-y-4 border-t-2 border-primary-800 pt-6'>
              <div className='flex items-center gap-1'>
                <LuDiamond className='h-5 w-5 text-accent-400' />

                <div className='flex gap-1'>
                  <p className='text-xs text-gray-500 dark:text-primary-400'>نام شما:</p>

                  <p className='text-sm font-medium text-gray-800 dark:text-primary-100'>{clientCookie?.name || 'تنظیم نشده'}</p>
                </div>
              </div>

              <div className='flex items-center gap-1'>
                <LuDiamond className='h-5 w-5 text-accent-400' />

                <div className='flex gap-1'>
                  <p className='text-xs text-gray-500 dark:text-primary-400'>نام کاربری:</p>

                  <p className='text-sm font-medium text-gray-800 dark:text-primary-100'>{clientCookie?.username || 'تنظیم نشده'}</p>
                </div>
              </div>

              <div className='flex items-center gap-1'>
                <LuDiamond className='h-5 w-5 text-accent-400' />

                <div className='flex gap-1'>
                  <p className='text-xs text-gray-500 dark:text-primary-400'>بیوگرافی:</p>

                  <p className='text-sm font-medium text-gray-800 dark:text-primary-100'>{clientCookie?.bio || 'خالی'}</p>
                </div>
              </div>
            </div>

            <div className='mt-6 flex items-center justify-center'>
              <Link href='/user-profile/edit-profile' className='inline w-full py-2.5 text-center font-bold text-accent-400'>
                <span>ویـرایـش پـروفایل</span>
              </Link>

              <div className='mr-1 h-6 w-[3px] rounded-full bg-accent-500' />

              <LogoutButton className='inline w-full py-2.5 text-center font-bold text-accent-400'>
                <span>خــروج از حـساب</span>
              </LogoutButton>
            </div>
          </div>
        </div>

        <ReservedDetails />
      </div>
    </div>
  );
}
