import { combineReducers } from "redux";
import { reducer as scoreReducer } from "@slices/score";

const RootReducer = combineReducers({
  score: scoreReducer,
});

export type RootState = ReturnType<typeof RootReducer>;

export default RootReducer;
