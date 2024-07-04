import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles

import 'swiper/css/navigation';
import 'swiper/css/free-mode';


import { Navigation, Autoplay, FreeMode } from 'swiper/modules';

const Footer = () => {
    return (
        <footer id='footer' className='text-[#d9d9d9] bg-[#323232]  flex flex-col items-center gap-5 py-5 px-[8vw] pt-20  pb-5 mt-10 '>

            <div className='w-full grid grid-cols-1 gap-6 sm:grid-cols-[1fr_1fr_1fr] '>

                <div className='flex flex-col items-start gap-5'>
                    <img src="img/logo.png" alt="" />
                    <p className='max-w-md'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita quaerat dolores consequuntur porro ratione earum?</p>

                    <div className='flex gap-4'>
                        <img src="img/facebook_icon.png" alt=""  className='cursor-pointer'/>
                        <img src="img/twitter_icon.png" alt=""  className='cursor-pointer'/>
                        <img src="img/linkedin_icon.png" alt="" className='cursor-pointer' />
                    </div>

                </div>



                <div className='flex flex-col md:items-center gap-5'>
                    <h2 className='text-white text-lg'>COMPANY</h2>
                    <ul className='md:text-center'>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>Privacy policy</li>
                    </ul>
                </div>



                <div className='flex flex-col md:items-center gap-5'>
                    <h2 className='text-white text-lg'>Get in Touch</h2>
                    <ul className='md:text-center'>
                        <li>+91 99999999</li>
                        <li>contact@gamil.com</li>
                    </ul>
                </div>


            </div>

            <hr className='w-[calc(100vw-20px)] ' />

            <p className=''> Copyright 2024  &copy; Tomato.com - All Right Reserved.</p>


        </footer>
    )
}

export default Footer