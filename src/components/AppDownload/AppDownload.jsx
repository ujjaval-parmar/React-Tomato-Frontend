import React from 'react'

const AppDownload = () => {
  return (
    <div className='mx-auto mt-100px text-[max(3vw,20px] text-center  font-medium flex flex-col items-center' id='app-download'>

        <p className='text-5xl my-6 leading-snug '>For Better Experience Download <br /> <span className='font-semibold text-[tomato]'>Tomato App</span></p>

        <div className='flex flex-col md:flex-row   gap-10'>
            <img src="img/play_store.png" alt="" className='hover:scale-105 transition-all duration-500'/>
            <img src="img/app_store.png" alt="" className='hover:scale-105 transition-all duration-500'/>
        </div>

    </div>
  )
}

export default AppDownload