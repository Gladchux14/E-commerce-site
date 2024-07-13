import React from "react";
import { CgCloseR } from "react-icons/cg";
import { LuMinus } from "react-icons/lu";
import { LuPlus } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import Counted from "./counted";
import { useCart } from "../context/CartContext";

const Cart = ({ setIsNestedCartOpen }) => {
  const { state, increment, decrement, remove:removeItem, subtotal } = useCart();
  const { items } = state;
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate("/checkout");
  };

  return (
    <div className="absolute  top-[7rem] right-0   bg-white shadow-lg ring-1 ring-black ring-opacity-5 z-20">
      <div className=" bg-customBlazeHaze px-14 py-3 md:px-10">
        <div className="flex items-center justify-between mb-10 mt-2">
          <p className="font-medium text-4xl text-customMarsland"> Cart </p>

          <button
            onClick={() => setIsNestedCartOpen(false)}
            className=" text-4xl text-left rounded"
            role="menuitem"
            tabIndex="-1"
          >
            <CgCloseR />
          </button>
        </div>
        {items.length > 0 ? (
          items.map((item) => (
            <div key={item.id}>
              <div className="flex items-center justify-between">
                <div className=" flex  justify-center gap-10">
                  <div>
                    <img
                      src={item.image}
                      alt="cart-img"
                      className=" rounded w-[180px]"
                    />
                  </div>

                  <div className="flex flex-col justify-start  gap-3">
                    <h2 className="font-medium text-customMarsland leading-8 text-[20px]">
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

                <Counted quantity={item.quantity} id={item.id}/>
                {/* <div className="border flex items-center justify-between text-center px-8 py-4 gap-4">
          <LuMinus />
          <p>1</p>
          <LuPlus />
          </div> */}
              </div>

              <button onClick={()=> removeItem(item.id)} className="underline mb-20 mt-8 text-[#525151]">Remove item</button>
            </div>
          ))
        ) : (
          <div>Cart is empty</div>
        )}

        <div className="mb-20">
          <div className="flex items-center justify-between text-lg font-normal">
            <p>Subtotal:</p>
            <p>${subtotal}</p>
          </div>
          <div className="flex items-center justify-between text-lg mt-8 font-normal">
            <p>Tax:</p>
            <p>$5</p>
          </div>
          <div className="flex items-center mt-10 mb-20 justify-between text-lg font-bold">
            <p>Total</p>
            <p>${subtotal + 5}</p>
          </div>
        </div>

        <button
          onClick={handleCheckout}
          className="bg-customMarsland text-center text-nowrap text-customBlazeHaze w-full py-[13px] text-lg font-bold mb-12 "
        >
          Check Out
        </button>
      </div>
    </div>
  );
};

export default Cart;
