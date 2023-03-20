import { Note } from "~/store/notes/type";

export type NoteGroup = {
  id: string;
  label: string;
  notes: Note[];
};
