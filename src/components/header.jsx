import React from "react";
import { Link } from "react-router-dom";
import logo from '../assets/images/logo.svg'

const Header = () => {
  const links = [
    { label: "Shop", url: "/" },
    { label: "Back To School", url: "/backtoschool" },
    { label: "About", url: "/about" },
  ];

  return (
    <div className="h-28 border-b border-customMarsland cursor-pointer">
        <p className="flex items-center justify-center h-11 bg-customJana text-base font-normal ">20% off when you sign up to email</p>
      <nav className="flex items-center justify-between bg-customPurity p-6 text-base font-normal container w-[100%] max-w-[90%] mx-auto">
        <img src={logo} alt="logo" />
        <div  className="flex items-center font-400 justify-center gap-9 hover:underline  hover:border-customMarsland hover:font-bold ">
        {links.map(({ label, url }) => (
          <Link to={url} key={url}>
            {label}
          </Link>
        ))}
        </div>
  
        <div className="flex items-center justify-center gap-9 ">
            <p>Search</p>
            <p>Account</p>
            <p>Cart 0</p>
        </div>
      </nav>
    </div>
  );
};

export default Header;
