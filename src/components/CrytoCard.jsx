import React from "react";

const CrytoCard = (props) => {
  const { image, name, price } = props;
  return (
    <div>
      <div>
        <img src={image} aslt={name} />
      </div>
      <div>
        <h2> {name}</h2>
        <h3> ${price.toLocaleString()}</h3>
      </div>
    </div>
  );
};

export default CrytoCard;
