import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Logo from '../components/Logo'

export default function Login() {

    function submitForm(e) {
        e.preventDefault()


    }

  return (
    <>
    

    <div className=' w-screen h-screen bg-zinc-900 flex justify-center items-center flex-col'>
        <Logo />
        <div className='max-w-[500px] w-[400px] max-h-[500px] h-[350px] mt-5 bg-zinc-800 flex flex-col mx-auto justify-center items-center rounded-xl'>
            <form onSubmit={submitForm} className='px-16 flex flex-col justify-evenly items-start  h-full '>
                <div className='py-2 flex flex-col justify-start items-start'>
                <label className='text-white font-semibold text-lg pb-4 w-full '>Name :</label>
                <input className='bg-transparent outline-none text-white border-b-2 w-[300px]' readOnly value="USER_Random"  type='text' name='USER'/>
                </div>
                <div className='py-2 flex flex-col justify-start items-start'>
                <label className='text-white font-semibold text-lg pb-4 w-full'>Password :</label>
                <input className='bg-transparent outline-none text-white border-b-2 w-[300px]'  readOnly value="random123"  type='password'/>
                </div>
                <Link className='mx-auto bg-zinc-600 w-full py-1 text-center rounded-md cursor-pointer text-white' to="/homepage">Login</Link>
            </form>
        </div>
    </div>
    </>
  )
}