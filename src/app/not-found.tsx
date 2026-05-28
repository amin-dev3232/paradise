import Link from 'next/link';

export default function NotFound() {
  return (
    <div className='mt-60 flex flex-col items-center justify-center gap-4'>
      <h1 className='text-4xl font-bold text-accent-500'>صفحه پیدا نشد</h1>

      <p className='text-lg text-gray-600 dark:text-gray-400'>صفحه ای با این مشخصات یافت نشد</p>

      <Link href='/' className='mt-4 rounded-lg bg-primary-500 px-6 py-2 text-white transition-colors'>
        بازگشت به صفحه اصلی
      </Link>
    </div>
  );
}
