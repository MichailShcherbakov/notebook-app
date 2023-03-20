import { ToolBarLayout, ToolBarLayoutProps } from "./ToolBarLayout";
import { Stack } from "@mui/material";
import { EditorModeChangeButton } from "./EditorModeChangeButton";
import { DeleteNoteButton } from "./DeleteNoteButton";
import { ViewModeSwitcher } from "./ViewModeSwitcher";
import { CreateNewNoteButton } from "./CreateNewNoteButton";
import { useNoteState } from "~/store/notes/hooks";
import { useViewState } from "~/store/view/hooks";
import { EditorModeEnum, ViewModeEnum } from "~/store/view/type";
import { BackButton } from "./BackButton";
import { SearchBar } from "./SearchBar";
import { TextFormatButton } from "./TextFormatButton";

export interface ToolBarProps extends ToolBarLayoutProps {}

export function ToolBar(props: ToolBarProps) {
  const { currentNote } = useNoteState();
  const { viewMode, editorMode } = useViewState();

  return (
    <ToolBarLayout {...props}>
      <Stack
        direction="row"
        gap={1}
        sx={theme => ({
          width: 360,
          height: "100%",
          alignItems: "center",
          justifyContent: "space-between",
          padding: theme.spacing(1.5),
          flexShrink: 0,
          borderRightWidth: 1,
          borderRightColor: theme.palette.divider,
          borderRightStyle: "solid",
        })}
      >
        <Stack direction="row" alignItems="center" gap={1}>
          {viewMode === ViewModeEnum.LIST && <ViewModeSwitcher />}
          {viewMode === ViewModeEnum.GRID && !currentNote && (
            <ViewModeSwitcher />
          )}
          {viewMode === ViewModeEnum.GRID && currentNote && <BackButton />}
        </Stack>
        <CreateNewNoteButton />
      </Stack>
      {currentNote && (
        <>
          <Stack
            direction="row"
            gap={1}
            sx={theme => ({
              width: "100%",
              height: "100%",
              alignItems: "center",
              justifyContent: "left",
              padding: theme.spacing(1.5),
            })}
          >
            <EditorModeChangeButton />
            <DeleteNoteButton />
          </Stack>
          <Stack
            direction="row"
            gap={1}
            sx={theme => ({
              width: "100%",
              height: "100%",
              alignItems: "center",
              justifyContent: "center",
              padding: theme.spacing(1.5),
            })}
          >
            {editorMode === EditorModeEnum.EDIT && <TextFormatButton />}
          </Stack>
        </>
      )}
      <Stack
        direction="row"
        gap={1}
        sx={theme => ({
          width: "100%",
          height: "100%",
          alignItems: "center",
          justifyContent: "right",
          padding: theme.spacing(1.5),
        })}
      >
        {(viewMode !== ViewModeEnum.GRID || !currentNote) && <SearchBar />}
      </Stack>
    </ToolBarLayout>
  );
}
