import { List } from "@mui/material";
import React from "react";
import { useNotes } from "~/store/notes/hooks";
import { EmptyListStub } from "./EmptyListStub";
import { computeNoteGroups } from "./helpers/computeNoteGroups";
import { NoteGroup } from "./NoteGroup";
import { NoteListLayout, NoteListLayoutProps } from "./NoteListLayout";

export interface NoteListProps extends NoteListLayoutProps {}

export function NoteList({ ...props }: NoteListProps) {
  const { notes, currentNote } = useNotes();

  const noteGroups = React.useMemo(() => computeNoteGroups(notes), [notes]);

  const isEmpty = !noteGroups.length;

  return (
    <NoteListLayout {...props}>
      {isEmpty && <EmptyListStub />}
      {!isEmpty && (
        <List subheader={<li />}>
          {noteGroups.map(group => (
            <NoteGroup key={group.id} group={group} currentNote={currentNote} />
          ))}
        </List>
      )}
    </NoteListLayout>
  );
}
