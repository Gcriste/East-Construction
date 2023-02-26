import React from 'react';

import config from '../config/index.json';
import Divider from './Divider';

const Reviews = () => {
  const { reviews } = config;
  const {  title } = reviews;



  return (
    <section  className={`py-8 bg-background`} id="reviews">
      <div className={`container mx-auto px-2 pt-4 pb-12 text-primary`}>
        <h1
          className={`w-full my-2 text-5xl font-bold leading-tight text-center text-primary`}
        >
          {title}
        </h1>
        <Divider />
        
        <div
          className={`flex flex-col sm:flex-row justify-center mt-2  sm:my-4`}
        >
       
          <div
            className={`flex flex-col  mx-auto lg:mx-0 rounded-lg  mt-4 sm:-mt-6 z-10`}
          >
           
            <div
              className={`flex-none mt-auto overflow-hidden  p-6`}
            >
              <p className={`mt-2 text-1xl leading-8 font-extrabold tracking-tight text-primary sm:text-2xl`}>
                Reviews Go here
               
              </p>
            
            </div>
          </div>
     
        </div>
      </div>
    </section>
  );
};

export default Reviews;
