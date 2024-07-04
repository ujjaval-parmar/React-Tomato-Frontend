import React, { useContext, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import { StoreContext } from '../../Context/StoreContext';

const Navbar = ({ setShowLogin }) => {

    const{ cartItem} = useContext(StoreContext);


    const [menu, setMenu] = useState('home');

    console.log(cartItem)

    return (
        <div className='navbar py-8 flex justify-between items-center'>

            <NavLink to='/'>
                <img src='img/logo.png' alt="logo" className='logo w-36' />
            </NavLink>

            <ul className="hidden md:flex navbar-menu  gap-5 text-[#49557e] text-lg capitalize cursor-pointer">
                <li className={menu === 'home' ? 'active' : ''} onClick={(e => setMenu(e.target.innerHTML))} >home</li>
                <li className={menu === 'menu' ? 'active' : ''} onClick={(e => setMenu(e.target.innerHTML))} >menu</li>
                <li className={menu === 'mobile-app' ? 'active' : ''} onClick={(e => setMenu(e.target.innerHTML))} >mobile-app</li>
                <li className={menu === 'contact us' ? 'active' : ''} onClick={(e => setMenu(e.target.innerHTML))} >contact us</li>
            </ul>

            <div className="navbar-right flex items-center gap-10">

                


                <div className=" relative"  >
                    <NavLink to='/cart'>
                        <img src='img/basket_icon.png' alt="" />
                        <div className="dot absolute w-5 h-5 bg-[tomato] rounded-full -top-2 -right-3 flex items-center justify-center text-white font-bold">{cartItem.length}</div>
                    </NavLink>
                </div>

                <button className='bg-transparent text-base text-[#49557e] border border-tomato py-3 px-8 rounded-[50px] cursor-pointer hover:bg-[#fff4f2] transition-all duration-500' onClick={() => setShowLogin(true)}>sign in</button>

            </div>


        </div>
    )
}

export default Navbar