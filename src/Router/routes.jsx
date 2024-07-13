import React from 'react'
import Rootpage from '../pages/rootpage';
import Shop from '../pages/shop';
import Productdetails from '../components/productdetails';
import Checkout from '../pages/checkout';
import { Outlet } from "react-router-dom";

const routes = [
    {
      path: '/',
      element: <Rootpage />,
      children: [
        {
          path:"/",
          element: <Shop />,
        },
        {
          path: "shop",
          element: <Outlet />,
          children: [{ path: ":id", element: <Productdetails /> }],
        },
        {
            path: 'checkout',
            element: <Checkout/>,
          },
          
      ],
    },
  ];


export {routes};