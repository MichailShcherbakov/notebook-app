import { createAction } from "~/tools/store/createAction";
import { ViewModeEnum } from "./type";

const SET_VIEW_MODE = "SET_VIEW_MODE";

export const setViewModeAction = createAction<ViewModeEnum>(SET_VIEW_MODE);
