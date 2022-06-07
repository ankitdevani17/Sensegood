import React from "react";

const Cards = (item) => {
  return (
    <div className="cards">
      <div className="details">
        <p>{item.name}</p>
        <p>{item.description}</p>
      </div>
    </div>
  );
};

export default Cards;