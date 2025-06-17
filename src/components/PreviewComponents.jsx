import React from "react";
import MainPhoto from "../components/MainPhotoView";
import MainText from "../components/MainText";
import Img1 from "../components/Img1";
import Img2 from "../components/Img2";
import FamilyInfoView from "./FamilyInfoView";
import CalendarView from "./CalendarView";
import { motion } from "framer-motion";
import "../styles/PreviewComponents.css"; // ✅ 스냅 CSS 포함

const getFontSizeByFont = (font) => {
  if (font.includes("BMEuljiro10yearslater") || font.includes("Nanum Myeongjo")) {
    return "1.5rem";
  }
  return "1rem";
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

  if (showMainPhoto) {
    sections.push(
      <motion.section
        className="scroll-section"
        key="mainPhoto"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <MainPhoto full={true} /> {/* ✅ 이 부분만 fullscreen으로 */}
      </motion.section>
    );
  }


  if (showMainText) {
    sections.push(
      <motion.section
        className="scroll-section"
        key="mainText"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <MainText />
      </motion.section>
    );
  }

  if (showFamilyInfoView) {
    sections.push(
      <motion.section
        className="scroll-section"
        key="familyInfo"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <FamilyInfoView />
      </motion.section>
    );
  }

  if (showCalendarView) {
    sections.push(
      <motion.section
        className="scroll-section"
        key="calendar"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <CalendarView />
      </motion.section>
    );
  }

  if (showImg1 || showImg2) {
    sections.push(
      <motion.section
        className="scroll-section"
        key="images"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {showImg1 && <Img1 />}
        {showImg2 && <Img2 />}
      </motion.section>
    );
  }

  return (
    <div
      className="scroll-container"
      style={{
        fontFamily: previewFont,
        fontSize: getFontSizeByFont(previewFont),
      }}
    >
      {sections}
    </div>
  );
}

export default PreviewComponents;
