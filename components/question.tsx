import { useQuestionHandle } from "@hooks/useQuestionHandle";
import { AppDispatch } from "@redux/store";
import { pushVariables, PushVariablesInput } from "@slices/score";
import { Question, QuestionVar } from "@src/data/questions.types";
import React from "react";
import { useContext } from "react";
import { connect, ConnectedProps } from "react-redux";
import ChoiceButton from "./choice-button";
import { SurveyContext } from "./context/survey-context";

type QuestionReduxProps = ConnectedProps<typeof connector>;

interface QuestionProps extends Partial<QuestionReduxProps> {}

const Question: React.FC<QuestionProps> = ({ pushVariables }) => {
  const { question, goToNext, questionIndex } = useContext(SurveyContext);
  const { setNextAnswer, resetAnswers } = useQuestionHandle({
    questionIndex,
    updateStore: pushVariables,
  });
  const { title, choices } = question as Question;
  return (
    <div>
      <span>{title}</span>
      {choices.map((choice, index) => (
        <ChoiceButton key={index} choice={choice} />
      ))}
    </div>
  );
};

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  pushVariables: (payload: PushVariablesInput) =>
    dispatch(pushVariables(payload)),
});

const connector = connect(null, mapDispatchToProps);

export default Question;
