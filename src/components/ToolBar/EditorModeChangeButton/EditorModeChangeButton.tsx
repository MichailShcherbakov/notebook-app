import { Tooltip } from "@mui/material";
import { UiIconButton, UiIconButtonProps } from "~/ui-kit/IconButton";
import NoteAltOutlinedIcon from "@mui/icons-material/NoteAltOutlined";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import { EditorModeEnum } from "~/store/view/type";
import { useViewState, useViewStateActions } from "~/store/view/hooks";

const NEXT_MODE: Record<EditorModeEnum, EditorModeEnum> = {
  [EditorModeEnum.READ]: EditorModeEnum.EDIT,
  [EditorModeEnum.EDIT]: EditorModeEnum.READ,
};

const MODE_BUTTONS: Record<
  EditorModeEnum,
  { label: string; icon: React.ReactElement }
> = {
  [EditorModeEnum.READ]: {
    label: "Preview",
    icon: <RemoveRedEyeOutlinedIcon />,
  },
  [EditorModeEnum.EDIT]: {
    label: "Edit",
    icon: <NoteAltOutlinedIcon />,
  },
};

export interface EditorModeChangeButtonProps extends UiIconButtonProps {}

export function EditorModeChangeButton(props: EditorModeChangeButtonProps) {
  const { editorMode } = useViewState();
  const { setEditorMode } = useViewStateActions();

  function EditorModeChangeHandler() {
    setEditorMode(NEXT_MODE[editorMode]);
  }

  return (
    <Tooltip title={MODE_BUTTONS[NEXT_MODE[editorMode]].label}>
      <UiIconButton
        {...props}
        centerRipple={false}
        onClick={EditorModeChangeHandler}
      >
        {MODE_BUTTONS[NEXT_MODE[editorMode]].icon}
      </UiIconButton>
    </Tooltip>
  );
}
