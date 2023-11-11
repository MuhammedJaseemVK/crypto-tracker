import React, { useEffect, useState } from 'react';
import Crypto from './Crypto';
import { IoMdRefreshCircle } from 'react-icons/io';

function HeroSection() {
  const [coins, setCoins] = useState([]);
  const apiKey = process.env.REACT_APP_API_KEY;
  const [searchTerm,setSearchTerm] =useState('');
  const [isLoading,setIsLoading] =useState(false)

  useEffect(() => {
    setIsLoading(true)
    refreshPage();
  }, [])

  const handleChange =(e)=>{
    setSearchTerm(e.target.value);
  }

  const filteredCoins =coins.filter((coin)=>{
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
    fetch("https://openapiv1.coinstats.app/coins?limit=10", options)
      .then(res => res.json())
      .then(res => { setCoins(res.result); console.log(res);setIsLoading(false) })
      .catch(err => console.error(err))
  }

  return (
    <div className='h-full w-full bg-slate-800 flex flex-col items-center'>
      <div className='bg-blue-500 my-5 flex flex-col gap-2 items-center justify-between py-4 md:py-0 px-4 text-lg text-gray-700'>
        <p className='font-bold text-xl sm:text-xl text-white'>Crypto Price Tracker</p>
        <div className='flex items-center gap-3'>
          <input className='rounded-lg text-sm px-2 py-1 focus:outline-none ' value={searchTerm} onChange={handleChange} placeholder='Search Crypto' type="text" id="search" />
          <IoMdRefreshCircle className='text-white' size={30} onClick={refreshPage} />
        </div>
      </div>
      <div className='bg-yellow-500 h-full w-[50%] flex flex-col justify-center items-center text-white '>
        {
          isLoading && <div>Loading</div>
        }
        {
          filteredCoins && filteredCoins.map((crypto) => {
            return <Crypto key={crypto.symbol} crypto={crypto} />
          })
        }
      </div>
    </div>
  )
}

export default HeroSection;
