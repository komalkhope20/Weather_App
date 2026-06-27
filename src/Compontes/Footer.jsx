import React from 'react'

function Footer() {
  return (
    <div className='w-full flex justify-between bg-[#0f172a] p-4  text-white'>
      <div className='flex gap-2.5'>
<h2 className=' font-normal font-serif text-2xl'>Weather</h2>
<p>Built with React+Flask+SQLite</p>
      </div>
      <div>
       <h3>Develop by Komal Khope</h3>
      </div>
    </div>
  )
}

export default Footer
