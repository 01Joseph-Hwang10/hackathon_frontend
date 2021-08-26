import React from "react";

const Footer: React.FC = () => {
  return (
    <div
      style={rootStyle}
      className="flex flex-col justify-end items-center p-10 pt-20 w-full"
    >
      <div className="w-9/12 grid grid-cols-3 gap-3 mb-7">
        <span style={contactsStyle}>Instagram</span>
        <span style={contactsStyle} className="col-span-2">
          @teamtripbuilder
        </span>
        <span style={contactsStyle}>Email</span>
        <span style={contactsStyle} className="col-span-2">
          teamtripbuilder@gmail.com
        </span>
      </div>
      <div className="flex justify-center items-center w-full">
        <span style={infoStyle}>
          이 페이지에는 네이버에서 제공한 나눔글꼴이 적용되어 있습니다.
        </span>
      </div>
    </div>
  );
};

export default Footer;

const rootStyle: React.CSSProperties = {
  backgroundColor: "#e8e8e8",
};

const contactsStyle: React.CSSProperties = {
  fontFamily: "NanumSquareL",
  color: "#707070",
  fontWeight: "normal",
  fontSize: "12px",
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: 1.09,
  textAlign: "left",
  letterSpacing: "normal",
};

const infoStyle: React.CSSProperties = {
  fontFamily: "NanumSquareL",
  color: "#707070",
  fontWeight: "normal",
  fontSize: "12px",
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: 1.5,
  textAlign: "center",
  letterSpacing: "normal",
};
