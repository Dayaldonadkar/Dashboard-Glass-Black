import React from "react";
import Navbar from "./Components/Navbar";
import Card from "./Components/Card";
import Intro from "./Components/Intro";

const App = () => {
  return (
    <div className="flex bg-black">
      <div className="">
        <Navbar />
      </div>
      <div className="w-full">
        <Intro />
        <Card />
      </div>
    </div>
  );
};

export default App;
