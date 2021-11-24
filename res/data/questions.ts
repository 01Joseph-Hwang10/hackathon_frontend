import { Question, Story } from "./questions.types";
import questionWeights from "../raw/question-weights";

const questionsList: Question[] = questionWeights as Question[];

const q1 = questionsList[0];
const q2 = questionsList[1];
const q3 = questionsList[2];
const q4 = questionsList[3];
const q5 = questionsList[4];
const q6 = questionsList[5];
const q7 = questionsList[6];
const q8 = questionsList[7];
const q9 = questionsList[8];

q1.type = "question";
q2.type = "question";
q3.type = "question";
q4.type = "question";
q5.type = "question";
q6.type = "question";
q7.type = "question";
q8.type = "question";
q9.type = "question";

const s1: Story = {
  title: "한 달 뒤",
  type: "story",
  storyId: 1,
};

const s2: Story = {
  title: "자 이제 떠나자!",
  type: "story",
  storyId: 2,
};

const s3: Story = {
  title: "첫번째 여행지\n참 재미있어",
  type: "story",
  storyId: 3,
};

const s4: Story = {
  title: "휴~ 비가 그쳤다",
  type: "story",
  storyId: 4,
};

const s5: Story = {
  title: "이번에는 해외로 가자!\n슝~",
  type: "story",
  storyId: 5,
};

const questions: (Question | Story)[] = [
  q2, // 1
  s1,
  q1, // 2
  q3, // 3
  q8, // 4
  q7, // 5
  s2,
  s3,
  q4, // 6
  s4,
  q6, // 7
  q9, // 8
  s5,
  q5, // 9
];

export { questions };
