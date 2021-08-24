import { initTotalScore, TotalScore } from "@slices/score";
import {
  rangeDatasetDetail,
  rangeDatasetGroup,
  rankingDatasetDetail,
  rankingDatasetGroup,
} from "@src/data/dataset";
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
}): number => (x - xmin) / (xmax - xmin);

type GroupScore = Partial<Record<TTVTags, number>>;

export const calculateScore = (variables: QuestionVarId[][]): TotalScore => {
  const calculationStore: Record<string, number> = {};
  const rankingGroupScore: GroupScore = {};
  const rangeGroupScore: GroupScore = {};
  const totalGroupScore: TotalScore = initTotalScore;
  variables.forEach((variableSet) => {
    variableSet.forEach((variable, index) => {
      const rankingFactor = index + 1;
      calculateScore[variable.id.toString()] += rankingFactor * variable.weight;
    });
  });
  Object.entries(calculationStore).forEach(([varId, score]) => {
    const ttvVar = ttvVars[varId] as TTVVar;
    if (getTTVDataTypeByDataTypeTitle(ttvVar.dataTypeTitle) === "range") {
      const ttvRow = findRowByTitle(rangeDatasetDetail, ttvVar.title);
      rangeGroupScore[ttvVar.tag] += normalize({
        x: score,
        xmin: ttvRow[1],
        xmax: ttvRow[2],
      });
    } else {
      const ttvRow = findRowByTitle(rankingDatasetDetail, ttvVar.title);
      rankingGroupScore[ttvVar.tag] += normalize({
        x: score,
        xmin: ttvRow[1],
        xmax: ttvRow[2],
      });
    }
  });
  Object.keys(totalGroupScore).forEach((tag) => {
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

  return totalGroupScore;
};
