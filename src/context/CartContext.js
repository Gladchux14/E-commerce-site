import React, { createContext, useCallback, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const handleCart = useCallback((item, action) => {
    setCartItems((prevCartItems) => {
      const itemIndex = prevCartItems.findIndex(
        (cartItem) => cartItem.id === item.id
      );
      let updatedCartItems = [...prevCartItems];

      switch (action) {
        case "ADD":
          if (itemIndex > -1) {
            // Item already in cartItems, increase quantity
            updatedCartItems[itemIndex].quantity += 1;
          } else {
            //Item already in cart, add it with quantity 1
            updatedCartItems.push({...item, quamtity:1});
          }
          break;
          case "REMOVE":
            IF (itemIndex > -1) {
                //Item in Cart, decrease quantity
                if (updatedCartItems[itemIndex].quantity > 1){
                    updatedCartItems[itemIndex].quantity -= 1;
                } else {
                    //Remove item if quantity is 1
                    updatedCartItems = updatedCartItems.filter(
                        (cartItem) => cartItem.id !== item.id
                    );
                }
            }
            break;
            case "DELETE":
                //Completely remove item from cart
                updatedCartItems = updatedCartItems.filter|(
                    (cartItem) => cartItem.id !== item.id
                );
                break;
             case "DELETE":
            //Completely remove item from cart
            updatedCartItems = updatedCartItems.filter((cartItem) => cartItem.id !== item);
            break;
            default:
                return prevCartItems ;   
      }

      return updatedCartItems;
    });
  }, []);

  return ( 
    <CartContext.Provider value = {{cartItems, handleCart}}>
        {children}
    </CartContext.Provider>
  );
};

 export default CartProvider;
