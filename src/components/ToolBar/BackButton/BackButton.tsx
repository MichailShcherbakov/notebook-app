import { Tooltip } from "@mui/material";
import { UiIconButton } from "~/ui-kit/IconButton";
import KeyboardBackspaceOutlinedIcon from "@mui/icons-material/KeyboardBackspaceOutlined";
import { useNoteActions } from "~/store/notes/hooks";
import { useViewStateActions } from "~/store/view/hooks";
import { EditorModeEnum } from "~/store/view/type";

const BACK_TO_ALL_TOOLTIP = "Back To All";

export interface BackButtonProps {}

export function BackButton(props: BackButtonProps) {
  const { setCurrentNote } = useNoteActions();
  const { setEditorMode } = useViewStateActions();

  function clickHandler() {
    setCurrentNote(null);
    setEditorMode(EditorModeEnum.READ);
  }

  return (
    <Tooltip title={BACK_TO_ALL_TOOLTIP}>
      <UiIconButton {...props} centerRipple={false} onClick={clickHandler}>
        <KeyboardBackspaceOutlinedIcon />
      </UiIconButton>
    </Tooltip>
  );
}
