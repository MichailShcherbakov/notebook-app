import { createStore } from "~/tools/store/createStore";
import { reducer } from "./reducer";
import { ViewModeEnum, ViewState } from "./type";

export const { useStore, useDispatch, useStoreContext, StoreProvider } =
  createStore<ViewState>(reducer, () => ({
    mode: ViewModeEnum.LIST,
  }));
