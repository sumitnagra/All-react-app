import { createContext } from "react";
import finalProduct from "./product";
import { useState } from "react";

export const ShopContext = createContext(null);

const getDefaultcart = () => {
    let cart = {};
    for (let i = 1; i < finalProduct.length + 1; i++) {
        cart[i] = 0;
    }
    return cart;
}
export const ShopContextprovider = (props) => {
    const [cartItem, setrCartItem] = useState(getDefaultcart())
    const addTocart = (id) => {
        setrCartItem((prev) => ({ ...prev, [id]: prev[id] + 1 }))
    };
    const removeFromCart = (id) => {
        setrCartItem((prev) => ({ ...prev, [id]: prev[id] - 1 }))
    };
   
    console.log(cartItem)
    return (

        <ShopContext.Provider value={{cartItem,addTocart,removeFromCart}}>{props.children}</ShopContext.Provider>
    )

}