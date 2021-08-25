import React from "react";

const renderTexts = (text: string): React.ReactNode[] => {
  return text.split("").map((char, index) => {
    return (
      <div
        key={index}
        className="w-8 h-8 flex justify-center items-center"
        style={{ ...borderStyle, borderLeftWidth: index === 0 ? "0px" : "1px" }}
      >
        <span style={textStyle}>{char}</span>
      </div>
    );
  });
};

interface QuestionIconTextProps {
  text: string;
}

const QuestionIconText: React.FC<QuestionIconTextProps> = ({ text }) => {
  return (
    <div
      style={borderStyle}
      className="justify-center items-center flex border"
    >
      {renderTexts(text)}
    </div>
  );
};

export default QuestionIconText;

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
