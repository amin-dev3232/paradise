'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

interface FormTypes {
  errors?: {
    name?: string;
    username?: string;
    password?: string;
  };
}

export async function editUserInformation(prevState: FormTypes, formData: FormData): Promise<FormTypes> {
  const name: string = formData.get('name')?.toString().trim() || '';
  const username: string = formData.get('username')?.toString().trim() || '';
  const bio: string = formData.get('bio')?.toString().trim() || '';
  const password: string = formData.get('password')?.toString() || '';

  const errors: FormTypes['errors'] = {};

  // اعتبارسنجی نام کاربر به فارسی
  if (!name) {
    errors.name = 'نام الزامی است';
  } else {
    // چک می‌کنیم که فقط شامل کاراکترهای فارسی باشه
    const farsiChars = 'آابپتثجچحخدذرزژسشصضطظعغفقکگلمنوهی‌ ';
    let isValid = true;

    for (const char of name) {
      if (!farsiChars.includes(char)) {
        isValid = false;
        break;
      }
    }

    if (!isValid) {
      errors.name = 'نام فقط می‌تواند شامل حروف فارسی باشد';
    }
  }

  // اعتبارسنجی نام کاربری
  if (!username) {
    errors.username = 'نام کاربری الزامی است';
  } else {
    // چک می‌کنیم فقط انگلیسی و عدد باشه
    const englishChars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-!@#._';
    let isValid = true;

    for (const char of username) {
      if (!englishChars.includes(char)) {
        isValid = false;
        break;
      }
    }

    if (!isValid) {
      errors.username = 'نام کاربری فقط می‌تواند شامل حروف انگلیسی و اعداد باشد';
    }
  }

  if (!password || password.length < 3) errors.password = 'رمز عبور حداقل باید سه حرف باشد';

  if (Object.keys(errors).length > 0) return { errors };

  const data = { name, username, password, bio };
  const cookie = await cookies();

  cookie.set('client-token', JSON.stringify(data), {
    httpOnly: false,
    secure: process.env.NODE_ENV === 'production',
    maxAge: 60 * 60 * 24 * 2,
    path: '/',
    sameSite: 'lax',
  });

  redirect('/user-profile');
}
