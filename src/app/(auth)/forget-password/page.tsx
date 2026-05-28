// app/forget-password/page.tsx
'use client';

import Link from 'next/link';

export default function ForgetPasswordPage() {
  return (
    <div className='flex min-h-[80vh] items-center justify-center px-4'>
      <div className='w-full max-w-md rounded-2xl bg-white/90 p-8 shadow-xl backdrop-blur-sm dark:bg-primary-900/80'>
        <div className='mb-8 text-center'>
          <h1 className='text-3xl font-bold text-accent-500 dark:text-accent-500'>بازیابی رمز عبور</h1>
          <p className='mt-2 text-gray-600 dark:text-primary-100'>نام کاربری خود را وارد کنید تا رمز عبور جدید برایتان پیامک شد</p>
        </div>

        <form className='space-y-6'>
          <div>
            <label htmlFor='username' className='mb-2 block text-sm font-medium text-gray-700 dark:text-primary-200'>
              نام کاربری
            </label>

            <input
              type='text'
              id='username'
              name='username'
              className='w-full rounded-xl bg-white px-4 py-3 text-right text-gray-900 shadow-inner shadow-black placeholder:text-gray-400 focus:ring-2 focus:ring-accent-500 dark:bg-primary-800 dark:text-primary-100 dark:placeholder:text-gray-500 dark:focus:ring-accent-500'
            />
            <p className='mt-2 text-red-700'>با عرض پوزش این سرویس فعلا در دسترس نیست</p>
          </div>

          <button
            type='submit'
            disabled
            className='w-full rounded-xl bg-accent-500 py-3 text-lg font-bold text-primary-900 shadow-inner shadow-black hover:bg-accent-500 active:scale-[0.98] dark:bg-accent-500 dark:hover:bg-accent-500'
          >
            ارسال پیامک
          </button>
        </form>

        <div className='mt-6 text-center text-sm text-gray-600 dark:text-primary-200'>
          <Link href='/login' className='font-medium text-accent-500 hover:underline dark:text-accent-500'>
            بازگشت به صفحه ورود
          </Link>
        </div>
      </div>
    </div>
  );
}
