import React from 'react';

import Image from 'next/image';

const Quote = () => {
  return (
    <div className="flex flex-col items-center justify-center relative">
      <Image
        src="/assets/images/quote.png"
        width={32}
        height={32}
        alt="quote"
        className="absolute top-[-15px] left-5"
      />
      <Image
        src="/assets/images/quote.png"
        width={32}
        height={32}
        alt="quote"
        className="absolute bottom-[35px] right-5"
      />
      <div className="flex justify-center items-center py-3 px-3 border border-black-1000">
        <p className="text-2xl text-black-1000">
          DeFi doesn’t have to be complicated—just ask me.
        </p>
      </div>
      <div className="flex justify-center items-center pt-4 py-2 px-2 border border-t-0 self-end border-black-1000">
        <p className="text-sm text-black-1000">~ Dexter</p>
      </div>
    </div>
  );
};

export default Quote;
