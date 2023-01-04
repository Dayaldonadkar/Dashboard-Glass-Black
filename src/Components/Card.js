import React from "react";

const Card = () => {
  return (
    <div className="bg-gray-800 w-80 h-96">
      <div className="flex flex-col items-start">
        <div className="flex align-bottom items-end">
          <img className="" src="./images/card 1.png" />
          <img className="-ml-56" src="./images/card2.png" />
        </div>
        <h1 className="bg-white">$567.990</h1>
      </div>
    </div>
  );
};

export default Card;
