import { describe, expect } from "vitest";
import { getTextFromFormattedText } from "./getTextFromFormattedText";

describe("getTextFromFormattedText", () => {
  describe.each([
    ["", ""],
    ["same not formatted text", "same not formatted text"],
    [" **bold text**  ", "bold text"],
    ["  *italic text* ", "italic text"],
    ["  ~~strike text~~ ", "strike text"],
    ["  # title  ", "title"],
    ["  ## heading  ", "heading"],
    ["  ### subheading  ", "subheading"],
    ["  body  ", "body"],
    ["  1. ordered  ", "ordered"],
    ["  - unordered  ", "unordered"],
  ])("should detect %1 text", (text, format) => {
    expect(getTextFromFormattedText(text)).toEqual(format);
  });
});
