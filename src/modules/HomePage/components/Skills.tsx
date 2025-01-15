import React from 'react';

import Image from 'next/image';

const Skills = () => {
  return (
    <div
      className="w-full flex flex-col items-start justify-start gap-8"
      id="waitlist"
    >
      <div className="flex w-full justify-start items-center gap-3">
        <p className="text-3xl font-medium text-black-1000">
          <span className="text-green-200">#</span>skills
        </p>
        <div className="h-px w-1/2 bg-green-200" />
      </div>
      <div className="w-full flex justify-center md:justify-between items-center">
        <Image
          src="/assets/images/skills-placeholder.png"
          width={0}
          height={0}
          alt="skills"
          sizes="100vw"
          className="w-1/3 h-auto hidden lg:block"
        />
        <div className="flex flex-col md:flex-row lg:flex-col items-start justify-center gap-4">
          <div className="flex w-full sm:w-fit flex-col sm:flex-row justify-end items-center gap-4">
            <div className="border border-black-1000 flex flex-col items-center justify-center">
              <div className="border-b border-b-black-1000 py-2 px-2 w-full flex justify-start">
                <p className="text-base text-black-1000">DeFi Automation</p>
              </div>
              <div className="py-2 px-2 flex flex-col items-start justify-start">
                <p className="text-base text-black-1000">Trading, Lending</p>
                <p className="text-base text-black-1000">
                  Liquidity Management
                </p>
              </div>
            </div>
            <div className="border border-black-1000 flex flex-col items-center justify-center">
              <div className="border-b border-b-black-1000 py-2 px-2 w-full flex justify-start">
                <p className="text-base text-black-1000">
                  Portfolio Management
                </p>
              </div>
              <div className="py-2 px-2 flex flex-col items-start justify-start">
                <p className="text-base text-black-1000">
                  Better Opportunities
                </p>
                <p className="text-base text-black-1000">Risk Assessment</p>
              </div>
            </div>
            <div className="border border-black-1000 flex flex-col items-center justify-center">
              <div className="border-b border-b-black-1000 py-2 px-2 w-full flex justify-start">
                <p className="text-base text-black-1000">Web3 Alpha</p>
              </div>
              <div className="py-2 px-2 flex flex-col items-start justify-start">
                <p className="text-base text-black-1000">Onchain - Insidex</p>
                <p className="text-base text-black-1000">Sentiment - X, TG</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row justify-start items-center gap-4">
            <div className="border border-black-1000 flex flex-col items-center justify-center">
              <div className="border-b border-b-black-1000 py-2 px-2 w-full flex justify-start">
                <p className="text-base text-black-1000">Cross-Chain Ops</p>
              </div>
              <div className="py-2 px-2 flex flex-col items-start justify-start">
                <p className="text-base text-black-1000">
                  Interoperability - Ika
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
