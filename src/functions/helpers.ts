import { ttvVars } from "@src/data/travel-tendency-vars";

export const findTTVIdByTitle = (title: string): number => {
  return ttvVars.findIndex((ttvVar) => ttvVar.title === title);
};
