import ResultIconText from "@components/icon_texts/result-icon-text";
import { RootState } from "@redux/root-reducer";
import { ClusterType } from "@src/data/cluster.types";
import React from "react";
import { useState } from "react";
import { connect, ConnectedProps } from "react-redux";
import ABTest from "./a-b-test";
import Descriptions from "./descriptions";
import EncorageAnotherAnalysis from "./encorage-another-analysis";
import HexagonPlot from "./hexagon-plot";
import Restart from "./restart";
import Share from "./share";
import TabBar from "./tab-bar";

type ResultBodyReduxProps = ConnectedProps<typeof connector>;

interface ResultBodyProps extends ResultBodyReduxProps {}

const ResultBody: React.FC<ResultBodyProps> = ({
  totalScore,
  kMeanResult,
  gmmResult,
}) => {
  const [viewMode, setViewMode] = useState<ClusterType>("k-means");
  const toggleViewMode = () => {
    if (viewMode === "gmm") {
      setViewMode("k-means");
    } else {
      setViewMode("gmm");
    }
  };

  return (
    <div className="flex flex-col justify-start items-center">
      <TabBar mode={viewMode} toggleMode={toggleViewMode} />
      <div className="w-1/2 py-10">
        <ResultIconText />
      </div>
      <div id="illustration"></div>
      <Descriptions
        kMeansResult={kMeanResult}
        gmmResult={gmmResult}
        mode={viewMode}
      />
      <HexagonPlot totalScore={totalScore} />
      <EncorageAnotherAnalysis mode={viewMode} toggleMode={toggleViewMode} />
      <ABTest />
      <Restart />
      <Share />
    </div>
  );
};

const mapStateToProps = (state: RootState) => ({
  totalScore: state.score.totalScore,
  kMeanResult: state.score.kMeansResult,
  gmmResult: state.score.gmmResult,
});

const connector = connect(mapStateToProps);

export default connector(ResultBody);
