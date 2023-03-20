import { UiIconButton, UiIconButtonProps } from "~/ui-kit/IconButton";
import { Tooltip } from "@mui/material";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import { useNoteActions, useNoteCreate } from "~/store/notes/hooks";
import { useViewStateActions } from "~/store/view/hooks";
import { EditorModeEnum } from "~/store/view/type";

const CREATE_NEW_NOTE_TOOLTIP = "Create new note";

export interface CreateNewNoteButtonProps extends UiIconButtonProps {}

export function CreateNewNoteButton(props: CreateNewNoteButtonProps) {
  const { createEmptyNote } = useNoteCreate();
  const { setCurrentNote } = useNoteActions();
  const { setEditorMode } = useViewStateActions();

  function clickHandler() {
    const note = createEmptyNote();

    setCurrentNote(note.id);
    setEditorMode(EditorModeEnum.EDIT);
  }

  return (
    <Tooltip title={CREATE_NEW_NOTE_TOOLTIP}>
      <UiIconButton {...props} centerRipple={false} onClick={clickHandler}>
        <AddBoxOutlinedIcon />
      </UiIconButton>
    </Tooltip>
  );
}
