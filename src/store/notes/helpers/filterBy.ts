import { createCollectionFrom, fromCollection } from "~/tools/collection";
import { NoteCollection } from "../type";

export function filterBy(notes: NoteCollection, by: string): NoteCollection {
  by = by.toLowerCase().trim();

  return createCollectionFrom(
    fromCollection(notes).filter(
      ([_, note]) =>
        note.title.toLowerCase().includes(by) ||
        note.addition?.toLowerCase().includes(by) ||
        note.text.toLowerCase().includes(by),
    ),
  );
}
