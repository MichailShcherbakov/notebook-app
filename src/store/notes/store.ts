import { createEmptyCollection } from "~/tools/collection";
import { createStore } from "~/tools/store/createStore";
import { reducer } from "./reducer";
import { NoteState } from "./type";

export const { useStore, useDispatch, useStoreContext, StoreProvider } =
  createStore<NoteState>(reducer, () => ({
    notes: createEmptyCollection(),
    filterBy: null,
    currentNoteId: null,
  }));
