import React from "react";
import { useWeddingStore } from "../store/useWeddingStore";
import MainPhotoInput from "./MainPhotoInput";
import { FaBold, FaItalic } from "react-icons/fa";
import clsx from "clsx";
import MainPhotoView from "./MainPhotoView";


const LetteringSettings = () => {
  const {
    mainPhoto,
    letteringText,
    setLetteringText,
    letteringColor,
    setLetteringColor,
    letteringPosition,
    setLetteringPosition,
    letteringFont,
    setLetteringFont,
    setMainPhoto,

    additionalText,
    setAdditionalText,
    additionalTextPosition,
    setAdditionalTextPosition,
    additionalTextFont,
    setAdditionalTextFont,
    additionalTextColor,
    setAdditionalTextColor,

    additionalTextBold,
    additionalTextItalic,
    setAdditionalTextBold,
    setAdditionalTextItalic,

    // ✅ 새로 추가된 폰트 크기 상태
    fontSize,
    setFontSize,
    additionalFontSize,
    setAdditionalFontSize,
  } = useWeddingStore();
  console.log("FontSize:", fontSize, "AdditionalFontSize:", additionalFontSize);


  const [selectedTarget, setSelectedTarget] = React.useState("lettering");

  const isDisabled = !mainPhoto;

  const handlePosChange = (axis, value) => {
    const num = Number(value);
    if (selectedTarget === "lettering") {
      setLetteringPosition({ ...letteringPosition, [axis]: num });
    } else {
      setAdditionalTextPosition({ ...additionalTextPosition, [axis]: num });
    }
  };

  const fontOptions = [
    { label: "프리텐다드", value: "'Pretendard Variable', sans-serif" },
    { label: "단조체", value: "'Danjo', sans-serif" },
    { label: "오뮤 프리티체", value: "'omyu_pretty', cursive" },
    { label: "인성체", value: "'insungitCutelivelyjisu', cursive" },
    { label: "조선궁서체", value: "'ChosunGs', serif" },
  ];

  const letteringExamples = [
    "우리 결혼합니다",
    "소중한 날에 초대합니다",
    "인생의 새로운 시작",
    "함께해요",
    "행복한 하루를 함께 해주세요",
  ];

  return (
    <div className="flex flex-row w-full max-w-5xl mx-auto items-center gap-6 py-10">
      {/* 좌측 이미지 */}
      <div className="w-full max-w-[360px] aspect-[9/16] scale-[0.9] mx-auto relative">
        {mainPhoto ? (
          <>
            <MainPhotoView />

            {/* 이미지 클릭 시 파일 선택 트리거 */}
            <input
              type="file"
              accept="image/*"
              id="replace-photo"
              className="hidden"
              onChange={(e) => {
                const file = e.target.files[0];
                if (file) {
                  const reader = new FileReader();
                  reader.onload = () => setMainPhoto(reader.result);
                  reader.readAsDataURL(file);
                }
              }}
            />
            <label
              htmlFor="replace-photo"
              className="absolute inset-0 cursor-pointer"
              title="이미지를 클릭해서 변경할 수 있어요"
            />
          </>
        ) : (
          <MainPhotoInput hideLettering={true} />
        )}
      </div>


      {/* 우측 설정 */}
       <div className="w-full max-w-[160px] sm:max-w-[360px] text-sm">
        {/* 안내 문구 */}
        <div
          className={`absolute -top-6 left-0 w-full text-center text-red-500 text-sm transition-opacity duration-500 ${isDisabled ? "opacity-100" : "opacity-0"
            }`}
        >
          📢 이미지를 넣어주세요
        </div>

        {/* 설정 영역 */}
        <div
          className={`flex flex-col gap-3 transition-all duration-500 ${isDisabled
            ? "opacity-60 grayscale pointer-events-none"
            : "opacity-100 pointer-events-auto"
            }`}
        >
          {/* 문구 셀렉트 */}
          <div className="flex flex-col gap-1">
            <label className="font-semibold">레터링 문구 예시 선택</label>
            <select
              value={letteringText}
              onChange={(e) => setLetteringText(e.target.value)}
              disabled={isDisabled}
              className="border border-gray-300 rounded p-1 text-sm"
            >
              <option value="">예시 문구를 선택하세요</option>
              {letteringExamples.map((ex, idx) => (
                <option key={idx} value={ex}>
                  {ex}
                </option>
              ))}
            </select>
          </div>

          {/* 직접 입력 */}
          <div className="flex flex-col gap-1">
            <label className="font-semibold">
              텍스트추가{" "}
              <span className="text-xs text-red-500 ml-2">(미입력시 노출X)</span>
            </label>
            <input
              type="text"
              placeholder="직접 문구 입력"
              value={additionalText}
              onChange={(e) => setAdditionalText(e.target.value)}
              readOnly={isDisabled}
              className="border border-gray-300 rounded p-1 text-sm"
            />
          </div>

          {/* 위치 대상 선택 */}
          <div className="flex flex-col gap-1">
            <label className="font-semibold">위치조절</label>
            <select
              value={selectedTarget}
              onChange={(e) => setSelectedTarget(e.target.value)}
              disabled={isDisabled}
              className="border border-gray-300 rounded p-1 text-sm"
            >
              <option value="lettering">레터링</option>
              <option value="text">텍스트</option>
            </select>
          </div>

          {/* 위치 게이지 */}
          <div className="flex flex-col gap-1">
            <label className="font-semibold">세로 위치 (%)</label>
            <input
              type="range"
              min="0"
              max="100"
              disabled={isDisabled}
              value={
                selectedTarget === "lettering"
                  ? letteringPosition.y
                  : additionalTextPosition.y
              }
              onChange={(e) => handlePosChange("y", e.target.value)}
            />

            <label className="font-semibold">가로 위치 (%)</label>
            <input
              type="range"
              min="0"
              max="100"
              disabled={isDisabled}
              value={
                selectedTarget === "lettering"
                  ? letteringPosition.x
                  : additionalTextPosition.x
              }
              onChange={(e) => handlePosChange("x", e.target.value)}
            />
          </div>

          {/* 폰트 선택 */}
          <div className="flex flex-col gap-1">
            <label className="font-semibold flex items-center justify-between">
              글자 폰트
              {selectedTarget === "lettering" && (
                <span className="text-xs text-red-500 ml-2">
                  (레터링은 폰트 변경불가.)
                </span>
              )}
            </label>

            <select
              value={
                selectedTarget === "lettering"
                  ? letteringFont
                  : additionalTextFont
              }
              onChange={(e) =>
                selectedTarget === "lettering"
                  ? setLetteringFont(e.target.value)
                  : setAdditionalTextFont(e.target.value)
              }
              className={`border border-gray-300 rounded p-1 h-8 transition-opacity ${selectedTarget === "lettering" ? "opacity-50" : "opacity-100"
                }`}
              disabled={selectedTarget === "lettering" || isDisabled}
            >
              {fontOptions.map((font) => (
                <option key={font.value} value={font.value}>
                  {font.label}
                </option>
              ))}
            </select>
          </div>
          {/* 폰트스타일 */}
          <div className="flex flex-col gap-1">
            <label className="font-semibold">폰트 스타일</label>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => setAdditionalTextBold(!additionalTextBold)}
                disabled={selectedTarget === "lettering" || isDisabled}
                className={clsx(
                  "p-1 border rounded",
                  selectedTarget === "text" && additionalTextBold && "bg-gray-300",
                  selectedTarget === "lettering" && "opacity-50"
                )}
                title="굵게"
              >
                <FaBold />
              </button>

              <button
                type="button"
                onClick={() => setAdditionalTextItalic(!additionalTextItalic)}
                disabled={selectedTarget === "lettering" || isDisabled}
                className={clsx(
                  "p-1 border rounded",
                  selectedTarget === "text" && additionalTextItalic && "bg-gray-300",
                  selectedTarget === "lettering" && "opacity-50"
                )}
                title="기울이기"
              >
                <FaItalic />
              </button>
            </div>
          </div>

          {/* ✅ 폰트 크기 조절 */}
          <div className="flex flex-col gap-1">
            <label className="font-semibold">폰트 크기 (%)</label>
            <input
              type="range"
              min="2"
              max="10"
              step="0.2"
              value={selectedTarget === "lettering" ? fontSize : additionalFontSize}
              onChange={(e) => {
                const val = Number(e.target.value);
                selectedTarget === "lettering"
                  ? setFontSize(val)
                  : setAdditionalFontSize(val);
              }}
            />
            <div className="text-xs text-gray-500">
              크기: {selectedTarget === "lettering" ? fontSize : additionalFontSize}vw
            </div>

          </div>




          {/* 색상 선택 */}
          <div className="flex flex-col gap-1">
            <label className="font-semibold">글자 색상</label>
            <input
              type="color"
              value={
                selectedTarget === "lettering"
                  ? letteringColor
                  : additionalTextColor
              }
              onChange={(e) =>
                selectedTarget === "lettering"
                  ? setLetteringColor(e.target.value)
                  : setAdditionalTextColor(e.target.value)
              }
              disabled={isDisabled}
              className="w-12 h-8 border-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LetteringSettings;
