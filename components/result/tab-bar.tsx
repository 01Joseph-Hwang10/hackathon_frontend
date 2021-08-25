import { ClusterType } from "@src/data/cluster.types";
import React from "react";

interface TabBarProps {
  mode: ClusterType;
  toggleMode: () => void;
}

const TabBar: React.FC<TabBarProps> = ({ mode, toggleMode }) => {
  return (
    <button
      onClick={toggleMode}
      className="flex justify-center items-center w-full"
    >
      {mode === "gmm" ? (
        <img
          src="/image/tab_bar_/tab_bar_b.svg"
          style={imgStyle}
          className="w-full"
        />
      ) : (
        <img
          src="/image/tab_bar_/tab_bar_a.svg"
          style={imgStyle}
          className="w-full"
        />
      )}
    </button>
  );
};

export default TabBar;

const imgStyle: React.CSSProperties = {
  objectFit: "cover",
};
