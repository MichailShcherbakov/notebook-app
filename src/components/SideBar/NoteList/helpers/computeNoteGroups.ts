import { DateTime } from "luxon";
import { Note, NoteCollection } from "~/store/notes/type";
import {
  Collection,
  createEmptyCollection,
  fromCollection,
  insertToCollection,
} from "~/tools/collection";
import {
  PREVIOUS_30_DAYS_NOTE_GROUP,
  TODAY_NOTE_GROUP,
  TOMORROW_NOTE_GROUP,
} from "../constants";
import { NoteGroup } from "../type";
import { sortNotesByCreationTime } from "./soryNotesByCreationTime";

export function computeNoteGroups(noteCollection: NoteCollection): NoteGroup[] {
  const notes = sortNotesByCreationTime(fromCollection(noteCollection));

  const noteGroups: Collection<NoteGroup["id"], Note[]> =
    createEmptyCollection();

  const now = DateTime.now();

  for (const [_, note] of notes) {
    const diff = now.diff(note.createdAt, "days").days;

    // TODO: replace numbers
    if (diff < 1) {
      insertToCollection(noteGroups, TODAY_NOTE_GROUP, note, []);
    } else if (diff < 2) {
      insertToCollection(noteGroups, TOMORROW_NOTE_GROUP, note, []);
    } else if (diff < 30) {
      insertToCollection(noteGroups, PREVIOUS_30_DAYS_NOTE_GROUP, note, []);
    } else if (diff < 365) {
      const month = note.createdAt.toFormat("LLLL");
      insertToCollection(noteGroups, month, note);
    } else {
      const monthAndYear = note.createdAt.toFormat("LLLL yyyy");
      insertToCollection(noteGroups, monthAndYear, note, []);
    }
  }

  return fromCollection(noteGroups).map(([noteGroupId, notes]) => ({
    id: noteGroupId,
    // TODO: bad?
    label: noteGroupId,
    notes,
  }));
}
