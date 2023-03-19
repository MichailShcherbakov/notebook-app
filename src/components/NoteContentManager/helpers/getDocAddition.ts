import { fromMarkdown } from "mdast-util-from-markdown";
import { findNearestText } from "./findNearestText";

export function getDocAddition(markdown: string): string | null {
  const tree = fromMarkdown(markdown);

  if (!tree.position) return null;

  let isTitleFound = false;
  for (let line = 1; line <= tree.position.end.line; ++line) {
    const foundText = findNearestText(tree, line);

    if (foundText) {
      if (!isTitleFound) {
        isTitleFound = true;
        continue;
      }

      return foundText?.split("\n").at(1) ?? foundText;
    }
  }

  return null;
}
