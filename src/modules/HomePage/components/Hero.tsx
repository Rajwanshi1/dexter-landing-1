import React from 'react';

import Image from 'next/image';

import PrimaryButton from '@/components/PrimaryButton';

const Hero = () => {
  return (
    <div
      className="w-full flex flex-col lg:flex-row justify-between items-center mt-10"
      id="home"
    >
      <div className="w-full flex flex-col items-center  lg:items-start justify-start gap-3">
        <p className="text-3xl font-semibold text-black-1000 text-center lg:text-left">
          GM! I&apos;m <span className="text-green-200">Dexter</span>, your{' '}
          <span className="text-green-200">
            Liquidity <br className="hidden md:block" /> Manager!
          </span>
        </p>
        <p className="text-base text-black-900 text-center lg:text-left">
          I move your capital to the highest-yield opportunities, auto-rebalance
          LPs, and give 1-click portfolio suggestions.
          <br />
          <span className="text-green-200">Trade, Manage</span> and{' '}
          <span className="text-green-200">Optimise liquidity</span> through a
          simple chat interface.
        </p>
        <a href="#contacts">
          <PrimaryButton>
            <p className="text-sm text-black-1000">Join Waitlist</p>
          </PrimaryButton>
        </a>
      </div>
      <div className="w-full flex flex-col justify-center lg:items-end items-center relative">
        <Image
          src="/assets/images/dexter.png"
          alt="Dexter"
          width={0}
          height={0}
          sizes="100vw"
          className="w-[500px] h-[500px] object-contain"
        />
        <div className="border border-black-1000 py-1 px-1 flex justify-start items-center absolute bottom-0 left-1/2 transform -translate-x-1/2 gap-2">
          <div className="w-4 h-4 bg-green-200" />
          <p className="text-sm text-black-1000 whitespace-nowrap">
            In the lab 🧪: Engineering AI for capital efficiency
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
