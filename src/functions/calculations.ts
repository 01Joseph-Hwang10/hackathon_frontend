import { initTotalScore, TotalScore } from "@slices/score";
import { Cluster, ClusterType } from "@src/data/cluster.types";
import {
  rangeDatasetDetail,
  rangeDatasetGroup,
  rankingDatasetDetail,
  rankingDatasetGroup,
} from "@src/data/dataset";
import { gmmClusters } from "@src/data/gmm";
import { kMeansClusters } from "@src/data/k-means";
import { QuestionVarId } from "@src/data/questions.types";
import { ttvVars } from "@src/data/travel-tendency-vars";
import { TTVTags, TTVVar } from "@src/data/travel-tendency-vars.types";
import { findRowByTitle, getTTVDataTypeByDataTypeTitle } from "./helpers";

export const normalize = ({
  x,
  xmin,
  xmax,
}: {
  x: number;
  xmin: number;
  xmax: number;
}): number => {
  return (x - xmin) / (xmax - xmin);
};

type GroupScore = Partial<Record<TTVTags, number>>;

export const calculateScore = (variables: QuestionVarId[][][]): TotalScore => {
  const calculationScore: Record<string, number> = {};
  const rankingGroupScore: GroupScore = {};
  const rangeGroupScore: GroupScore = {};
  const totalGroupScore: Partial<TotalScore> = {};
  variables.forEach((questionVariable, questionIndex) => {
    questionVariable.forEach((rankingVariables, rankingIndex) => {
      const rankingFactor = rankingIndex + 1;
      rankingVariables.forEach((variable) => {
        const currentScore = calculationScore[variable.id.toString()];
        const factoredWeight = rankingFactor * variable.weight;
        calculationScore[variable.id.toString()] = currentScore
          ? currentScore + factoredWeight
          : factoredWeight;
      });
    });
  });
  Object.entries(calculationScore).forEach(([varId, score]) => {
    const ttvVar = ttvVars[varId] as TTVVar;
    if (getTTVDataTypeByDataTypeTitle(ttvVar.dataTypeTitle) === "range") {
      const ttvRow = findRowByTitle(rangeDatasetDetail, ttvVar.title);
      ttvVar.tag.forEach((aTag) => {
        const currentScore = rangeGroupScore[aTag];
        const normalizedWeight = score;
        // const normalizedWeight = normalize({
        //   x: score,
        //   xmin: ttvRow[1],
        //   xmax: ttvRow[2],
        // });
        rangeGroupScore[aTag] = currentScore
          ? currentScore + normalizedWeight
          : normalizedWeight;
      });
    } else {
      const ttvRow = findRowByTitle(rankingDatasetDetail, ttvVar.title);
      ttvVar.tag.forEach((aTag) => {
        const currentScore = rankingGroupScore[aTag];
        const normalizedWeight = score;
        // const normalizedWeight = normalize({
        //   x: score,
        //   xmin: ttvRow[1],
        //   xmax: ttvRow[2],
        // });
        rankingGroupScore[aTag] = currentScore
          ? currentScore + normalizedWeight
          : normalizedWeight;
      });
    }
  });
  Object.keys(initTotalScore).forEach((tag) => {
    const rangeTTVRow = findRowByTitle(rangeDatasetGroup, tag);
    const rankingTTVRow = findRowByTitle(rankingDatasetGroup, tag);
    const normalizedRangeScore = normalize({
      x: rangeGroupScore[tag],
      xmin: rangeTTVRow[1],
      xmax: rangeTTVRow[2],
    });
    const normalizedRankingScore = normalize({
      x: rankingGroupScore[tag],
      xmin: rankingTTVRow[1],
      xmax: rankingTTVRow[2],
    });
    totalGroupScore[tag] =
      normalizedRangeScore * 0.4 + normalizedRankingScore * 0.6;
  });

  return totalGroupScore as TotalScore;
};

export const estimateClusterLabel = (
  score: TotalScore,
  type: ClusterType
): string => {
  let clusters: Cluster[];
  if (type === "k-means") {
    clusters = kMeansClusters;
  } else {
    clusters = gmmClusters;
  }

  const distances: [number, string][] = clusters.map(
    ({ center, clusterLabel }) => {
      let dStore = 0;
      for (const tag in center) {
        dStore += (center[tag] - score[tag]) ** 2;
      }
      return [dStore, clusterLabel];
    }
  );

  const [_, label]: [number, string] = distances.reduce((acc, cur) => {
    return acc[0] > cur[0] ? cur : acc;
  });
  return label;
};
