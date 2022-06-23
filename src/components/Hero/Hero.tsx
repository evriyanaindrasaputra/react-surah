import React from 'react'
import Quran from '~/assets/images/Quran_Kareem.svg'
import { SearchIcon } from "@heroicons/react/solid";

const Hero: React.FC = () => {
  const [value, setValue] = React.useState<string>('')
  function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
    setValue(e.target.value)
  }

  return (
    <div>
      <div className='w-full my-4'>
        <img src={Quran} alt="quran kareem" aria-label='quran kareem'
          className=' w-full aspect-video max-h-80'
        />
        <div className='relative my-3 flex items-center text-gray-400 transition-all focus-within:text-gray-600'>
          <SearchIcon
            data-testid="search icon surah"
            className=' absolute w-9 h-9  ml-2 cursor-pointer '
          />
          <input
            type="text" aria-label='search surah'
            name='search surah' placeholder='Search Surah'
            autoComplete='false'
            onChange={handleChange} value={value} 
            className=' block w-full rounded-md bg-white text-left text-xl shadow-md focus:outline-none focus-visible:ring-gray-400  focus-visible:ring-opacity-75 focus-visible:ring-2  md:py-4 md:pl-12'
          />
        </div>
      </div>
    </div>
  )
}

export default Hero
