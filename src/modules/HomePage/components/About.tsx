import React from 'react';

// import Image from 'next/image';

// import PrimaryButton from '@/components/PrimaryButton';
/* eslint-disable prettier/prettier */
const About = () => {
  return (
    <div
      className="w-full flex flex-col items-start justify-center md:justify-start gap-8"
      id="about"
    >
      <div className="flex w-full justify-start items-center gap-3">
        <p className="text-3xl font-medium text-black-1000">
          <span className="text-green-200">#</span>about-me
        </p>
        <div className="h-px w-1/2 bg-green-200" />
      </div>
      <div className="w-full flex flex-col md:flex-row justify-center md:justify-between items-stretch">
        <div className="w-full md:w-1/2 flex h-full flex-col items-center md:items-start justify-start gap-4 mt-5">
          <p className="text-center md:text-left text-sm text-black-1000">
            Yo, I&rsquo;m Dexter! Once upon a block, I started as an idea&mdash;a dream
            cooked up by degens who wanted to make DeFi less complicated and a
            whole lot more exciting. Fast forward, and here I am: your on-chain
            wingman, built to help you crush swaps, sniff out alpha, farm yields, and navigate DeFi like a pro. I coordinate a squad of AI agents to crush tasks&mdash;liquidity management, lending, borrowing, limit orders, you name it.
          </p>
          <p className="text-center md:text-left text-sm text-black-1000 mb-5">
            Born for the degens, by the degens.
          </p>
        </div>
      </div>
    </div>
  );
};
/* eslint-enable prettier/prettier */
export default About;
