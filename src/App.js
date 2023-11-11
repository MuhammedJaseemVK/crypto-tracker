import React, { useEffect, useState } from 'react';
import Crypto from './components/Crypto';
import { IoMdRefreshCircle } from 'react-icons/io';

function App() {
  const [response, setResponse] = useState(null);
  const apiKey = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    getCrypto();
  }, [])

  const getCrypto = () => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        'X-API-KEY': apiKey
      }
    }
    fetch("https://openapiv1.coinstats.app/coins", options)
      .then(res => res.json())
      .then(res => { setResponse(res.result); console.log(res) })
      .catch(err => console.error(err))
  }
  return (
    <div className='h-full w-full bg-slate-800 flex flex-col items-center'>
      <div className='bg-slate-800 my-5 flex flex-col gap-2 items-center justify-between py-4 md:py-0 px-4 text-lg text-gray-700'>
        <p className='font-bold text-base sm:text-xl text-white'>Crypto Price Tracker</p>
        <div className='flex items-center gap-5'>
          <input className='rounded-lg text-sm px-2 py-1 focus:outline-none ' placeholder='Search Crypto' type="text" id="search" />
          <IoMdRefreshCircle className='text-white' size={30} onClick={getCrypto} />
        </div>
      </div>
      <div className='md:max-w-[50%] w-full py-10 flex flex-col justify-center items-center text-white '>
        {
          response && response.map((crypto) => {
            return <Crypto key={crypto.symbol} crypto={crypto} />
          })
        }
      </div>
    </div>
  )
}

export default App;
