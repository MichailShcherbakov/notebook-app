import { DateTime } from "luxon";
import { Note, NoteCollection } from "~/store/notes/type";
import {
  Collection,
  createEmptyCollection,
  fromCollection,
  insertToCollection,
} from "~/tools/collection";
import { NoteGroup } from "../type";
import { getNoteGroupTitleFromDate } from "./getNoteGroupTitleFromDate";
import { sortNotesByCreationTime } from "./sortNotesByCreationTime";

export function computeNoteGroups(noteCollection: NoteCollection): NoteGroup[] {
  const notes = sortNotesByCreationTime(fromCollection(noteCollection));

  const noteGroups: Collection<NoteGroup["id"], Note[]> =
    createEmptyCollection();

  const now = DateTime.now();

  for (const [_, note] of notes) {
    insertToCollection(
      noteGroups,
      getNoteGroupTitleFromDate(note.createdAt, now),
      note,
      [],
    );
  }

  return fromCollection(noteGroups).map(([noteGroupId, notes]) => ({
    id: noteGroupId,
    // TODO: bad?
    label: noteGroupId,
    notes,
  }));
}
