import React from "react";
import { useContext } from "react";
import ChoiceButton from "./choice-button";
import { SurveyContext } from "../context/survey-context";
import { useChoices } from "@hooks/useChoices";

interface QuestionProps {}

const Question: React.FC<QuestionProps> = () => {
  const { question, questionIndex } = useContext(SurveyContext);
  const { title, choices, numChoices } = question;
  const { pushChoice, resetChoices, selectedChoiceIndexes, selectedChoices } =
    useChoices({
      questionIndex,
    });
  return (
    <div className="flex flex-col items-center justify-around h-full w-full">
      <div className="justify-center items-center flex flex-col">
        {title.split("\n").map((titleLine, index) => (
          <span key={index}>{titleLine}</span>
        ))}
      </div>
      <div className="justify-center items-center flex flex-col gap-10">
        {choices.map((choice, index) => (
          <ChoiceButton
            key={index}
            choiceIndex={index}
            choiceIndexes={selectedChoiceIndexes}
            choice={choice}
            pushChoice={pushChoice}
            resetChoices={resetChoices}
            numChoices={numChoices}
            selectedChoices={selectedChoices}
          />
        ))}
      </div>
    </div>
  );
};

export default Question;
