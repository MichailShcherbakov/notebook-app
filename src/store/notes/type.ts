import { DateTime } from "luxon";
import { Collection } from "~/tools/collection";

export enum ModeEnum {
  VIEWER = "VIEWER",
  EDITOR = "EDITOR",
}

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

export type CurrentNoteOptions = {
  mode: ModeEnum;
};

export type NoteState = {
  notes: NoteCollection;
  currentNoteId: NoteId | null;
  currentNoteOptions: CurrentNoteOptions;
};
