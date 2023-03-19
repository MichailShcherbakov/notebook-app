import { DateTime } from "luxon";
import { Collection } from "~/tools/collection";

export const UNTITLED_NOTE = (num = 0) =>
  num > 1 ? `Untitled ${num}` : "Untitled";

export const isUntitledNote = (title: string) => title.match("Untitled");

export type Note = {
  id: string;
  title: string;
  addition: string | null;
  text: string;
  createdAt: DateTime;
};

export type RawNote = {
  id: string;
  title: string;
  addition: string | null;
  text: string;
  createdAt: string;
};

export type NoteId = Note["id"];
export type NoteCollection = Collection<NoteId, Note>;

export type NoteState = {
  notes: NoteCollection;
  currentNoteId: NoteId | null;
};

export enum NoteActionEnum {
  SET_NOTES = "SET_NOTES",
  CREATE_NOTE = "CREATE_NOTE",
  UPDATE_NOTE = "UPDATE_NOTE",
  DELETE_NOTE = "DELETE_NOTE",
  SET_CURRENT_NOTE = "SET_CURRENT_NOTE",
}

export type NoteStateAction =
  | {
      type: NoteActionEnum.SET_NOTES;
      payload: RawNote[];
    }
  | {
      type: NoteActionEnum.CREATE_NOTE;
      payload: Note;
    }
  | {
      type: NoteActionEnum.UPDATE_NOTE;
      payload: Note;
    }
  | {
      type: NoteActionEnum.DELETE_NOTE;
      payload: NoteId;
    }
  | {
      type: NoteActionEnum.SET_CURRENT_NOTE;
      payload: NoteId;
    };
