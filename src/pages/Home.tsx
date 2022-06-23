import React from 'react'
import {
  useQuery,
} from 'react-query'
import { getAllSurah } from '~/lib/surah'
import Hero from '~/components/Hero/Hero'
import SurahCard from '~/components/SurahCard/SurahCard'

const Home: React.FC = () => {
  // Queries
  const query = useQuery('ListSurah', getAllSurah)
  return (
    <>
      <Hero />
      <SurahCard 
        name={'Al Fatihah'} 
        nameShort={'الفاتحة'} 
        translation={'Pembukaan'} 
        number={1} 
        numberOfVerses={7} 
      />
    </>
  )
}

export default Home
