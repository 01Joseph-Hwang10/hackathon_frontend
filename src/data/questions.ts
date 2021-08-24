import { Question } from "./questions.types";
import questionWeights from "../../data/question-weights";


const questions: Question[] = questionWeights as Question[];

// swap q8 and q9
const tmp = questions[7];
questions[7] = questions[8];
questions[8] = tmp;

export {
    questions
}
