import { TextareaAutosize, TextareaAutosizeProps } from "@mui/material";
import React from "react";

export interface TextAreaProps extends Omit<TextareaAutosizeProps, "onChange"> {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>, text: string) => void;
}

function _TextArea({ value, onChange }: TextAreaProps) {
  function changeHandler(e: React.ChangeEvent<HTMLTextAreaElement>) {
    onChange?.(e, e.target.value);
  }

  const ref = React.useRef<HTMLTextAreaElement | null>(null);

  React.useEffect(() => {
    ref.current?.focus();

    // set focus at the end
    ref.current?.setSelectionRange(
      ref.current!.value.length,
      ref.current!.value.length,
    );
  }, []);

  return (
    <TextareaAutosize
      ref={ref}
      style={{
        width: "100%",
        height: "100%",
        border: 0,
        resize: "none",
        fontFamily: "Roboto",
        overflow: "auto",
        fontSize: "1rem",
        outlineStyle: "none",
        padding: "20px",
      }}
      value={value}
      onChange={changeHandler}
    />
  );
}

export const TextArea = React.memo(_TextArea);
