import React from "react";
import { useNoteState } from "~/store/notes/hooks";
import { computeNoteGroups } from "./computeNoteGroups";

export function useNoteGroups() {
  const { notes, ...otherNotes } = useNoteState();

  const noteGroups = React.useMemo(() => computeNoteGroups(notes), [notes]);

  const isEmpty = !noteGroups.length;

  return { noteGroups, ...otherNotes, isEmpty };
}
