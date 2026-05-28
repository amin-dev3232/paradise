import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import aboutImg1 from '@/assets/about/about-1.jpg';
import aboutImg2 from '@/assets/about/about-2.jpg';

export const metadata: Metadata = {
  title: 'درباره ما',
};

export default function AboutPage() {
  return (
    <div className='lg:px-36'>
      <section className='flex flex-col items-center justify-between gap-6 p-8 lg:grid lg:grid-cols-2'>
        <h1 className='px-4 text-2xl font-bold text-black dark:text-accent-500 xl:text-4xl'>اقـامـتـگاه لــوڪـس پـــارادایــس</h1>

        <Image src={aboutImg1} alt='about-image1' className='w-72 rounded-2xl shadow-2xl shadow-accent-500/60 lg:row-span-2 lg:w-96 xl:w-[550px]' />

        <div className='mt-4 space-y-4 xl:ml-24 xl:text-xl'>
          <p className='text-black dark:text-primary-200'>
            جایی که زیبایی طبیعت با آسایش و رفاه به زیبایی در هم می‌آید ، در دل کوهستان‌ های مخفی ، این بهشت دور از خانه در انتظار شماست اما اینجا فقط
            قضیه اتاق های لوکس نیست بلکه تجربه پیوند دوباره با طبیعت و لذت بردن از آن در فضایی آرام و دلنشین است
          </p>

          <p className='text-black dark:text-primary-200'>
            ما چندین اتاق لوکس داریم که اقامتگاهی دنج را برای شما فراهم می‌کنند ، اما آزادی و آرامش واقعی را در کوه‌ های اطراف خواهید یافت در میان
            جنگل‌ های سرسبز قدم بزنید هوای تازه را تنفس کنید و کنار گرمای آتش کمپ شاهد درخشش ستارگان در آسمان باشید
          </p>

          <p className='text-black dark:text-primary-200'>
            اینجا جایی است که خاطرات ماندگار شکل می‌گیرند جایی برای استراحت در یک فضای فوق‌العاده زیبا
          </p>
        </div>
      </section>

      <section className='flex flex-col items-center justify-between gap-6 p-8 lg:grid lg:grid-cols-2'>
        <h2 className='px-4 text-2xl font-bold text-black dark:text-accent-500 lg:col-start-2 lg:row-start-1 xl:text-4xl'>
          مدیـریـت مـا از گـذشته تا امـروز
        </h2>

        <Image
          src={aboutImg2}
          alt='about-image2'
          className='w-72 rounded-2xl shadow-2xl shadow-accent-500/60 lg:col-start-1 lg:row-span-2 lg:w-96 xl:w-[550px]'
        />

        <div className='mt-4 space-y-4 lg:col-start-2 lg:row-start-2 xl:text-xl'>
          <p className='text-black dark:text-primary-200'>
            از همان روز های اول تاکنون اقامتگاه لوکس پارادایس یک اقامتگاه محبوب و دوست داشتنی بوده است این مکان با عشق و مراقبت پرورش یافته و به عنوان
            نمادی از تعهد ما به خلق یک محیط گرم و پذیرا شناخته می‌شود
          </p>

          <p className='text-black dark:text-primary-200'>
            در طول سال‌ها ما ماهیت اصلی پارادایس را حفظ کردیم ، با ادغام زیبایی کوهستان که تنها یک کسب و کار مستقل می‌تواند ارائه دهد ، در اینجا شما
            فقط یک مهمان نیستید شما بخشی از تجربه ما هستید ، به اقامتگاه لوکس پارادایس بیایید جایی که سنت با آرامش گره می‌خورد و هر بازدید مثل بازگشت
            به خانه خواهد بود
          </p>
        </div>
      </section>

      <section className='mb-16 mt-10 px-8'>
        <div className='rounded-3xl bg-accent-500 px-8 py-10 text-center shadow-inner shadow-black dark:bg-primary-800'>
          <p className='mx-auto mt-4 leading-8 text-gray-700 dark:text-primary-200'>
            ما متعهدیم که با حفظ محیط زیست و احترام به فرهنگ بومی، فضایی امن و گرم را برای تمام مهمانان فراهم کنیم. ارزش ما در رضایت شما و خاطراتی است
            که با خود به خانه می‌برید.
          </p>
        </div>
      </section>

      <section className='mb-12 text-center'>
        <h2 className='text-2xl font-semibold text-accent-500 lg:text-3xl xl:text-4xl'>همین حالا برنامه‌ریزی کنید</h2>

        <p className='mt-3 text-gray-600 dark:text-primary-100'>برای رزرو اتاق رویایی‌تان اقدام کنید.</p>

        <Link
          href='/rooms'
          className='mt-6 inline-block rounded-xl bg-accent-500 px-8 py-3 text-lg font-bold text-primary-900 md:px-14 md:text-2xl lg:px-16 lg:py-3 lg:text-xl xl:text-2xl'
        >
          مشاهده اتــاق‌ هـا
        </Link>
      </section>
    </div>
  );
}
