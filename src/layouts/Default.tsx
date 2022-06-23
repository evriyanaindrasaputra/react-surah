import React from 'react'
import { useOutlet } from "react-router-dom";
import Navbar from '~/components/Navbar/Navbar';

export default function Default() {
  const outlet = useOutlet();
  return (
    <>
      <Navbar />
      {outlet}
    </>
  )
}
