import React from "react";
import { IoIosStar } from "react-icons/io";
import Desc from "./desc";
import SizeDetails from "./SizeDetails";
import Counter from "./counter";
import Reviews from "./reviews";
import Shoppingcard from "./shoppingcard";

const Productdetails = () => {
  const shoppingItems = [
    {
      id: 1,
      image: "/images/bag4.png",
      text: "Herschel Heritage Backpack | XL",
      rating: 4.5,
      price: "$200",
    },
    {
      id: 2,
      image: "/images/bag5.png",
      text: "Herschel Heritage Backpack | XL",
      rating: 4.5,
      price: "$200",
    },
    {
      id: 3,
      image: "/images/bag6.png",
      text: "Herschel Heritage Backpack | XL",
      rating: 4.5,
      price: "$200",
    },
  ];

  return (
    <div className="pt-8">
      <div className="grid grid-cols-[60%_40%]">
        <div className="flex gap-2 ">
          <div className="flex-grow ">
            <img src="/images/bag1.png" alt="bag-img" className="w-full" />
          </div>

          <div className="flex flex-col w-[95px] gap-2 ">
            <img src="/images/img1.png" alt="img" />
            <img src="/images/img2.svg" alt="img" />
            <img src="/images/img3.svg" alt="img" />
            <img src="/images/img4.svg" alt="img" />
            <img src="/images/img5.svg" alt="img" />
          </div>
        </div>

        <div className="px-10">
          <p className="text-xl mb-4 font-light text-[#525151]  ">
            Shop / Heritage
          </p>
          <p className="text-4xl mb-4 ">Herschel Heritage Backpack | XL</p>
          <p className="text-4xl font-bold">$ 200</p>
          <div className="flex items-center justify-start gap-3 text-2xl mb-6 pb-4 mt-3">
            <IoIosStar className="text-customTiaMaris" />
            <p>4.5</p>
            <span className="underline">Reviews</span>
          </div>
          <hr />
          <p className="mt-3 mb-8 pb-3 text-lg font-medium">
            Available Color: Black 7 Brown{" "}
          </p>

          <div className="flex gap-3 items-center justify-center mb-8">
            <button className="py-[13px] px-[80px] gap-[10] font-bold text-[#FFFF] text-center bg-black">
              Add to Cart $200
            </button>
            <button className="py-[13px] px-[42px] border-[0.7] bg-white  gap-[10] text-center">
              Buy Now $200
            </button>
          </div>
          <p className="text-center text-[#525151]  mb-6 ">
            Free shipping over $500
          </p>
          <hr />
          <Desc />
          <hr />
          <SizeDetails />
          <hr />

          <div className="flex items-center justify-start gap-6 pb-4 pt-6">
            <p className="underline font-medium">Shipping</p>
            <p>Warranty</p>
            <p>Returns</p>
          </div>
          <p className="text-[#525151] flex justify-start text-base ">
            Shipment takes between 2-3days of orders{" "}
          </p>
        </div>
      </div>

      <div className="mt-40">
        <p className="font-medium text-[32px] pb-6">Things you might like</p>
        <div className="grid grid-cols-3">
          {shoppingItems.map((item) => (
            <Shoppingcard
              key={item.id}
              image={item.image}
              text={item.text}
              rating={item.rating}
              price={item.price}
            />
          ))}
        </div>
        <div className="flex items-center justify-end">
        <Counter />
        </div>
      </div>
      <Reviews />
    </div>
  );
};

export default Productdetails;
