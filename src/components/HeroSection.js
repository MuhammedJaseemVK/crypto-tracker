import React, { useEffect, useState } from 'react'
import Crypto from './Crypto'

function HeroSection() {

  const [response, setResponse] = useState(null);
  const apiKey= process.env.REACT_APP_API_KEY;

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
    <div className='bg-violet-500 md:max-w-[50%] w-full py-20 flex flex-col justify-center items-center text-white '>
      {
        response && response.map((crypto)=>{
          return <Crypto key={crypto.symbol} crypto={crypto} />
        })
      }
    </div>
  )
}

export default HeroSection