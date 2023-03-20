import React from "react";
import { createEmptyCollection, toCollection } from "~/tools/collection";
import { ModeEnum } from "~/store/notes/type";
import { NoteState, RawNote } from "./type";

export function createInitialState(notes: RawNote[]): NoteState {
  return {
    notes: toCollection(notes, "id"),
    currentNoteId: null,
    currentNoteOptions: {
      mode: ModeEnum.VIEWER,
    },
  };
}

export type NoteStateContextType = {
  state: NoteState;
};

export const NoteStateContext = React.createContext<NoteStateContextType>({
  state: {
    notes: createEmptyCollection(),
    currentNoteId: null,
    currentNoteOptions: {
      mode: ModeEnum.VIEWER,
    },
  },
});
