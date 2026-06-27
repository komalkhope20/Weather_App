import React from 'react'
import Earth2 from "./Earth2.png";
function Image() {
  return (
    <div>
      <div className='flex items-center justify-center-safe p-10'>
       <img className='w-64 h-64 rounded-full object-cover border-none shadow-2xl' src={Earth2} alt="Earth" />
      </div>
    </div>
  )
}

export default Image
