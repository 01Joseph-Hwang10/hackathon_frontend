import React from "react";
import { useContext } from "react";
import ChoiceButton from "./choice-button";
import { SurveyContext } from "../context/survey-context";
import { useChoices } from "@hooks/useChoices";
import { imageNameMapping } from "res/data/image-name-mapping";
import QuestionIconText from "@components/icon_texts/question-icon-text";
import { Question as QuestionType } from "res/data/questions.types";

interface QuestionProps {}

const Question: React.FC<QuestionProps> = () => {
  const { questionOrStory: question, questionIndex } =
    useContext(SurveyContext);
  const order = questionIndex + 1;
  const imgSource = imageNameMapping["q" + order.toString()];
  const { title, choices, numChoices } = question as QuestionType;
  const { pushChoice, resetChoices, selectedChoiceIndexes, selectedChoices } =
    useChoices({
      questionIndex,
      numChoices,
    });
  return (
    <div className="flex flex-col items-center justify-start w-full min-h-full space-y-10">
      <img style={imgStyle} src={imgSource} className="w-full h-1/6" />
      <div className="w-full h-2/6 flex flex-col justify-center items-center space-x-5 space-y-5">
        <div className="flex justify-center items-center">
          <QuestionIconText text={"Q" + order.toString()} />
        </div>
        <div className="justify-center items-center flex flex-col w-11/12 space-y-2">
          {title.split("\n").map((titleLine, index) => (
            <span key={index} style={descTextStyle}>
              {titleLine}
            </span>
          ))}
        </div>
      </div>
      <div
        style={choicesStyle}
        className={
          "flex w-full pb-10 " +
          (choices.length > 5
            ? "flex-wrap justify-center items-start"
            : "flex-col justify-start items-center")
        }
      >
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
            lenChoices={choices.length}
          />
        ))}
      </div>
    </div>
  );
};

export default Question;

const descTextStyle: React.CSSProperties = {
  fontFamily: "NanumSquareEB",
  color: "#191919",
  fontWeight: "normal",
  fontSize: "20px",
  fontStretch: "normal",
  fontStyle: "normal",
  lineHeight: 1.4,
  textAlign: "center",
  letterSpacing: "normal",
};

const imgStyle: React.CSSProperties = {
  objectFit: "cover",
};

const choicesStyle: React.CSSProperties = {
  minHeight: "50%",
};
