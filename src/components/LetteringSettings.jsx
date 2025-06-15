import React from "react";
import { useWeddingStore } from "../store/useWeddingStore";
import MainPhotoInput from "./MainPhotoInput";

const LetteringSettings = () => {
  const {
    letteringText,
    setLetteringText,
    letteringColor,
    setLetteringColor,
    letteringPosition,
    setLetteringPosition,
    letteringFont,
    setLetteringFont,
  } = useWeddingStore();

  const handlePosChange = (axis, value) => {
    setLetteringPosition({
      ...letteringPosition,
      [axis]: Number(value),
    });
  };

  const fontOptions = [
    { label: "프리텐다드", value: "'Pretendard Variable', sans-serif" },
    { label: "단조체", value: "'Danjo', sans-serif" },
    { label: "오뮤 프리티체", value: "'omyu_pretty', cursive" },
    { label: "인성체", value: "'insungitCutelivelyjisu', cursive" },
    { label: "조선궁서체", value: "'ChosunGs', serif" },
  ];

  return (
    <div className="grid grid-cols-2 grid-rows-3 gap-6 w-full max-w-5xl mx-auto">
      {/* 좌측 이미지 */}
      <div className="row-span-3">
        <MainPhotoInput hideLettering={true} />
      </div>

      {/* 1행: 문구 */}
      <div className="flex flex-col gap-2">
        <label className="text-sm font-semibold">레터링 문구</label>
        <input
          type="text"
          value={letteringText}
          onChange={(e) => setLetteringText(e.target.value)}
          className="border border-gray-300 rounded-md p-2"
        />
      </div>

      {/* 2행: 위치 */}
      <div className="flex flex-col gap-2">
        <label className="text-sm font-semibold">위치 (세로 %)</label>
        <input
          type="range"
          min="0"
          max="100"
          value={letteringPosition.y}
          onChange={(e) => handlePosChange("y", e.target.value)}
        />
        <label className="text-sm font-semibold">위치 (가로 %)</label>
        <input
          type="range"
          min="0"
          max="100"
          value={letteringPosition.x}
          onChange={(e) => handlePosChange("x", e.target.value)}
        />
      </div>

      {/* 3행: 색상 + 폰트 */}
      <div className="flex flex-col gap-2">
        <label className="text-sm font-semibold">글자 색상</label>
        <input
          type="color"
          value={letteringColor}
          onChange={(e) => setLetteringColor(e.target.value)}
          className="w-16 h-10 border-none"
        />

        <label className="text-sm font-semibold">글자 폰트</label>
        <select
          value={letteringFont}
          onChange={(e) => setLetteringFont(e.target.value)}
          className="border border-gray-300 rounded-md p-2"
        >
          {fontOptions.map((font) => (
            <option key={font.value} value={font.value}>
              {font.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default LetteringSettings;
