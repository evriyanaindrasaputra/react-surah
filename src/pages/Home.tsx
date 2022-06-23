import React from 'react'
import {
  useQuery,
} from 'react-query'
import { getAllSurah } from '~/lib/surah'
import Hero from '~/components/Hero/Hero'

const Home: React.FC = () => {
  // Queries
  const query = useQuery('ListSurah', getAllSurah)
  return (
    <>
      <Hero />
    </>
  )
}

export default Home
