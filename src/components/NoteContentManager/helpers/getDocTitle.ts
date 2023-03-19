import { fromMarkdown } from "mdast-util-from-markdown";
import { findNearestText } from "./findNearestText";

export function getDocTitle(markdown: string): string | null {
  const tree = fromMarkdown(markdown);

  if (!tree.position) return null;

  for (let line = 1; line <= tree.position.end.line; ++line) {
    const foundText = findNearestText(tree, line);

    if (foundText) {
      return foundText?.split("\n").at(0) ?? foundText;
    }
  }

  return null;
}
