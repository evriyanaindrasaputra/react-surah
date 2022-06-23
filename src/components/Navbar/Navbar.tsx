import React from 'react'

const Navbar : React.FC = () => {
  return (
    <nav className='flex items-center justify-between px-2 py-4'>
      <h1>Al Qur'an</h1>
      <div>
        <input type="text" data-testId="search_surah" name='search_surah' placeholder='Search Surah'  />
      </div>
    </nav>
  )
}

export default Navbar
