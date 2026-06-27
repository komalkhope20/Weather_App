import React from 'react'
import { Link } from 'react-router-dom'


function NavBar() {
  return (
    <div className='w-full flex justify-between bg-[#0f172a] p-6  text-white'>
      <div className=' font-bold font-serif text-2xl'>
        <h1>Weather</h1>
      </div>
      <div>
        <ul>
          <Link to='/history'>History</Link>
        </ul>
      </div>
    </div>
  )
}

export default NavBar
