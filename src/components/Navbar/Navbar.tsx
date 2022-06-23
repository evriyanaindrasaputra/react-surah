import React from 'react'

const Navbar: React.FC = () => {
  const [value, setValue] = React.useState<string>('')
  function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
    setValue(e.target.value)
  }
  return (
    <nav className='flex items-center px-4 py-6 bg-gray-300/80'>
      <h1 className='text-2xl font-bold'>Al Qur'an</h1>
      <div className='relative h-full ml-10 w-64'>
        <input
          type="text" aria-label='search surah'
          name='search surah' placeholder='Search Surah'
          onChange={handleChange} value={value}
          className='block w-full rounded-md bg-white text-left text-md  shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-opacity-75  md:py-2 md:pl-10'
        />
      </div>
    </nav>
  )
}

export default Navbar
