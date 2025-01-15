import React from 'react';

import Image from 'next/image';

const Socials = () => {
  return (
    <div className="hidden xl:flex fixed top-0 left-10 flex-col items-center justify-start gap-2">
      <div className="w-px h-[150px] bg-black-1000" />
      <Image
        src="/assets/images/twitter.png"
        alt="Twitter"
        width={30}
        height={30}
        className="cursor-pointer"
      />
      <Image
        src="/assets/images/telegram.png"
        alt="Telegram"
        width={30}
        height={30}
        className="cursor-pointer"
      />
    </div>
  );
};

export default Socials;
