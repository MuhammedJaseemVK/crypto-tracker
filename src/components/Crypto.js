import React from 'react'

function Crypto({crypto}) {
    return (
        <div className='flex justify-between items-center w-full px-3 py-2 bg-red-500 border-b-2 border-bg-white'>
        <img src={crypto.icon} className='w-7' alt={crypto.symbol} />
        <p>{crypto.id}</p>
        <p>{crypto.symbol}</p>
        <p>{crypto.price}</p>
        <p>{crypto.priceChange1h}</p>
        <p>{crypto.marketCap}</p>
      </div>
    )
}

export default Crypto