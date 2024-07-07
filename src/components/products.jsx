import React from 'react';
import Shoppingcard from './shoppingcard';


const Products = () => {
    const shoppingItems = [
        { id: 1, image:'/images/bag1.png', text: 'Herschel Heritage Backpack | XL', rating: 4.5, price: '$200' },
        { id: 2, image: '/images/bag2.png', text: 'Herschel Heritage Backpack | XL', rating: 4.5, price: '$200' },
        { id: 3, image: '/images/bag3.png', text: 'Herschel Heritage Backpack | XL', rating: 4.5, price: '$200' },
        { id: 4, image:'/images/bag4.png', text: 'Herschel Heritage Backpack | XL', rating: 4.5, price: '$200' },
        { id: 5, image: '/images/bag5.png', text: 'Herschel Heritage Backpack | XL', rating: 4.5, price: '$200' },
        { id: 6, image: '/images/bag6.png', text: 'Herschel Heritage Backpack | XL', rating: 4.5, price: '$200' },
        { id: 7, image:'/images/bag7.png', text: 'Herschel Heritage Backpack | XL', rating: 4.5, price: '$200' },
        { id: 8, image: '/images/bag8.png', text: 'Herschel Heritage Backpack | XL', rating: 4.5, price: '$200' },
        { id: 9, image: '/images/bag9.png', text: 'Herschel Heritage Backpack | XL', rating: 4.5, price: '$200' },
      ];

  return (
    <div className=" py-8">
      <div className="grid grid-cols-3">
        {shoppingItems.map(item => (
          <Shoppingcard
            key={item.id}
            image={item.image}
            text={item.text}
            rating={item.rating}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
