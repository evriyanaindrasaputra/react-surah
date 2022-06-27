import React from 'react'
import { useParams } from 'react-router-dom'
import {
  useQuery,
} from 'react-query'
import { getSurah } from '~/lib/surah'

export default function index() {
  const { id } = useParams()
   // Queries
   const { isLoading, isError, data, error } = useQuery(['ListSurah', id], () => getSurah(id), {
    enabled: !!id,
  })
  return (
    <>
      <span> Surah {id}</span>
      {/* cardVerse */}
      <div>
        
      </div>
    </>
  )
}
