import React from 'react';

import About from './components/About';
import Contacts from './components/Contacts';
import Hero from './components/Hero';
import Quote from './components/Quote';
import Skills from './components/Skills';
import Waitlist from './components/Waitlist';

// import Image from 'next/image';

const HomePageModule = () => {
  return (
    <div className="w-full flex flex-col justify-start items-center overflow-hidden gap-[120px] max-w-[1200px] px-5 xl:px-0">
      <Hero />
      <Quote />
      <Skills />
      <About />
      <Waitlist />
      <Contacts />
    </div>
  );
};

export default HomePageModule;
