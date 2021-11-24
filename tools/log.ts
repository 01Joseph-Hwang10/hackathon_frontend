import { production } from "./constants";

type DevLogger = (log: any) => void;

export namespace DevLog {
  export const info: DevLogger = (log) => !production && console.log(log);
  export const warning: DevLogger = (log) => !production && console.warn(log);
  export const error: DevLogger = (log) => !production && console.error(log);
}
