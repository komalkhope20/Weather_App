import React, { useState } from 'react'
import Image from './Image'
import SearchBar from './SearchBar'
import NavBar from './NavBar';
import Footer from './Footer';
function Main() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  return (
   <div>
    <NavBar/>
     <div className='text-white bg-[#050816] h-screen w-full'>
      <div>
        <Image />
        <div className='flex flex-col justify-center text-center items-center'>
          <h1 className='font-bold text-2xl p-2'>Know the Weather Before It Knows You</h1>
          <p className='p-2'>Real-time forecasts for every city, anytime.</p>

          <SearchBar
            city={city}
            setCity={setCity}
            weather={weather}
            setWeather={setWeather}
          />

          {/* ✅ Only renders when weather is not null */}
          {weather && (
            <div className='mt-6 text-white text-center'>
              <h2 className='text-3xl font-bold'>{weather.city}</h2>
              <p className='text-5xl font-light mt-2'>{weather.temp}°C</p>
              <p className='text-lg mt-1'>{weather.description}</p>
              <div className='flex gap-6 mt-4 justify-center text-sm text-gray-300'>
                <span>💧 Humidity: {weather.humidity}%</span>
                <span>💨 Wind: {weather.wind} km/h</span>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  <Footer/>
   </div>
  )
}

export default Main