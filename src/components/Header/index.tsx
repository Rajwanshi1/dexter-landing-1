'use client';

import React from 'react';

import Image from 'next/image';

const Header = () => {
  return (
    <div className="w-full max-w-[1200px] flex justify-center items-center rounded-full pt-6">
      <div className="w-full flex justify-between items-center py-2 px-3">
        <div className="w-full flex flex-col md:flex-row gap-4 md:gap-0 px-4 xl:px-0 justify-between items-center">
          <div className="flex justify-start items-center gap-2">
            <Image
              src="/assets/images/dexter-logo.png"
              alt="Dexter"
              width={24}
              height={24}
              sizes="24px"
              className="h-6 w-auto"
            />
            <p className="text-lg font-bold text-black-1000">Dexter</p>
          </div>
          <div className="flex justify-end items-center gap-5">
            <a href="https://chat.dexterai.xyz">
              <p className="text-base text-black-1000 cursor-pointer">
                <span className="text-green-200">#</span>
                chat
              </p>
            </a>
            <a href="https://docs.dexterai.xyz" target="_blank">
              <p className="text-base text-black-1000 cursor-pointer">
                <span className="text-green-200">#</span>
                docs
              </p>
            </a>
            <a href="#contacts">
              <p className="text-base text-black-1000 cursor-pointer">
                <span className="text-green-200">#</span>
                waitlist
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
