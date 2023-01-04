import React from "react";
import Logo from "./mainlogo.png";
const Navbar = () => {
  return (
    <div className="flex flex-col w-20 h-screen bg-black space-y-20 items-center  pt-11">
      <img src="./images/mainlogo.png" alt="jasfd" />
      <img src="./images/wallet.png" alt="" />
      <img src="./images/Empty.png" alt="" />
      <img src="./images/Group3.png" alt="" />
      <h1 className="text-white">∨</h1>
      <img src="./images/logout.png" alt="" />
    </div>
  );
};

export default Navbar;
