'use client';

import { Room } from '@/lib/db';
import { useRoomStore } from '@/store/room-store';
import { FiAlertCircle } from 'react-icons/fi';

interface ReservationWarningProps {
  room: Room;
}

export default function ReservationWarning({ room }: ReservationWarningProps) {
  const reservations = useRoomStore((s) => s.reservations);
  const existingReservation = reservations.find((r) => r.room.id === room.id);

  const toPersianDigits = (str: string): string => str.replace(/[0-9]/g, (d) => '۰۱۲۳۴۵۶۷۸۹'[+d]);

  if (!existingReservation) return null;

  return (
    <div className='mt-3 rounded-xl px-3 pb-4 pt-2 dark:bg-slate-800/60'>
      <h1 className='mt-2 text-sm text-primary-700 dark:text-primary-300'>
        این اتاق قبلاً رزرو شده است. با رزرو مجدد، تاریخ‌های انتخابی جایگزین خواهند شد
        <FiAlertCircle className='mr-1 inline text-xl text-red-600' />
      </h1>

      <h2 className='mb-2 mt-4 text-xs text-primary-700 dark:text-primary-300'>تاریخ‌های رزرو شده شما:</h2>

      <div className='flex flex-wrap gap-1'>
        {existingReservation.date.map((d) => (
          <span key={d} className='rounded-full bg-primary-800 px-2 py-1 text-xs font-bold text-primary-100'>
            {toPersianDigits(d)}
          </span>
        ))}
      </div>
    </div>
  );
}
