import { getRooms } from '@/lib/utils';
import RoomItem from '@/components/rooms/room-item';
import FilterButtons from '@/components/rooms/filter-buttons';

interface RoomsPageProps {
  searchParams: Promise<{ filter?: string }>;
}

export default async function RoomsPage({ searchParams }: RoomsPageProps) {
  const { filter } = await searchParams;
  const rooms = getRooms();

  let filteredRooms = rooms;

  if (filter === 'small') {
    filteredRooms = rooms.filter((room) => room.maxGuest >= 2 && room.maxGuest <= 5);
  } else if (filter === 'medium') {
    filteredRooms = rooms.filter((room) => room.maxGuest >= 6 && room.maxGuest <= 8);
  }

  return (
    <div className='mt-10 flex flex-col items-center justify-between gap-3 px-6'>
      <h1 className='text-2xl font-bold text-black dark:text-accent-400 lg:text-3xl xl:text-4xl'>اتــاق‌ های لـوکس مـا</h1>

      <p className='text-center text-black dark:text-primary-200 lg:text-xl xl:text-2xl'>
        اتـاق‌ هایی دنج با استاندارد های مـدرن که در قـلـب کوهستان‌ قرار دارند
        <span className='hidden md:inline'>از زیبایی طبیعت لذت ببرید مکانی عالی برای یک تعطیلات آرام و دلنشین ، به پارادایس خوش آمدید</span>
      </p>

      <FilterButtons currentFilter={filter ?? 'all'} />

      <main className='mt-8'>
        <ul className='grid items-center justify-center gap-12 lg:grid-cols-2 xl:gap-14 2xl:grid-cols-3'>
          {filteredRooms.map((room) => (
            <li key={room.id}>
              <RoomItem {...room} />
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
