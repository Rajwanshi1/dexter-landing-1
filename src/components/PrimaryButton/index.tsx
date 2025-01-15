'use client';

import React from 'react';

interface IPropType {
  children?: React.ReactNode;
  onClick?: () => void;
  text?: string;
}

const PrimaryButton = (props: IPropType) => {
  const { children, onClick, text } = props;
  return (
    <button
      className="border border-green-200 py-1 px-2 bg-transparent cursor-pointer"
      onClick={() => {
        if (onClick) onClick();
      }}
      type="button"
    >
      {children || text}
    </button>
  );
};

export default PrimaryButton;
