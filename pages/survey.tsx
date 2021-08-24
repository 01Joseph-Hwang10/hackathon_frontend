import { SurveyContextProvider } from "@components/context/survey-context";
import Question from "@components/question";
import { useQuestions } from "@hooks/useQuestions";
import React from "react";

interface SurveyProps {}

const Survey: React.FC<SurveyProps> = () => {
  const { question, goToNext, questionIndex } = useQuestions();

  console.log(question);

  return (
    <SurveyContextProvider value={{ question, goToNext, questionIndex }}>
      <div>
        <Question />
      </div>
    </SurveyContextProvider>
  );
};

export default Survey;
