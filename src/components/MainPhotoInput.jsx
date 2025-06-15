import React, { useRef } from "react";
import { useWeddingStore } from "../store/useWeddingStore";
import UploadIcon from '../assets/image2vector.svg?react';

const MainPhotoInput = () => {
  const inputRef = useRef(null);
  const {
    mainPhoto,
    setMainPhoto,
    letteringText,
    letteringColor,
    letteringPosition,
    letteringFont,
  } = useWeddingStore();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => setMainPhoto(reader.result);
    reader.readAsDataURL(file);
  };

  const handleClick = () => {
    inputRef.current?.click();
  };

  return (
    <div className="flex flex-col items-center gap-2">
      <label className="text-sm font-semibold">대표 이미지</label>

      <div
        onClick={handleClick}
        className={`relative group w-[270px] h-[480px] rounded-xl cursor-pointer overflow-hidden flex items-center justify-center
          ${mainPhoto ? "bg-transparent" : "bg-gray-50 border-2 border-dashed border-gray-300 hover:border-gray-500"}`}
      >
        {mainPhoto ? (
          <>
            <img
              src={mainPhoto}
              alt="대표 이미지"
              className="w-full h-full object-cover rounded-xl transition-opacity duration-300 group-hover:opacity-80"
            />
            {letteringText && (
              <div
                className="absolute text-white text-lg font-semibold transition-all duration-300"
                style={{
                  top: `${letteringPosition.y}%`,
                  left: `${letteringPosition.x}%`,
                  transform: "translate(-50%, -50%)",
                  color: letteringColor,
                  whiteSpace: "nowrap",
                }}
              >
                {letteringText}
              </div>
            )}
          </>
        ) : (
          <UploadIcon className="w-16 h-16 stroke-gray-400 hover:stroke-black transition-all duration-500" />
        )}
      </div>
      <div
        className="absolute text-white text-lg font-semibold transition-all duration-300"
        style={{
          top: `${letteringPosition.y}%`,
          left: `${letteringPosition.x}%`,
          transform: "translate(-50%, -50%)",
          color: letteringColor,
          fontFamily: letteringFont,
          whiteSpace: "nowrap",
        }}
      >
        
      </div>


      <input
        type="file"
        accept="image/*"
        ref={inputRef}
        onChange={handleImageChange}
        className="hidden"
      />
    </div>
  );
};

export default MainPhotoInput;
