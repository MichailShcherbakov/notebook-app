import { UiIconButton, UiIconButtonProps } from "~/ui-kit/IconButton";
import { Tooltip } from "@mui/material";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import { useNoteActions, useNoteCreate } from "~/store/notes/hooks";
import { ModeEnum } from "~/store/notes/type";

export interface CreateNewNoteButtonProps extends UiIconButtonProps {}

export function CreateNewNoteButton(props: CreateNewNoteButtonProps) {
  const { createEmptyNote } = useNoteCreate();
  const { setCurrentNote } = useNoteActions();

  function clickHandler() {
    const note = createEmptyNote();

    setCurrentNote(note.id, {
      mode: ModeEnum.EDITOR,
    });
  }

  return (
    <Tooltip title="Create new note">
      <UiIconButton {...props} centerRipple={false} onClick={clickHandler}>
        <AddBoxOutlinedIcon />
      </UiIconButton>
    </Tooltip>
  );
}
