import React from "react";
import CrytoCard from "./CrytoCard";
import CryptoMain from "./CryptoMain";

const CrytoList = (coinsData) => {
  return (
    <div>
      {coinsData.map((coin, index) => {
        return (
          <CrytoCard
            key={index}
            image={coin.image}
            name={coin.name}
            price={coin.curent_price}
          />
        );
      })}
    </div>
  );
};

export default CrytoList;
