import React from 'react'

function Crypto({ crypto }) {
  return (
    <div className='flex justify-between items-center w-full px-3 py-2 bg-red-500 border-b-2 border-bg-white'>
      <img src={crypto.icon} className='w-7' alt={crypto.symbol} />
      <div>{crypto.id}</div>
      <div>{crypto.symbol}</div>
      <div>{crypto.price.toFixed(2)}</div>
      <div>{crypto.priceChange1h.toFixed(2)}</div>
      <div>{crypto.marketCap.toFixed(2)}</div>
    </div>
  )
}

export default Crypto