export type TTVQuestionType = "ranking" | "range"

export interface Question {
    title: string;
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