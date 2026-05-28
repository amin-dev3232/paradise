import Image from 'next/image';
import mobileBg from '@/assets/bachground/mobile-bg.jpg';
import desktopBg from '@/assets/bachground/desktop-bg.png';
import Link from 'next/link';

export default function MarketingPage() {
  return (
    <div className='relative h-screen w-full'>
      <Image src={mobileBg} alt='پس زمینه' fill priority className='object-cover md:hidden' />

      <Image src={desktopBg} alt='پس زمینه' fill priority className='hidden object-cover md:block' />

      <div className='relative z-10 flex h-full flex-col items-center justify-center gap-[350px] md:gap-[450px] lg:gap-[600px]'>
        <h1 className='text-4xl font-black text-white md:text-5xl lg:text-6xl xl:text-7xl'>به پارادایـســــ خوشـــ آمدیـد !</h1>

        <Link
          href='/about'
          className='rounded-full border border-white/40 bg-white/10 px-14 py-5 text-2xl font-black text-white shadow-xl shadow-black/50 backdrop-blur-[1px] hover:scale-110 active:scale-90 md:px-14 md:text-2xl lg:px-20 lg:py-4 lg:text-3xl xl:text-4xl'
        >
          دربــاره مــا
        </Link>
      </div>
    </div>
  );
}
