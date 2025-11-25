import React from "react";
import { assets } from "../assets/assets";

const Home = ({setShowForm}) => {
  return (
    <div
      className=" lg: min-h-100
  relative flex flex-col items-center 
  text-sm px-4 md:px-16 lg:px-24 xl:px-40 
  text-black bg-[#F7F7FB]
   md:pt-20 lg:pt-4 
  pb-10 overflow-x-hidden
"
    >
     

      <h1 className="text-[50px] md:text-5xl font-bold max-w-5xl text-center text-[#170f49] mt-6 md:leading-[60px]">
        Simplify Your Life with Our <br /> Todo App
      </h1>

      <p className="text-center text-[#6f6c90] text-base my-3">
        Stay organized and boost your productivity with our intuitive todo
        website. <br />
        Experience a modern approach to task management that fits your
        lifestyle.
      </p>

      <div className="flex items-center gap-4">
        <button
          className="bg-[#FF3E54] hover:bg-[#ff5775] text-white cursor-pointer rounded-full px-9 h-12 m-1 font-bold flex items-center transition-colors hero-btn"
           onClick={() => setShowForm(true)}
        >
          Get started
        </button>

        <button className="flex items-center gap-2 cursor-pointer border border-[#FF3E54] text-[#FF3E54] font-normal transition rounded-full px-7 h-12 hero-btn">
          Learn more
        </button>
      </div>

      <div className="mt-6 w-full flex justify-center">
        <img
          src={assets.hero}
          alt="hero"
          className="w-[80%] sm:w-[70%] md:w-[60%] lg:w-[90%]"
        />
      </div>

      <div
        className="flex flex-wrap justify-between max-sm:justify-center gap-6 max-w-3xl w-full mx-auto py-9"
        id="logo-container"
      >
        <img src={assets.brands} alt="brands" />
      </div>
    </div>
  );
};

export default Home;
