import React from 'react'
import Accordion from '~/components/Accordion'
import {
  useQuery,
} from 'react-query'
import { getAllSurah } from '~/lib/surah'

export default function Home() {
  // Queries
  const query = useQuery('ListSurah', getAllSurah)
  return (
    <>
      <div>Home</div>
      <Accordion title='accordion'>
        <span>hello</span>
      </Accordion>
    </>
  )
}
