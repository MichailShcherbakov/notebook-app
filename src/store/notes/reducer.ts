import { DateTime } from "luxon";
import { toCollection } from "~/tools/collection";
import { createReducer } from "~/tools/store/createReducer";
import {
  createNoteAction,
  deleteNoteAction,
  setCurrentNoteAction,
  setNoteFilterAction,
  setNotesAction,
  updateNoteAction,
} from "./actions";
import { Note, NoteState, RawNote } from "./type";

export const reducer = createReducer<NoteState>(builder => {
  builder
    .addCase(setNotesAction, (state, action) => {
      state.notes = toCollection<RawNote, "id", Note>(
        action.payload,
        "id",
        note => ({
          ...note,
          createdAt: DateTime.fromISO(note.createdAt),
        }),
      );
    })
    .addCase(setCurrentNoteAction, (state, action) => {
      state.currentNoteId = action.payload;
    })
    .addCase(createNoteAction, (state, action) => {
      state.notes.set(action.payload.id, action.payload);
    })
    .addCase(updateNoteAction, (state, action) => {
      state.notes.set(action.payload.id, action.payload);
    })
    .addCase(deleteNoteAction, (state, action) => {
      if (state.currentNoteId === action.payload) {
        state.currentNoteId = null;
      }

      state.notes.delete(action.payload);
    })
    .addCase(setNoteFilterAction, (state, action) => {
      state.filterBy = action.payload;
    });
});
