import React from 'react'
import { FaCoins } from 'react-icons/fa'


export default function Logo() {
  return (
    <div className='flex justify-center items-center mx-auto mt-4'>
    <FaCoins className='text-3xl text-purple-800'></FaCoins>
    <h1 className='text-3xl font-bold'>Coin <span className='text-purple-800'>Search</span></h1>
    </div>
  )
}
