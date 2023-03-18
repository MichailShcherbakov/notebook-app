import { TextareaAutosize, TextareaAutosizeProps } from "@mui/material";
import React from "react";

export interface TextAreaProps extends Omit<TextareaAutosizeProps, "onChange"> {
  value: string;
  onChange: (text: string) => void;
}

function _TextArea({ value, onChange }: TextAreaProps) {
  function changeHandler(event: React.ChangeEvent<HTMLTextAreaElement>) {
    onChange?.(event.target.value);
  }

  return (
    <TextareaAutosize
      style={{
        width: "100%",
        height: "100%",
        border: 0,
        resize: "none",
        fontFamily: "Roboto",
        overflow: "auto",
        fontSize: "1rem",

        // TODO: remove
        outlineStyle: "none",
      }}
      value={value}
      onChange={changeHandler}
    />
  );
}

export const TextArea = React.memo(_TextArea);
