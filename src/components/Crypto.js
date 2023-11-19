import React from 'react';
import {  useNavigate } from 'react-router-dom';

function Crypto({ crypto }) {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/CryptoPage/${crypto.id}`)
  }

  return (
    <div className='flex justify-between items-center w-full px-3 py-2 gap-2 border-b-2 border-bg-white'>
      <img src={crypto.icon} className='w-7' alt={crypto.symbol} />
      <div className='w-[16%]'>{crypto.id}</div>
      <div className='w-[5%] font-bold hidden sm:block'>{crypto.symbol}</div>
      <div className='w-[10%] hidden sm:block'>${crypto.price.toFixed(2)}</div>
      {crypto.priceChange1h < 0 ? (
        <p className="w-[10%] text-red-500">{crypto.priceChange1h.toFixed(2)}%</p>
      ) : (
        <p className="w-[10%] text-green-500">{crypto.priceChange1h.toFixed(2)}%</p>
      )}
      <div className='w-[20%] hidden sm:block'>${crypto.marketCap.toFixed(2)}</div>
      <button className=' w-fit bg-slate-500 cursor-pointer rounded-md px-2' onClick={handleClick}>Open</button>
    </div>
  )
}

export default Crypto