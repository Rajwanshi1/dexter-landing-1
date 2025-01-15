'use client';

import React, { useState } from 'react';

import { message } from 'antd';
import axios from 'axios';

import PrimaryButton from '@/components/PrimaryButton';

const Waitlist = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [x, setX] = useState('');
  const [tg, setTg] = useState('');
  const [text, setText] = useState('');

  const handleSubmit = async () => {
    try {
      if (!name || !address || !x) {
        message.error('Please fill all the required fields');
        return;
      }

      const res = await axios.post(
        'https://yrjdbvo36jfbhvd52prwfuke440kptsv.lambda-url.ap-southeast-1.on.aws/',
        {
          name,
          walletAddress: address,
          twitterHandle: x,
          telegramHandle: tg,
          description: text,
        },
      );

      if (res.status === 200) {
        message.success('You have been added to the waitlist!');
        setName('');
        setAddress('');
        setX('');
        setTg('');
        setText('');

        return;
      }

      message.error('Something went wrong. Please try again later.');
    } catch (err) {
      message.error('Something went wrong. Please try again later.');
    }
  };

  return (
    <div
      className="w-full flex flex-col items-start justify-start gap-8"
      id="waitlist"
    >
      <div className="flex w-full justify-start items-center gap-3">
        <p className="text-3xl font-medium text-black-1000">
          <span className="text-green-200">#</span>waitlist
        </p>
        <div className="h-px w-1/2 bg-green-200" />
      </div>
      <div className="w-full md:w-2/3 lg:w-1/2 flex flex-col items-start justify-start gap-4">
        <div className="w-full flex justify-start items-center gap-4">
          <input
            className="border border-black-1000 py-2 px-2 outline-none text-sm text-black-1000 bg-transparent w-full"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="border border-black-1000 py-2 px-2 outline-none text-sm text-black-1000 bg-transparent w-full"
            placeholder="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div className="w-full flex justify-start items-center gap-4">
          <input
            className="border border-black-1000 py-2 px-2 outline-none text-sm text-black-1000 bg-transparent w-full"
            placeholder="X"
            value={x}
            onChange={(e) => setX(e.target.value)}
          />
          <input
            className="border border-black-1000 py-2 px-2 outline-none text-sm text-black-1000 bg-transparent w-full"
            placeholder="Telegram"
            value={tg}
            onChange={(e) => setTg(e.target.value)}
          />
        </div>
        <textarea
          className="border border-black-1000 py-2 px-2 outline-none text-sm text-black-1000 bg-transparent w-full md:w-3/4"
          placeholder="What skills would you love me to get better at first?"
          rows={4}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <PrimaryButton onClick={handleSubmit}>
          <p className="text-sm text-black-1000">Join!</p>
        </PrimaryButton>
      </div>
    </div>
  );
};

export default Waitlist;
