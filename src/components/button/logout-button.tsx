'use client';

import { logout } from '@/lib/logout';
import { useTransition } from 'react';

interface LogoutButtonProps {
  className: string;
  children?: React.ReactNode;
}

export default function LogoutButton({ className, children }: LogoutButtonProps) {
  const [isPending, startTransition] = useTransition();

  function handleLogout() {
    startTransition(() => logout());
  }

  return (
    <button disabled={isPending} onClick={handleLogout} className={className}>
      {isPending ? 'در حال خروج...' : (children ?? 'خروج از حساب کاربری')}
    </button>
  );
}
