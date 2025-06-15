import React from "react";
import { useWeddingStore } from "../store/useWeddingStore";

function FamilyInfoView() {
  const { familyInfo } = useWeddingStore();

  return (
    <div className="flex flex-col items-center text-center text-2xl">
      <>
        {familyInfo.gf} · {familyInfo.gm}의 {familyInfo.s} {familyInfo.g}
      </>
      <br />
      <br />
      <>
        {familyInfo.bf} · {familyInfo.bm}의 {familyInfo.d} {familyInfo.b}
      </>
    </div>
  );
}

export default FamilyInfoView;
