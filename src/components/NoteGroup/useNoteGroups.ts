import React from "react";
import { useNoteState } from "~/store/notes/hooks";
import { computeNoteGroups } from "./computeNoteGroups";

export function useNoteGroups() {
  const { filteredNotes, ...otherNotes } = useNoteState();

  const noteGroups = React.useMemo(
    () => computeNoteGroups(filteredNotes),
    [filteredNotes],
  );

  const isEmpty = !noteGroups.length;

  return { noteGroups, ...otherNotes, isEmpty };
}
