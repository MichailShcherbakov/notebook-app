import { Tooltip } from "@mui/material";
import { UiIconButton, UiIconButtonProps } from "~/ui-kit/IconButton";
import NoteAltOutlinedIcon from "@mui/icons-material/NoteAltOutlined";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import { useNoteActions, useNotes } from "~/store/notes/hooks";
import { ModeEnum } from "~/store/notes/type";

const NEXT_MODE: Record<ModeEnum, ModeEnum> = {
  [ModeEnum.VIEWER]: ModeEnum.EDITOR,
  [ModeEnum.EDITOR]: ModeEnum.VIEWER,
};

const MODE_BUTTONS: Record<
  ModeEnum,
  { label: string; icon: React.ReactElement }
> = {
  [ModeEnum.VIEWER]: {
    label: "Edit",
    icon: <NoteAltOutlinedIcon />,
  },
  [ModeEnum.EDITOR]: {
    label: "Preview",
    icon: <RemoveRedEyeOutlinedIcon />,
  },
};

export interface ModeChangeButtonProps extends UiIconButtonProps {}

export function ModeChangeButton(props: ModeChangeButtonProps) {
  const {
    currentNoteOptions: { mode },
  } = useNotes();
  const { setCurrentNoteOptions } = useNoteActions();

  function modeChangeHandler() {
    setCurrentNoteOptions({
      mode: NEXT_MODE[mode],
    });
  }

  return (
    <Tooltip title={MODE_BUTTONS[mode].label}>
      <UiIconButton {...props} centerRipple={false} onClick={modeChangeHandler}>
        {MODE_BUTTONS[mode].icon}
      </UiIconButton>
    </Tooltip>
  );
}
