import React from 'react';

import config from '../config/index.json';
import Divider from './Divider';

const Pricing = () => {
  const { pricing } = config;
  const { title } = pricing;

  return (
    <section className={`bg-background py-8`} id="pricing">
      <div className={`container mx-auto px-2 pt-4 pb-12 text-primary`}>
        <h1
          className={`w-full my-2 text-5xl font-bold leading-tight text-center text-primary`}
        >
          {title}
        </h1>
        <Divider />
        {/* <div className={`w-full mb-4`}>
          <div
            className={`h-1 mx-auto bg-primary w-64 opacity-25 my-0 py-0 rounded-t`}
          ></div>
        </div> */}
        <div
          className={`flex flex-col sm:flex-row justify-center mt-2  `}
        >
          {/* <div
            className={`flex flex-col w-5/6 lg:w-1/4 mx-auto lg:mx-0 rounded-none lg:rounded-l-lg bg-background mt-4`}
          >
            <div
              className={`flex-1 bg-background text-gray-600 rounded-t rounded-b-none overflow-hidden shadow`}
            >
              <div className={`p-8 text-3xl font-bold text-center border-b-4`}>
                {firstPlan?.name}
              </div>
              <ul className={`w-full text-center text-sm`}>
                {firstPlan?.features.map((feature) => (
                  <li
                    className={`border-b py-4`}
                    key={`${firstPlan.name}-${feature}`}
                  >
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div
              className={`flex-none mt-auto bg-background rounded-b rounded-t-none overflow-hidden shadow p-6`}
            >
              <div
                className={`w-full pt-6 text-3xl text-gray-600 font-bold text-center`}
              >
                {firstPlan?.price}
                <span className={`text-base`}> {firstPlan?.priceDetails}</span>
              </div>
            </div>
          </div> */}
          {/* <div
            className={`flex flex-col  mx-auto lg:mx-0 rounded-lg bg-background  shadow-lg z-10`}
          > */}
            {/* <div
              className={`flex-1 bg-background rounded-t rounded-b-none overflow-hidden shadow`}
            >
              {/* <div className={`w-full p-8 text-3xl font-bold text-center`}>
                {secondPlan?.name}
              </div> */}
              {/* <div
                className={`h-1 w-full bg-primary my-0 py-0 rounded-t`}
              ></div> */}
              {/* <ul className={`w-full text-center text-base font-bold`}>
                {secondPlan?.features.map((feature) => (
                  <li
                    className={`border-b py-4`}
                    key={`${secondPlan?.name}-${feature}`}
                  >
                    {feature}
                  </li>
                ))}
              </ul> */}
            {/* </div> */} 
            <div
              className={`flex-none mt-auto bg-background rounded-b rounded-t-none overflow-hidden shadow p-6`}
            >
              <p className={`mt-2 text-1xl leading-8 font-extrabold tracking-tight text-primary sm:text-2xl`}>
                Please call or email us today to get a free quote!
                {/* <span className={`text-base`}> {secondPlan?.priceDetails}</span> */}
              </p>
              <div className={`text-xl mt-12 leading-6 font-medium text-primary`}>
                <a href="tel:+14108043799">Phone: (410) 804-3799</a>
                {/* <span className={`text-base`}> {secondPlan?.priceDetails}</span> */}
              </div>
              <div className={`mt-2 tracking-tight text-primary sm:text-2xl`}>
              <a href="mailto:eastconst@verizon.net"> Email: eastconst@verizon.net</a>
                {/* <span className={`text-base`}> {secondPlan?.priceDetails}</span> */}
              </div>
            
            </div>
          {/* </div> */}
          {/* <div
            className={`flex flex-col w-5/6 lg:w-1/4 mx-auto lg:mx-0 rounded-none lg:rounded-l-lg bg-primary mt-4`}
          >
            <div
              className={`flex-1 bg-background text-gray-600 rounded-t rounded-b-none overflow-hidden shadow`}
            >
              <div className={`p-8 text-3xl font-bold text-center border-b-4`}>
                {thirdPlan?.name}
              </div>
              <ul className={`w-full text-center text-sm`}>
                {thirdPlan?.features.map((feature) => (
                  <li
                    className={`border-b py-4`}
                    key={`${thirdPlan?.name}-${feature}`}
                  >
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div
              className={`flex-none mt-auto bg-background rounded-b rounded-t-none overflow-hidden shadow p-6`}
            >
              <div
                className={`w-full pt-6 text-3xl text-gray-600 font-bold text-center`}
              >
                {thirdPlan?.price}
                <span className={`text-base`}> {thirdPlan?.priceDetails}</span>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
