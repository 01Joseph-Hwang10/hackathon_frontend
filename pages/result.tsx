import ResultBody from "@components/result/result-body";
import ResultLoading from "@components/result/result-loading";
import { RootState } from "@redux/root-reducer";
import {
  setGMMResult,
  SetGMMResultInput,
  setKMeansResult,
  SetKMeansResultInput,
  setTotalScore,
  SetTotalScoreInput,
} from "@slices/score";
import {
  calculateScore,
  estimateClusterLabel,
} from "@src/functions/calculations";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { connect, ConnectedProps } from "react-redux";
import { Dispatch } from "redux";

type ResultReduxProps = ConnectedProps<typeof connector>;

interface ResultProps extends ResultReduxProps {}

const Result: React.FC<ResultProps> = ({
  variables,
  setTotalScore,
  setKMeansResult,
  setGMMResult,
}) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const totalScore = calculateScore(variables);
      const kMeansResult = estimateClusterLabel(totalScore, "k-means");
      const gmmResult = estimateClusterLabel(totalScore, "gmm");
      setTotalScore(totalScore);
      setKMeansResult(kMeansResult);
      setGMMResult(gmmResult);
      setLoading(false);
    })();
  }, []);

  return (
    <div className="justify-start items-center h-screen w-screen flex flex-col">
      {loading ? <ResultLoading /> : <ResultBody />}
    </div>
  );
};

const mapStateToProps = (state: RootState) => ({
  variables: state.score.variables,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setTotalScore: (payload: SetTotalScoreInput) =>
    dispatch(setTotalScore(payload)),
  setKMeansResult: (payload: SetKMeansResultInput) =>
    dispatch(setKMeansResult(payload)),
  setGMMResult: (payload: SetGMMResultInput) => dispatch(setGMMResult(payload)),
});

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(Result);
