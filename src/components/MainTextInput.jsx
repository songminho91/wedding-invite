import React from "react";
import { useWeddingStore } from "../store/useWeddingStore";

function MainTextInput() {
  const {
    greetingMessage,
    setGreetingMessage,
    previewFont,
  } = useWeddingStore();

  return (
    <div className="p-4">
      <h3 className="text-lg font-semibold mb-2">인삿말 입력</h3>
      <textarea
        value={greetingMessage}
        onChange={(e) => setGreetingMessage(e.target.value)}
        placeholder={`예: 
두 사람이 사랑으로 만나 
진실과 이해로써 하나를 이루려 합니다.
...
`}
        className="w-full h-52 p-4 text-base leading-relaxed border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-300"
        style={{ fontFamily: previewFont }}
      />
    </div>
  );
}

export default MainTextInput;
