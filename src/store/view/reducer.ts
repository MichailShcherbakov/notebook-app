import { createReducer } from "~/tools/store/createReducer";
import { setViewModeAction, setEditorModeAction } from "./actions";
import { ViewState } from "./type";

export const reducer = createReducer<ViewState>(builder => {
  builder
    .addCase(setViewModeAction, (state, action) => {
      state.viewMode = action.payload;
    })
    .addCase(setEditorModeAction, (state, action) => {
      state.editorMode = action.payload;
    });
});
