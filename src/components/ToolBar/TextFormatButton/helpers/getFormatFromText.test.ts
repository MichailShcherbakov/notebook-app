import { describe, expect } from "vitest";
import { TextFormatEnum } from "../type";
import { getFormatFromText } from "./getFormatFromText";

describe("getFormatFromText", () => {
  describe.each([
    ["", TextFormatEnum.UNKNOWN],
    [" **text**  ", TextFormatEnum.BOLD],
    ["  *text* ", TextFormatEnum.ITALIC],
    ["  ~~text~~ ", TextFormatEnum.STRIKETHROUGH],
    ["  # text  ", TextFormatEnum.TITLE],
    ["  ## text  ", TextFormatEnum.HEADING],
    ["  ### text  ", TextFormatEnum.SUBHEADING],
    ["  text  ", TextFormatEnum.BODY],
    ["  1. text  ", TextFormatEnum.ORDERED_LIST],
    ["  - text  ", TextFormatEnum.UNORDERED_LIST],
  ])("should detect %1 format", (text, format) => {
    expect(getFormatFromText(text)).toEqual(format);
  });
});
