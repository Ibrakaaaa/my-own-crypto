import React from 'react'
import { FaCoins } from 'react-icons/fa'
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
    <Link to="/homepage">
        <div className='flex justify-center items-center mx-auto]'>
        <FaCoins className='text-3xl text-purple-800'></FaCoins>
        <h1 className='text-3xl font-bold'>Coin <span className='text-purple-800'>Search</span></h1>
        </div>
    </Link>
  )
}
