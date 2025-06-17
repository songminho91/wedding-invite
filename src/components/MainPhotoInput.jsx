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
    fontSize, // ✅ 추가
    // ✅ 추가 텍스트 관련
    additionalText,
    additionalTextColor,
    additionalTextFont,
    additionalTextPosition,
    previewFont,
    additionalTextBold,
    additionalTextItalic,
    additionalFontSize, // ✅ 추가

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
    <div className="w-full  flex items-center justify-center">
      <div className="flex flex-col items-center gap-2 w-full max-w-[320px]">


        <div
          onClick={handleClick}
          className={`relative group w-full aspect-[9/16] rounded-xl cursor-pointer overflow-hidden flex items-center justify-center
            ${mainPhoto ? "bg-transparent" : "bg-gray-50 border-2 border-dashed border-gray-300 hover:border-gray-500"}`}
        >
          {mainPhoto ? (
            <>
              <img
                src={mainPhoto}
                alt="대표 이미지"
                className="w-full h-full object-cover rounded-xl transition-opacity duration-300 group-hover:opacity-80"
              />

              {/* 📌 클릭하면 다시 업로드할 수 있게 하는 오버레이 */}
              <div
                onClick={handleClick}
                className="absolute inset-0 bg-black/0 hover:bg-black/30 transition-all cursor-pointer z-10"
                title="클릭하여 이미지 변경"
              />

              {/* 레터링 텍스트 */}
              {letteringText && (
                <div
                  className="absolute z-20"
                  style={{
                    top: `${letteringPosition.y}%`,
                    left: `${letteringPosition.x}%`,
                    transform: "translate(-50%, -50%)",
                    color: letteringColor,
                    fontFamily: letteringFont || previewFont,
                    whiteSpace: "nowrap",
                    fontSize: `${fontSize}%`,
                    fontWeight: "600",
                  }}
                >
                  {letteringText}
                </div>
              )}

              {/* 추가 텍스트 */}
              {additionalText && (
                <div
                  className="absolute z-20"
                  style={{
                    top: `${additionalTextPosition.y}%`,
                    left: `${additionalTextPosition.x}%`,
                    transform: "translate(-50%, -50%)",
                    color: additionalTextColor,
                    fontFamily: additionalTextFont || previewFont,
                    fontWeight: additionalTextBold ? "bold" : "normal",
                    fontStyle: additionalTextItalic ? "italic" : "normal",
                    whiteSpace: "nowrap",
                    fontSize: `${additionalFontSize}%`,
                  }}
                >
                  {additionalText}
                </div>
              )}
            </>
          ) : (
            <UploadIcon className="w-16 h-16 stroke-gray-400 hover:stroke-black transition-all duration-500" />
          )}


        </div>

        <input
          type="file"
          accept="image/*"
          ref={inputRef}
          onChange={handleImageChange}
          className="hidden"
        />
      </div>
    </div>
  );
};

export default MainPhotoInput;
