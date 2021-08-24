import { QuestionChoices, QuestionVar } from "@src/data/questions.types";
import React, { useContext } from "react";
import { SurveyContext } from "./context/survey-context";

interface ChoiceButtonProps {
  choice: QuestionChoices;
}

const ChoiceButton: React.FC<ChoiceButtonProps> = ({
  choice: { title, vars },
}) => {
  const { question, goToNext, questionIndex } = useContext(SurveyContext);
  const variables = vars as QuestionVar[];
  return (
    <button>
      <span>{title}</span>
    </button>
  );
};

export default ChoiceButton;
