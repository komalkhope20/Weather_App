import React from 'react'
import {Search} from 'lucide-react'

function SearchBar(
    {
        city,
        setCity,
       
        setWeather,
    }
)
 {
  const dummyWeather = {
   city: city,
    temp: 28,
    humidity: 70,
    wind: 10,
    description: "Cloudy"
};


 
  return (
    <div  className="
        flex items-center
        w-full max-w-2xl
        px-5 py-4
        rounded-2xl
        bg-white/10
        backdrop-blur-xl
        border border-white/10
        shadow-2xl
      ">
      <div>
        <Search color="#ffffff" strokeWidth={0.75} />
      </div>
<div className='flex-1'>
    <input
    className="
          
          ml-3
          bg-transparent
          text-white
          placeholder:text-gray-300
          outline-none
        " 
           value={city}
           
          onChange={(e) => setCity(e.target.value)}
    type="text" 
    placeholder='Search any city...
    ' />
    
</div>
<button onClick={()=>{
  setWeather(dummyWeather);
  console.log(dummyWeather)
  setCity("")

  
}}
>Enter</button>


    </div>
  )
}

export default SearchBar
