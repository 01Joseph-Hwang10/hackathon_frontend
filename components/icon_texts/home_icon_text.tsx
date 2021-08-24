import React from "react";

const renderTexts = (text: string): React.ReactNode[] => {
  return text.split("").map((char, index) => {
    return (
      <div
        key={index}
        className="w-14 h-10 flex justify-center items-center"
        style={{ ...borderStyle, borderLeftWidth: index === 0 ? "0px" : "1px" }}
      >
        <span style={textStyle}>{char}</span>
      </div>
    );
  });
};

const HomeIconText: React.FC = () => {
  return (
    <div
      style={borderStyle}
      className="w-full justify-center items-center flex flex-col border"
    >
      <div
        style={borderStyle}
        className="mt-1.5 w-full mb-1 border-b border-t flex justify-center items-center"
      >
        {renderTexts(" 여행 고? ")}
      </div>
      <div
        style={borderStyle}
        className="mb-1.5 w-full mt-1 border-b border-t flex justify-center items-center"
      >
        {renderTexts(" 시뮬레이션 ")}
      </div>
    </div>
  );
};

export default HomeIconText;

const borderStyle: React.CSSProperties = {
  borderColor: "#707070",
  borderStyle: "solid",
};

const textStyle: React.CSSProperties = {
  fontFamily: "NanumSquareR",
  color: "#191919",
  fontWeight: "normal",
  fontSize: "20px",
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: 1.15,
  textAlign: "center",
  letterSpacing: "normal",
};
