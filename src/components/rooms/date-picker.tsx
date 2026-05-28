'use client';

import { useState } from 'react';
import { format, addMonths, subMonths, startOfMonth, getDaysInMonth, addDays, parse } from 'date-fns-jalali';
import { Room } from '@/lib/db';
import { useRoomStore } from '@/store/room-store';
import { useRouter } from 'next/navigation';
import { BiLeftArrow, BiRightArrow } from 'react-icons/bi';
import { LuCalendar } from 'react-icons/lu';

interface DatePickerProps {
  room: Room;
}

const persianMonths = ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند'];

const weekDays = ['ش', 'ی', 'د', 'س', 'چ', 'پ', 'ج'];

const toPersianDigits = (str: string): string => str.replace(/[0-9]/g, (d) => '۰۱۲۳۴۵۶۷۸۹'[+d]);

export default function DatePicker({ room }: DatePickerProps) {
  const router = useRouter();
  const today = new Date();
  const [currentMonthStart, setCurrentMonthStart] = useState(startOfMonth(today));

  //!__________________________________________________________________
  const [warning, setWarning] = useState<boolean>(false);
  const [selectedDates, setSelectedDates] = useState<string[]>([]);
  const reservedRoom = { room, date: selectedDates };

  // zustand state
  const addReservation = useRoomStore((s) => s.addReservation);
  const removeReservation = useRoomStore((s) => s.removeReservation);

  function handleAddRoom() {
    if (selectedDates.length === 0) {
      setWarning(true);
      return;
    }

    removeReservation(room.id);
    addReservation(reservedRoom);
    router.push('/user-profile');
  }

  //!__________________________________________________________________

  const persianYear = Number(format(currentMonthStart, 'yyyy'));
  const persianMonth = Number(format(currentMonthStart, 'M')) - 1;

  const daysInMonth = getDaysInMonth(currentMonthStart);

  const formattedMonthDate = format(currentMonthStart, 'yyyy/MM/dd');
  const gregorianDate = parse(formattedMonthDate, 'yyyy/MM/dd', new Date());
  const startDayOfWeek = (gregorianDate.getDay() + 1) % 7;

  const todayFormatted = format(today, 'yyyy/MM/dd');

  const daysArray: (Date | null)[] = [];
  for (let i = 0; i < startDayOfWeek; i++) daysArray.push(null);
  for (let d = 0; d < daysInMonth; d++) daysArray.push(addDays(currentMonthStart, d));

  function goToPrevMonth() {
    setCurrentMonthStart(subMonths(currentMonthStart, 1));
  }

  function goToNextMonth() {
    setCurrentMonthStart(addMonths(currentMonthStart, 1));
  }

  function toggleDate(date: Date) {
    const formatted = format(date, 'yyyy/MM/dd');
    setSelectedDates((prev) => (prev.includes(formatted) ? prev.filter((x) => x !== formatted) : [...prev, formatted]));
    setWarning(false);
  }

  function removeDate(dateStr: string) {
    setSelectedDates((prev) => prev.filter((d) => d !== dateStr));
  }

  return (
    <>
      <div dir='rtl' className='mx-auto w-80 select-none rounded-lg bg-primary-200 p-4 shadow-xl shadow-black/80 dark:bg-primary-900'>
        {/* هدر */}
        <div className='mb-4 flex items-center justify-between'>
          <button onClick={goToNextMonth} className='rounded px-2 py-1 text-xl'>
            <BiRightArrow className='text-3xl text-accent-600 dark:text-accent-400' />
          </button>

          {/* ماه */}
          <h2 className='text-lg font-semibold text-accent-600 dark:text-accent-400'>
            {persianMonths[persianMonth]} {toPersianDigits(String(persianYear))}
          </h2>

          <button onClick={goToPrevMonth} className='rounded px-2 py-1 text-xl'>
            <BiLeftArrow className='text-3xl text-accent-600 dark:text-accent-400' />
          </button>
        </div>

        {/* روزهای هفته */}
        <div className='mb-2 grid grid-cols-7 gap-1 border-b border-primary-700 pb-3 text-center text-sm font-medium text-primary-700 dark:text-primary-300'>
          {weekDays.map((day, idx) => (
            <div key={idx}>{day}</div>
          ))}
        </div>

        {/* شبکه روزها */}
        <div className='grid grid-cols-7 gap-1'>
          {daysArray.map((date, idx) => {
            if (date === null) return <div key={`empty-${idx}`} className='h-10' />;

            const formatted = format(date, 'yyyy/MM/dd');
            const isSelected = selectedDates.includes(formatted);
            const isToday = formatted === todayFormatted;

            return (
              <button
                key={formatted}
                onClick={() => toggleDate(date)}
                className={`relative flex h-10 items-center justify-center rounded text-sm ${
                  isSelected ? 'bg-accent-500 font-bold text-primary-900' : 'text-primary-700 dark:text-primary-300'
                }`}
              >
                {toPersianDigits(format(date, 'd'))}

                {/* نشان‌گر دایره‌ای برای امروز */}
                {isToday && !isSelected && <span className='absolute bottom-1 h-1.5 w-1.5 rounded-full bg-accent-500' />}

                {isToday && isSelected && <span className='absolute bottom-1 h-1.5 w-1.5 rounded-full bg-white' />}
              </button>
            );
          })}
        </div>

        {/* نمایش برچسب تاریخ‌های انتخاب شده */}
        {selectedDates.length > 0 && (
          <div className='mt-4 space-y-2 border-t-2 border-primary-800 pt-4 text-right text-sm text-gray-600'>
            <div className='flex items-center gap-1 text-primary-700 dark:text-primary-300'>
              <LuCalendar className='text-xl' />
              <span>تاریخ‌ های انتخاب‌ شده</span>
            </div>

            <div className='flex flex-wrap gap-1'>
              {selectedDates.map((d) => (
                <span
                  key={d}
                  className='inline-flex items-center gap-1 rounded-full bg-white px-2 py-1 text-[11px] font-bold text-primary-700 dark:bg-primary-800 dark:text-primary-300'
                >
                  <button onClick={() => removeDate(d)} className='hover:text-red-600'>
                    {toPersianDigits(d)}

                    <span className='mr-1 text-red-600'>✕</span>
                  </button>
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className='text-center'>
        <button
          onClick={handleAddRoom}
          className='mt-10 w-full rounded-full bg-accent-500 py-3 text-center text-xl font-bold text-primary-900 shadow-xl shadow-black/80'
        >
          رزرو این اتاق
        </button>

        {warning && <p className='mt-3 text-sm text-red-600'>لطفا یک تاریخ را انتخاب کنید</p>}
      </div>
    </>
  );
}
