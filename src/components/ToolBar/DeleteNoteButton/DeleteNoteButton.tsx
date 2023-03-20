import {
  Button,
  Modal,
  Paper,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import { UiIconButton, UiIconButtonProps } from "~/ui-kit/IconButton";
import { useNoteActions, useNoteState } from "~/store/notes/hooks";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import React from "react";

export const DELETE_NOTE_TOOLTIP = "Delete The Note";

export interface DeleteNoteButtonProps extends UiIconButtonProps {}

export function DeleteNoteButton(props: DeleteNoteButtonProps) {
  const [requestedConfirmation, setRequestedConfirmation] =
    React.useState(false);

  const { currentNote } = useNoteState();
  const { deleteNote } = useNoteActions();

  function clickHandler() {
    setRequestedConfirmation(true);
  }

  function cancelDeletingHandler() {
    setRequestedConfirmation(false);
  }

  function deleteConfirmHandler() {
    setRequestedConfirmation(false);

    if (!currentNote) return;

    deleteNote(currentNote.id);
  }

  return (
    <>
      <Tooltip title={DELETE_NOTE_TOOLTIP}>
        <UiIconButton {...props} centerRipple={false} onClick={clickHandler}>
          <DeleteOutlinedIcon />
        </UiIconButton>
      </Tooltip>
      <Modal open={requestedConfirmation} onClose={cancelDeletingHandler}>
        <Paper
          sx={theme => ({
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            padding: theme.spacing(2),
            width: 360,
          })}
        >
          <Stack direction="column" gap={2}>
            <Typography
              variant="h6"
              component="h2"
              sx={{
                textAlign: "center",
              }}
            >
              Are you sure you want to delete this note permanently?
            </Typography>
            <Typography
              variant="body2"
              component="h2"
              sx={{
                textAlign: "center",
              }}
            >
              You cannot undo this action.
            </Typography>
            <Stack direction="row-reverse" alignItems="center" gap={2}>
              <Button
                variant="contained"
                size="small"
                onClick={deleteConfirmHandler}
                sx={{
                  width: "100%",
                }}
              >
                Delete
              </Button>
              <Button
                color="secondary"
                variant="outlined"
                size="small"
                onClick={cancelDeletingHandler}
                sx={{
                  width: "100%",
                }}
              >
                Cancel
              </Button>
            </Stack>
          </Stack>
        </Paper>
      </Modal>
    </>
  );
}
