import React from "react";
import logo from "../assets/images/logo.svg";

const Checkout = () => {
  return (
    <div className="p-6">
      <div className="bg-customJana border-b-2 h-[60px]">
        <img src={logo} alt="logo" />
      </div>

      <div>
        <div>
          <p>Express checkout</p>
          <div className="flex items-center justify-between">
            <button>
              {" "}
              <img src="../images/paypal.svg" alt="paypal logo" />
            </button>
            <button>
              <img src="../images/apple pay" alt="applepay logo" />
            </button>
            <button>
              {" "}
              <img src="../images/google pay" alt="googlepay logo" />
            </button>
          </div>
          <div>
            <label htmlFor="customerinfo">Customer Information</label>{" "}
            <p>edit</p>
          </div>
          <input type="text" placeholder="jDanet@gmail.com" />

          <div>
            <label htmlFor="address">Shipping Address</label>{" "}
            <p>edit details</p>
          </div>
          <div>
            <input type="text" placeholder="Janet" />
            <input type="text" placeholder="Doe" />
          </div>
          <input
            type="text"
            placeholder="2517 W.Gray St. Utica .Pennsylvania 57867"
          />
          <input type="text" placeholder="Pembrooke pines" />

          <div>
            <select name="location" id="locations">
              United States
            </select>
            <select name="location" id="locations">
              Georgia
            </select>
          </div>
          <div>
            <input type="number" placeholder="42574" />
            <input type="number" placeholder="41748" />
          </div>

          <div className="flex items-center justify-between">
            <p>Delivery Options</p>
            <p className="text-customTiaMaris">edit choice</p>
          </div>
          <div className="flex items-center justify-center gap-3">
            <div className="border-2  ">
              <p>Home delivery</p>
              <p>takes 3-5 business day</p>
            </div>
            <div className="border">
              <p>In-store pickup</p>
              <p>pick from store location</p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <p>Order Summary</p>
        <p className="underline">Edit Cart</p>

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
            <p className="font-normal text-base text-[#525151]">Qty: 1 </p>
            <p className="font-bold text-base">$200</p>
          </div>
        </div>
        <hr />

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
        <hr />
        <p>Payment options</p>
        <div>
          <span className="p-2 border"></span>
          <span>
            <p>Direct bank transfer</p>
            <p> Make payment directly through bank account</p>
          </span>
        </div>

        <div>
          <span className="p-2 border"></span>
          <span>
            <p>
              Credit/Debit card{" "}
              <img src="../images/Group 70.svg" alt="card logo" />
            </p>
            <p> pay with your Visa, American Express or Mastercard.</p>
          </span>
        </div>

        <div>
          <input type="text"  placeholder="Card holder name"/>
          <input type="text" placeholder="Card number" />
          <input type="text"  placeholder="Expiry date"/>
          <input type="text"  placeholder="Security code (CVV)"/>
        </div>

        <button className=" px-[160px] py-[13px] bg-customMarsland text-center text-base text-customBlazeHaze">Make Payment</button>
      </div>
    </div>
  );
};

export default Checkout;
