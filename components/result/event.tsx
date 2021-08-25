import React from "react";

const Event: React.FC = () => {
  return (
    <div className="w-11/12 flex flex-col justify-start items-center mt-12">
      <div className="flex justify-center items-center mb-8">
        <span style={titleStyle}>이벤트</span>
      </div>
      <div className="flex flex-col justify-start items-center mb-5">
        <span style={descStyle}>안녕하세요! 여행의 일상화를 꿈꾸며</span>
        <span style={descStyle}>나만의 여행을 만드는 트립빌더입니다.</span>
        <span style={descStyle}>인스타그램 스토리 공유 이벤트</span>
        <span style={descStyle}>참여하시고 경품 받아가세요!</span>
      </div>
      <div className="flex flex-col justify-start items-center mb-12">
        <span style={descStyle}>#여행고시뮬레이션 #STTI</span>
        <span style={descStyle}>#간접여행 #너의여행을만들어라</span>
      </div>
    </div>
  );
};

export default Event;

const titleStyle: React.CSSProperties = {
  fontFamily: "NanumSquareEB",
  color: "#191919",
  fontWeight: "normal",
  fontSize: "22px",
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: 1.09,
  textAlign: "center",
  letterSpacing: "normal",
};

const descStyle: React.CSSProperties = {
  fontFamily: "NanumSquareR",
  color: "#191919",
  fontWeight: "normal",
  fontSize: "16px",
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: 1.5,
  textAlign: "center",
  letterSpacing: "normal",
};
