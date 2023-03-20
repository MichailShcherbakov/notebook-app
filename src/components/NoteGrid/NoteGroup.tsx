import { Grid, GridProps, Typography } from "@mui/material";
import { NoteId } from "~/store/notes/type";
import { useNoteActions } from "~/store/notes/hooks";
import React from "react";
import { NoteCell } from "./NoteCell";
import { TODAY_NOTE_GROUP } from "../NoteGroup/constants";
import { NoteGroup as AbstractNoteGroup } from "../NoteGroup/type";

export interface NoteGroupProps extends GridProps {
  group: AbstractNoteGroup;
}

function _NoteGroup({ group, ...props }: NoteGroupProps) {
  const isTodayNoteGroup = group.id === TODAY_NOTE_GROUP;

  const { setCurrentNote } = useNoteActions();

  const openNoteHandler = React.useCallback(
    (_: React.MouseEvent, nodeId: NoteId) => {
      setCurrentNote(nodeId);
    },
    [setCurrentNote],
  );

  return (
    <Grid
      {...props}
      container
      item
      xs={12}
      spacing={2}
      sx={{
        height: "min-content",
      }}
    >
      <Grid {...props} container item xs={12}>
        <Typography
          sx={{ display: "block" }}
          component="h2"
          variant="body1"
          color="text.primary"
          noWrap
        >
          {group.label}{" "}
        </Typography>
      </Grid>
      {group.notes.map(note => (
        <NoteCell
          key={note.id}
          id={note.id}
          title={note.title}
          addition={note.addition}
          createdAt={
            isTodayNoteGroup
              ? note.createdAt.toFormat("t")
              : note.createdAt.toFormat("D")
          }
          onClick={openNoteHandler}
        />
      ))}
    </Grid>
  );
}

export const NoteGroup = React.memo(_NoteGroup);
