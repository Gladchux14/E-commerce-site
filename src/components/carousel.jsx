import React, { useState } from 'react'

const Carousel = ({images}) => {
    const [active, setActive] = useState (0);
  

    const handleIndexClick = (event) => {
        setActive(+event.target.dataset.index);
    };


  return (
    <div className='flex gap-2  flex-col md:flex-row'>
        <div className="flex-grow ">
        <img src={`/api/images/${images[active].url}`} alt="bag-img" className="w-full" />
      </div>

      <div className="flex md:flex-col w-[95px] gap-2 flex-wrap ">
        {images && images.map((photo,index) => {
          return <div>
            <img
            key={photo.filename}
            src={`api/images/${photo.url}`}
            className={`${index === active ? "active" : ""}`}
            alt="bag thumbnail"
            onClick={handleIndexClick}
            data-index={index}
          />
          </div>
})}
      </div> 
    </div>
  )
}

export default Carousel;