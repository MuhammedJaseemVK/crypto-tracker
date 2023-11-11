import React from 'react'

function NavBar() {
    return (
        <div className='bg-slate-800  flex fixed items-center justify-between w-full py-4 md:py-0 px-4 text-lg text-gray-700'>
            <p className='font-bold text-base sm:text-xl text-white'>Crypto Tracker</p>
            <input className='rounded-lg text-sm px-2 py-1 focus:outline-none ' placeholder='Search Crypto' type="text" id="search" />
        </div>
    )
}

export default NavBar