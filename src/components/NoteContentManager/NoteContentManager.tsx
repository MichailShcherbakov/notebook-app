import { Stack } from "@mui/material";
import React from "react";
import { useCurrentMode, useModeActions } from "~/store/mode/hooks";
import { ModeEnum } from "~/store/mode/type";
import { TextEditor } from "../TextEditor";
import { TextViewer } from "../TextViewer";
import { ToolBar } from "../ToolBar";

export function NoteContentManager() {
  const { mode } = useCurrentMode();
  const { setCurrentMode } = useModeActions();

  const [text, setText] = React.useState("# Hello");

  const showViewer = mode === ModeEnum.VIEWER;
  const showEditor = mode === ModeEnum.EDITOR;

  function editRequestHandler() {
    setCurrentMode(ModeEnum.EDITOR);
  }

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
        <TextViewer onEditRequire={editRequestHandler}>{text}</TextViewer>
      )}
      {showEditor && <TextEditor value={text} onChange={setText} />}
    </Stack>
  );
}
