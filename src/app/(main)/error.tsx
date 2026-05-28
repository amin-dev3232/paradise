'use client';
import Link from 'next/link';

interface ErrorPageProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  return (
    <div className='flex min-h-[70vh] items-center justify-center px-4'>
      <div className='max-w-md text-center'>
        <div className='mb-6 text-6xl'>⚠️</div>

        <h2 className='text-2xl font-bold text-accent-600 dark:text-accent-400'>خطایی رخ داد!</h2>

        <p className='mt-3 leading-relaxed text-gray-600 dark:text-primary-200'>
          متأسفانه مشکلی پیش آمده. لطفاً دوباره تلاش کنید یا به صفحه اصلی بازگردید.
        </p>

        {process.env.NODE_ENV === 'development' && (
          <p className='ltr mt-2 rounded-lg bg-red-50 px-4 py-2 text-left text-xs text-red-700 dark:bg-red-900/20 dark:text-red-400'>
            {error.message}
          </p>
        )}

        <div className='mt-8 flex justify-center gap-3'>
          <button
            onClick={reset}
            className='rounded-xl bg-accent-500 px-6 py-2.5 text-sm font-bold text-white shadow-lg transition-all hover:bg-accent-600 hover:shadow-xl active:scale-[0.98] dark:bg-accent-600 dark:hover:bg-accent-500'
          >
            تلاش دوباره
          </button>

          <Link
            href='/'
            className='rounded-xl border-2 border-primary-300 px-6 py-2.5 text-sm font-bold text-gray-700 transition-all hover:bg-primary-50 active:scale-[0.98] dark:border-primary-600 dark:text-primary-200 dark:hover:bg-primary-800/50'
          >
            صفحه اصلی
          </Link>
        </div>
      </div>
    </div>
  );
}
