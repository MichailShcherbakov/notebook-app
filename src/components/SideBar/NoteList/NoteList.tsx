import { Divider, List } from "@mui/material";
import React from "react";
import { TODAY_NOTE_GROUP } from "./constants";
import { computeNoteGroups } from "./helpers/computeNoteGroups";
import { NoteListItem } from "./NoteListItem";
import { NoteListLayout, NoteListLayoutProps } from "./NoteListLayout";
import { NoteListSubHeader } from "./NoteListSubHeader";
import { Note } from "./type";

export interface NoteListProps extends NoteListLayoutProps {
  notes: Note[];
}

export function NoteList({ notes, ...props }: NoteListProps) {
  const noteGroups = React.useMemo(() => computeNoteGroups(notes), [notes]);

  return (
    <NoteListLayout {...props}>
      <List subheader={<li />}>
        {noteGroups.map(noteGroup => (
          <li key={noteGroup.id}>
            <ul>
              <NoteListSubHeader>{noteGroup.label}</NoteListSubHeader>
              {noteGroup.id === TODAY_NOTE_GROUP && <Divider />}
              {noteGroup.notes.map((note, idx) => (
                <NoteListItem
                  key={note.id}
                  id={note.id}
                  title={note.title}
                  createdAt={
                    noteGroup.id === TODAY_NOTE_GROUP
                      ? note.createdAt.toFormat("t")
                      : note.createdAt.toFormat("D")
                  }
                  addition={note.addition}
                />
              ))}
            </ul>
          </li>
        ))}
      </List>
    </NoteListLayout>
  );
}
