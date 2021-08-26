import TBLargeButton from "@components/tb-large-button";
import { abPushed } from "@redux/form/request-forms";
import React from "react";
import { useState } from "react";

const ABTest: React.FC = () => {
  const [loading, setLoading] = useState(false);

  const abPushedFactory = (type: "A" | "B") => {
    // if a pushed, true
    return async () => {
      setLoading(true);
      await abPushed(type);
      setLoading(false);
      alert("좋은 의견 감사합니다!");
    };
  };

  return (
    <div className="w-full flex flex-col justify-center items-center space-x-3 space-y-3 py-10 mt-12">
      <span style={titleStyle}>더 만족한 결과에 투표해 주세요</span>
      <div className="w-full flex justify-center items-center space-x-3 space-y-3">
        <TBLargeButton
          onClick={abPushedFactory("A")}
          text={loading ? "로딩중..." : "A"}
          half={true}
        />
        <TBLargeButton
          onClick={abPushedFactory("B")}
          text={loading ? "로딩중..." : "B"}
          half={true}
        />
      </div>
      <span style={subTitleStyle}>알고리즘 고도화에 큰 힘이 됩니다 {":)"}</span>
    </div>
  );
};

export default ABTest;

const titleStyle: React.CSSProperties = {
  fontFamily: "NanumSquareEB",
  fontSize: "22px",
  fontWeight: "normal",
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: 1.11,
  letterSpacing: "normal",
  textAlign: "center",
  color: "#191919",
};

const subTitleStyle: React.CSSProperties = {
  fontFamily: "NanumSquareR",
  fontSize: "16px",
  fontWeight: "normal",
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: 1.5,
  letterSpacing: "normal",
  textAlign: "center",
  color: "#191919",
};
