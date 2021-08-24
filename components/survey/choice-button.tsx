import { AppDispatch } from "@redux/store";
import { pushVariables, PushVariablesInput } from "@slices/score";
import {
  QuestionChoice,
  QuestionVar,
  QuestionVarId,
} from "@src/data/questions.types";
import { findTTVIdByTitle } from "@src/functions/helpers";
import React from "react";
import { useContext } from "react";
import { connect, ConnectedProps } from "react-redux";
import { SurveyContext } from "../context/survey-context";
import { useRouter } from "next/router";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";

type QuestionReduxProps = ConnectedProps<typeof connector>;

interface ChoiceButtonProps extends QuestionReduxProps {
  choice: QuestionChoice;
  pushChoice: (choice: QuestionVarId[], index: number) => void;
  resetChoices: () => void;
  choiceIndex: number;
  choiceIndexes: number[];
  numChoices: number;
  selectedChoices: QuestionVarId[][];
}

const ChoiceButton: React.FC<ChoiceButtonProps> = ({
  choice: { title, vars },
  choiceIndex,
  pushChoice,
  resetChoices,
  choiceIndexes,
  numChoices,
  selectedChoices,
  pushVariables: PushVariables,
}) => {
  const router = useRouter();
  const { goToNext } = useContext(SurveyContext);
  const [focusedOrder, setFocusedOrder] = useState(0);
  const transTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const variables = vars as QuestionVar[];
  const variableIds: QuestionVarId[] = variables.map((varItem) => ({
    id: findTTVIdByTitle(varItem.title),
    weight: Number(varItem.weight),
  }));
  const updateStore = () => {
    pushChoice(variableIds, choiceIndex);
    if (choiceIndexes.length + 1 === numChoices) {
      PushVariables([variableIds, ...selectedChoices]);
    }
  };

  useEffect(() => {
    setFocusedOrder(
      choiceIndexes.findIndex((index) => index === choiceIndex) + 1
    );
    if (choiceIndexes.length === numChoices) {
      transTimeoutRef.current = setTimeout(() => {
        if (!goToNext()) {
          router.push("/result");
        }
      }, 500);
    }
    return () => {
      transTimeoutRef.current && clearTimeout(transTimeoutRef.current);
    };
  }, [choiceIndexes]);

  return (
    <button onClick={updateStore} className="flex flex-col">
      {numChoices !== 1 && focusedOrder && <span>{focusedOrder}</span>}
      {numChoices === 1 && focusedOrder && <span>checked</span>}
      <span>{title}</span>
    </button>
  );
};

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  pushVariables: (payload: PushVariablesInput) =>
    dispatch(pushVariables(payload)),
});

const connector = connect(null, mapDispatchToProps);

export default connector(ChoiceButton);
