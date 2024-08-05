import React from "react";
import CoinItem from "./CoinItem";
import { Link } from "react-router-dom";
import Coin from "./Coin";

export default function Coins({ coins }) {
  return (
    <div>
      <div>
        <div className=" max-w-[800px] mx-auto px-2 py-4 flex justify-between m-auto items-center bg-gray-800 shadow-md shadow-gray-900 rounded-lg my-4">
          <p>#</p>
          <p className="">Coin</p>
          <p>Price</p>
          <p>24h</p>
          <p className="md:block hidden">Volume</p>
          <p className="md:block hidden">Mkt Cap</p>
        </div>

        {coins.map((coin) => (
          <Link to={`/coin/${coin.id}`} element={<Coin  />} key={coin.id} >
          <CoinItem >
            <div className="flex justify-between max-w-[800px] flex-shrink  mx-auto items-center shadow-inner  shadow-zinc-800 p-3 px-2 cursor-pointer hover:scale-105 transition-all my-5 ">
              <p className="">{coin.market_cap_rank}</p>
              <div className="flex">
                <img className="w-8" src={coin.image} alt="" />
                <p className="uppercase px-2 pt-1">{coin.symbol}</p>
                {/* <p>{coin.name}</p> */}
              </div>
              <p>€{coin.current_price.toLocaleString()}</p>
              <p>{coin.price_change_percentage_24h.toLocaleString()}%</p>
              <p className="hidden md:block">{coin.total_volume.toLocaleString()}</p>
              <p className="hidden md:block">{coin.market_cap.toLocaleString()}</p>
            </div>
          </CoinItem>
          </Link>
        ))}
      </div>
    </div>
  );
}
