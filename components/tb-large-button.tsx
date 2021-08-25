import React from "react";

interface TBLargeButtonProps {
  onClick: () => void;
  text: string;
  half?: boolean;
  order?: number;
  numChoices?: number;
}

const TBLargeButton: React.FC<TBLargeButtonProps> = ({
  onClick,
  text,
  half,
  order,
  numChoices,
}) => {
  return (
    <button
      style={
        numChoices > 1 && order
          ? { backgroundColor: "rgba(0,0,0,0.4)" }
          : { backgroundColor: "#d6ebf4" }
      }
      className={
        "py-10 justify-center items-center flex px-5 relative " +
        (half ? "w-5/12" : "w-11/12")
      }
      onClick={onClick}
    >
      {numChoices > 1 && order > 0 && (
        <div
          className="absolute top-5 left-5 w-8 h-8 rounded-2xl z-10 flex justify-center items-center"
          style={orderIconStyle}
        >
          <span style={orderTextStyle}>{order}</span>
        </div>
      )}
      <span style={buttonTextStyle}>{text}</span>
    </button>
  );
};

export default TBLargeButton;

const buttonTextStyle: React.CSSProperties = {
  fontFamily: "NanumSquareEB",
  color: "#191919",
  fontWeight: "normal",
  fontSize: "18px",
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: 1.33,
  textAlign: "center",
  letterSpacing: "normal",
};

const orderIconStyle: React.CSSProperties = {
  backgroundColor: "#7dcef4",
};

const orderTextStyle: React.CSSProperties = {
  fontFamily: "NanumSquareEB",
  color: "#f7f8fb",
  fontWeight: "normal",
  fontSize: "16px",
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: 1.75,
  textAlign: "center",
  letterSpacing: "normal",
};
