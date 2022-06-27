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

  function handleChange(e: React.ChangeEvent<HTMLSelectElement>): void {
    if(refs){
      setValue(e.target.value)
      refs[e.target.value].current.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: "center"
      });
    }
  }
  return (
    <>
      <h2 className='text-center'> Surah {data?.name.transliteration.id}</h2>
      <div className=' pb-20'>
        {
          data && refs &&
          data.verses.map((item, idx) =>
            <VersesCard ref={refs[item.number.inSurah]} key={idx} verse={item} />
          )
        }
      </div>
      <div className='fixed bottom-0 left-0 px-2 py-3 w-full bg-gray-300/80 backdrop-filter backdrop-blur z-10'>
        <div className=' max-w-6xl mx-auto'>
          <select id="verses-list"
            value={value}
            onChange={(e) => handleChange(e)}
            className="bg-gray-50/80 border block w-full border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  p-2
      ">
            {
              data?.verses.map(item =>
                <option key={item.number.inSurah} value={item.number.inSurah}>{item.number.inSurah}</option>
              )
            }
          </select>
        </div>
      </div>
    </>
  )
}
