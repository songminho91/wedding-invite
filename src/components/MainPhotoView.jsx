import React, { useRef, useLayoutEffect, useState } from "react";
import { useWeddingStore } from "../store/useWeddingStore";

const MainPhotoView = ({ full = false }) => {
  const {
    mainPhoto,
    mainPhotoUrl,

    letteringText,
    letteringPosition,
    letteringColor,
    letteringFont,
    fontSize,

    additionalText,
    additionalTextPosition,
    additionalTextColor,
    additionalTextFont,
    additionalTextBold,
    additionalTextItalic,
    additionalFontSize,

    previewFont,
  } = useWeddingStore();

  const containerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);

  const imgSrc = mainPhoto || mainPhotoUrl;
  if (!imgSrc) return null;

  const appliedLetteringFont = letteringFont?.trim() || previewFont;
  const appliedAdditionalFont = additionalTextFont?.trim() || previewFont;

  // 이미지 컨테이너 width에 따라 폰트크기 조정
  useLayoutEffect(() => {
    const updateSize = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const calcFont = (percent) => `${(percent / 100) * containerWidth}px`;

  return (
    <div
      ref={containerRef} // ✅ 이 줄 추가
      className={full ? "relative w-full h-screen overflow-hidden" : "relative w-full aspect-[9/16] mx-auto overflow-hidden"}
      style={{ fontFamily: previewFont }}
    >
      <img
        src={imgSrc}
        alt="대표 이미지"
         className={`w-full h-full object-cover ${full ? "" : "rounded-xl"}`}
      />

      {/* 레터링 */}
      {letteringText && (
        <div
          className="absolute"
          style={{
            top: `${letteringPosition.y}%`,
            left: `${letteringPosition.x}%`,
            transform: "translate(-50%, -50%)",
            color: letteringColor,
            fontFamily: appliedLetteringFont,
            fontWeight: "600",
            whiteSpace: "pre-wrap",
            fontSize: calcFont(fontSize),
          }}
        >
          {letteringText}
        </div>
      )}

      {/* 추가 텍스트 */}
      {additionalText && (
        <div
          className="absolute"
          style={{
            top: `${additionalTextPosition.y}%`,
            left: `${additionalTextPosition.x}%`,
            transform: "translate(-50%, -50%)",
            color: additionalTextColor,
            fontFamily: appliedAdditionalFont,
            fontWeight: additionalTextBold ? "bold" : "normal",
            fontStyle: additionalTextItalic ? "italic" : "normal",
            whiteSpace: "pre-wrap",
            fontSize: calcFont(additionalFontSize),
          }}
        >
          {additionalText}
        </div>
      )}
    </div>
  );
};

export default MainPhotoView;
