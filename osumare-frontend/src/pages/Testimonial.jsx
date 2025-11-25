import React from 'react'
import { assets } from '../assets/assets'

const Testimonial = () => {
  return (
      <div className="flex flex-col items-center px-6 md:px-16 lg:px-24 xl:px-45 pt-10 pb-30 overflow-x-hidden">
            <div className="flex flex-col items-start justify-between w-full">
              <h1 className={`text-[48px] font-bold text-[#0E1F51]`}>Customer Testimonials</h1>
             <p className="text-[18px] text-[#0E1F51] mt-5 font-normal max-w-174">This tool has transformed my productivity and organization!</p>
            </div>
           
           

            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-6 w-full mt-8">
                 
               <div className="group relative flex flex-col items-start justify-between gap-1 pt-12
                 md:pt-18 px-4 rounded-xl text-white bg-no-repeat bg-cover bg-center ">
                    
                     <div className='border-0 border-l-11 border-t-11 border-b-11 border-[#FF3E54] '>
                          <img src={assets.testimonial} alt="arrow icon" className="w-full   h-full object-cover" />
                     </div>
               
                 </div>
             
                 
                </div>
             
            </div>
       
  )
}

export default Testimonial