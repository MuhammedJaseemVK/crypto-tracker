import React from 'react'

function NavBar() {
  return (
    <div className='bg-slate-800 w-full h-[10%] p-4 flex justify-between items-center'>
        <p className='font-bold text-base sm:text-xl w-full text-white'>Crypto Tracker</p>
        <input className='rounded-lg text-sm px-2 py-1 focus:outline-none min-w-[100px]' placeholder='Search Crypto' type="text" id="search"/>
    </div>
  )
}

export default NavBar