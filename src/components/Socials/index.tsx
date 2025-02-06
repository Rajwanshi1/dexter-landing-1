import React from 'react';

import Image from 'next/image';

const Socials = () => {
  return (
    <div className="hidden xl:flex fixed top-0 left-10 flex-col items-center justify-start gap-2">
      <div className="w-px h-[150px] bg-black-1000" />
      <a
        href="https://x.com/dexterOnSui"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="/assets/images/x_1.png"
          alt="Twitter"
          width={30}
          height={30}
          className="cursor-pointer"
        />
      </a>
      <a
        href="https://t.me/dexterAIPortal"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="/assets/images/telegram.png"
          alt="Telegram"
          width={30}
          height={30}
          className="cursor-pointer"
        />
      </a>
    </div>
  );
};

export default Socials;
