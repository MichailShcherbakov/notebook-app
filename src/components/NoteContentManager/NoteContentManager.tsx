import { Stack } from "@mui/material";
import { ModeEnum } from "~/store/notes/type";
import { useNoteActions, useNotes } from "~/store/notes/hooks";
import { isUntitledNote, UNTITLED_NOTE } from "~/store/notes/type";
import { TextEditor } from "../TextEditor";
import { TextViewer } from "../TextViewer";
import { getDocAddition } from "./helpers/getDocAddition";
import { getDocTitle } from "./helpers/getDocTitle";

export function NoteContentManager() {
  const { currentNote, currentNoteOptions, untitledNoteCount } = useNotes();
  const { updateNote, setCurrentNoteOptions } = useNoteActions();

  const showViewer = currentNoteOptions.mode === ModeEnum.VIEWER;
  const showEditor = currentNoteOptions.mode === ModeEnum.EDITOR;

  function editRequestHandler() {
    setCurrentNoteOptions({
      mode: ModeEnum.EDITOR,
    });
  }

  function changeTextHandler(text: string) {
    if (!currentNote) return;

    const untitled = isUntitledNote(currentNote.title)
      ? currentNote.title
      : UNTITLED_NOTE(untitledNoteCount + 1);

    updateNote({
      ...currentNote,
      title: getDocTitle(text) ?? untitled,
      addition: getDocAddition(text),
      text,
    });
  }

  if (!currentNote) return null;

  return (
    <Stack
      direction="column"
      sx={{
        width: "100%",
        height: "100%",
        overflow: "auto",
      }}
    >
      {showViewer && (
        <TextViewer onEditRequire={editRequestHandler}>
          {currentNote.text}
        </TextViewer>
      )}
      {showEditor && (
        <TextEditor value={currentNote.text} onChange={changeTextHandler} />
      )}
    </Stack>
  );
}
