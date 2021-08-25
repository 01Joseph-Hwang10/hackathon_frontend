import React from "react";
import { useContext } from "react";
import ChoiceButton from "./choice-button";
import { SurveyContext } from "../context/survey-context";
import { useChoices } from "@hooks/useChoices";
import { imageNameMapping } from "@src/data/image-name-mapping";
import QuestionIconText from "@components/icon_texts/question-icon-text";
import { Question as QuestionType } from "@src/data/questions.types";

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
    <div className="flex flex-col items-center justify-start h-full w-full">
      <img style={imgStyle} src={imgSource} className="w-full h-1/6" />
      <div className="w-full h-2/6 flex flex-col justify-center items-center gap-5">
        <div className="flex justify-center items-center">
          <QuestionIconText text={"Q" + order.toString()} />
        </div>
        <div className="justify-center items-center flex flex-col w-11/12 gap-y-2">
          {title.split("\n").map((titleLine, index) => (
            <span key={index} style={descTextStyle}>
              {titleLine}
            </span>
          ))}
        </div>
      </div>
      <div
        className={
          "flex h-3/6 w-full pb-10 " +
          (choices.length > 5
            ? "flex-wrap justify-center items-start gap-1"
            : "flex-col justify-start items-center gap-y-1")
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