import { Content, Root } from "mdast";

export function findNearestText(root: Root | Content, line = 1): string | null {
  if (
    !(
      root.position &&
      root.position.start.line <= line &&
      root.position.end.line >= line
    )
  ) {
    return null;
  }

  if (root.type === "text" || root.type === "inlineCode") {
    return root.value;
  }

  // @ts-ignore
  if (!Array.isArray(root.children)) return null;

  // @ts-ignore
  for (const node of root.children) {
    const foundText = findNearestText(node, line);

    if (foundText) {
      return foundText;
    }
  }

  return null;
}
