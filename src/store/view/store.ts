import { createStore } from "~/tools/store/createStore";
import { reducer } from "./reducer";
import { EditorModeEnum, ViewModeEnum, ViewState } from "./type";

export const { useStore, useDispatch, useStoreContext, StoreProvider } =
  createStore<ViewState>(reducer, () => ({
    viewMode: ViewModeEnum.LIST,
    editorMode: EditorModeEnum.READ,
  }));
