import { createReducer } from "~/tools/store/createReducer";
import { setViewModeAction } from "./actions";
import { ViewState } from "./type";

export const reducer = createReducer<ViewState>(builder => {
  builder.addCase(setViewModeAction, (state, action) => {
    state.mode = action.payload;
  });
});
