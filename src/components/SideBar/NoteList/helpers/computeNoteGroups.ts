import { DateTime } from "luxon";
import {
  PREVIOUS_30_DAYS_NOTE_GROUP,
  TODAY_NOTE_GROUP,
  TOMORROW_NOTE_GROUP,
} from "../constants";
import { Note, NoteGroup } from "../type";
import { insertToCollection } from "./insertToCollection";

export function computeNoteGroups(notes: Note[]): NoteGroup[] {
  const noteGroups: Map<NoteGroup["id"], Note[]> = new Map();

  const now = DateTime.now();

  for (const note of notes) {
    const diff = now.diff(note.createdAt, "days").days;

    if (diff < 1) {
      insertToCollection(noteGroups, TODAY_NOTE_GROUP, note);
    } else if (diff < 2) {
      insertToCollection(noteGroups, TOMORROW_NOTE_GROUP, note);
    } else if (diff < 30) {
      insertToCollection(noteGroups, PREVIOUS_30_DAYS_NOTE_GROUP, note);
    } else if (diff < 365) {
      const month = note.createdAt.toFormat("LLLL");
      insertToCollection(noteGroups, month, note);
    } else {
      const monthAndYear = note.createdAt.toFormat("LLLL yyyy");
      insertToCollection(noteGroups, monthAndYear, note);
    }
  }

  return Array.from(noteGroups).map(([noteGroupId, notes]) => ({
    id: noteGroupId,
    // TODO: bad?
    label: noteGroupId,
    notes,
  }));
}
