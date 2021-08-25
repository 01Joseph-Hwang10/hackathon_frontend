import { snsPushed } from "@redux/form/request-forms";
import React from "react";
import { useState } from "react";
import ClipboardJS from "clipboard";

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
    <div className="w-full justify-center items-center flex py-10">
      <button className="btn" data-clipboard-text={SHARE_LINK} onClick={share}>
        {loading ? "로딩중..." : "공유하기"}
      </button>
    </div>
  );
};

export default Share;
