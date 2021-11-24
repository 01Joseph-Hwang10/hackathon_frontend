import { Question, Story } from "res/data/questions.types";
import React from "react";

interface SurveyContextProps {
  goToNext: () => boolean;
  questionOrStory: Question | Story;
  questionIndex: number;
  cleanUpCurrent: () => void;
}

export const SurveyContext = React.createContext<SurveyContextProps>({
  goToNext: () => null,
  questionOrStory: null,
  questionIndex: -1,
  cleanUpCurrent: () => null,
});

export const SurveyContextProvider = SurveyContext.Provider;
