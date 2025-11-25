import React from 'react'
import { assets } from '../assets/assets';

const Footer = () =>  {
    return (
        <div className='text-gray-500/80 pt-28 px-6 md:px-16 lg:px-24 xl:px-32 overflow-x-hidden'>
            <div className='flex flex-wrap justify-between gap-12 md:gap-6'>
                <div className='max-w-80'>
                    <img src={assets.logo} alt="logo" className='mb-4 h-11 md:h-19' />
                    <p className='text-[13px] font-normal text-[#000000]'>
                        Subscribe to our newsletter for the latest features and updates delivered to you.
                    </p>
                  
                         <div className='flex items-center mt-4'>
                        <input type="text" className='bg-white text-[13px] font-normal border border-[#000000b6] text-[#666666] h-9 px-7 outline-none' placeholder='Your email here' />
                        &nbsp; &nbsp; <button className='flex items-center justify-center bg-[#FF3E54] text-[#ffffff] h-9 w-15 rounded-[5px]'>
                          Join
                        </button>
                    </div>

 <p className='text-[9px] font-normal text-[#000000] mt-4'>
                        By subscribing, you consent to our Privacy Policy and agree to receive updates.
                    </p>
                </div>

                <div>
                    <p className='text-[13px] text-[#000000] font-bold'>Useful Links</p>
                    <ul className='mt-3 flex flex-col gap-2 text-sm'>
                        <li><a href="#" className='font-normal text-[11px] text-[#000000]'>Home Page</a></li>
                        <li><a href="#" className='font-normal text-[11px] text-[#000000]'>About Us</a></li>
                        <li><a href="#" className='font-normal text-[11px] text-[#000000]'>Contact Us</a></li>
                        <li><a href="#" className='font-normal text-[11px] text-[#000000]'>Blog Posts</a></li>
                        <li><a href="#" className='font-normal text-[11px] text-[#000000]'>FAQs</a></li>
                    </ul>
                </div>

                <div>
                    <p className='text-[13px] text-[#000000] font-bold'>Resources</p>
                    <ul className='mt-3 flex flex-col gap-2 text-sm'>
                        <li><a href="#" className='font-normal text-[11px] text-[#000000]'>Help Center</a></li>
                        <li><a href="#" className='font-normal text-[11px] text-[#000000]'>User Guide</a></li>
                        <li><a href="#" className='font-normal text-[11px] text-[#000000]'>Community Forum</a></li>
                        <li><a href="#" className='font-normal text-[11px] text-[#000000]'>Feedback</a></li>
                        <li><a href="#" className='font-normal text-[11px] text-[#000000]'>Support</a></li>
                    </ul>
                </div>

                <div className='max-w-80'>
                    <p className='text-[13px] text-[#000000] font-bold'>Connect With Us</p>
                    <ul className='mt-3 flex flex-col gap-2 text-sm'>
                        <li><a href="#" className=' flex items-center gap-2 font-normal text-[11px] text-[#000000]'>
                            <img src={assets.facebook} alt="facebook" /> Facebook</a></li>
                        <li><a href="#" className=' flex items-center gap-2 font-normal text-[11px] text-[#000000]'>
                             <img src={assets.instagram} alt="Instagram" /> Instagram </a></li>
                        <li><a href="#" className=' flex items-center gap-2 font-normal text-[11px] text-[#000000]'> 
                            <img src={assets.x} alt="Instagram" /> X </a></li>
                        <li><a href="#" className=' flex items-center gap-2 font-normal text-[11px] text-[#000000]'>
                            <img src={assets.linkedin} alt="Instagram" /> LinkedIn </a></li>
                        <li><a href="#" className=' flex items-center gap-2 font-normal text-[11px] text-[#000000]'>
                            <img src={assets.youtube} alt="Instagram" /> Youtube </a></li>
                    </ul>
                </div>
            </div>
            <hr className='border-[#000000] mt-8' />
            <div className='flex flex-col md:flex-row gap-2 items-center justify-between py-5'>
                <p className='font-normal text-[11px] text-[#000000]'>© 2024 Osumare. All rights reserved.</p>
                <ul className='flex items-center gap-4'>
                    <li><a href="#" className='font-normal text-[11px] text-[#000000]'>Privacy Policy</a></li>
                    <li><a href="#" className='font-normal text-[11px] text-[#000000]'>Terms of Service</a></li>
                    <li><a href="#" className='font-normal text-[11px] text-[#000000]'>Cookie Settings</a></li>
                </ul>
            </div>
        </div>
    );
};



export default Footer




