import React from 'react'

const Header = () => {
  return (
    <div className='header h-[34vw] my-30px mx-auto bg-[url(/img/header_img.png)] bg-cover relative'>

        <div className="absolute flex flex-col items-start gap-[1.5vw] max-w-[50%] bottom-[10%] left-[6vw] animate-fadeIn">

            <h2 className='font-semibold text-[max(4.5vw,20px)] text-white '>Order your favorite food here</h2>

            <p className='hidden md:block text-white font-[1vw]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis consequuntur quasi eius laudantium, vitae commodi! Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>

            <button className='bg-white p-[1vw_2.3vw] border-none font-medium text-[1vw,13px] rounded-[50px]'>View Menu</button>

        </div>


    </div>
  )
}

export default Header