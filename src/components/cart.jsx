import React from "react";
import { CgCloseR } from "react-icons/cg";
import { LuMinus } from "react-icons/lu";
import { LuPlus } from "react-icons/lu";

const Cart = () => {
  return (
    <div className="w-[840px] h-[650px] bg-customBlazeHaze">
      <div className="flex items-center justify-between mb-5 mt-2">
        <p className="font-medium text-2xl text-customMarsland"> Cart </p>
        <CgCloseR />
      </div>
      <div className="flex items-center justify-between">
        <div className="px-[440px] py-[160px] flex items-center justify-center gap-2">
          <img
            src="../images/bag1"
            alt="cart-img"
            className="px-[180px] py-[180px] rounded"
          />
          <div className="flex flex-col gap-3">
            <h2 className="font-medium text-customMarsland text-[20px]">
              Herschel Heritage Backpack | XL
            </h2>
            <p className="font-normal text-base text-[#525151]">
              Color: Navy blue
            </p>
            <p className="font-normal text-base text-[#525151]">Size: Xl </p>
            <p className="font-bold text-base">$200</p>
          </div>
        </div>

        <div className="border px-[117px] py-[45px] flex items-center justify-around text-center p-6">
          <LuMinus />
          <p>1</p>
          <LuPlus />
        </div>
      </div>

      <p className="underline mb-10">Remove item</p>

      <div className="mb-6">
        <div className="flex items-center justify-between text-lg font-normal">
          <p>Subtotal:</p>
          <p>$200</p>
        </div>
        <div className="flex items-center justify-between text-lg font-normal">
          <p>Tax:</p>
          <p>$5</p>
        </div>
        <div className="flex items-center justify-between text-lg font-bold">
          <p>Total</p>
          <p>$250</p>
        </div>
      </div>

      <button className="bg-customMarsland text-center text-customBlazeHaze px-[350px] py-[13px] ">Check Out</button>
    </div>
  );
};

export default Cart;
