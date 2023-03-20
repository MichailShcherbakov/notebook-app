import * as uuid from "uuid";
import { DateTime } from "luxon";
import { Note, UNTITLED_NOTE } from "../type";

export function createNewNote(untitledNoteCount: number) {
  const title = UNTITLED_NOTE(untitledNoteCount + 1);

  const node: Note = {
    id: uuid.v4(),
    title: title,
    text: `# ${title}`,
    addition: null,
    createdAt: DateTime.now(),
  };

  return node;
}
