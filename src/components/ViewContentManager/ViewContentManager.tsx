import { Stack, StackProps } from "@mui/material";
import { useNoteState } from "~/store/notes/hooks";
import { useViewState } from "~/store/view/hooks";
import { ViewModeEnum } from "~/store/view/type";
import { NoteContentManager } from "../NoteContentManager";
import { NoteGrid } from "../NoteGrid";
import { SideBar } from "../SideBar";

export interface ViewContentManagerProps extends StackProps {}

export function ViewContentManager(props: ViewContentManagerProps) {
  const { currentNote } = useNoteState();
  const { viewMode } = useViewState();
  return (
    <Stack
      {...props}
      direction="row"
      width="100%"
      height="100%"
      overflow="auto"
    >
      {viewMode === ViewModeEnum.GRID && !currentNote && <NoteGrid />}
      {viewMode === ViewModeEnum.GRID && currentNote && <NoteContentManager />}
      {viewMode === ViewModeEnum.LIST && (
        <>
          <SideBar />
          <NoteContentManager />
        </>
      )}
    </Stack>
  );
}
