import React from "react";
import { useState, useEffect } from "react";
import CrytoList from "./CrytoList";
import axios from "axios";

const CryptoMain = () => {
  const [coinsData, setCoinsData] = useState([]);
  useEffect(async () => {
    const reponse = await axios.get(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
    );
    setCoinsData(reponse.data);
  }, []);
  return (
    <div>
      <h1> crypto gallery</h1>
      <CrytoList coinsData={coinsData} />
    </div>
  );
};

export default CryptoMain;
