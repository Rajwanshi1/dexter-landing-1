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
          GM! I’m <span className="text-green-200">Dexter</span>, your{' '}
          <span className="text-green-200">
            DeFAI <br className="hidden md:block" /> assistant!
          </span>
        </p>
        <p className="text-base text-black-900 text-center lg:text-left">
          Execute trades, monitor your portfolio, stay ahead with Web3 Alpha,
          manage LP positions, optimize lending, and unlock no-code full-stack
          DeFi functionality. Hop on the waitlist - DeFi ain’t gonna automate
          itself! 👾
        </p>
        <a href="#waitlist">
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
        <div className="border border-black-1000 py-1 px-1 flex justify-start items-center lg:absolute bottom-[-10px] left-[50%] translate-x-[-35%] gap-2">
          <div className="w-4 h-4 bg-green-200" />
          <p className="text-sm text-black-1000 whitespace-nowrap">
            In the lab 🧪: Crafting the future of no-code DeFi
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
