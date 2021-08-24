import { Question } from "@src/data/questions.types";
import React from "react";

interface SurveyContextProps {
  goToNext: () => boolean;
  question: Question;
  questionIndex: number;
}

export const SurveyContext = React.createContext<SurveyContextProps>({
  goToNext: () => null,
  question: null,
  questionIndex: -1,
});

export const SurveyContextProvider = SurveyContext.Provider;
