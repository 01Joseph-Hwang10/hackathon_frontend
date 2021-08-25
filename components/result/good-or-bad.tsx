import CircularWrapper from "@components/circular-wrapper";
import { likePushed } from "@redux/form/request-forms";
import React from "react";
import { useState } from "react";

const GoodOrBad: React.FC = () => {
  const [loading, setLoading] = useState(false);

  const onClickFactory = (liked: boolean) => {
    return async () => {
      setLoading(true);
      await likePushed(liked);
      setLoading(false);
      alert("좋은 의견 감사합니다!");
    };
  };

  return (
    <div className="flex justify-center items-center w-full">
      <div className="flex justify-between items-center w-1/3">
        <button
          onClick={onClickFactory(true)}
          style={{ ...buttonStyle, opacity: loading ? 0.7 : 1 }}
        >
          <CircularWrapper>
            <img src="/image/like.png" />
          </CircularWrapper>
        </button>
        <button
          onClick={onClickFactory(false)}
          style={{ ...buttonStyle, opacity: loading ? 0.7 : 1 }}
        >
          <CircularWrapper>
            <img src="/image/like.png" style={upsideDown} />
          </CircularWrapper>
        </button>
      </div>
    </div>
  );
};

export default GoodOrBad;

const upsideDown: React.CSSProperties = {
  transform: "rotate(180deg)",
};

const buttonStyle: React.CSSProperties = {
  transitionDuration: "0.25s",
  transitionTimingFunction: "linear",
  transitionProperty: "opacity",
};
