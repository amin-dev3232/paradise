'use client';
import { useRouter } from 'next/navigation';

interface FilterButtonsProps {
  currentFilter: string;
}

export default function FilterButtons({ currentFilter }: FilterButtonsProps) {
  const router = useRouter();

  const setFilter = (filter: string) => {
    if (filter === 'all') {
      router.push('/rooms');
    } else {
      router.push(`/rooms?filter=${filter}`);
    }
  };

  return (
    <div className='mt-12 flex text-black shadow-xl shadow-black dark:text-primary-200'>
      <button
        onClick={() => setFilter('all')}
        className={`rounded-r-lg border border-primary-700 px-3 py-1 ${
          currentFilter === 'all' ? 'border-primary-500 bg-primary-500 text-white' : ''
        }`}
      >
        همه اتاق ها
      </button>

      <button
        onClick={() => setFilter('small')}
        className={`border border-primary-700 px-3 py-1 ${currentFilter === 'small' ? 'border-primary-500 bg-primary-500 text-white' : ''}`}
      >
        ۲ تا ۵ نفر
      </button>

      <button
        onClick={() => setFilter('medium')}
        className={`rounded-l-lg border border-primary-700 px-3 py-1 ${
          currentFilter === 'medium' ? 'border-primary-500 bg-primary-500 text-white' : ''
        }`}
      >
        ۶ تا ۸ نفر
      </button>
    </div>
  );
}
