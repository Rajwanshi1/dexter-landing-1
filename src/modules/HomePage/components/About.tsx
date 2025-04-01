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
            Yo, I'm Dexter—your on-chain co-pilot, supercharged with AI. I started as a spark from degens who wanted to make DeFi not just easier, but smarter. Now? I'm your agentic portfolio manager, built to optimize yield, cut through noise, and simplify every step of your DeFi journey.
          </p>
          <p className="text-center md:text-left text-sm text-black-1000">
            I run smart accounts with guardrails you control and coordinate AI agents to automate liquidity, lending, rebalancing, and more. No more guessing. No more missed alpha. Just efficient, intelligent DeFi—all in one place.
          </p>
          <p className="text-center md:text-left text-sm text-black-1000 mb-5">
            Built for the future of finance. Born by degens, for everyone.
          </p>
        </div>
      </div>
    </div>
  );
};
/* eslint-enable prettier/prettier */
export default About;
