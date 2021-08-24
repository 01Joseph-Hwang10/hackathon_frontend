import { QuestionVarId, QuestionVar } from "@src/data/questions.types";
import { findTTVIdByTitle } from "@src/functions/helpers";
import { useEffect, useState } from "react";

const varToVarId = (questionVar: QuestionVar): QuestionVarId => {
  return {
    id: findTTVIdByTitle(questionVar.title),
    weight: Number(questionVar.weight),
  };
};

export interface UseQuestionHandleInput {
  updateStore: (vars: QuestionVarId[]) => void;
}

type UseQuestionHandleOutput = {
  setNextAnswer: (questionVar: QuestionVar) => void;
  resetAnswers: () => void;
};

export const useQuestionHandle = ({
  updateStore,
}: UseQuestionHandleInput): UseQuestionHandleOutput => {
  const [questionVarIds, setQuestionVarIds] = useState<QuestionVarId[]>([]);
  const setNextAnswer = (questionVar: QuestionVar): void => {
    setQuestionVarIds([varToVarId(questionVar), ...questionVarIds]);
  };
  const resetAnswers = (): void => {
    setQuestionVarIds([]);
  };
  return { setNextAnswer, resetAnswers };
};
