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
          Got a wild idea, stuck on a tricky problem, or just need someone to
          help you crush DeFi? Don’t worry—I’ve got just the right person to
          help.
        </p>
        <div className="border border-black-1000 py-3 px-3 flex flex-col items-start justify-start gap-2">
          <p className="text-black-1000 font-medium text-base">
            Message my lab assistant
          </p>
          <div className="flex justify-start items-center gap-1">
            <a
              href="https://t.me/+l9Wkg7hvG_liOTc1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/assets/images/telegram.png"
                width={30}
                height={30}
                alt="Telegram"
              />
            </a>
            <p className="text-black-1000 text-sm">@dexter_id</p>
          </div>
          <div className="flex justify-start items-center gap-1">
            <a
              href="https://x.com/move_og"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/assets/images/x_1.png"
                width={30}
                height={30}
                alt="Twitter"
              />
            </a>
            <p className="text-black-1000 text-sm">@move_og</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
