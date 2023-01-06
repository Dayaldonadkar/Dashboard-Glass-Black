import React from "react";

const Card = () => {
  return (
    <div className=" flex justify-center">
      <div className="w-10/12 flex gap-12">
        <div className="bg-slate-600 w-[430px] h-[550px] rounded-lg"></div>
        <div className="w-4/12 flex flex-col space-y-4 ">
          <div className="bg-slate-900 flex justify-between items-center text-3xl text-white ">
            <div className="flex items-end justify-between">
              <div className="">
                <h1>Activado Para</h1>
                <h1>Compras</h1>
                <div className="bg-gray-500 h-12 w-24 rounded-full relative flex justify-end">
                  <div className="bg-red-500 h-12 w-12 rounded-full absolute"></div>
                </div>
              </div>

              <div className="flex items-center relative">
                <img className="absolute left-6" src="./images/11.png" alt="" />
                <img className="" src="./images/12.png" alt="" />
              </div>
            </div>
          </div>
          <div className="bg-gray-500 h-auto w-3/12">D</div>
        </div>
        <div className="bg-gray-600 h-auto w-3/12 rounded-xl"></div>
      </div>
    </div>
  );
};

export default Card;
