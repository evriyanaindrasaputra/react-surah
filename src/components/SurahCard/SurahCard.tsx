import React from 'react'

type SurahCardProps = {
  name : string,
  nameShort : string,
  translation : string,
  number : number,
  numberOfVerses : number,
}

const SurahCard : React.FC<SurahCardProps> = ({name, number, nameShort, translation, numberOfVerses}) => {
  return (
    <div className='p-5 rounded-md hover:border-emerald-400 border-2 border-gray-500 flex gap-x-5 items-center bg-gray-500 justify-between cursor-pointer group'>
      <div className='w-10 h-10 bg-gray-400 transition duration-100 ease-in rounded-sm rotate-45 flex justify-center items-center group-hover:bg-emerald-500 '>
        <div className='-rotate-45 '>
          <span className='text-gray-100 transition duration-100 ease-in  group-hover:text-gray-500 font-bold text-lg'>{number}</span>
        </div>
      </div>
      <div className='flex-1 '>
        <h3 className='text-gray-100 font-bold text-lg tracking-wide'>{name}</h3>
        <span className='text-gray-300 group-hover:text-emerald-400 text-base'>{translation}</span>
      </div>
      <div>
        <p className=' text-gray-100 text-right font-semibold text-base'>{nameShort}</p>
        <span className='text-gray-300 group-hover:text-emerald-400 text-base'>{numberOfVerses} ayat</span>
      </div>
    </div>
  )
}

export default SurahCard
