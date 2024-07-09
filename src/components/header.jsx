// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import logo from "../assets/images/logo.svg";
// import Addcart from "./addcart";
// import Cart from "./cart";
// import { FaSearch, FaUser, FaShoppingCart } from 'react-icons/fa';

// const Header = () => {
//   const links = [
//     { label: "Shop", url: "/" },
//     { label: "Back To School", url: "/backtoschool" },
//     { label: "About", url: "/about" },
//   ];

//   const [isCartOpen, setIsCartOpen] = useState(false);
//   const [isNestedCartOpen, setIsNestedCartOpen] = useState(false);

//   const toggleAddCartDropdown = () => {
//     setIsCartOpen(!isCartOpen);
//   };

//   const toggleNestedCartDropdown = () => {
//     toggleAddCartDropdown(false)
//     setIsNestedCartOpen(!isNestedCartOpen);
//   }


 
//   return (
//     <div className="h-28 border-b border-customMarsland cursor-pointer">
//       <p className="flex items-center justify-center h-11 bg-customJana text-base font-normal ">
//         20% off when you sign up to email
//       </p>
//       <nav className="flex items-center justify-between bg-customPurity p-6 text-base font-normal container w-[100%] max-w-[90%] mx-auto md:px-5">
//         <img src={logo} alt="logo" />
//         <div className="flex items-center font-400 justify-center gap-9 hover:underline  hover:border-customMarsland hover:font-bold ">
//           {links.map(({ label, url }) => (
//             <Link to={url} key={url}>
//               {label}
//             </Link>
//           ))}
//         </div>

//         <div className="flex items-center justify-center gap-9 ">
//           <p>Search</p>
//           <p>Account</p>
//           <button onClick={toggleAddCartDropdown} className="text-2xl relative">
//             Cart 0
//           </button>
//           {isCartOpen && (
            
//             <Addcart isOpen={isCartOpen} toggleSidebar={toggleAddCartDropdown} toggleNestedCartDropdown={toggleNestedCartDropdown} />
//           )}
//           {isNestedCartOpen && (
//             <Cart isOpen={isNestedCartOpen}  setIsNestedCartOpen={setIsNestedCartOpen} />
//           )}
//         </div>

//         <div className="hidden md:flex space-x-4">
//           <a href="/search" className="text-white hover:text-gray-300">
//             <FaSearch />
//           </a>
//           <a href="/account" className="text-white hover:text-gray-300">
//             <FaUser />
//           </a>
//           <a href="/cart" className="text-white hover:text-gray-300">
//             <FaShoppingCart />
//           </a>
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default Header;

import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/images/logo.svg";
import Addcart from "./addcart";
import Cart from "./cart";
import { FaSearch, FaUser, FaShoppingCart } from 'react-icons/fa';

const Header = () => {
  const links = [
    { label: "Shop", url: "/" },
    { label: "Back To School", url: "/backtoschool" },
    { label: "About", url: "/about" },
  ];

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isNestedCartOpen, setIsNestedCartOpen] = useState(false);

  const toggleAddCartDropdown = () => {
    setIsCartOpen(!isCartOpen);
  };

  const toggleNestedCartDropdown = () => {
    setIsNestedCartOpen(!isNestedCartOpen);
  };

  return (
    <div className="h-32 border-b border-customMarsland cursor-pointer">
      <p className="flex items-center justify-center h-11 bg-customJana text-base font-normal ">
        20% off when you sign up to email
      </p>
      <nav className="flex items-center justify-between bg-customPurity p-6 text-base font-normal container w-[100%] max-w-[90%] mx-auto md:px-5">
        <div>
          <Link to="/">
        <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className="hidden md:flex items-center font-400 justify-center gap-9 ">
          {links.map(({ label, url }) => (
            <NavLink to={url} key={url} className={({ isActive }) => 
              isActive ? "underline border-customMarsland font-bold" : "hover:underline  hover:border-customMarsland hover:font-bold"
            }>
              {label}
            </NavLink>
          ))}
        </div>
        <div className=" hidden md:items-center justify-center gap-9 lg:flex">
          <p>Search</p>
          <p>Account</p>
          <button onClick={toggleAddCartDropdown} className=" relative">
            Cart 0
          </button>
          {isCartOpen && (
            <Addcart isOpen={isCartOpen} toggleSidebar={toggleAddCartDropdown} toggleNestedCartDropdown={toggleNestedCartDropdown} />
          )}
          {isNestedCartOpen && (
            <Cart isOpen={isNestedCartOpen} setIsNestedCartOpen={setIsNestedCartOpen} />
          )}
        </div>
        <div className="flex items-center lg:hidden gap-4">
          <Link to="/search" className="text-black hover:text-gray-300">
        <img src="../images/search-normal.svg" alt="img" />
          </Link>
          <Link to="/account" className="text-black hover:text-gray-300">
           <img src="../images/profile.svg" alt="" />
          </Link>

          <button onClick={toggleAddCartDropdown} className="text-2xl flex gap-2 items-center">
           <span className="hidden">Cart</span><img src="../images/shopping-bag.svg" alt="img" /><span className="text-4xl">0</span>
          </button>
          {isCartOpen && (
            <Addcart isOpen={isCartOpen} toggleSidebar={toggleAddCartDropdown} toggleNestedCartDropdown={toggleNestedCartDropdown} />
          )}
          {isNestedCartOpen && (
            <Cart isOpen={isNestedCartOpen} setIsNestedCartOpen={setIsNestedCartOpen} />
          )}
          
          <div><img src="../images/menu.svg" alt="img" /></div>
        </div>
      </nav>
    </div>
  );
};

export default Header;

