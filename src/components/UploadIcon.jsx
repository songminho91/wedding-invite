import React from "react";

const UploadIcon = () => {
  return (
    <svg
      viewBox="0 0 64 64"
      className="w-16 h-16 stroke-gray-400 hover:stroke-black transition-all duration-500"
      fill="none"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path
        d="M32 44V20M32 20L20 32M32 20L44 32"
        className="animate-draw"
      />
    </svg>
  );
};

export default UploadIcon;
