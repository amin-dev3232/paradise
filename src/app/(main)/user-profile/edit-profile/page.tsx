'use client';
import Link from 'next/link';
import { useActionState } from 'react';
import { useCookies } from 'next-client-cookies';
import { editUserInformation } from '@/actions/edit-user-information';
import { LuSquarePen } from 'react-icons/lu';

export default function EditProfilePage() {
  const cookies = useCookies();
  const clientCookie = cookies.get('client-token');
  const cookie = clientCookie ? JSON.parse(clientCookie) : null;

  const [state, formAction, isPending] = useActionState(editUserInformation, {});

  return (
    <div className='mx-auto max-w-lg px-4 py-8'>
      {/* هدر */}
      <div className='mb-6 flex items-center gap-3'>
        <Link href='/user-profile' className='text-2xl text-accent-500 transition-colors hover:text-accent-600 dark:text-accent-400'>
          <div className='flex items-center gap-3'>
            <LuSquarePen />
            <h1 className='text-2xl font-bold text-accent-600 dark:text-accent-400'>ویـرایـش پـروفـایـل</h1>
          </div>
        </Link>
      </div>

      {/* فرم */}
      <form
        action={formAction}
        className='space-y-5 rounded-2xl bg-white p-6 shadow-inner shadow-black dark:border-primary-700 dark:bg-primary-900/80'
      >
        {/* نام کامل */}
        <div>
          <label htmlFor='name' className='mb-2 block text-gray-700 dark:text-accent-400'>
            نام شما
          </label>

          <input
            type='text'
            id='name'
            name='name'
            defaultValue={cookie.name}
            className='w-full rounded-xl bg-white px-4 py-3 text-gray-900 shadow-inner shadow-black focus:border-accent-500 focus:ring-2 focus:ring-accent-200 dark:border-primary-600 dark:bg-primary-800 dark:text-primary-100 dark:focus:border-accent-400 dark:focus:ring-accent-800'
          />

          {state?.errors?.name && <p className='mt-2 text-red-700'>{state.errors.name}</p>}
        </div>

        {/* نام کاربری */}
        <div>
          <label htmlFor='username' className='mb-2 block text-gray-700 dark:text-accent-400'>
            نام کاربری
          </label>

          <input
            type='text'
            id='username'
            name='username'
            defaultValue={cookie.username}
            className='w-full rounded-xl bg-white px-4 py-3 text-gray-900 shadow-inner shadow-black focus:border-accent-500 focus:ring-2 focus:ring-accent-200 dark:border-primary-600 dark:bg-primary-800 dark:text-primary-100 dark:focus:border-accent-400 dark:focus:ring-accent-800'
          />
          {state?.errors?.username && <p className='mt-2 text-red-700'>{state.errors.username}</p>}
        </div>

        {/* تغییر رمز عبور */}
        <div>
          <label htmlFor='password' className='mb-2 block text-gray-700 dark:text-accent-400'>
            تغییر رمز عبور
          </label>

          <input
            id='password'
            name='password'
            type='password'
            defaultValue={cookie.password}
            className='w-full resize-none rounded-xl bg-white px-4 py-3 text-gray-900 shadow-inner shadow-black focus:border-accent-500 focus:ring-2 focus:ring-accent-200 dark:border-primary-600 dark:bg-primary-800 dark:text-primary-100 dark:focus:border-accent-400 dark:focus:ring-accent-800'
          />
          {state?.errors?.password && <p className='mt-2 text-red-700'>{state.errors.password}</p>}
        </div>

        {/* بیوگرافی */}
        <div>
          <label htmlFor='bio' className='mb-2 block text-gray-700 dark:text-accent-400'>
            بیوگرافی
          </label>

          <textarea
            id='bio'
            name='bio'
            defaultValue={cookie.bio}
            rows={3}
            className='w-full resize-none rounded-xl bg-white px-4 py-3 text-gray-900 shadow-inner shadow-black focus:border-accent-500 focus:ring-2 focus:ring-accent-200 dark:border-primary-600 dark:bg-primary-800 dark:text-primary-100 dark:focus:border-accent-400 dark:focus:ring-accent-800'
          />
        </div>

        {/* دکمه‌ها */}
        <div className='flex gap-3 pt-2'>
          <Link
            href='/user-profile'
            className='flex-1 rounded-full border-2 border-primary-300 py-2.5 text-center font-bold text-gray-600 shadow-inner shadow-black transition-all hover:bg-primary-50 active:scale-[0.98] dark:border-primary-600 dark:text-primary-200 dark:hover:bg-primary-800/50'
          >
            انصراف
          </Link>

          <button
            type='submit'
            className='flex-1 rounded-full bg-accent-500 py-2.5 text-center font-bold text-primary-900 shadow-inner shadow-black transition-all hover:bg-accent-600 hover:shadow-xl active:scale-[0.98] dark:bg-accent-500'
          >
            {isPending ? 'در حال ذخیره کردن' : 'ذخیره تغییرات'}
          </button>
        </div>
      </form>
    </div>
  );
}
