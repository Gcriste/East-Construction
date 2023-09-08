import React from 'react';

import config from '../config/index.json';
import Divider from './Divider';

const About = () => {
  const { whatWeOffer } = config;
  const { title, subtitle, items: featuresList } = whatWeOffer;
  return (
    <div className={`py-12 bg-background`} id="whatWeOffer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h1
            className={`w-full my-2 text-5xl font-bold leading-tight text-center text-primary`}
          >
            {title}
          </h1>
          <Divider />
          <p className="mt-16 text-1xl leading-8 font-extrabold tracking-tight text-primary sm:text-2xl text-center">
            {subtitle}
          </p>
          {/* <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            {description}
          </p> */}
        </div>

        <div className="mt-10">
          <ul className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {featuresList.map((feature) => (
              <div key={feature.name} className="relative">
                <li>
                  {/* <div
                    className={`absolute flex items-center justify-center h-12 w-12 rounded-md bg-background text-tertiary border-primary border-4`}
                  >
                  </div> */}
                  <p className="ml-16 text-xl leading-6 font-medium text-primary">
                    {feature.name}
                  </p>
                </li>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
