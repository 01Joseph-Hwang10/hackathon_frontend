import TBLargeButton from "@components/tb-large-button";
import { ClusterType } from "@src/data/cluster.types";
import React from "react";

interface EncorageAnotherAnalysisProps {
  mode: ClusterType;
  toggleMode: () => void;
}

const EncorageAnotherAnalysis: React.FC<EncorageAnotherAnalysisProps> = ({
  mode,
  toggleMode,
}) => {
  const onClick = () => {
    toggleMode();
    scrollTo(0, 0);
  };

  return (
    <div className="w-11/12 flex flex-col justify-start items-center my-10">
      <TBLargeButton
        onClick={onClick}
        text={mode === "gmm" ? "결과 A도 보시겠어요?" : "결과 B도 보시겠어요?"}
      />
    </div>
  );
};

export default EncorageAnotherAnalysis;
