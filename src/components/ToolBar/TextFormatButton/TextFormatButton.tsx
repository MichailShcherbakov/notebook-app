import { Tooltip } from "@mui/material";
import { UiIconButton } from "~/ui-kit/IconButton";
import FontDownloadOutlinedIcon from "@mui/icons-material/FontDownloadOutlined";
import React from "react";
import { useNoteActions, useNoteState } from "~/store/notes/hooks";
import { TextFormat, TextFormatMenu } from "./TextFormatMenu";
import { getFormatFromText } from "./helpers/getFormatFromText";
import { TextFormatEnum } from "./type";
import { getTextFromFormattedText } from "./helpers/getTextFromFormattedText";

export const TEXT_FORMAT_TOOLTIP = "Text Format";

export type SelectedText = {
  startIndex: number;
  endIndex: number;
  text: string;
};

export interface TextFormatButtonProps {}

export function TextFormatButton() {
  const { currentNote } = useNoteState();
  const { updateNote } = useNoteActions();

  const [selectedText, setSelectedText] = React.useState<SelectedText | null>(
    null,
  );

  React.useEffect(() => {
    function onMouseUp() {
      const startIndex =
        (document.activeElement as HTMLTextAreaElement | null)
          ?.selectionStart ?? null;
      const endIndex =
        (document.activeElement as HTMLTextAreaElement | null)?.selectionEnd ??
        null;

      const text = window.getSelection()?.toString() ?? null;

      if (
        startIndex === null ||
        endIndex === null ||
        text === null ||
        startIndex === endIndex
      ) {
        return;
      }

      if (startIndex === endIndex) {
        setSelectedText(null);
        return;
      }

      setSelectedText({
        startIndex,
        endIndex,
        text,
      });
    }

    window.addEventListener("mouseup", onMouseUp, { passive: true });

    return () => {
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, []);

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);

  function clickHandler(event: React.MouseEvent<HTMLButtonElement>) {
    setAnchorEl(event.currentTarget);
  }

  function closeHandler() {
    setAnchorEl(null);
    setSelectedText(null);
  }

  function textFormatSelectHandler(format: TextFormat) {
    setAnchorEl(null);

    if (!currentNote || !selectedText) return;

    const text =
      currentNote.text.substring(0, selectedText.startIndex) +
      format.format(getTextFromFormattedText(selectedText.text)) +
      currentNote.text.substring(selectedText.endIndex);

    updateNote({
      ...currentNote,
      text,
    });
  }

  return (
    <>
      <Tooltip title={TEXT_FORMAT_TOOLTIP}>
        <span>
          <UiIconButton
            tabIndex={-1}
            centerRipple={false}
            onClick={clickHandler}
            disabled={!selectedText}
          >
            <FontDownloadOutlinedIcon />
          </UiIconButton>
        </span>
      </Tooltip>
      <TextFormatMenu
        open={open}
        anchorEl={anchorEl}
        onClose={closeHandler}
        currentFormat={
          selectedText
            ? getFormatFromText(selectedText.text)
            : TextFormatEnum.UNKNOWN
        }
        onTextFormatSelect={textFormatSelectHandler}
      />
    </>
  );
}
