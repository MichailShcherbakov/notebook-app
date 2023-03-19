import { Tooltip } from "@mui/material";
import { UiIconButton, UiIconButtonProps } from "~/ui-kit/IconButton";
import { useNoteActions, useNotes } from "~/store/notes/hooks";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

export const DELETE_NOTE_TOOLTIP = "Delete the note";

export interface DeleteNoteButtonProps extends UiIconButtonProps {}

export function DeleteNoteButton(props: DeleteNoteButtonProps) {
  const { currentNote } = useNotes();
  const { deleteNote } = useNoteActions();

  function clickHandler() {
    if (!currentNote) return;

    deleteNote(currentNote.id);
  }

  return (
    <Tooltip title={DELETE_NOTE_TOOLTIP}>
      <UiIconButton {...props} centerRipple={false} onClick={clickHandler}>
        <DeleteOutlinedIcon />
      </UiIconButton>
    </Tooltip>
  );
}
