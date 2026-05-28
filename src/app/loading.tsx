export default function Loading() {
  return (
    <div className='flex min-h-[60vh] items-center justify-center px-4'>
      <div className='flex flex-col items-center gap-4'>
        <div className='relative size-12'>
          <div className='absolute inset-0 animate-spin rounded-full border-4 border-primary-200 border-t-accent-500 dark:border-primary-700 dark:border-t-accent-400' />
        </div>
        <p className='text-sm font-medium text-gray-600 dark:text-primary-300'>در حال بارگذاری...</p>
      </div>
    </div>
  );
}
