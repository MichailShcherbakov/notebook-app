import { createAction } from "~/tools/store/createAction";
import { EditorModeEnum, ViewModeEnum } from "./type";

export enum ViewActionEnum {
  SET_VIEW_MODE = "SET_VIEW_MODE",
  SET_EDITOR_MODE = "SET_EDITOR_MODE",
}

export const setViewModeAction = createAction<ViewModeEnum>(
  ViewActionEnum.SET_VIEW_MODE,
);

export const setEditorModeAction = createAction<EditorModeEnum>(
  ViewActionEnum.SET_EDITOR_MODE,
);
