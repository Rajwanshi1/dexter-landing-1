import React from 'react';

import Image from 'next/image';

const Contacts = () => {
  return (
    <div
      className="w-full flex flex-col items-start justify-start gap-8"
      id="contacts"
    >
      <div className="flex w-full justify-start items-center gap-3">
        <p className="text-3xl font-medium text-black-1000">
          <span className="text-green-200">#</span>contacts
        </p>
        <div className="h-px w-1/2 bg-green-200" />
      </div>
      <div className="w-full flex flex-col md:flex-row justify-between items-center gap-12 md:gap-0">
        <p className="text-center md:text-left text-base w-full md:w-1/2 text-black-1000">
          I’m interested in freelance opportunities. However, if you have other
          request or question, don’t hesitate to contact me
        </p>
        <div className="border border-black-1000 py-3 px-3 flex flex-col items-start justify-start gap-2">
          <p className="text-black-1000 font-medium text-base">
            Message my lab assistant
          </p>
          <div className="flex justify-start items-center gap-1">
            <Image
              src="/assets/images/telegram.png"
              width={30}
              height={30}
              alt="Telegram"
            />
            <p className="text-black-1000 text-sm">@dexter_id</p>
          </div>
          <div className="flex justify-start items-center gap-1">
            <Image
              src="/assets/images/twitter.png"
              width={30}
              height={30}
              alt="Telegram"
            />
            <p className="text-black-1000 text-sm">@move_og</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
