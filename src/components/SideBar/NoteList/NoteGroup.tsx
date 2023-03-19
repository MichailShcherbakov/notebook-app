import { Divider } from "@mui/material";
import { NoteListItem } from "./NoteListItem";
import { NoteListSubHeader } from "./NoteListSubHeader";
import { NoteGroup as AbstractNoteGroup } from "./type";
import { TODAY_NOTE_GROUP } from "./constants";
import { Note, NoteId } from "~/store/notes/type";
import { useNoteActions } from "~/store/notes/hooks";
import React from "react";
import { sortNotesByCreationTime } from "./helpers/soryNotesByCreationTime";

export interface NoteGroupProps extends React.HTMLAttributes<HTMLLIElement> {
  group: AbstractNoteGroup;
  currentNote: Note | null;
}

function _NoteGroup({ group, currentNote, ...props }: NoteGroupProps) {
  const isTodayNoteGroup = group.id === TODAY_NOTE_GROUP;

  const { setCurrentNote } = useNoteActions();

  const openNoteHandler = React.useCallback(
    (nodeId: NoteId) => {
      setCurrentNote(nodeId);
    },
    [setCurrentNote],
  );

  return (
    <li {...props} key={group.id}>
      <ul>
        <NoteListSubHeader>{group.label}</NoteListSubHeader>
        {isTodayNoteGroup && <Divider />}
        {sortNotesByCreationTime(group.notes).map(note => (
          <NoteListItem
            key={note.id}
            id={note.id}
            title={note.title}
            createdAt={
              isTodayNoteGroup
                ? note.createdAt.toFormat("t")
                : note.createdAt.toFormat("D")
            }
            addition={note.addition}
            isSelected={currentNote?.id === note.id}
            onListItemClick={openNoteHandler}
          />
        ))}
      </ul>
    </li>
  );
}

export const NoteGroup = React.memo(_NoteGroup);
