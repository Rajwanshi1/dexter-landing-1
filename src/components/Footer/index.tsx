import React from 'react';

import Image from 'next/image';

const Footer = () => {
  return (
    <div className="w-full border-t border-black-1000 py-12 flex justify-center items-center mt-20">
      <div className="w-full max-w-[1200px] flex flex-col md:flex-row gap-8 md:gap-0 items-center justify-between">
        <div className="flex justify-start items-center gap-2">
          <Image
            src="/assets/images/logo.png"
            alt="Dexter"
            width={0}
            height={0}
            sizes="100%"
            className="h-5 w-auto"
          />
          <p className="text-base font-bold text-black-1000">Dexter</p>
        </div>
        <p className="text-center md:text-end text-base text-black-1000">
          © Copyright 2025. Made by Dexter in the 🧪
        </p>
      </div>
    </div>
  );
};

export default Footer;
