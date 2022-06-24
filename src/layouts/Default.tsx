import React from 'react'
import { useOutlet } from "react-router-dom";
import Footer from '~/components/Footer/Footer';
import Navbar from '~/components/Navbar/Navbar';
import Scroll from '~/components/Scroll/Scroll';

export default function Default() {
  const outlet = useOutlet();
  return (
    <div className='bg-gray-200/30 min-h-screen'>
      <Navbar />
      <main className='max-w-6xl w-full px-2 md:px-0 mx-auto'>
        {outlet}
      </main>
      <Footer />
      <Scroll />
    </div>
  )
}
