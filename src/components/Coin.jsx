import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Logo from "./Logo";
import DOMPurify from 'dompurify'

export default function Coin() {
  const [coin, setCoin] = useState({});

  let { coinId } = useParams();

  const url = `https://api.coingecko.com/api/v3/coins/${coinId}`;

  console.log(url);
  

  useEffect(() => {
    async function getCoin() {
      try {
        const response = await axios.get(url);
        setCoin(response.data);
        console.log(response.data);
      } catch (err) {
        console.log(err);
      }
    }
    getCoin();
  }, []);

  return (
    <div>
      <Link to="/homepage">
      <Logo  />
      </Link>
    <div className='coin-container'>
        <div className='max-w-[750px] my-4 mx-auto p-3 flex flex-col shadow-md shadow-gray-700 cursor-pointer bg-gray-800 mt-5'>
            <h1 className="m-auto py-4 text-2xl font-semibold">{coin.name}</h1>
        </div>



        <div className='max-w-[750px] mx-auto shadow-md bg-gray-800 shadow-gray-700 p-4 mb-4'>
            <div className='grid grid-rows-1 grid-cols-4'>
                <span className='p-1 bg-purple-600 inline-block w-[4.5rem] rounded-md mb-5'>Rank # {coin.market_cap_rank}</span>
            </div>
            <div className='flex justify-between max-w-[750px] items-center'>
                <div className='flex items-center justify-between w-[200px] '>
                    {coin.image ? <img src={coin.image.small} alt='' /> : null}
                    <p>{coin.name}</p>
                    {coin.symbol ? <p>{coin.symbol.toUpperCase()}/EUR</p> : null}
                    
                </div>
                <div className='text-3xl font-bold'>
                    {coin.market_data?.current_price ? <h1>€{coin.market_data.current_price.eur.toLocaleString()}</h1> : null}
                </div>
            </div>
        </div>






        <div className='flex max-w-[750px] mx-auto bg-gray-800 shadow-md shadow-gray-700 p-4 mb-4'>
            <table className="flex flex-col w-full">
                <thead className="flex flex-col">
                    <tr className="flex w-full justify-between items-center space-x-1">
                        <th className="bg-gray-600 w-full">1h</th>
                        <th className="bg-gray-600 w-full">24h</th>
                        <th className="bg-gray-600 w-full">7d</th>
                        <th className="bg-gray-600 w-full">14d</th>
                        <th className="bg-gray-600 w-full">30d</th>
                        <th className="bg-gray-600 w-full">1yr</th>
                    </tr>
                </thead>
                <tbody className="">
                    <tr className="flex w-full justify-between items-center space-x-1">
                        <td className="w-full">{coin.market_data?.price_change_percentage_1h_in_currency ? <p className="text-center">{coin.market_data.price_change_percentage_1h_in_currency.eur.toFixed(1)}%</p> : null}</td>
                        <td className="w-full">{coin.market_data?.price_change_percentage_24h_in_currency ? <p className="text-center">{coin.market_data.price_change_percentage_24h_in_currency.eur.toFixed(1)}%</p> : null}</td>
                        <td className="w-full">{coin.market_data?.price_change_percentage_24h_in_currency ? <p className="text-center">{coin.market_data.price_change_percentage_7d_in_currency.eur.toFixed(1)}%</p> : null}</td>
                        <td className="w-full">{coin.market_data?.price_change_percentage_24h_in_currency ? <p className="text-center">{coin.market_data.price_change_percentage_14d_in_currency.eur.toFixed(1)}%</p> : null}</td>
                        <td className="w-full">{coin.market_data?.price_change_percentage_24h_in_currency ? <p className="text-center">{coin.market_data.price_change_percentage_30d_in_currency.eur.toFixed(1)}%</p> : null}</td>
                        <td className="w-full">{coin.market_data?.price_change_percentage_24h_in_currency ? <p className="text-center">{coin.market_data.price_change_percentage_1y_in_currency.eur.toFixed(1)}%</p> : null}</td>

                    </tr>
                </tbody>
            </table>
        </div>



        <div className='max-w-[750px] mx-auto shadow-md bg-gray-800 shadow-gray-700 p-4 mb-4'>
            <div className='flex justify-between items-center'>
                <div className='w-full'>
                    <div className='flex justify-between w-[90%] border-b-2 py-2'>
                        <h4 className="font-bold">24 Hour Low</h4>
                        {coin.market_data?.low_24h ? <p>€{coin.market_data.low_24h.eur.toLocaleString()}</p> : null}
                    </div>
                    <div className='flex justify-between w-[90%] border-b-2 py-2'>
                        <h4 className="font-bold">24 Hour High</h4>
                        {coin.market_data?.high_24h ? <p>€{coin.market_data.high_24h.eur.toLocaleString()}</p> : null}                            </div>

                </div>
                <div className='w-full'>
                    <div className='flex justify-between w-full border-b-2 py-2'>
                        <h4 className="font-bold">Market Cap</h4>
                        {coin.market_data?.market_cap ? <p>€{coin.market_data.market_cap.eur.toLocaleString()}</p> : null}
                    </div>
                    <div className='flex justify-between w-full border-b-2 py-2'>
                        <h4 className="font-bold">Circulating Supply</h4>
                        {coin.market_data ? <p>{coin.market_data.circulating_supply}</p> : null}
                    </div>

                </div>
            </div>
        </div>

        <div className='max-w-[750px] mx-auto shadow-md bg-gray-800 shadow-gray-700 p-4 mb-4'>
                    <div className='about'>
                        <h3 className="font-bold text-xl mb-2">About</h3>
                        <p dangerouslySetInnerHTML={{
                            __html: DOMPurify.sanitize(coin.description ? coin.description.en : ''),
                        }}>
                        
                        </p>
                    </div>
        </div>
    </div>
</div>
)
  
  
}
