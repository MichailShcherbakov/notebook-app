import produce from "immer";
import { ModeActionEnum, ModeState, ModeStateAction } from "./type";

export function reducer(state: ModeState, action: ModeStateAction): ModeState {
  switch (action.type) {
    case ModeActionEnum.SET_MODE: {
      return produce(state, draft => {
        draft.mode = action.payload;
      });
    }
    default: {
      return state;
    }
  }
}
