import { Stack, StackProps } from "@mui/material";
import { useViewState } from "~/store/view/hooks";
import { ViewModeEnum } from "~/store/view/type";
import { NoteContentManager } from "../NoteContentManager";
import { NoteGrid } from "../NoteGrid";
import { SideBar } from "../SideBar";

export interface ViewContentManagerProps extends StackProps {}

export function ViewContentManager(props: ViewContentManagerProps) {
  const { mode } = useViewState();
  return (
    <Stack
      {...props}
      direction="row"
      width="100%"
      height="100%"
      overflow="hidden"
    >
      {mode === ViewModeEnum.GRID && <NoteGrid />}
      {mode === ViewModeEnum.LIST && (
        <>
          <SideBar />
          <NoteContentManager />
        </>
      )}
    </Stack>
  );
}
