import React from "react";
import { useWeddingStore } from "../store/useWeddingStore";

function MainText() {
  const { greetingMessage } = useWeddingStore();

  return (
    <div className="whitespace-pre-line text-center px-4 py-2 text-[1.2rem] leading-relaxed">
      <p className="font-semibold mb-2">결혼합니다.</p>
      <p>{greetingMessage}</p>
    </div>
  );
}

export default MainText;
