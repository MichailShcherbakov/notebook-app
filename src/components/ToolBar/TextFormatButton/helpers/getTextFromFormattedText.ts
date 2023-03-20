import { fromMarkdown } from "mdast-util-from-markdown";
import { gfm } from "micromark-extension-gfm";
import { gfmFromMarkdown } from "mdast-util-gfm";

export function getTextFromFormattedText(text: string): string {
  const parent = fromMarkdown(text, "utf-8", {
    extensions: [gfm()],
    mdastExtensions: [gfmFromMarkdown()],
  }).children.at(0);

  if (parent?.type === "paragraph") {
    const child = parent.children.at(0);

    if (child?.type === "text") {
      return child.value;
    }

    if (child?.type === "strong") {
      const text = child.children.at(0);

      if (text?.type === "text") {
        return text.value;
      }
    }

    if (child?.type === "emphasis") {
      const text = child.children.at(0);

      if (text?.type === "text") {
        return text.value;
      }
    }

    if (child?.type === "delete") {
      const text = child.children.at(0);

      if (text?.type === "text") {
        return text.value;
      }
    }
  }

  if (parent?.type === "heading") {
    const text = parent.children.at(0);

    if (text?.type === "text") {
      return text.value;
    }
  }

  if (parent?.type === "list") {
    const listItem = parent.children.at(0);

    if (listItem?.type === "listItem") {
      const paragraph = listItem.children.at(0);

      if (paragraph?.type === "paragraph") {
        const text = paragraph.children.at(0);

        if (text?.type === "text") {
          return text.value;
        }
      }
    }
  }

  return text;
}
