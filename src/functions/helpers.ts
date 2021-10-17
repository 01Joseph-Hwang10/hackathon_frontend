import { ttvVars } from "@src/data/travel-tendency-vars";
import { TTVTags } from "@src/data/travel-tendency-vars.types";
import { TTVQuestionType as TTVDataType } from "@src/data/questions.types";
import { MinMaxRow } from "@src/data/dataset.types";
import { DevLog } from "@src/log";

export const findTTVIdByTitle = (title: string): number => {
  return ttvVars.findIndex((ttvVar) => ttvVar.title === title);
};

export const findTTVTagByTagTitle = (tagTitle: string): TTVTags => {
  /* eslint-disable */
  switch (tagTitle) {
    case "플렉스":
      return "flex";
    case "신속":
      return "quick";
    case "민간":
      return "sensitive";
    case "즉흥":
      return "unprepared";
    case "미디어 공유":
      return "mediaSharing";
    case "도전":
      return "challenge";
    default:
      throw Error();
  }
  /* eslint-disable */
};

export const findTagTitleByTTVTag = (ttvTag: TTVTags): string => {
  /* eslint-disable */
  switch (ttvTag) {
    case "flex":
    return "플렉스";
      case "quick":
    return "신속";
      case "sensitive":
    return "민감";
      case "unprepared":
    return "즉흥";
      case "mediaSharing":
    return "미디어 공유";
      case "challenge":
    return "도전";
    default:
      throw Error();
  }
  /* eslint-disable */
}

export const getTTVDataTypeByDataTypeTitle = (dataTypeTitle: string): TTVDataType => {
  switch (dataTypeTitle) {
    case "범주형":
      return "range";
    case "랭킹형":
      return "ranking";
    default:
      throw Error();
  }
}

export const findRowByTitle = (dsArray: MinMaxRow[], title: string): MinMaxRow => {
  try {
    return dsArray.filter(row => row[0] = title)[0]
  } catch (error) {
    DevLog.error(error);
    throw Error();
  }
}