import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { apiGanerator } from "../helper/apiGanerator";

export const StoreContext = createContext(null);


const StoreContextProvider = ({ children }) => {


    const [foodData, setFoodData] = useState([]);

    const [cartItem, setCartItem] = useState([]);

    const getFoodData = async () => {

        try {


            const responseData = await apiGanerator('food_list');


            // console.log(responseData);

            // if(category==='all'){
            setFoodData(responseData)
            // return;
            // }

            // setMenuList(responseData.filter(menu=> menu.menu_name===category))

        } catch (err) {
            console.log(err);
            toast.error(err.message);
        }


    }

    useEffect(() => {


        getFoodData();
        getCartItems();

    }, []);


    const getCartItems = async () => {
        const cartItems = await apiGanerator('cart', 'GET');

        setCartItem(cartItems);
       
    }

    const getItemCartQuantity = async (foodId) => {
        const itemCartQuantity = await apiGanerator('cart?id=' + foodId);


        return itemCartQuantity[0]?.quantity || 0;
    }

    const addCartItem = async (cartItem) => {
        try {

            const isItemInCart = await apiGanerator('cart?_id=' + cartItem._id);

            // console.log(isItemInCart[0]._id)

            let responseData;

            if (isItemInCart.length <= 0) {
                responseData = await apiGanerator('cart', "POST", { ...cartItem, id: cartItem._id, quantity: 1 });

            }
            else {
                responseData = await apiGanerator('cart/' + isItemInCart[0].id, "PATCH", { quantity: isItemInCart[0].quantity + 1 });
            }

            getCartItems();



        } catch (err) {
            console.log(err);
            toast.error(err.message);
        }
    }

    const desCartItem = async (cartItem) => {
        try {

            const itemInCart = await apiGanerator('cart?_id=' + cartItem._id);

            let responseData;

            if (itemInCart[0].quantity == 1) {
                responseData = await apiGanerator('cart/' + itemInCart[0].id, "DELETE");
            } else {
                responseData = await apiGanerator('cart/' + itemInCart[0].id, "PATCH", { quantity: itemInCart[0].quantity - 1 });
            }


            getCartItems();





        } catch (err) {
            console.log(err);
            toast.error(err.message);
        }
    }

    const removeCartItem = async (foodId) => {
        try {

            const itemInCart = await apiGanerator('cart?id=' + foodId);

            let responseData;


            responseData = await apiGanerator('cart/' + itemInCart[0].id, "DELETE");

            getCartItems();



        } catch (err) {
            console.log(err);
            toast.error(err.message);
        }
    }




    const contextValue = {
        foodData,
        cartItem,
        getCartItems,
        getItemCartQuantity,
        addCartItem,
        desCartItem,
        removeCartItem
    };



    return (
        <StoreContext.Provider value={contextValue}>

            {children}

        </StoreContext.Provider>
    )



}

export default StoreContextProvider;