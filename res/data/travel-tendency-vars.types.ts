
export type TTVTags =
    | "sensitive"
    | "unprepared"
    | "mediaSharing"
    | "challenge"
    | "flex"
    | "quick"

export interface TTVVar {
    title: string;
    name: string;
    tagTitle: string[];
    tag: TTVTags[];
    dataTypeTitle: string;
}