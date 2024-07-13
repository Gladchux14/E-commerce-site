import React, { useContext, useEffect, useState } from "react";
import Shoppingcard from "./shoppingcard";
import { shoppingItems } from "../../data";
import { useQuery } from "@tanstack/react-query";
import { useApp } from "../context/AppContext";
import Counter from "./counter";

const fetchProducts = async ({ queryKey }) => {
  const [, orgId, appId, apiKey, page, size] = queryKey;
  const url = `/api/products?organization_id=${orgId}&reverse_sort=false&page=${page}&size=${size}&Appid=${appId}&Apikey=${apiKey}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }
  return response.json();
};

const Products = () => {
  const apiKey = import.meta.env.VITE_API_KEY;
  const orgId = import.meta.env.VITE_ORG_ID;
  const appId = import.meta.env.VITE_APP_ID;
  const appUrl = import.meta.env.VITE_API_URL;
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(10);
  const [allProducts, setAllProducts] = useState([]);
  const {total, setTotal}  = useApp()
  const [count, setcount]    = useState(10)

  const { data:products, isLoading, isError } = useQuery({
    queryKey: ["products", orgId, appId, apiKey, page, size],
    queryFn: fetchProducts,
    keepPreviousData: true,
  });

  useEffect(() => {
    if (products) {
      setAllProducts((prevProducts) => [...prevProducts, ...products.items]);
    
    }
    if (products){
      setTotal(products.total)
    }
  }, [products]);

  const handleViewMore = () => {
    setPage((prevPage) => prevPage + 1);
    setcount(count + products.items.length)
  };

  if (isLoading) return <div>Loading....</div>;
  if (isError) return <div>Error loading products</div>;


 

  if (isLoading) return <div>Loading....</div>;

 

  // const shoppingItems = [
  //     { id: 1, image:'/images/bag1.png', text: 'Herschel Heritage Backpack | XL', rating: 4.5, price: '$200' },
  //     { id: 2, image: '/images/bag2.png', text: 'Little American Backpack | Premium  Classics - 30l', rating: 4.5, price: '$245' },
  //     { id: 3, image: '/images/bag3.png', text: 'Retreat™ Backpack 23L', rating: 4.5, price: '$300' },
  //     { id: 4, image:'/images/bag4.png', text: 'Kasio Backpack | Tech-30L', rating: 4.5, price: '$320' },
  //     { id: 5, image: '/images/bag5.png', text: 'Kasio Backpack | Sch - 30L', rating: 4.5, price: '$240' },
  //     { id: 6, image: '/images/bag6.png', text: 'Little America Backpack | Sch - 30L', rating: 4.5, price: '$130' },
  //     { id: 7, image:'/images/bag7.png', text: 'Little America Backpack | Classics - 30L', rating: 4.5, price: '$200' },
  //     { id: 8, image: '/images/bag8.png', text: 'Kasio Backpack |  Sch -XL', rating: 4.5, price: '$245' },
  //     { id: 9, image: '/images/bag9.png', text: 'Cosmoa Backpack | Travel - 30L', rating: 4.5, price: '$400' },
  //   ];

  return (
    <>
    <div className=" py-8 ">
      <div className="grid lg:grid-cols-3 grid-cols-2">
        {allProducts && allProducts.map ((item, index) =>   {
          return (
  
      <Shoppingcard
        key={item.id}
        id={item.id}
        image={item.photos[0].url}
        text={item.name}
        rating={item.rating}
        price={item.current_price[0].LRD? item.current_price[0].LRD[0]: 200}
        />
)})}
      
      </div>
    </div>
    <div className=" flex items-center justify-center ">
    <Counter handleViewMore = {handleViewMore} count = {count} total= {total} />
  </div>
    </>
  );
};

export default Products;
