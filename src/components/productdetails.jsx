import React, { useContext, useEffect, useState } from "react";
import { IoIosStar } from "react-icons/io";
import Desc from "./desc";
import SizeDetails from "./SizeDetails";
import Counter from "./counter";
import Reviews from "./reviews";
import Shoppingcard from "./shoppingcard";
import Addcart from "./addcart";
import { useParams } from "react-router-dom";
import Carousel from "./carousel";
import { useQuery } from "@tanstack/react-query";
import  { useCart } from "../context/CartContext";

const fetchProduct = async ({ queryKey }) => {
  const [, id, orgId, appId, apiKey] = queryKey;
  const url = `/api/products/${id}?organization_id=${orgId}&Appid=${appId}&Apikey=${apiKey}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Failed to fetch product");
  }
  return response.json();
};

const fetchProducts = async ({ queryKey }) => {
  const [, orgId, appId, apiKey, page, size] = queryKey;
  const url = `/api/products?organization_id=${orgId}&reverse_sort=false&page=${page}&size=${size}&Appid=${appId}&Apikey=${apiKey}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }
  return response.json();
};


const Productdetails = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const { id } = useParams();
  const apiKey = import.meta.env.VITE_API_KEY;
  const orgId = import.meta.env.VITE_ORG_ID;
  const appId = import.meta.env.VITE_APP_ID;
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(3);
  const { data: product, isLoading } = useQuery({
    queryKey: ["product", id, orgId, appId, apiKey],
    queryFn: fetchProduct,
  });
  
  const { data: products, isLoading: isProductsLoading } = useQuery({
    queryKey: ["products", orgId, appId, apiKey, page, size],
    queryFn: fetchProducts,
  });
  const {state:cartItems, addToCart}   = useCart()

  console.log(cartItems,"state")
  if (isLoading) return <div>Loading....</div>;

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // const shoppingItems = [
  //   {
  //     id: 1,
  //     image: "/images/bag4.png",
  //     text: "Herschel Heritage Backpack | XL",
  //     rating: 4.5,
  //     price: "$200",
  //   },
  //   {
  //     id: 2,
  //     image: "/images/bag5.png",
  //     text: "Herschel Heritage Backpack | XL",
  //     rating: 4.5,
  //     price: "$200",
  //   },
  //   {
  //     id: 3,
  //     image: "/images/bag6.png",
  //     text: "Herschel Heritage Backpack | XL",
  //     rating: 4.5,
  //     price: "$200",
  //   },
  // ];

  console.log(product)

  return (
    <div className="pt-8 relative">
      {product ? (
        <div className="lg:grid lg:grid-cols-[60%_40%] flex flex-col">
          <Carousel images={product.photos} />

          {/* <div className="flex gap-2  flex-col md:flex-row">
          <div className="flex-grow ">
            <img src="/images/bag1.png" alt="bag-img" className="w-full" />
          </div>
          ll
          <div className="flex md:flex-col md:w-[95px] gap-2 flex-wrap flex-row mt-5 mb-40">
            <img src="/images/img1.png" alt="img" />
            <img src="/images/img2.svg" alt="img" />
            <img src="/images/img3.svg" alt="img" />
            <img src="/images/img4.svg" alt="img" />
            <img src="/images/img5.svg" alt="img" />
          </div>
        </div> */}

          <div className="px-10">
            <p className="text-xl mb-4 font-light text-[#525151] md:pb-7 ">
              Shop / {product.name}
            </p>
            <p className="text-4xl mb-4 ">{product.name} | XL</p>
            <p className="text-4xl font-bold">
              $ {product.current_price ? product.current_price[0].LRD[0] : 200}
            </p>
            <div className="flex items-center justify-start gap-3 text-2xl mb-6 pb-4 mt-3">
              <IoIosStar className="text-customTiaMaris" />
              <p>{product.extra_infos[0].value}</p>
              <span className="underline">Reviews</span>
            </div>
            <hr />
            <p className="mt-3 mb-8 pb-3 text-lg text-customMarsland font-medium">
              Available Color: Black 7 Brown
            </p>

            <div className="flex gap-4  mb-8">
              <button className="p-[13px] w-full gap-[10] font-bold text-nowrap text-[#FFFF] bg-black" onClick={() => addToCart({
                name: product.name,
                price: product.current_price ? product.current_price[0].LRD[0] : 200,
                image: `/api/images/${product.photos[0].url}`,
                id: product.id,
              })}>
                Add to Cart $
                {product.current_price ? product.current_price[0].LRD[0] : 200}
              </button>

              <button className="p`-[13px] w-full border-[0.7] bg-white  text-nowrap  gap-[10]">
                Buy Now {product.name}
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
              Shipment takes between 2-3days of orders
            </p>
          </div>
        </div>
      ) : (
        <div>No product found</div>
      )}

      <div className="mt-40">
        <p className="font-medium text-[32px] pb-6 md:text-[24px]">
          Things you might like
        </p>
        <div className="grid grid-cols-3">
          {isProductsLoading && <div>Loading..</div>}
          {products &&
            products.items.map((item) => {
              return (
                <Shoppingcard
                  key={item.id}
                  id={item.id}
                  image={item.photos[0].url}
                  text={item.name}
                  rating={item.rating}
                  price={
                    item.current_price[0].LRD
                      ? item.current_price[0].LRD[0]
                      : 200
                  }
                />
              );
            })}
          {/* {bags &&
            bags
              .slice(0, 3)
              .map((item, index) => (
                <Shoppingcard
                  key={item.id}
                  image={item.images[index]}
                  text={item.text}
                  rating={item.rating}
                  price={item.price}
                />
              ))} */}
        </div>
        <div className="flex items-center w-full justify-end">
          <Counter details={true} />
        </div>
      </div>
      <Reviews />
    </div>
  );
};

export default Productdetails;
