import React from "react";
import { createEmptyCollection, toCollection } from "~/tools/collection";
import { NoteState, RawNote } from "./type";

export function createInitialState(notes: RawNote[]): NoteState {
  return {
    notes: toCollection(notes, "id"),
    currentNoteId: null,
  };
}

export type NoteStateContextType = {
  state: NoteState;
};

export const NoteStateContext = React.createContext<NoteStateContextType>({
  state: {
    notes: createEmptyCollection(),
    currentNoteId: null,
  },
});
