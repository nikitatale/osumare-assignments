import React from 'react'
import { assets } from '../assets/assets';

const Discover = ({setShowForm}) => {
  return (
       
           
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-start justify-center gap-8 px-4 md:px-0 overflow-x-hidden">
                <img
                    className="max-w-sm w-full h-auto"
                    src={assets.photo_rect}
                    alt=""
                />
                <div>
                    <h1 className="text-[48px] text-[#202020] text-base font-bold">Start Organizing Your Life Today</h1>
                    <p className="text-[18px] font-normal text-[#202020] mt-3 pb-4">
                        Join us now and transform your productivity with our intuitive to-do list platform!
                    </p>

                       <div
          className="flex flex-col sm:flex-row items-start sm:items-center 
    gap-3 sm:gap-4 md:gap-5"
        >
          <button
            className="
      cursor-pointer
      px-6 py-2                    
      sm:px-7 sm:py-2               
      md:px-6 md:py-2              
      lg:px-8 lg:py-2                
      bg-[#FF3E54] text-white 
      hover:bg-[#ff5775] 
      text-sm sm:text-base
    "
            id="signup-btn"
            onClick={() => setShowForm(true)}
          >
            Sign Up
          </button>


          <button
            className="
      cursor-pointer 
      px-6 py-2                     
      sm:px-7 sm:py-2              
      md:px-6 md:py-2                
      lg:px-8 lg:py-2                
      border border-[#FF3E54] 
      bg-white text-[#000000] 
      text-sm 
    "
            id="login-btn"
          >
            Learn More
          </button>
        </div>
                   
                </div>
            </div>
       
    );
};
  
export default Discover
