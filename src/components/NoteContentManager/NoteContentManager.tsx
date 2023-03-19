import { Stack } from "@mui/material";
import React from "react";
import { useCurrentMode, useModeActions } from "~/store/mode/hooks";
import { ModeEnum } from "~/store/mode/type";
import { useNoteActions, useNotes } from "~/store/notes/hooks";
import { isUntitledNote, UNTITLED_NOTE } from "~/store/notes/type";
import { TextEditor } from "../TextEditor";
import { TextViewer } from "../TextViewer";
import { ToolBar } from "../ToolBar";
import { getDocAddition } from "./helpers/getDocAddition";
import { getDocTitle } from "./helpers/getDocTitle";

export function NoteContentManager() {
  const { mode } = useCurrentMode();
  const { setCurrentMode } = useModeActions();

  const { currentNote, untitledNoteCount } = useNotes();
  const { updateNote } = useNoteActions();

  const showViewer = mode === ModeEnum.VIEWER;
  const showEditor = mode === ModeEnum.EDITOR;

  function editRequestHandler() {
    setCurrentMode(ModeEnum.EDITOR);
  }

  function changeTextHandler(text: string) {
    if (!currentNote) return;

    updateNote({
      ...currentNote,
      title:
        getDocTitle(text) ??
        (isUntitledNote(currentNote.title)
          ? currentNote.title
          : UNTITLED_NOTE(untitledNoteCount + 1)),
      addition: getDocAddition(text),
      text,
    });
  }

  React.useEffect(() => {
    setCurrentMode(ModeEnum.VIEWER);
  }, [currentNote?.id]);

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
      <ToolBar />
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
