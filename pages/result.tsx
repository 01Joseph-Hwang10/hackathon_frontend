import ResultBody from "@components/result/result-body";
import ResultLoading from "@components/result/result-loading";
import { postAnswers } from "@redux/form/request-forms";
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
} from "tools/functions/calculations";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { connect, ConnectedProps } from "react-redux";
import { Dispatch } from "redux";
import Head from "next/head";
import { useRef } from "react";

type ResultReduxProps = ConnectedProps<typeof connector>;

interface ResultProps extends ResultReduxProps {}

const Result: React.FC<ResultProps> = ({
  variables,
  setTotalScore,
  setKMeansResult,
  setGMMResult,
  choices,
}) => {
  const delayRef = useRef<NodeJS.Timeout | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    delayRef.current = setTimeout(() => {
      const totalScore = calculateScore(variables);
      const kMeansResult = estimateClusterLabel(totalScore, "k-means");
      const gmmResult = estimateClusterLabel(totalScore, "gmm");
      postAnswers(choices);
      setTotalScore(totalScore);
      setKMeansResult(kMeansResult);
      setGMMResult(gmmResult);
      setLoading(false);
    }, 500);
    return () => {
      if (delayRef.current) clearTimeout(delayRef.current);
    };
  }, []);

  return (
    <div
      className={
        "justify-start items-center w-screen flex flex-col " +
        (loading ? "h-screen" : "")
      }
    >
      <Head>
        <title>여행성향 테스트 - 결과 | 트립빌더</title>
      </Head>
      {loading ? <ResultLoading /> : <ResultBody />}
    </div>
  );
};

const mapStateToProps = (state: RootState) => ({
  variables: state.score.variables,
  choices: state.choice.choices,
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
