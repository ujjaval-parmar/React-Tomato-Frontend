import React, { useContext, useEffect, useState } from 'react'
import { StoreContext } from '../../Context/StoreContext'
import FoodItem from '../FoodItem/FoodItem';

const FoodDisplay = ({ category }) => {

    const { foodData } = useContext(StoreContext);

    // const [selectedFoodList, setSelectedFoodList] = useState([]);


    return (
        <div className='mt-8' id='food-display'>

            <h2 className='text-[max(2vw,24px)] font-medium'>Top dishes near you</h2>

            <div className='grid grid-cols-[repeat(auto-fill,minmax(290px,1fr))] gap-x-8 gap-y-5  place-items-center mt-8'>

                {foodData.length > 0 && foodData.map(food => {
                    {
                        if(category === 'all' || category === food.category )
                        return (
                            < FoodItem key={food._id} food={food} />
                        )
                    }
                })}

            </div>

        </div>
    )
}

export default FoodDisplay