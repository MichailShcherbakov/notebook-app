import React from "react";
import { useNotes } from "~/store/notes/hooks";
import { computeNoteGroups } from "./computeNoteGroups";

export function useNoteGroups() {
  const { notes, ...otherNotes } = useNotes();

  const noteGroups = React.useMemo(() => computeNoteGroups(notes), [notes]);

  const isEmpty = !noteGroups.length;

  return { noteGroups, ...otherNotes, isEmpty };
}
