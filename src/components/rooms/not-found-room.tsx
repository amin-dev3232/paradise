import Link from 'next/link';

interface NotFoundRoomProps {
  room: string;
}

export default function NotFoundRoom({ room }: NotFoundRoomProps) {
  return (
    <div className='mt-60 flex flex-col items-center justify-center gap-4'>
      <h1 className='text-4xl font-bold text-accent-500'>اتاق پیدا نشد</h1>

      <p className='text-lg text-gray-600 dark:text-gray-400'>اتاقی با شناسه {room} وجود ندارد</p>

      <Link href='/rooms' className='mt-4 rounded-lg bg-primary-500 px-6 py-2 text-white transition-colors'>
        بازگشت به لیست اتاق‌ ها
      </Link>
    </div>
  );
}
