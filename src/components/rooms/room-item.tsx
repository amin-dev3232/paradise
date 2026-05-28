import { type Room } from '@/lib/db';
import Image from 'next/image';
import Link from 'next/link';
import { BsArrowLeft } from 'react-icons/bs';
import { FaHome, FaUser } from 'react-icons/fa';

export default function RoomItem({ roomNumber, maxGuest, price, image, id }: Room) {
  return (
    <div className='flex h-44 w-96 justify-between rounded-2xl border-[3px] border-primary-900 shadow-xl shadow-black lg:h-60 lg:w-[500px]'>
      <div className='flex flex-col justify-between px-4 py-3 lg:pr-8 lg:pt-8'>
        <div className='mb-1 space-y-3 lg:text-xl'>
          <h3 className='flex items-center gap-2 font-bold text-primary-200'>
            <FaHome className='text-accent-400' />
            <span>اتـاق {roomNumber.toLocaleString('fa-IR')}</span>
          </h3>

          <div className='flex items-center gap-1 text-primary-200'>
            <FaUser className='text-accent-400' />
            <span>ظرفیت {maxGuest.toLocaleString('fa-IR')} نفر</span>
          </div>

          <div>
            <span className='font-bold text-primary-200'>{price.toLocaleString('fa-IR')} $</span>
            <span className='text-primary-200'> / شب</span>
          </div>
        </div>

        <Link
          href={`/rooms/${id}`}
          className='flex items-center gap-1 border-t-[4px] border-primary-900 px-5 pt-2 text-center font-bold text-accent-400 hover:underline active:scale-90 lg:text-xl'
        >
          <span>جزئیات و رزرو</span>
          <BsArrowLeft />
        </Link>
      </div>

      <div className='relative w-[190px] lg:w-60'>
        <Link href={`/rooms/${id}`}>
          <Image src={image} alt={`اتاق ${roomNumber}`} fill className='rounded-l-xl border-r-[3px] border-primary-900 object-cover' />
        </Link>
      </div>
    </div>
  );
}
