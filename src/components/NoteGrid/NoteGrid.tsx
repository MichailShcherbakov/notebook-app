import { Grid, GridProps } from "@mui/material";
import { useNoteGroups } from "../NoteGroup/useNoteGroups";
import { EmptyGridStub } from "./EmptyGridStub";
import { NoteGroup } from "./NoteGroup";

export interface NoteGridProps extends GridProps {}

export function NoteGrid(props: NoteGridProps) {
  const { noteGroups, isEmpty } = useNoteGroups();

  if (isEmpty) return <EmptyGridStub />;

  return (
    <Grid
      {...props}
      container
      spacing={2}
      p={2}
      sx={{
        height: "100%",
        overflow: "auto",
      }}
    >
      {noteGroups.map(group => (
        <NoteGroup key={group.id} group={group} />
      ))}
    </Grid>
  );
}
