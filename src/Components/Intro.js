import React from "react";

const Intro = () => {
  return (
    <div className="flex justify-center h-1/4">
      <div className="flex justify-between items-center w-11/12">
        <div className="flex text-white text-4xl items-end">
          <img src="./images/intro.png" alt="" />
          <span className=" font-bold">Hola,</span>
          <span>Valentina</span>
        </div>

        <div className="flex justify-around w-1/5 items-center">
          <img src="./images/buttons.png" />
          <img src="./images/notification.png" />
        </div>
      </div>
    </div>
  );
};

export default Intro;
