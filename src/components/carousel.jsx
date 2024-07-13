import React, { useState } from 'react'

const Carousel = () => {
    const [active, setActive] = useState (0);
    const currentImage = images [currentIndex];

    const previewImages = [
        currentImage,
        "/images/bag5.png",
        "/images/bag6.png",
        "/images/bag7.png",
        "/images/bag8.png",
        "/images/bag9.png",
    ];

    const defaultProps = {
        images: ["http://pets-images.dev-apis.com/pets/none.jpg"]
    }

    const handleIndexClick = (event) => {
        setActive(+event.target.dataset.index);
    };


  return (
    <div className='flex flex-col md:flex-row gap-2'>
        <div className="flex-grow ">
        <img src={previewImages[active]} alt="bag-img" className="w-full" />
      </div>

      <div className="flex md:flex-col w-[95px] gap-2 ">
        {previewImages.map((photo, index) => (
          <img
            key={photo}
            src={photo}
            className={index === active ? "active" : ""}
            alt="bag thumbnail"
            onClick={handleIndexClick}
            data-index={index}
          />
        ))}
      </div> 
    </div>
  )
}

export default Carousel;