import React, { createContext, useContext } from "react";
import all_products from "../components/assets/all_products";

const ShopContext = createContext(null);

export const useShopContext = () => useContext(ShopContext);

const ShopContextProvider = (props) => {
    const contextValue = { all_products };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export  default ShopContextProvider;