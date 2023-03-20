import { DateTime } from "luxon";
import { toCollection } from "~/tools/collection";
import { createReducer } from "~/tools/store/createReducer";
import {
  createNoteAction,
  deleteNoteAction,
  setCurrentNoteAction,
  setCurrentNoteOptionsAction,
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
      state.currentNoteId = action.payload.id;
      state.currentNoteOptions = action.payload.options;
    })
    .addCase(setCurrentNoteOptionsAction, (state, action) => {
      state.currentNoteOptions = action.payload;
    })
    .addCase(createNoteAction, (state, action) => {
      state.notes.set(action.payload.id, action.payload);
    })
    .addCase(updateNoteAction, (state, action) => {
      state.notes.set(action.payload.id, action.payload);
    })
    .addCase(deleteNoteAction, (state, action) => {
      state.notes.delete(action.payload);
    });
});
