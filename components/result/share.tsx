import { snsPushed } from "@redux/form/request-forms";
import React from "react";
import { useState } from "react";
import ClipboardJS from "clipboard";
import CircularWrapper from "@components/circular-wrapper";

const Share: React.FC = () => {
  const clipboard = new ClipboardJS(".btn");
  const SHARE_LINK = window.location.origin;
  const [loading, setLoading] = useState(false);
  const share = async () => {
    setLoading(true);
    await snsPushed();
    setLoading(false);
    alert("클립보드에 웹 주소가 복사되었습니다!");
  };

  return (
    <div className="w-full justify-center items-center flex flex-col space-x-3 space-y-3 pb-28">
      <button
        style={{ ...buttonStyle, opacity: loading ? 0.7 : 1 }}
        className="btn"
        data-clipboard-text={SHARE_LINK}
        onClick={share}
      >
        <CircularWrapper backgroundColor={"#7dcef4"}>
          <img src="/image/link.png" />
        </CircularWrapper>
      </button>
      <span style={descStyle}>링크 복사</span>
    </div>
  );
};

export default Share;

const buttonStyle: React.CSSProperties = {
  transitionDuration: "0.25s",
  transitionTimingFunction: "linear",
  transitionProperty: "opacity",
};

const descStyle: React.CSSProperties = {
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
