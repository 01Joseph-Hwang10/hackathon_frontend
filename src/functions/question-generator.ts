import { questions } from "@src/data/questions";
import { Question } from "@src/data/questions.types";

function* questionGenerator(): Generator<Question, void, boolean> {
  for (let i = 0; i < questions.length; i++) {
    yield questions[i];
  }
}

export default questionGenerator;
