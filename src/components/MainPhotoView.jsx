import React from "react";
import { useWeddingStore } from "../store/useWeddingStore";

const MainPhotoView = () => {
  const {
    mainPhoto,
    letteringText,
    letteringColor,
    letteringPosition,
  } = useWeddingStore();

  if (!mainPhoto) return null;

  return (
    <div className="relative w-[270px] h-[480px] rounded-xl overflow-hidden mx-auto">
      <img
        src={mainPhoto}
        alt="대표 이미지"
        className="w-full h-full object-cover rounded-xl"
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
    </div>
  );
};

export default MainPhotoView;
