import { Stack } from "@mui/material";
import React from "react";
import { useNoteActions, useNoteState } from "~/store/notes/hooks";
import { isUntitledNote, UNTITLED_NOTE } from "~/store/notes/type";
import { useViewState, useViewStateActions } from "~/store/view/hooks";
import { EditorModeEnum } from "~/store/view/type";
import { useDelayedChangeEvent } from "~/tools/useDelayedChangeEvent";
import { TextEditor } from "../TextEditor";
import { TextViewer } from "../TextViewer";
import { getDocAddition } from "./helpers/getDocAddition";
import { getDocTitle } from "./helpers/getDocTitle";

export function NoteContentManager() {
  const { currentNote, untitledNoteCount } = useNoteState();
  const { updateNote } = useNoteActions();
  const { editorMode } = useViewState();
  const { setEditorMode } = useViewStateActions();

  const [value, onChange, setValue] = useDelayedChangeEvent(
    (e: React.ChangeEvent<HTMLTextAreaElement>, text: string) => {
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
    },
    currentNote?.text ?? "",
  );

  React.useEffect(() => {
    setValue(currentNote?.text ?? "");
  }, [currentNote, setValue]);

  const showViewer = editorMode === EditorModeEnum.READ;
  const showEditor = editorMode === EditorModeEnum.EDIT;

  function editRequestHandler() {
    setEditorMode(EditorModeEnum.EDIT);
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
      {showEditor && <TextEditor value={value} onChange={onChange} />}
    </Stack>
  );
}
