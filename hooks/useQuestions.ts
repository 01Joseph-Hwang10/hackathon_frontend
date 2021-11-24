import { questions } from "res/data/questions";
import { Question, Story } from "res/data/questions.types";
import { useEffect, useState } from "react";

interface UseQuestionOutput {
  goToNext: () => boolean;
  questionOrStory: Question | Story;
  questionIndex: number;
  onFadeOut: boolean;
  cleanUpCurrent: () => void;
  goBack: () => boolean;
}

export const useQuestions = (): UseQuestionOutput => {
  const [index, setIndex] = useState<number>(0);
  const [questionIndex, setQuestionIndex] = useState<number>(0);
  const [onFadeOut, setOnFadeOut] = useState(true);
  const questionOrStory = questions[index];
  const cleanUpCurrent = () => {
    setOnFadeOut(true);
  };
  const goToNext = (): boolean => {
    if (index + 1 === questions.length) {
      return false;
    }
    setOnFadeOut(false);
    setIndex(index + 1);
    if (
      index + 1 < questions.length &&
      questions[index + 1].type === "question"
    ) {
      setQuestionIndex(questionIndex + 1);
    }
    return true;
  };
  const goBack = (): boolean => {
    return true;
  };
  useEffect(() => {
    setOnFadeOut(false);
  }, []);
  return {
    questionOrStory,
    goToNext,
    questionIndex,
    onFadeOut,
    cleanUpCurrent,
    goBack,
  };
};
