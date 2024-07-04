import React, { useContext, useEffect, useState } from 'react'
import { StoreContext } from '../../Context/StoreContext';

const FoodItem = ({ food }) => {

    const { getItemCartQuantity, addCartItem, desCartItem } = useContext(StoreContext);

    const { _id, name, price, description, image } = food;

    const [itemCount, setItemCount] = useState(0);

    const getItemQuantity = async()=>{
        const itemQuantity = await getItemCartQuantity(_id);
        // console.log(itemQuantity)
        setItemCount(itemQuantity);
    }

    useEffect(()=>{

        getItemQuantity();


    },[]);

    return (
        <div className='w-full m-auto rounded-[15px] animate-fadeIn duration-300 '>

            <div className='relative'>
                <img src={`img/${image}`} alt="" className='w-full rounded-[18px_18px_0_0]' />
                {
                    !itemCount ?

                        (
                            <div className='w-9 absolute bottom-4 right-4 cursor-pointer rounded-full'>
                                <img src='img/add_icon_white.png' alt="" onClick={() => {
                                    setItemCount(prev => prev + 1);
                                    addCartItem(food)
                                }}
                                />
                            </div>
                        )
                        :
                        (
                            <div className='flex items-center gap-4   absolute bottom-4 right-4 cursor-pointer rounded-full bg-white p-1'>
                                <img src="img/remove_icon_red.png" alt="" onClick={() =>{ 
                                    setItemCount(prev => prev - 1)
                                    desCartItem(food)
                                    
                                    }} />
                                <p className='text-[tomato] font-bold text-lg'>{itemCount}</p>
                                <img src='img/add_icon_green.png' alt="" className='w-9' onClick={() => {
                                    setItemCount(prev => prev + 1);
                                    addCartItem(food)
                                }} />
                            </div>
                        )
                }
            </div>

            <div className='p-5'>

                <div className='flex justify-between items-center mb-3'>
                    <p className='text-base font-medium'>{name}</p>
                    <img src={'img/rating_starts.png'} alt="" className='w-20' />
                </div>

                <p className='text-[#676767] text-sm my-3'>{description}</p>
                <p className='text-[tomato] text-lg font-medium my-3 '>${price}</p>

            </div>


        </div>
    )
}

export default FoodItem