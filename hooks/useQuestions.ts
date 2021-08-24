import { Question } from "@src/data/questions.types";
import questionGenerator from "@src/functions/question-generator";
import { useEffect, useState } from "react";

interface UseQuestionOutput {
  goToNext: () => void;
  question: Question | void;
  questionIndex: number;
}

export const useQuestions = (): UseQuestionOutput => {
  const [questionIndex, setQuestionIndex] = useState<number>(-1);
  const [question, setQuestion] = useState<Question | void>(null);
  const questions = questionGenerator();
  const goToNext = () => {
    setQuestionIndex(questionIndex + 1);
    setQuestion(questions.next().value ?? null);
  };
  useEffect(() => {
    goToNext();
  }, []);
  return { question, goToNext, questionIndex };
};
