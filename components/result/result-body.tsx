import { RootState } from "@redux/root-reducer";
import React from "react";
import { connect, ConnectedProps } from "react-redux";
import DoItAgain from "./do-it-again";

type ResultBodyReduxProps = ConnectedProps<typeof connector>;

interface ResultBodyProps extends ResultBodyReduxProps {}

const ResultBody: React.FC<ResultBodyProps> = ({
  totalScore,
  kMeanResult,
  gmmResult,
}) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-64 break-words">
        <span>{JSON.stringify(totalScore)}</span>
      </div>
      <span>{`K-Mean: ${kMeanResult}`}</span>
      <span>{`GMM: ${gmmResult}`}</span>
      <DoItAgain />
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
