import React from 'react'

const Navbar: React.FC = () => {
  const [value, setValue] = React.useState<string>('')
  function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
    setValue(e.target.value)
  }
  return (
    <nav className='flex items-center justify-between px-2 py-4'>
      <h1>Al Qur'an</h1>
      <div>
        <input type="text" aria-label='search surah' onChange={handleChange} value={value} name='search surah' placeholder='Search Surah' />
      </div>
    </nav>
  )
}

export default Navbar
