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
          src="/assets/images/dexter-skills.png"
          width={0}
          height={0}
          alt="Dexter Skills"
          sizes="100vw"
          className="w-1/3 h-auto hidden lg:block"
        />
        <div className="flex flex-col items-start justify-center gap-5 w-full">
          <div className="flex w-full justify-center items-center space-x-3">
            <div className="border border-black-1000 flex flex-col items-center justify-center">
              <div className="border-b border-b-black-1000 py-2 px-2 w-full flex justify-start">
                <p className="text-base text-green-200">DeFi Simplified</p>
              </div>
              <div className="py-2 px-2 flex flex-col items-start justify-start">
                <p className="text-base text-black-1000">Trade</p>
                <p className="text-base text-black-1000">Lend</p>
                <p className="text-base text-black-1000">Stake</p>
                <p className="text-base text-black-1000">
                  1-click LP rebalance
                </p>
                <p className="text-base text-black-1000">Market Alpha</p>
              </div>
            </div>
            <div className="border border-black-1000 flex flex-col items-center justify-center">
              <div className="border-b border-b-black-1000 py-2 px-2 w-full flex justify-start">
                <p className="text-base text-green-200">Liquidity Management</p>
              </div>
              <div className="py-2 px-2 flex flex-col items-start justify-start">
                <p className="text-base text-black-1000">Best yields</p>
                <p className="text-base text-black-1000">LP automation</p>
                <p className="text-base text-black-1000">IL protection</p>
                <p className="text-base text-black-1000">Custom automations</p>
                <p className="text-base text-black-1000">
                  Cross chain -{' '}
                  <a
                    href="https://ika.xyz/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-200 hover:underline"
                  >
                    Ika Network
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="flex w-full justify-center items-center mt-8">
            <div className="border border-black-1000 flex flex-col items-center justify-center max-w-xs">
              <div className="border-b border-b-black-1000 py-2 px-2 w-full flex justify-start">
                <p className="text-base text-green-200">MLFi vaults</p>
              </div>
              <div className="py-2 px-2 flex flex-col items-start justify-start">
                <p className="text-base text-black-1000">Dynamic Ranges</p>
                <p className="text-base text-black-1000">AI Rebalancing</p>
                <p className="text-base text-black-1000">IL Reduction</p>
                <p className="text-base text-black-1000">
                  Partner -{' '}
                  <a
                    href="https://www.opengradient.ai/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-200 hover:underline"
                  >
                    OpenGradient
                  </a>
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
