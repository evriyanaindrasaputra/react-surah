import React from 'react'
import { useOutlet } from "react-router-dom";
import Navbar from '~/components/Navbar/Navbar';

export default function Default() {
  const outlet = useOutlet();
  return (
    <div className='bg-gray-200/30 min-h-screen'>
      <Navbar />
      <main className='max-w-7xl mx-auto'>
        {outlet}
      </main>
    </div>
  )
}
