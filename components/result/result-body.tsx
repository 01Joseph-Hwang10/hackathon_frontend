import Footer from "@components/footer";
import ResultIconText from "@components/icon_texts/result-icon-text";
import { RootState } from "@redux/root-reducer";
import { ClusterType } from "@src/data/cluster.types";
import { resultNameMapping } from "@src/data/image-name-mapping";
import React from "react";
import { useState } from "react";
import { connect, ConnectedProps } from "react-redux";
import ABTest from "./a-b-test";
import Descriptions from "./descriptions";
import EncorageAnotherAnalysis from "./encorage-another-analysis";
import Event from "./event";
import GoodOrBad from "./good-or-bad";
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
      <div
        id="illustration"
        className="flex justify-center items-center w-7/12"
      >
        <img
          style={imgStyle}
          src={
            resultNameMapping["both"][
              viewMode === "gmm" ? gmmResult : kMeanResult
            ]
          }
        />
      </div>
      <Descriptions
        kMeansResult={kMeanResult}
        gmmResult={gmmResult}
        mode={viewMode}
      />
      <div
        id="descriptionImage"
        className="flex justify-center items-center w-screen my-10 mt-20 mx-auto"
      >
        <img
          style={imgStyle}
          className="w-full mx-auto"
          src={
            resultNameMapping[viewMode][
              viewMode === "gmm" ? gmmResult : kMeanResult
            ]
          }
        />
      </div>
      <GoodOrBad />
      <EncorageAnotherAnalysis mode={viewMode} toggleMode={toggleViewMode} />
      <ABTest />
      <Event />
      <Share />
      <Footer />
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

const imgStyle: React.CSSProperties = {
  objectFit: "cover",
};
