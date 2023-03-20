import { fromCollection } from "~/tools/collection";
import { isUntitledNote, NoteCollection } from "../type";

export function getUntitledNoteCount(notes: NoteCollection) {
  return fromCollection(notes).reduce(
    (untitled, [_, note]) =>
      isUntitledNote(note.title) ? untitled + 1 : untitled,
    0,
  );
}
