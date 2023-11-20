import React, { useContext, useEffect, useState } from 'react';
import Crypto from './Crypto';
import { IoMdRefreshCircle } from 'react-icons/io';
import { ThemeContext } from '../context/ThemeContext';

function HeroSection() {
  const [darkTheme]=useContext(ThemeContext);

  const [coins, setCoins] = useState([]);
  const apiKey = process.env.REACT_APP_API_KEY;
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true);
    refreshPage();
    // eslint-disable-next-line
  }, [])

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  }

  const filteredCoins = coins.filter((coin) => {
    return coin.name.toLowerCase().includes(searchTerm.toLowerCase())
  })

  const refreshPage = () => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        'X-API-KEY': apiKey
      }
    }
    fetch("https://openapiv1.coinstats.app/coins", options)
      .then(response => response.json())
      .then(response => { setCoins(response.result); setIsLoading(false); })
      .catch(err => console.error(err));
  }

  return (
    <div className={`h-screen w-full  flex flex-col items-center ${darkTheme?'bg-slate-800':'bg-white'}`}>
      <div className=' my-5 flex flex-col gap-2 items-center justify-between py-4 md:py-0 px-4 text-lg text-teal-300'>
        <p className='font-bold text-xl sm:text-xl text-teal-300'>Crypto Price Tracker</p>
        <div className='flex items-center gap-3'>
          <input className='rounded-lg text-sm px-2 py-1 focus:outline-none bg-teal-300 text-white placeholder-white ' value={searchTerm} onChange={handleChange} placeholder='Search Crypto' type="text" id="search" />
          <IoMdRefreshCircle className={`text-teal-300 cursor-pointer`} size={40} onClick={refreshPage} />
        </div>
      </div>
      {
        isLoading && <div className='text-xl font-bold text-white'>Loading...</div>
      }
      {
        filteredCoins &&
        <div className='w-[90%] sm:w-[60%] flex flex-col items-center text-white my-5 overflow-y-scroll'>
          {filteredCoins.map((crypto) => {
            return <Crypto key={crypto.symbol} crypto={crypto} />
          })
          }
        </div>
      }
    </div>
  )
}

export default HeroSection;
