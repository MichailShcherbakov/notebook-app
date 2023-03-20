import { fromMarkdown } from "mdast-util-from-markdown";
import { gfm } from "micromark-extension-gfm";
import { gfmFromMarkdown } from "mdast-util-gfm";
import { TextFormatEnum } from "../type";

export function getFormatFromText(text: string): TextFormatEnum {
  const parsed = fromMarkdown(text, "utf-8", {
    extensions: [gfm()],
    mdastExtensions: [gfmFromMarkdown()],
  }).children.at(0);

  if (parsed?.type === "paragraph") {
    if (parsed.children.at(0)?.type === "text") {
      return TextFormatEnum.BODY;
    }

    if (parsed.children.at(0)?.type === "strong") {
      return TextFormatEnum.BOLD;
    }

    if (parsed.children.at(0)?.type === "emphasis") {
      return TextFormatEnum.ITALIC;
    }

    if (parsed.children.at(0)?.type === "delete") {
      return TextFormatEnum.STRIKETHROUGH;
    }
  }

  if (parsed?.type === "heading") {
    if (parsed.depth === 1) return TextFormatEnum.TITLE;
    if (parsed.depth === 2) return TextFormatEnum.HEADING;
    if (parsed.depth === 3) return TextFormatEnum.SUBHEADING;
  }

  if (parsed?.type === "list") {
    parsed; //?
    if (parsed.ordered) return TextFormatEnum.ORDERED_LIST;

    return TextFormatEnum.UNORDERED_LIST;
  }

  return TextFormatEnum.UNKNOWN;
}
