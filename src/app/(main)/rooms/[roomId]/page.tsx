import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import NotFoundRoom from '@/components/rooms/not-found-room';
import { type Room } from '@/lib/db';
import { getRoom } from '@/lib/utils';
import DatePicker from '@/components/rooms/date-picker';
import ReservationWarning from '@/components/rooms/reservation-warning';
// icons
import { BsArrowLeft } from 'react-icons/bs';
import { LuCalendar } from 'react-icons/lu';
import { IoSparklesSharp } from 'react-icons/io5';
import { FaHome, FaUsers } from 'react-icons/fa';

interface ParamsType {
  params: Promise<{ roomId: string }>;
}

export async function generateMetadata({ params }: ParamsType): Promise<Metadata> {
  const { roomId } = await params;
  const room: Room | undefined = getRoom(roomId);
  if (!room) return notFound();

  return { title: `اتاق شماره ${room.roomNumber}`, description: room.description };
}

export default async function DynamicRoomPage({ params }: ParamsType) {
  const { roomId } = await params;
  const room: Room | undefined = getRoom(roomId);
  if (!room) return <NotFoundRoom room={roomId} />;

  return (
    <div className='mx-auto max-w-7xl px-4 py-8'>
      {/* لینک بازگشت */}
      <Link href='/rooms' className='mb-6 inline-flex items-center gap-2 text-sm text-primary-600 dark:text-primary-300'>
        <div className='flex items-center gap-1 rounded-full px-5 py-2 text-primary-700 shadow-xl shadow-black/40 dark:bg-primary-900 dark:text-primary-300 dark:shadow-black/80'>
          <span>بازگشت به لیست اتاق‌ها</span>
          <BsArrowLeft />
        </div>
      </Link>

      {/* کارت اصلی */}
      <div className='grid gap-6 md:grid-cols-2 md:gap-10'>
        {/* تصویر */}
        <div className='relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-xl shadow-black/40 dark:shadow-black/80'>
          <Image
            src={room.image}
            alt={`اتاق شماره ${room.roomNumber}`}
            fill
            className='object-cover'
            sizes='(max-width: 768px) 100vw, 50vw'
            priority
          />
        </div>

        {/* اطلاعات */}
        <div className='flex flex-col justify-between'>
          <div className='space-y-5'>
            {/* عنوان و ظرفیت */}
            <div>
              <h1 className='flex items-center gap-2 text-xl font-bold text-accent-600 dark:text-accent-400'>
                <FaHome />
                <span>اتــاق شـمـاره</span>
                <span>{room.roomNumber.toLocaleString('fa-IR')}</span>
              </h1>

              <div className='mt-2 flex items-center gap-2 text-xl text-primary-600 dark:text-primary-300'>
                <FaUsers className='text-2xl' />

                <span>ظـرفیت تا {room.maxGuest.toLocaleString('fa-IR')} نـفر</span>
              </div>
            </div>

            {/* قیمت */}
            <div className='rounded-xl bg-accent-50/80 p-4 text-lg shadow-xl shadow-black/20 dark:bg-primary-900 dark:shadow-black/40'>
              <span className='font-bold text-accent-600 dark:text-accent-400'>{room.price.toLocaleString('fa-IR')}</span>

              <span className='mr-1 text-lg text-accent-600 dark:text-accent-400'>تومان</span>

              <span className='text-gray-500 dark:text-primary-300'> / هر شب</span>
            </div>

            {/* توضیحات */}
            <p className='text-justify leading-relaxed text-gray-700 dark:text-primary-300'>{room.description}</p>

            {/* امکانات */}
            <div>
              <h3 className='mb-3 flex items-center gap-1 text-lg font-semibold text-accent-600 dark:text-accent-400'>
                <IoSparklesSharp />
                <span>امکانات ویژه</span>
              </h3>

              <div className='flex flex-wrap gap-2'>
                {room.amenities.map((amenity) => (
                  <span
                    key={amenity}
                    className='rounded-full bg-primary-100 px-4 py-1.5 text-sm font-medium text-primary-900 dark:bg-primary-900 dark:text-primary-300'
                  >
                    {amenity}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className='mt-12'>
            <div className='mb-5'>
              <h1 className='flex items-center gap-1 font-bold text-accent-600 dark:text-accent-400'>
                <LuCalendar className='text-2xl' />
                <span>تاریخ اقامت خود را انتخاب کنید</span>
              </h1>

              <ReservationWarning room={room} />
            </div>

            <DatePicker room={room} />
          </div>
        </div>
      </div>
    </div>
  );
}
