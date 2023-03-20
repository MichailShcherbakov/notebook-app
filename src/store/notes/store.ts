import { createEmptyCollection } from "~/tools/collection";
import { createStore } from "~/tools/store/createStore";
import { reducer } from "./reducer";
import { ModeEnum, NoteState } from "./type";

export const { useStore, useDispatch, useStoreContext, StoreProvider } =
  createStore<NoteState>(reducer, () => ({
    notes: createEmptyCollection(),
    currentNoteId: null,
    currentNoteOptions: {
      mode: ModeEnum.VIEWER,
    },
  }));
