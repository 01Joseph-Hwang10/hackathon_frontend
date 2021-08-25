import { combineReducers } from "redux";
import { reducer as scoreReducer } from "@slices/score";
import { reducer as choiceReducer } from "@slices/choice";

const RootReducer = combineReducers({
  score: scoreReducer,
  choice: choiceReducer,
});

export type RootState = ReturnType<typeof RootReducer>;

export default RootReducer;
