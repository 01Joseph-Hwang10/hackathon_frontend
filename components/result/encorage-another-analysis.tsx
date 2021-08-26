import { ClusterType } from "@src/data/cluster.types";
import React from "react";

interface EncorageAnotherAnalysisProps {
  mode: ClusterType;
  toggleMode: () => void;
}

const EncorageAnotherAnalysis: React.FC<EncorageAnotherAnalysisProps> = ({
  mode,
  toggleMode,
}) => {
  const onClick = () => {
    toggleMode();
    scrollTo(0, 0);
  };

  return (
    <div className="w-10/12 flex flex-col justify-start items-center mt-28 space-x-3 space-y-3">
      <span style={titleStyle}>잠시만요! 다른 결과를 확인해보세요!</span>
      <button
        style={borderStyle}
        onClick={onClick}
        className="w-full py-7 flex justify-center items-center"
      >
        <span style={buttonTextStyle}>
          결과 {mode === "gmm" ? "A" : "B"} 확인하기
        </span>
      </button>
    </div>
  );
};

export default EncorageAnotherAnalysis;

const titleStyle: React.CSSProperties = {
  fontFamily: "NanumSquareR",
  color: "#191919",
  fontWeight: "normal",
  fontSize: "20px",
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: 1.2,
  textAlign: "center",
  letterSpacing: "normal",
};

const buttonTextStyle: React.CSSProperties = {
  fontFamily: "NanumSquareEB",
  color: "#108ccf",
  fontWeight: "normal",
  fontSize: "18px",
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: 1.33,
  textAlign: "center",
  letterSpacing: "normal",
};

const borderStyle: React.CSSProperties = {
  border: "solid 1px #108ccf",
};
