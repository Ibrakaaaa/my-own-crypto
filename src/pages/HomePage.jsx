import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Coins from '../components/Coins'
import Navbar from '../components/Navbar'

export default function HomePage() {

    const [coins, setCoins] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false"


    useEffect(() => {
        async function getCoins() {
            try {
                setIsLoading(true)
                const response = await axios.get(url)
                setCoins(response.data)
                setIsLoading(false)
                setError(false)

            } catch(err) {
                setError(err.message)
            } 
        }
        getCoins()
    }, [])

    if(isLoading) return "Your Data is Loading.... Please wait"
    if(error) return "Error Occured! Something went wrong :("

  return (
    <div className='p-5'>
        <Navbar></Navbar>
        <Coins coins={coins} />
    </div>
  )
}
