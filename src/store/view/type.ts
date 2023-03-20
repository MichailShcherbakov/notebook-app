export enum ViewModeEnum {
  LIST = "LIST",
  GRID = "GRID",
}

export type ViewState = {
  mode: ViewModeEnum;
};

export enum ViewStateActionEnum {
  SET_VIEW_MODE = "SET_VIEW_MODE",
}

export type ViewStateAction = {
  type: ViewStateActionEnum.SET_VIEW_MODE;
  payload: ViewModeEnum;
};
