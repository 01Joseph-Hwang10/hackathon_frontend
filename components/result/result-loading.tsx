import AnalyzingIconText from "@components/icon_texts/analyzing-icon-text";
import React from "react";

const ResultLoading: React.FC = () => {
  return (
    <div className="flex justify-center items-start flex-col w-full h-5/6">
      <div className="flex justify-center items-center w-full h-1/3">
        <img src="/icons/ic_tb_logo_letter.png" />
      </div>
      <div className="flex justify-center items-center w-full h-1/3">
        <div className="flex justify-center items-center w-full h-1/3">
          <div className="flex justify-center items-center w-1/2">
            <AnalyzingIconText />
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center flex-col w-full h-1/3">
        <div className="w-1/3">
          <div className="slide">
            <img src="/icons/ic_tb_logo.png" />
          </div>
        </div>
        <div style={progressBarStyle} className="w-1/3"></div>
      </div>
    </div>
  );
};

export default ResultLoading;

const progressBarStyle: React.CSSProperties = {
  filter: "blur(1px)",
  border: "solid 1px #006ab7",
};
