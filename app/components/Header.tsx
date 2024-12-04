'use client';

import React from 'react';
import Link from 'next/link';
import { UserButton, useAuth } from '@clerk/nextjs';

export default function Header() {
  const { userId } = useAuth();

  return (
    <>
      <nav className="bg-black py-4 px-6 flex items-center justify-between mb-5">
        <div className="flex items-center">
          <Link href="/">
            <div className="text-lg uppercase font-bold text-white">Tailtrade</div>
          </Link>
        </div>

        {/* Sign - In - up Text Navbar */}
        <div className="text-white flex items-center">
          {!userId && (
            <>
              <Link href="/sign-in" className="text-gray-300 hover:text-white mr-4">
                Sign In
              </Link>
              <Link href="/sign-up" className="text-gray-300 hover:text-white mr-4">
                Sign Up
              </Link>
            </>
          )}
          {userId && (
            <Link 
            href='profile'
            className='text-gray-300 hover:text-white mr-4'
            >Profile</Link>
          )}
          <div className="ml-auto">
            <UserButton afterSignOutUrl="/" />
          </div>
        </div>
      </nav>
    </>
  );
}
