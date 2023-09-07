import React from 'react';

import config from '../config/index.json';
import Divider from './Divider';
import ImageGallery from "react-image-gallery";

const Reviews = () => {
  const { gallery } = config;
  const {  title } = gallery;

  const images = [
    {
      original: "/assets/images/doors.jpg",
    },
    {
      original: "/assets/images/doorstwo.jpg",
    },
    {
      original: "/assets/images/kitchen.jpg",
    },
    {
      original: "/assets/images/kitchentwo.jpg",
    },
    {
      original: "/assets/images/kitchenthree.jpg",
    },
    {
      original: "/assets/images/kitchenfour.jpg",
    },
    {
      original: "/assets/images/screenedporch.jpg",
    },
    {
      original: "/assets/images/screenedporchtwo.jpg",
    },

  ];

  return (
    <section  className={`py-8 bg-background`} id="gallery">
      <div className={`container mx-auto px-2 pt-4 pb-12 text-primary`}>
        <h1
          className={`w-full my-2 text-5xl font-bold leading-tight text-center text-primary`}
        >
          {title}
        </h1>
        <Divider />
        
     <div className='mt-20'>
       
       <ImageGallery items={images} infinite showFullscreenButton showPlayButton showBullets showNav />
       </div>
        
      </div>
    </section>
  );
};

export default Reviews;
