import React from 'react'
import { CgCloseR } from "react-icons/cg";

const Addcart = () => {
  return (
    <div className='w-[545px] h-[502px] bg-customBlazeHaze px-6 py-3'>
        <div className='flex items-center justify-between mb-5 mt-2'>
            <p className='font-medium text-2xl text-customMarsland'>Added to Cart </p>
            <CgCloseR />
        </div>

        <div className='px-[440px] py-[160px] flex items-center justify-center gap-2'>
            <img src="../images/bag1" alt="cart-img" className='px-[180px] py-[180px] rounded' />
            <div className='flex flex-col gap-3'>
                <h2 className='font-medium text-customMarsland text-[20px]'>Herschel Heritage Backpack | XL</h2>
                <p className='font-normal text-base text-[#525151]'>Color: Navy blue</p>
                <p className='font-normal text-base text-[#525151]'>Size: Xl </p>
                <p className='font-bold text-base'>$200</p>
            </div>
        </div>

        <button className='px-[200px] py-[13px] bg-customMarsland font-bold text-base text-center text-customJana '>View Cart</button>
        <p className='underline text-customMarsland text-center text-base'>Continue Shopping</p>
    </div>
  )
}

export default Addcart;