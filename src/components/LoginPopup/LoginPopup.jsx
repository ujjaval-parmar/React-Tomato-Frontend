import React from 'react'

const LoginPopup = ({ setShowLogin }) => {











    return (
        <>
            <div className="flex items-center justify-center w-screen h-screen absolute " >

                <div className='w-full  max-w-md p-5 bg-white relative z-50'>

                    <div className='w-full display flex items-center justify-between mb-4'>
                        <h2 className='text-xl font-bold'>Login</h2>
                        <span className='text-2xl cursor-pointer' onClick={() => setShowLogin(false)}>X</span>
                    </div>


                    <form className='flex flex-col gap-6' onClick={e=> e.preventDefault()}>
                        <input type="text" placeholder='Your Email' className='w-full border border-gray-400 p-2 rounded-md' />

                        <input type="password" placeholder='Password' className='w-full border border-gray-400 p-2 rounded-md' />

                        <button className='w-full text-center bg-[tomato] py-2 rounded-lg'>Login</button>
                    </form>

                    <p className='text-slate-500 font-medium mr-4 my-4'>Dont't have an Account?  <span className='text-blue-600 font-extrabold cursor-pointer hover:border-b-2 hover:border-blue-600  transition-[border-color] duration-200'>Click Here</span></p>




                </div>

                <div className='w-screen h-screen absolute bg-black/60 z-40' onClick={() => setShowLogin(false)}></div>

            </div>


        </>
    )
}

export default LoginPopup