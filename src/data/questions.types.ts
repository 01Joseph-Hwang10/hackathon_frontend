export type TTVQuestionType = "ranking" | "range"

export interface Question {
    title: string;
    questionType: TTVQuestionType;
    choices: QuestionChoices[];
}

interface QuestionChoices {
    title: string;
    vars: QuestionVars[] | QuestionIdAndWeight[];
}

interface QuestionVars {
    title: string;
    tagTitle: string;
    weight: string;
}

interface QuestionIdAndWeight {
    id: number;
    weight: number;
}