'use client';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { LuMoon, LuSun } from 'react-icons/lu';

interface ToggleThemeProps {
  className: string;
}

export default function ToggleTheme({ className }: ToggleThemeProps) {
  const [mounted, setMounted] = useState<boolean>(false);
  const { theme, setTheme } = useTheme();

  // eslint-disable-next-line
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  function toggleTheme() {
    if (!document.startViewTransition) {
      setTheme(theme === 'dark' ? 'light' : 'dark');
      return;
    }
    document.startViewTransition(() => {
      setTheme(theme === 'dark' ? 'light' : 'dark');
    });
  }

  return (
    <button onClick={toggleTheme} className={`flex items-center gap-2 ${className}`}>
      {theme === 'dark' ? (
        <>
          <LuSun className='h-5 w-5 text-accent-400' />
          <span className='lg:hidden'>حالت روشن</span>
        </>
      ) : (
        <>
          <LuMoon className='h-5 w-5 text-accent-400' />
          <span className='lg:hidden'>حالت تاریک</span>
        </>
      )}
    </button>
  );
}
