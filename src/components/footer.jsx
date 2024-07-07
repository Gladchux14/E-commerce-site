import React from "react";
// import footerlogo from "../assets/images/footerlogo.svg";

const Footer = () => {
  return (
    <div className="bg-customPurity  h-[514px] flex flex-col justify-center px-5">
        <div className="flex gap-10 justify-between container w-[100%] max-w-[90%] mx-auto">
      <div className="flex items-end gap-3 ">
        <p>Shop All</p>
        <p>Back To School</p>
        <p>About</p>
      </div>
      <div className="flex flex-col justify-end">
        <div className="w-[435px] h-[133px] mb-6">
        <img src={"/images/footerlogo.svg"} alt="footer-logo" className="w-full " />
        </div>
        <div className="flex items-center justify-center gap-5 mb-5 ">
          <input
            type="text"
            name="mail"
            id="mail"
            placeholder="Enter your mail"
            className=" border-b border-customMarsland w-80 h-10 items-end                                     "
            />
          <button className="bg-customMarsland text-[#f7f7f7] px-3 py-6 w-[118px] h-[38px] gap-2 rounded ">Subscribe</button>
        </div>
        <p className=" text-center text-xs">Terms & Privacy.2024 Aurelius.All rights reserved</p>
      </div>

      <div className="flex items-end gap-8">
        <p>Instagram</p>
        <p>Tik tok</p>
        <p>Contact</p>
      </div>
           
      </div>
    </div>
  );
};

export default Footer;
