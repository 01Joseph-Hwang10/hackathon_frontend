import axios from "axios";

const BASE_URL = "https://stti-api.tripbuilder.co.kr";
const SNS = `${BASE_URL}/sns`; // get
const LIKE = `${BASE_URL}/results`; // get
const REPORT = `${BASE_URL}/report`; // post
const AB_TEST = `${BASE_URL}/abtest`; // get

interface Answer {
  choices: number[];
  questionNumber: number;
}

export interface PostAnswersDTO {
  data: Answer[];
}

const mapToDto = (choices: number[][]): PostAnswersDTO => {
  const data = [];
  choices.forEach((choiceSet, questionIndex) => {
    data.push({
      questionNumber: questionIndex + 1,
      choices: choiceSet.map((choice) => choice + 1),
    });
  });
  return { data };
};

export const postAnswers = async (choices: number[][]): Promise<void> => {
  try {
    const result = await axios.post(REPORT, mapToDto(choices), {
      timeout: 3500,
    });
    console.log(result);
  } catch (error) {
    console.error(error);
  }
};

export const snsPushed = async (): Promise<void> => {
  try {
    const result = await axios.get(SNS);
    console.log(result);
  } catch (error) {
    console.error(error);
  }
};

export const likePushed = async (liked: boolean): Promise<void> => {
  try {
    const result = await axios.get(LIKE, {
      params: {
        good: liked,
      },
    });
    console.log(result);
  } catch (error) {
    console.error(error);
  }
};

export const abPushed = async (type: "A" | "B"): Promise<void> => {
  try {
    const result = await axios.get(AB_TEST, {
      params: {
        type,
      },
    });
    console.log(result);
  } catch (error) {
    console.error(error);
  }
};
