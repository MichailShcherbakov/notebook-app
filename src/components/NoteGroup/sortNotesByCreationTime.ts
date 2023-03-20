import { Note, NoteId } from "~/store/notes/type";

function compare(a: Note, b: Note) {
  return a.createdAt < b.createdAt ? 1 : a.createdAt > b.createdAt ? -1 : 0;
}

export function sortNotesByCreationTime(notes: Note[]): Note[];
export function sortNotesByCreationTime(
  notes: [NoteId, Note][],
): [NoteId, Note][];
export function sortNotesByCreationTime(notes: Note[] | [NoteId, Note][]) {
  return [...notes].sort((a, b) =>
    compare(Array.isArray(a) ? a[1] : a, Array.isArray(b) ? b[1] : b),
  );
}
