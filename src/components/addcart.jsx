import React, { useState } from "react";
import { CgCloseR } from "react-icons/cg";
import Cart from './cart';
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Addcart = ({ isOpen, toggleSidebar, toggleNestedCartDropdown }) => {
  const {state}   = useCart()
  const {items}   = state
  return (
    <>
      <div
        className={`absolute top-[7rem] right-0  bg-customBlazeHaze shadow-lg transform transition-transform z-10  ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-4 md:">
          <div className=" bg-customBlazeHaze px-6 py-3">
            <div className="flex items-center justify-between mb-5 mt-2">
              
          <p className=" font-medium text-2xl text-customMarsland ">
                Added to Cart
              </p>
              <button
                onClick={toggleSidebar}
                className="text-black text-2xl p-4"
              >
                <CgCloseR />
              </button>
            </div>
            {items.length > 0 ? (items.map(item =>(
                <div className="flex items-center justify-center gap-6  mb-12">
                <img
                  src={item.image}
                  alt="cart-img"
                  className=" rounded w-[180px]"
                />
                <div className="flex flex-col gap-3">
                  <h2 className="font-medium text-customMarsland pb-3 text-[20px] leading-8">
                    {item.name} | <br /> XL
                  </h2>
                  <p className="font-normal text-base text-[#525151]">
                    Color: Navy blue
                  </p>
                  <p className="font-normal text-base text-[#525151]">
                    Size: Xl{" "}
                  </p>
                  <p className="font-bold text-base">${item.price}</p>
                </div>
              </div>
            ) )):(<div>Cart is empty</div>)}
          

           {items.length>0 && <button onClick={toggleNestedCartDropdown} className="px-[20px] py-[13px] w-full bg-customMarsland font-bold text-base text-center mb-6 text-customJana ">
              View Cart
            </button>}
            <p className="underline text-customMarsland text-center mb-6 text-base">
              Continue Shopping
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Addcart;
