import React from 'react';
import logo from './../assets/logo.png';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className='bg-transparent'>
      <header className="flex justify-between items-center pt-6 pl-10 pr-10">
        <img className="w-24" src={logo} alt="logo" />
        <div className="flex items-center gap-4">
          <Link className="text-white" to="/">My Tickets</Link>
          <Link className="bg-red-500 text-white px-4 py-2 rounded-md" to="/">Logout</Link>
        </div>
      </header>
    </div>
  );
}
