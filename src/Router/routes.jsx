import React from 'react'
import Rootpage from '../pages/rootpage';
import Shop from '../pages/shop';
import Productdetails from '../components/productdetails';
const routes = [
    {
      path: '/',
      element: <Rootpage />,
      children: [
        {
          index: true,
          element: <Shop />,
        },
        {
            path: 'shop',
            element: <Productdetails />,
          },
      ],
    },
  ];


export {routes};