import { SurveyContextProvider } from "@components/context/survey-context";
import Question from "@components/survey/question";
import { useQuestions } from "@hooks/useQuestions";
import React from "react";

interface SurveyProps {}

const Survey: React.FC<SurveyProps> = () => {
  const { question, goToNext, questionIndex } = useQuestions();

  return (
    <SurveyContextProvider value={{ question, goToNext, questionIndex }}>
      <div className="w-screen h-screen justify-center items-center flex flex-col">
        <Question />
      </div>
    </SurveyContextProvider>
  );
};

export default Survey;
