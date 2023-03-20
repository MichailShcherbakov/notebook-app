import { Divider, Typography } from "@mui/material";
import { NoteListItem } from "./NoteListItem";
import { NoteListSubHeader } from "./NoteListSubHeader";
import { NoteGroup as AbstractNoteGroup } from "../NoteGroup/type";
import { TODAY_NOTE_GROUP } from "../NoteGroup/constants";
import { Note, NoteId } from "~/store/notes/type";
import { useNoteActions } from "~/store/notes/hooks";
import React from "react";
import { sortNotesByCreationTime } from "../NoteGroup/sortNotesByCreationTime";
import { useViewStateActions } from "~/store/view/hooks";
import { EditorModeEnum } from "~/store/view/type";

export interface NoteGroupProps extends React.HTMLAttributes<HTMLLIElement> {
  group: AbstractNoteGroup;
  currentNote: Note | null;
}

function _NoteGroup({ group, currentNote, ...props }: NoteGroupProps) {
  const isTodayNoteGroup = group.id === TODAY_NOTE_GROUP;

  const { setCurrentNote } = useNoteActions();
  const { setEditorMode } = useViewStateActions();

  const openNoteHandler = React.useCallback(
    (_: React.MouseEvent, nodeId: NoteId) => {
      setCurrentNote(nodeId);
      setEditorMode(EditorModeEnum.READ);
    },
    [setCurrentNote, setEditorMode],
  );

  return (
    <li {...props} key={group.id}>
      <ul>
        <NoteListSubHeader>
          <Typography
            sx={{ display: "block" }}
            component="h2"
            variant="body1"
            color="text.primary"
            noWrap
          >
            {group.label}
          </Typography>
        </NoteListSubHeader>
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
            onClick={openNoteHandler}
          />
        ))}
      </ul>
    </li>
  );
}

export const NoteGroup = React.memo(_NoteGroup);
