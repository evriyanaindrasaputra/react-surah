import React from 'react'
import {
  useQuery,
} from 'react-query'
import { getAllSurah } from '~/lib/surah'
import Hero from '~/components/Hero/Hero'
import SurahCard from '~/components/SurahCard/SurahCard'
import useSurahStore from '~/store/surah'

const Home: React.FC = () => {
  // store surah zustand 
  const { setSurah, filterSurah } = useSurahStore()

  // Queries
  const { isLoading, isError, data, error } = useQuery('ListSurah', getAllSurah, {
    onSuccess:
      data => {
        setSurah(data)
      },
    refetchInterval : false,
  })

  return (
    <>
      <Hero />
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
        {
          !isLoading  &&
          filterSurah?.map(item =>
            <SurahCard
              key={item.number}
              name={item.name.transliteration.id}
              nameShort={item.name.short}
              translation={item.name.translation.id}
              number={item.number}
              numberOfVerses={item.numberOfVerses}
            />
          )
        }
      </div>
    </>
  )
}

export default Home
