export type TTVQuestionType = "ranking" | "range";

export type QuestionOrStory = "question" | "story";

interface QuestionStoryBase {
  type: QuestionOrStory;
  title: string;
}

export interface Question extends QuestionStoryBase {
  questionType: TTVQuestionType;
  choices: QuestionChoice[];
  numChoices: number;
}

export interface QuestionChoice {
  id: string;
  title: string;
  vars: QuestionVar[] | QuestionVarId[];
}

export interface QuestionVar {
  title: string;
  tagTitle: string[];
  weight: string;
}

export interface QuestionVarId {
  id: number;
  weight: number;
}

export interface Story extends QuestionStoryBase {
  storyId: number;
}
