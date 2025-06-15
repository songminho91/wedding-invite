import React from "react";

const fonts = [
  {
    name: "Pretendard",
    label: "프리텐다드",
    css: "'Pretendard Variable', sans-serif",
  },
  {
    name: "Danjo",
    label: "단조체",
    css: "'Danjo', sans-serif",
  },
  {
    name: "omyu_pretty",
    label: "오뮤 프리티체",
    css: "'omyu_pretty', cursive",
  },
  {
    name: "insungitCutelivelyjisu",
    label: "인성 귀염발랄지수체",
    css: "'insungitCutelivelyjisu', cursive",
  },
  {
    name: "ChosunGs",
    label: "조선궁서체",
    css: "'ChosunGs', serif",
  },
];



function FontSelector({ previewFont, setPreviewFont }) {
  return (
    <div className="flex flex-col gap-4 my-4">
      {fonts.map((font) => (
        <label
          key={font.name}
          style={{
            fontFamily: font.css,
            fontSize: "1rem",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          <input
            type="radio"
            name="font"
            value={font.css}
            checked={previewFont === font.css}
            onChange={(e) => setPreviewFont(e.target.value)}
          />
          <span>가나다라마바사아 ({font.label})</span>
        </label>
      ))}
    </div>
  );
}

export default FontSelector;
