import React from "react";
import MainPhoto from "../components/MainPhotoView";
import MainText from "../components/MainText";
import Img1 from "../components/Img1";
import Img2 from "../components/Img2";
import FamilyInfoView from "./FamilyInfoView";
import CalendarView from "./CalendarView";
import { motion } from "framer-motion";

const getFontSizeByFont = (font) => {
  if (font.includes("BMEuljiro10yearslater") || font.includes("Nanum Myeongjo")) {
    return "text-[1.5rem]";
  }
  return "text-base"; // Tailwind 기준
};

function PreviewComponents({
  showMainPhoto,
  showMainText,
  showFamilyInfoView,
  showCalendarView,
  showImg1,
  showImg2,
  previewFont,
}) {
  const sections = [];

  const pushSection = (key, Component) => {
    sections.push(
      <motion.section
        key={key}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
        className="w-full max-w-2xl mx-auto px-4 py-6"
      >
        <Component />
      </motion.section>
    );
  };

  if (showMainPhoto) pushSection("mainPhoto", MainPhoto);
  if (showMainText) pushSection("mainText", MainText);
  if (showFamilyInfoView) pushSection("familyInfo", FamilyInfoView);
  if (showCalendarView) pushSection("calendar", CalendarView);
  if (showImg1 || showImg2) {
    pushSection("images", () => (
      <>
        {showImg1 && <Img1 />}
        {showImg2 && <Img2 />}
      </>
    ));
  }

  return (
    <div
      className={`flex flex-col items-center w-full min-h-screen py-6 bg-gray-50 ${getFontSizeByFont(previewFont)}`}
      style={{ fontFamily: previewFont }}
    >
      {sections}
    </div>
  );
}

export default PreviewComponents;
