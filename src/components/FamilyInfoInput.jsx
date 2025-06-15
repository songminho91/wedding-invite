import { useWeddingStore } from "../store/useWeddingStore";
import React from "react";


function FamilyInfoInput() {
  const { familyInfo, setFamilyInfo } = useWeddingStore();

  const sides = [
    {
      label: "🤵 신랑측",
      fields: [
        { key: "gf", label: "👨 아버지" },
        { key: "gm", label: "👩 어머니" },
        { key: "g", label: "🤵 신랑" },
        { key: "s", label: "📛 호칭 (예: 아들)" },
      ],
    },
    {
      label: "👰 신부측",
      fields: [
        { key: "bf", label: "👨 아버지" },
        { key: "bm", label: "👩 어머니" },
        { key: "b", label: "👰 신부" },
        { key: "d", label: "📛 호칭 (예: 딸)" },
      ],
    },
  ];

  return (
    <div className="p-4">
      {sides.map((side) => (
        <div key={side.label} className="mb-8">
          <div className="font-bold text-lg mb-2">{side.label}</div>
          {side.fields.map(({ key, label }) => (
            <div key={key} className="mb-2">
              <label className="block mb-1">{label}</label>
              <input
                type="text"
                value={familyInfo[key] || ""}
                onChange={(e) => setFamilyInfo(key, e.target.value)}
                placeholder="성함 또는 호칭"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default FamilyInfoInput;
