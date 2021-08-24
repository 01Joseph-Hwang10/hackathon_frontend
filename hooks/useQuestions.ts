import { questions } from "@src/data/questions";
import { Question } from "@src/data/questions.types";
import { useState } from "react";

interface UseQuestionOutput {
  goToNext: () => boolean;
  question: Question;
  questionIndex: number;
}

export const useQuestions = (): UseQuestionOutput => {
  const [questionIndex, setQuestionIndex] = useState<number>(0);
  const question = questions[questionIndex];
  const goToNext = (): boolean => {
    if (questionIndex + 1 === questions.length) {
      return false;
    }
    setQuestionIndex(questionIndex + 1);
    return true;
  };
  return { question, goToNext, questionIndex };
};
