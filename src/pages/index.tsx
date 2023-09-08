import React from 'react';

import About from '../components/About';
import Gallery from '../components/Gallery';
import Header from '../components/Header';
import LazyShow from '../components/LazyShow';
import MainHero from '../components/MainHero';
import Pricing from '../components/Pricing';
import WhatWeOffer from '../components/WhatWeOffer';

const App = () => {
  return (
    <div className={`bg-background grid gap-y-16 overflow-hidden`}>
      <div className={`relative bg-background`}>
        <div className="max-w-7xl mx-auto">
          <div
            className={`relative z-10 pb-8 bg-background sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32`}
          >
            <Header />
            <MainHero />
          </div>
        </div>
      </div>

      <LazyShow>
        <>
          <About />
        </>
      </LazyShow>
      <LazyShow>
        <>
          <WhatWeOffer />
        </>
      </LazyShow>
      <LazyShow>
        <Gallery />
      </LazyShow>

      <LazyShow>
        <Pricing />
      </LazyShow>
    </div>
  );
};

export default App;
