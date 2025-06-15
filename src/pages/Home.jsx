
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import PreviewComponents from "../components/PreviewComponents";
import MainPhotoInput from "../components/MainPhotoInput";
import MainTextInput from "../components/MainTextInput";
import FamilyInfoInput from "../components/FamilyInfoInput";
import CalendarInput from "../components/CalendarInput";
import FontSelector from "../components/FontSelector";
import { useWeddingStore } from "../store/useWeddingStore";
import LetteringSettings from "../components/LetteringSettings";

// 애니메이션 공통 설정
const animationProps = {
  initial: { opacity: 0, y: -20, height: 0 },
  animate: { opacity: 1, y: 0, height: "auto" },
  exit: { opacity: 0, y: -20, height: 0 },
  transition: { duration: 0.4 },
  style: { overflow: "hidden" },
};

function Home() {
  const { previewFont, setPreviewFont } = useWeddingStore();
  const [fullPreviewMode, setFullPreviewMode] = useState(false);

  const [toggles, setToggles] = useState({
    showMainPhoto: true,
    showFontSelector: true,
    showMainText: true,
    showFamilyInfo: true,
    showCalendar: true,
    showText2: true,
    showImg2: true,
  });

  const toggleList = [
    {
      key: "showMainPhoto",
      label: "메인이미지",
      component: <LetteringSettings/>,
    },
    {
      key: "showFontSelector",
      label: "청첩장 폰트",
      component: (
        <FontSelector
          previewFont={previewFont}
          setPreviewFont={setPreviewFont}
        />
      ),
      resetFont: true,
    },
    {
      key: "showMainText",
      label: "인삿말",
      component: <MainTextInput />,
    },
    {
      key: "showFamilyInfo",
      label: "가족정보",
      component: <FamilyInfoInput />,
    },
    {
      key: "showCalendar",
      label: "캘린더",
      component: <CalendarInput />,
    },
  ];

  const handleToggle = (key, resetFont) => {
    const checked = !toggles[key];
    setToggles((prev) => ({ ...prev, [key]: checked }));
    if (resetFont && !checked) {
      setPreviewFont("'SCoreDream', sans-serif");
    }
  };

  return (
    <>
      <h1 className="text-xl font-bold p-4">Start</h1>

      <div className="space-y-6 p-4">
        {toggleList.map(({ key, label, component, resetFont }) => (
          <div key={key}>
            {/* ✅ 토글 + 바로 아래 컴포넌트 */}
            <div className="flex items-center justify-between border border-gray-300 p-3 rounded-lg shadow-sm bg-white">
              <span className="text-sm font-medium">{label}</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={toggles[key]}
                  onChange={() => handleToggle(key, resetFont)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-300 rounded-full peer-checked:bg-blue-600 transition-colors duration-300"></div>
                <div className="absolute left-0.5 top-0.5 w-5 h-5 bg-white rounded-full shadow-md transition-transform duration-300 transform peer-checked:translate-x-full"></div>
              </label>
            </div>

            <AnimatePresence mode="wait">
              {toggles[key] && (
                <motion.div key={key} {...animationProps}>
                  {component}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>

      <div className="p-4">
        <button
          onClick={() => setFullPreviewMode(true)}
          className="px-4 py-2 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700"
        >
          미리보기
        </button>
      </div>

      {fullPreviewMode && (
        <div className="fixed inset-0 bg-white z-50 overflow-y-auto">
          {/* ✅ 이 버튼을 absolute로 바꿔서 고정 */}
          <button
            onClick={() => setFullPreviewMode(false)}
            className="absolute top-4 right-4 px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 z-50"
          >
            ← 뒤로가기
          </button>

          <div className="pt-16 px-4 pb-4"> {/* ✅ 버튼 영역 안 가리게 패딩 추가 */}
            <PreviewComponents
              showMainPhoto={toggles.showMainPhoto}
              showMainText={toggles.showMainText}
              showFamilyInfoView={toggles.showFamilyInfo}
              showCalendarView={toggles.showCalendar}
              showText2={toggles.showText2}
              showImg2={toggles.showImg2}
              previewFont={previewFont}
              showFontSelector={toggles.showFontSelector}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default Home;

