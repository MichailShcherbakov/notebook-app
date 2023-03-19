import { Divider } from "@mui/material";
import { NoteListItem } from "./NoteListItem";
import { NoteListSubHeader } from "./NoteListSubHeader";
import { NoteGroup as AbstractNoteGroup } from "./type";
import { TODAY_NOTE_GROUP } from "./constants";
import { NoteId } from "~/store/notes/type";
import { useNoteActions } from "~/store/notes/hooks";
import React from "react";

export interface NoteGroupProps extends React.HTMLAttributes<HTMLLIElement> {
  group: AbstractNoteGroup;
}

function _NoteGroup({ group, ...props }: NoteGroupProps) {
  const isTodayNoteGroup = group.id === TODAY_NOTE_GROUP;

  const { setCurrentNoteId } = useNoteActions();

  const openNoteHandler = React.useCallback(
    (nodeId: NoteId) => {
      setCurrentNoteId(nodeId);
    },
    [setCurrentNoteId],
  );

  return (
    <li {...props} key={group.id}>
      <ul>
        <NoteListSubHeader>{group.label}</NoteListSubHeader>
        {isTodayNoteGroup && <Divider />}
        {group.notes.map(note => (
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
            onListItemClick={openNoteHandler}
          />
        ))}
      </ul>
    </li>
  );
}

export const NoteGroup = React.memo(_NoteGroup);
