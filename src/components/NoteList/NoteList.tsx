import { List, ListProps } from "@mui/material";
import { EmptyListStub } from "./EmptyListStub";
import { NoteGroup } from "./NoteGroup";
import { useNoteGroups } from "../NoteGroup/useNoteGroups";

export interface NoteListProps extends ListProps {}

export function NoteList(props: NoteListProps) {
  const { noteGroups, currentNote, isEmpty } = useNoteGroups();

  if (isEmpty) return <EmptyListStub />;

  return (
    <List {...props} subheader={<li />}>
      {noteGroups.map(group => (
        <NoteGroup key={group.id} group={group} currentNote={currentNote} />
      ))}
    </List>
  );
}
