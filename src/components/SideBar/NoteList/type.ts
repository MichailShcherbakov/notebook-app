import { DateTime } from "luxon";

export type Note = {
  id: string;
  title: string;
  createdAt: DateTime;
  addition?: string;
};

export type NoteGroup = {
  id: string;
  label: string;
  notes: Note[];
};
