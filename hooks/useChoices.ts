import { QuestionVarId } from "@src/data/questions.types";
import { useEffect, useState } from "react";

interface UseChoicesInput {
  questionIndex: number;
  numChoices: number;
}

interface UseChoicesOutput {
  selectedChoices: QuestionVarId[][];
  pushChoice: (choice: QuestionVarId[], index: number) => void;
  resetChoices: () => void;
  selectedChoiceIndexes: number[];
}

export const useChoices = ({
  questionIndex,
  numChoices,
}: UseChoicesInput): UseChoicesOutput => {
  const [selectedChoiceIndexes, setSelectedChoiceIndexes] = useState<number[]>(
    []
  );
  const [selectedChoices, setSelectedChoices] = useState<QuestionVarId[][]>([]);

  const resetChoices = () => {
    setSelectedChoices([]);
    setSelectedChoiceIndexes([]);
  };

  const pushChoice = (choice: QuestionVarId[], index: number) => {
    if (selectedChoiceIndexes.length === numChoices) return;
    if (selectedChoiceIndexes.includes(index)) {
      setSelectedChoices([choice]);
      setSelectedChoiceIndexes([index]);
    } else {
      setSelectedChoices([choice, ...selectedChoices]);
      setSelectedChoiceIndexes([...selectedChoiceIndexes, index]);
    }
  };

  useEffect(() => {
    resetChoices();
  }, [questionIndex]);

  return { selectedChoices, pushChoice, resetChoices, selectedChoiceIndexes };
};
