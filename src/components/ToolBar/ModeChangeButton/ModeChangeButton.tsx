import { Tooltip } from "@mui/material";
import { UiIconButton, UiIconButtonProps } from "~/ui-kit/IconButton";
import { useCurrentMode, useModeActions } from "~/store/mode/hooks";
import { ModeEnum } from "~/store/mode/type";
import NoteAltOutlinedIcon from "@mui/icons-material/NoteAltOutlined";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";

const NEXT_MODE: Record<ModeEnum, ModeEnum> = {
  [ModeEnum.VIEWER]: ModeEnum.EDITOR,
  [ModeEnum.EDITOR]: ModeEnum.VIEWER,
};

export interface ModeChangeButtonProps extends UiIconButtonProps {}

export function ModeChangeButton(props: ModeChangeButtonProps) {
  const { mode } = useCurrentMode();
  const { setCurrentMode } = useModeActions();

  function modeChangeHandler() {
    setCurrentMode(NEXT_MODE[mode]);
  }

  return (
    <Tooltip title={mode === ModeEnum.VIEWER ? "Edit" : "Preview"}>
      <UiIconButton {...props} centerRipple={false} onClick={modeChangeHandler}>
        {mode === ModeEnum.VIEWER && <NoteAltOutlinedIcon />}
        {mode === ModeEnum.EDITOR && <RemoveRedEyeOutlinedIcon />}
      </UiIconButton>
    </Tooltip>
  );
}
