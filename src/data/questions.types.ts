export type TTVQuestionType = "ranking" | "range"

export interface Question {
    title: string;
    questionType: TTVQuestionType;
    choices: QuestionChoices[];
}

interface QuestionChoices {
    title: string;
    vars: QuestionVars[];
}

interface QuestionVars {
    id: number;
    weight: number;
}