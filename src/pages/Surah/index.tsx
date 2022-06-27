import React from 'react'
import { useParams } from 'react-router-dom'
import {
  useQuery,
} from 'react-query'
import { getSurah } from '~/lib/surah'
import VersesCard from '~/components/VersesCard/VersesCard'

export default function index() {
  const [value, setValue] = React.useState<number | string>(0)
  const { id } = useParams()
  // Queries
  const { isLoading, isError, data, error } = useQuery(['ListSurah', id], () => getSurah(id), {
    enabled: !!id,
  })

  const refs = data?.verses.reduce((acc, value) => {
    acc[value.number.inSurah] = React.createRef();
    return acc;
  }, {});

  function handleChange (e : React.ChangeEvent<HTMLSelectElement>) : void {
      refs[e.target.value].current.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: "center"
      });
  }
  return (
    <>
      <h2 className='text-center'> Surah {data?.name.transliteration.id}</h2>
      <label htmlFor="verses-list" className="block mb-2 text-sm font-medium text-gray-900 ">Select an verse</label>
      <select id="verses-list"
        value={value}
        onChange={(e) => handleChange(e)}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-20 focus:ring-blue-500 focus:border-blue-500  p-2.5
      ">
        {
          data?.verses.map(item =>
            <option key={item.number.inSurah} value={item.number.inSurah}>#{item.number.inSurah}</option>
          )
        }
      </select>
      {
        data &&
        data.verses.map((item, idx) =>
          <VersesCard ref={refs[item.number.inSurah]} key={idx} verse={item}  />
        )
      }
    </>
  )
}
