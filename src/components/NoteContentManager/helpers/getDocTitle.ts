import { fromMarkdown } from "mdast-util-from-markdown";
import { findNearestText } from "./findNearestText";
import { gfm } from "micromark-extension-gfm";
import { gfmFromMarkdown } from "mdast-util-gfm";

export function getDocTitle(text: string): string | null {
  const tree = fromMarkdown(text, "utf-8", {
    extensions: [gfm()],
    mdastExtensions: [gfmFromMarkdown()],
  });

  if (!tree.position) return null;

  for (let line = 1; line <= tree.position.end.line; ++line) {
    const foundText = findNearestText(tree, line);

    if (foundText) {
      return foundText?.split("\n").at(0) ?? foundText;
    }
  }

  return null;
}
