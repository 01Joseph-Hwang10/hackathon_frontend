import { SurveyContextProvider } from "@components/context/survey-context";
import Question from "@components/survey/question";
import Story from "@components/survey/story";
import { useQuestions } from "@hooks/useQuestions";
import { Colors } from "tools/constants";
import React from "react";
import { useReloadGuard } from "@hooks/useReloadGuard";

interface SurveyProps {}

const Survey: React.FC<SurveyProps> = () => {
  const {
    questionOrStory,
    goToNext,
    questionIndex,
    onFadeOut,
    cleanUpCurrent,
  } = useQuestions();
  useReloadGuard();

  const transitionStyle: React.CSSProperties = {
    transitionProperty: "opacity",
    transitionTimingFunction: "linear",
    transitionDuration: "0.3s",
  };

  const opacityStyle: React.CSSProperties = {
    opacity: onFadeOut ? 0.2 : 1,
  };

  return (
    <SurveyContextProvider
      value={{ questionOrStory, goToNext, questionIndex, cleanUpCurrent }}
    >
      <div
        style={{ ...rootStyle, ...transitionStyle, ...opacityStyle }}
        className={"w-screen justify-center items-center flex flex-col"}
      >
        {questionOrStory && (
          <>{questionOrStory.type === "question" ? <Question /> : <Story />}</>
        )}
      </div>
    </SurveyContextProvider>
  );
};

export default Survey;

const rootStyle: React.CSSProperties = {
  backgroundColor: Colors.primary,
};
