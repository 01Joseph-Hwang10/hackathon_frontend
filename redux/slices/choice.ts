import { CaseReducer, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ChoiceState {
  choices: number[][];
}

const initialState: ChoiceState = {
  choices: [],
};

export type PushChoicesInput = number[];

const pushChoicesReducer: CaseReducer<
  ChoiceState,
  PayloadAction<PushChoicesInput>
> = (state, { payload: newChoices }) => {
  state.choices.push(newChoices);
};

const resetChoicesReducer: CaseReducer<ChoiceState> = (state) => {
  state.choices = [];
};

export const {
  reducer,
  actions: { pushChoices, resetChoices },
} = createSlice({
  name: "choiceSlice",
  initialState,
  reducers: {
    pushChoices: pushChoicesReducer,
    resetChoices: resetChoicesReducer,
  },
});
