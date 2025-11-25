import React from "react";
import { assets } from "../assets/assets";

const Features = () => {
  const features = [
    {
      heading: "User-Friendly Interface",
      desc: "Our platform offers seamless task management to boost your efficiency.",
      image: assets.feature_1, 
      number: "01",
    },
    {
      heading: "Collaborate & Share Effortlessly",
      desc: "Invite team members to work together and achieve your goals faster.",
      image: assets.feature_2,
      number: "02",
    },
    {
      heading: "Effortless Collaboration",
      desc: "Invite team members to work together and achieve your goals faster.",
      image: assets.feature_3,
      number: "03",
    },
    {
      heading: "Seamless Access",
      desc: "Stay connected and manage your tasks on the go with ease.",
      image: assets.feature_4,
      number: "04",
    },
  ];

  return (
  
    <div className="py-16 px-6 md:px-16 lg:px-24 xl:px-44 overflow-x-hidden">
      
    
      <div className={`flex flex-col justify-center items-center text-center mb-12` }>
        <div className="py-3 px-5 sm:px-10 max-w-4xl"> 
          <h1 className="font-bold sm:text-3xl md:text-[40px] text-[#0E1F51] leading-snug">
            Transform Your Productivity with Our 
            <span className="block">Innovative To-Do List Features</span>
          </h1>
        </div>
      </div>

     
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-14 items-stretch">
        {features.map((feature, index) => (
          
          
          <div
            key={index}
            className="bg-[#F7F7F7] p-6 pt-10 rounded-xl relative overflow-hidden flex flex-col h-full cursor-pointer" 
          >
          
            <p className="absolute top-[13px] right-2 text-[35px] font-extrabold text-[#0E1F51] opacity-10 leading-none pointer-events-none z-0">
              {feature.number}
            </p>

           
            <div className="relative z-10 flex flex-col h-full">
              
             
              <div className="h-[140px] flex flex-col justify-start"> 
                  
                
                <div className="bg-white h-12 w-12 flex items-center justify-center p-2 rounded-md mb-4"> 
                  <img
                    className="w-8 h-8 object-contain"
                    src={feature.image}
                    alt={feature.heading}
                  />
                </div>

              
                <p className="text-[20px] font-semibold text-[#0e1f51] mb-2">
                  {feature.heading}
                </p>

               
                <div className="flex"> 
                  <div className="h-1.5 w-11 bg-[#FF3E54] rounded"></div>
                  <div className="h-1.5 w-4 bg-[#FF3E54] rounded ml-1"></div>
                </div>
              </div>
              
             
              <div className="flex-grow mt-2"> 
                <p className="text-[#000000] text-[16px] max-w-xs font-normal">
                  {feature.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;