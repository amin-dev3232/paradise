import authImage from '@/assets/login/login.png';
import Image from 'next/image';
import Link from 'next/link';

export default function LoginPage() {
  return (
    <div className='flex min-h-[80vh] items-center justify-center px-4 py-8 lg:py-12'>
      <div className='mt-24 w-full max-w-md rounded-2xl bg-white/90 p-6 shadow-inner shadow-black backdrop-blur-sm dark:bg-primary-900/80 lg:max-w-lg lg:p-8'>
        <div className='mb-8 flex flex-col items-center justify-center lg:mb-10'>
          <Image src={authImage} alt='عکس فرم' className='h-24 w-32 lg:h-28 lg:w-36' />

          <p className='mt-2 text-sm text-primary-600 dark:text-primary-300 lg:text-base'>برای رزرو اقامتگاه رویایی خود وارد شوید</p>
        </div>

        <form>
          <div className='mb-6 text-center lg:mb-8'>
            <label htmlFor='username' className='mb-2 block text-base text-gray-700 dark:text-primary-300 lg:text-lg'>
              نام کاربری
            </label>

            <input
              type='text'
              id='username'
              name='username'
              className='w-full rounded-full bg-white px-4 py-2 text-gray-900 shadow-inner shadow-black placeholder:text-gray-400 focus:ring-2 dark:bg-primary-800 dark:text-primary-100 dark:placeholder:text-gray-500 dark:focus:ring-accent-500 lg:py-3 lg:text-base'
            />
          </div>

          <div className='mb-8 text-center lg:mb-10'>
            <label htmlFor='password' className='mb-2 block text-base text-gray-700 dark:text-primary-300 lg:text-lg'>
              رمز عبور
            </label>

            <input
              type='password'
              id='password'
              name='password'
              className='w-full rounded-full bg-white px-4 py-2 text-gray-900 shadow-inner shadow-black placeholder:text-gray-400 focus:ring-2 dark:bg-primary-800 dark:text-primary-100 dark:placeholder:text-gray-500 dark:focus:ring-accent-500 lg:py-3 lg:text-base'
            />
          </div>

          <button
            type='button'
            className='w-full rounded-full bg-accent-500 py-2 text-base font-bold text-primary-800 shadow-inner shadow-black transition active:scale-[0.98] dark:bg-accent-500 lg:py-3 lg:text-lg'
          >
            ورود به حساب کاربری
          </button>
        </form>

        <div className='mt-6 text-center text-sm text-gray-600 dark:text-primary-200 lg:mt-8 lg:text-base'>
          <Link href='/forget-password'>
            در صورت فراموشی رمز عبور <span className='text-accent-300 hover:underline'>کلیک کنید</span>
          </Link>
        </div>

        <div className='mt-6 text-center text-sm text-gray-600 dark:text-primary-200 lg:mt-8 lg:text-base'>
          <span>حساب کاربری ندارید؟ </span>
          <Link href='/create-account' className='text-accent-300 hover:underline'>
            ثبت‌نام کنید
          </Link>
        </div>
      </div>
    </div>
  );
}
