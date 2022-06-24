import React from 'react'
import { useOutlet } from "react-router-dom";
import Navbar from '~/components/Navbar/Navbar';

export default function Default() {
  const outlet = useOutlet();
  return (
    <div className='bg-gray-200/30 min-h-screen'>
      <Navbar />
      <main className='max-w-6xl w-full px-2 md:px-0 mx-auto'>
        {outlet}
      </main>
    </div>
  )
}
