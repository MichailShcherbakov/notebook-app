import { createAction } from "~/tools/store/createAction";
import { CurrentNoteOptions, Note, NoteId, RawNote } from "./type";

export enum NoteActionEnum {
  SET_NOTES = "SET_NOTES",
  CREATE_NOTE = "CREATE_NOTE",
  UPDATE_NOTE = "UPDATE_NOTE",
  DELETE_NOTE = "DELETE_NOTE",
  SET_CURRENT_NOTE = "SET_CURRENT_NOTE",
  SET_CURRENT_NOTE_OPTIONS = "SET_CURRENT_NOTE_OPTIONS",
}

export const setNotesAction = createAction<RawNote[]>(NoteActionEnum.SET_NOTES);

export const setCurrentNoteAction = createAction<{
  id: NoteId | null;
  options: CurrentNoteOptions;
}>(NoteActionEnum.SET_CURRENT_NOTE);

export const setCurrentNoteOptionsAction = createAction<CurrentNoteOptions>(
  NoteActionEnum.SET_CURRENT_NOTE_OPTIONS,
);

export const createNoteAction = createAction<Note>(NoteActionEnum.CREATE_NOTE);

export const updateNoteAction = createAction<Note>(NoteActionEnum.UPDATE_NOTE);

export const deleteNoteAction = createAction<NoteId>(
  NoteActionEnum.DELETE_NOTE,
);
