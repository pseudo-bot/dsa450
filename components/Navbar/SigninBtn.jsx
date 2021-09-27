import React from 'react';
import Link from 'next/link'

const Signin = () => {
  return (
    <Link href="/signin">
      <div className="transition-bg duration-200 bg-green-600 tracking-wider dark:bg-gray-600 shadow-md hover:bg-green-500 text-gray-200 hover:text-white text-lg p-2 rounded cursor-pointer">
        Sign in
      </div>
    </Link>
  );
}

export default Signin;
