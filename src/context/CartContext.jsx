import React, { createContext, useContext, useReducer } from 'react';

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        items: state.items.some(item => item.id === action.payload.id)
          ? state.items.map(item =>
              item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
            )
          : [...state.items, { ...action.payload, quantity: 1 }],
      };
    case 'INCREMENT':
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload ? { ...item, quantity: item.quantity + 1 } : item
        ),
      };
    case 'DECREMENT':
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        ),
      };
    case 'REMOVE':
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload),
      };
    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, { items: [] });

  const addToCart = product => dispatch({ type: 'ADD_TO_CART', payload: product });
  const increment = id => dispatch({ type: 'INCREMENT', payload: id });
  const decrement = id => dispatch({ type: 'DECREMENT', payload: id });
  const remove = id => dispatch({ type: 'REMOVE', payload: id });

  const subtotal = state.items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <CartContext.Provider value={{ state, addToCart, increment, decrement, remove, subtotal }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
