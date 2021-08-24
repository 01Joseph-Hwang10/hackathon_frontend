import { CaseReducer, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { QuestionVarId } from "@src/data/questions.types";
import { TTVTags } from "@src/data/travel-tendency-vars.types";

export type TotalScore = Record<TTVTags, number>;

export const initTotalScore: TotalScore = {
  sensitive: 0,
  unprepared: 0,
  mediaSharing: 0,
  challenge: 0,
  flex: 0,
  quick: 0,
};

interface ScoreState {
  variables: QuestionVarId[][];
  totalScore: TotalScore;
}

const initialState: ScoreState = {
  variables: [],
  totalScore: initTotalScore,
};

export type PushVariablesInput = QuestionVarId[];

const pushVariablesReducer: CaseReducer<
  ScoreState,
  PayloadAction<PushVariablesInput>
> = (state, { payload: newVars }) => {
  state.variables.push(newVars);
};

export type SetTotalScoreInput = TotalScore;

const setTotalScoreReducer: CaseReducer<
  ScoreState,
  PayloadAction<SetTotalScoreInput>
> = (state, { payload: totalScore }) => {
  state.totalScore = totalScore;
};

export const {
  reducer,
  actions: { pushVariables, setTotalScore },
} = createSlice({
  name: "scoreSlice",
  initialState,
  reducers: {
    pushVariables: pushVariablesReducer,
    setTotalScore: setTotalScoreReducer,
  },
});
