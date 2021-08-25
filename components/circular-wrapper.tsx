import React from "react";

interface CircularWrapperProps {
  size?: number;
  backgroundColor?: string;
}

const CircularWrapper: React.FC<CircularWrapperProps> = ({
  children,
  size,
  backgroundColor,
}) => {
  size ??= 60;
  backgroundColor ??= "white";

  const rootStyle: React.CSSProperties = {
    width: `${size}px`,
    height: `${size}px`,
    borderRadius: `${size / 2}px`,
    backgroundColor,
    border: "solid 1px #d6ebf4",
  };

  return (
    <div style={rootStyle} className="flex justify-center items-center">
      {children}
    </div>
  );
};

export default CircularWrapper;
