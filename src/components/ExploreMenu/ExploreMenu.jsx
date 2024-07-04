import React, { useContext, useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/free-mode';


import { Navigation, Autoplay, FreeMode } from 'swiper/modules';


import { apiGanerator } from '../../helper/apiGanerator';


const ExploreMenu = ({ category, setCategory }) => {



  const [menuList, setMenuList] = useState([]);



  const getFoodData = async (category) => {

    try {


      const responseData = await apiGanerator('menu');

      setMenuList(responseData)




    } catch (err) {
      console.log(err);
      toast.error(err.message);
    }


  }





  useEffect(() => {

    getFoodData(category);

  }, [category]);



  return (
    <div className='explore-menu flex flex-col gap-5 w-full my-5' id='explore-menu'>

      <h1 className='text-[#262626] font-medium text-3xl'>Explore our menu</h1>

      <p className='max-w-[60%] text-[#808080] text-base my-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis quaerat ut consequuntur explicabo velit quasi non molestiae ducimus nihil nulla.</p>


      <Swiper
        modules={[Navigation, FreeMode]}
        navigation={true}
        // loop={true}
        freeMode={true}
        slidesPerView={2}
        spaceBetween={10}


        breakpoints={{
          500: {
            slidesPerView: 3,

          },
          600: {
            slidesPerView: 5,

          },
          1024: {
            slidesPerView: 6,

          },
          1280: {
            slidesPerView: 7,

          },
        }}
        className=' mySwiper horizontalCardSwiper w-full grid grid-cols-[280px,300px]  '
      >
        {menuList.length > 0 && menuList.map((menu, index) => {
          return (
            <SwiperSlide key={index} className='group flex flex-col justify-center items-center' onClick={() => setCategory(prev => prev === menu.menu_name ? 'all' : menu.menu_name)}>

              <img src={`img/${menu.menu_image}`} alt="" className={`w-[7.5vw] min-w-20 cursor-pointer rounded-full object-scale-down group-hover:scale-95 ${category === menu.menu_name ? 'border-4  border-[tomato] p-2' : ''}`} />

              <p className='mt-3 text-[#747474] font-[max(1.4vw,16px)] cursor-pointer'>{menu.menu_name}</p>


            </SwiperSlide>
          )
        })}
      </Swiper>

      <hr className='my-2.5 h-0.5 bg-[#e2e2e2] border-none' />

    </div>
  )
}

export default ExploreMenu