export type TTVQuestionType = "ranking" | "range"

export interface Question {
    title: string;
    questionType: TTVQuestionType;
    choices: QuestionChoices[];
}

export interface QuestionChoices {
    title: string;
    vars: QuestionVar[] | QuestionVarId[];
}

export interface QuestionVar {
    title: string;
    tagTitle: string;
    weight: string;
}

export interface QuestionVarId {
    id: number;
    weight: number;
}