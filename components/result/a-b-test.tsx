import TBLargeButton from "@components/tb-large-button";
import { likePushed } from "@redux/form/request-forms";
import React from "react";
import { useState } from "react";

const ABTest: React.FC = () => {
  const [loading, setLoading] = useState(false);

  const likePushedFactory = (good: boolean) => {
    // if a pushed, true
    return async () => {
      setLoading(true);
      await likePushed(good);
      setLoading(false);
      alert("좋은 의견 감사합니다!");
    };
  };

  return (
    <div className="w-full flex flex-col justify-center items-center gap-5 py-10">
      <span style={subTitleStyle}>더 만족한 결과에 투표해 주세요</span>
      <div className="w-full flex justify-center items-center gap-3">
        <TBLargeButton
          onClick={likePushedFactory(true)}
          text={loading ? "로딩중..." : "A"}
          half={true}
        />
        <TBLargeButton
          onClick={likePushedFactory(false)}
          text={loading ? "로딩중..." : "B"}
          half={true}
        />
      </div>
    </div>
  );
};

export default ABTest;

const subTitleStyle: React.CSSProperties = {
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
