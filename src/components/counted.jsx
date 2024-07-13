import React, { useState } from 'react';
import { useCart } from '../context/CartContext';

const Counted = ({quantity, id}) => {
  const { increment, decrement } = useCart();
  

  return (
    <div className="flex items-center border justify-center p-4">
      <button
        onClick={()=>decrement(id)}
        className=" text-black  px-4 py-2 rounded-l  focus:outline-none"
      >
        -
      </button>
      <span className="px-4 py-2 ">{quantity}</span>
      <button
        onClick={()=>increment(id)}
        className=" text-black px-4 py-2 rounded-r  focus:outline-none"
      >
        +
      </button>
    </div>
  );
};

export default Counted;
