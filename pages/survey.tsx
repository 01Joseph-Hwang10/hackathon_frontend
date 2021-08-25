import { SurveyContextProvider } from "@components/context/survey-context";
import Question from "@components/survey/question";
import Story from "@components/survey/story";
import { useQuestions } from "@hooks/useQuestions";
import { Colors } from "@src/constants";
import Head from "next/head";
import React from "react";

interface SurveyProps {}

const Survey: React.FC<SurveyProps> = () => {
  const {
    questionOrStory,
    goToNext,
    questionIndex,
    onFadeOut,
    cleanUpCurrent,
  } = useQuestions();

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
      <Head>
        <title>여행성향 테스트 | 트립빌더</title>
      </Head>
      <div
        style={{ ...rootStyle, ...transitionStyle, ...opacityStyle }}
        className={
          "w-screen h-screen justify-center items-center flex flex-col"
        }
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
