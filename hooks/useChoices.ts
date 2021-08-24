import { QuestionVarId } from "@src/data/questions.types";
import { useEffect, useState } from "react";

interface UseChoicesInput {
  questionIndex: number;
}

interface UseChoicesOutput {
  selectedChoices: QuestionVarId[][];
  pushChoice: (choice: QuestionVarId[], index: number) => void;
  resetChoices: () => void;
  selectedChoiceIndexes: number[];
}

export const useChoices = ({
  questionIndex,
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
    setSelectedChoices([choice, ...selectedChoices]);
    setSelectedChoiceIndexes([...selectedChoiceIndexes, index]);
  };

  useEffect(() => {
    resetChoices();
  }, [questionIndex]);

  return { selectedChoices, pushChoice, resetChoices, selectedChoiceIndexes };
};
