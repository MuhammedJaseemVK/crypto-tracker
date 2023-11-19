import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom'

function CryptoPage() {
    const apiKey = process.env.REACT_APP_API_KEY
    let { id } = useParams();
    const [crypto, setCrypto] = useState('')

    useEffect(() => {
        getCyptoInfo();
    }, [])

    const getCyptoInfo = () => {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                'X-API-KEY': apiKey
            }
        };

        fetch(`https://openapiv1.coinstats.app/coins/${id}`, options)
            .then(response => response.json())
            .then(response => { console.log(response); setCrypto(response) })
            .catch(err => console.error(err));
    }
    return (
        <div className='h-screen bg-slate-800 w-full flex justify-center items-center'>
            {
                crypto &&
                <div className='flex flex-col justify-between gap-2 w-[30%] px-6 py-4 items-center bg-slate-500 rounded-md text-white'>
                    <p className='font-bold text-xl'>{crypto.name}</p>
                    <img src={crypto.icon} className='w-20' alt={crypto.symbol} />
                    <div className='w-full flex justify-between '>
                        <p className='font-bold'>Symbol : </p>
                        <p>{crypto.symbol}</p>
                    </div>
                    <div className='w-full flex justify-between'>
                        <p className='font-bold'>Price : </p>
                        <p>$ {crypto.price.toLocaleString()}</p>
                    </div>
                    <div className='w-full flex justify-between'>
                        <p className='font-bold'>market cap : </p>
                        <p>$ {crypto.marketCap.toLocaleString()}</p>
                    </div>
                    <div className='w-full flex justify-between'>
                        <p className='font-bold'>Volume : </p>
                        <p>$ {crypto.volume}</p>
                    </div>
                    <div className='w-full flex justify-between'>
                        <p className='font-bold'>Price change in 1 hr : </p>
                        {crypto.priceChange1h < 0 ? (
                            <p className="text-red-500">{crypto.priceChange1h.toLocaleString()}%</p>
                        ) : (
                            <p className=" text-green-500">{crypto.priceChange1h.toLocaleString()}%</p>
                        )}
                    </div>
                    <div className='w-full flex justify-between'>
                        <p className='font-bold'>Price change in 1 day : </p>
                        {crypto.priceChange1d < 0 ? (
                            <p className="text-red-500">{crypto.priceChange1d.toLocaleString()}%</p>
                        ) : (
                            <p className=" text-green-500">{crypto.priceChange1d.toLocaleString()}%</p>
                        )}
                    </div>
                    <Link to='/' className='bg-white text-slate-500 font-bold rounded-md cursor-pointer px-2 py-1'>Go back</Link>



                </div>
            }

        </div >
    )
}

export default CryptoPage