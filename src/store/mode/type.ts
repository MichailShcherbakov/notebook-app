export enum ModeEnum {
  EDITOR = "EDITOR",
  VIEWER = "VIEWER",
}

export type ModeState = {
  mode: ModeEnum;
};

export enum ModeActionEnum {
  SET_MODE = "SET_MODE",
}

export type ModeStateAction = {
  type: ModeActionEnum.SET_MODE;
  payload: ModeEnum;
};
