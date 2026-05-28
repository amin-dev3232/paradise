'use client';
import Image from 'next/image';
import Link from 'next/link';
// components
import { useRoomStore } from '@/store/room-store';
// icons
import { BiCheckCircle, BiHome, BiPlus } from 'react-icons/bi';
import { FaCoins } from 'react-icons/fa';
import { LuCalendar } from 'react-icons/lu';
import { TbTrash } from 'react-icons/tb';

export default function ReservedDetails() {
  // zustand hooks
  const reservations = useRoomStore((s) => s.reservations);
  const removeReservation = useRoomStore((s) => s.removeReservation);
  const clearAll = useRoomStore((s) => s.clearAll);

  // informatioin user
  const roomNumbers: string = reservations.length.toLocaleString('fa-IR');
  const reservedNumbers: string = reservations.reduce((acc, r) => acc + r.date.length, 0).toLocaleString('fa-IR');
  const totalPrice: string = reservations.reduce((acc, r) => acc + r.room.price * r.date.length, 0).toLocaleString('fa-IR');

  return (
    <div className='space-y-6 lg:col-span-2'>
      <div className='grid gap-4 text-primary-300 sm:grid-cols-3'>
        <div className='flex items-center justify-between rounded-2xl bg-primary-800/60 px-5 py-4 shadow-inner shadow-black'>
          <div className='flex items-center gap-2'>
            <BiHome className='text-2xl text-accent-400' />

            <span className='text-base xl:text-lg'>تعداد اتاق ها</span>
          </div>

          <span className='text-xl font-bold text-primary-400'>{roomNumbers}</span>
        </div>

        <div className='flex items-center justify-between rounded-2xl bg-primary-800/60 px-5 py-4 shadow-inner shadow-black'>
          <div className='flex items-center gap-2'>
            <LuCalendar className='text-2xl text-accent-400' />

            <span className='text-base xl:text-lg'>شب های رزرو شده</span>
          </div>

          <span className='text-xl font-bold text-primary-400'>{reservedNumbers}</span>
        </div>

        <div className='flex items-center justify-between rounded-2xl bg-primary-800/60 px-5 py-4 shadow-inner shadow-black'>
          <div className='flex items-center gap-2'>
            <FaCoins className='text-2xl text-accent-400' />

            <span className='text-base xl:text-lg'>قیمت کل</span>
          </div>

          <span className='text-xl font-bold text-primary-400'>{totalPrice}</span>
        </div>
      </div>

      {/* رزروهای اخیر */}
      <div className='rounded-2xl bg-white p-6 shadow-inner shadow-black dark:bg-primary-900'>
        {reservations.length === 0 && (
          <h3 className='mb-7 text-lg font-bold text-accent-400'>
            <span>اتاقی رزور نشده</span>
          </h3>
        )}

        {reservations.length > 0 && (
          <h3 className='mb-7 flex items-center gap-1 text-lg font-bold text-accent-400'>
            <BiCheckCircle className='size-5' />
            <span>رزور شــده هـــا</span>
          </h3>
        )}

        <div className='space-y-10 text-primary-300'>
          {reservations.map((r) => (
            <div key={r.room.id} className='flex rounded-3xl border border-primary-800 shadow-xl shadow-black'>
              <div className='relative h-40 w-40 lg:h-56 lg:w-72'>
                <Image src={r.room.image} fill alt={`اتاق شماره ${r.room.roomNumber}`} className='rounded-r-3xl object-cover' />
              </div>

              <div className='flex flex-col justify-between px-2 py-4 text-sm'>
                <div className='space-y-3'>
                  <div className='flex items-center gap-1 lg:gap-2 lg:text-2xl'>
                    <BiHome className='text-lg text-accent-400 lg:text-2xl' />
                    <span>اتاق</span>
                    <span> {r.room.roomNumber.toLocaleString('fa-IR')}</span>
                  </div>

                  <div className='flex items-center gap-1 lg:gap-2 lg:text-xl'>
                    <LuCalendar className='text-lg text-accent-400 lg:text-2xl' />
                    <span> برای {r.date.length.toLocaleString('fa-IR')} شب</span>
                  </div>

                  <div className='flex items-center gap-1 lg:gap-2 lg:text-xl'>
                    <FaCoins className='text-lg text-accent-400 lg:text-2xl' />
                    <span>مبلغ کل</span>

                    <span>{(r.room.price * r.date.length).toLocaleString('fa-IR')}</span>
                  </div>
                </div>

                <div className='flex items-center justify-between gap-1 pl-2 text-sm lg:gap-4'>
                  <Link
                    href={`/rooms/${r.room.id}`}
                    className='rounded-full bg-accent-400/20 px-4 py-[2px] text-accent-400 shadow-xl shadow-black/70 active:scale-90 lg:px-7 lg:py-1 lg:text-lg'
                  >
                    جزئیات
                  </Link>

                  <button
                    onClick={() => removeReservation(r.room.id)}
                    className='rounded-full bg-red-900/20 px-4 py-[2px] text-red-700 shadow-xl shadow-black/70 active:scale-90 lg:px-7 lg:py-1 lg:text-lg'
                  >
                    حــذف
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className='mt-9 flex items-center justify-around gap-3'>
          <Link
            href='/rooms'
            className='flex items-center justify-center gap-1 rounded-full bg-accent-400/20 px-8 py-2 text-center text-sm font-bold text-accent-400 shadow-xl shadow-black/70 active:scale-90'
          >
            <span className='lg:text-xl'>رزرو جدید</span>
            <BiPlus className='text-2xl' />
          </Link>

          {reservations.length > 0 && (
            <button
              onClick={clearAll}
              className='flex items-center justify-center gap-1 rounded-full bg-red-900/20 px-8 py-2 text-sm font-bold text-red-700 shadow-xl shadow-black/70 active:scale-90'
            >
              <span className='lg:text-xl'>حـذف همه</span>
              <TbTrash className='text-2xl' />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
