import { describe, it, expect } from "vitest";
import { getDocAddition } from "./getDocAddition";

describe("getDocAddition", () => {
  it("should return empty text as doc title", () => {
    expect(getDocAddition("")).toEqual(null);
  });

  it("should return simple text as doc title", () => {
    expect(getDocAddition("nice\nHello")).toEqual("Hello");
  });

  it("should return simple text as doc title (several lines)", () => {
    expect(getDocAddition("\n\n\n\n\nnice\nHello")).toEqual("Hello");
  });

  it("should return heading text as doc title", () => {
    expect(getDocAddition("# Nice\n# Hello")).toEqual("Hello");
    expect(getDocAddition("\n# Nice\n## Hello")).toEqual("Hello");
    expect(getDocAddition("# Nice\n### Hello")).toEqual("Hello");
    expect(getDocAddition("# Nice\n#### Hello")).toEqual("Hello");
    expect(getDocAddition("# Nice\n##### Hello")).toEqual("Hello");
    expect(getDocAddition("\n\n# Nice\n###### Hello")).toEqual("Hello");
  });

  it("should return bold text as doc title", () => {
    expect(getDocAddition("# Nice\n**bold**")).toEqual("bold");
  });

  it("should return italic text as doc title", () => {
    expect(getDocAddition("# Nice\n*italic*")).toEqual("italic");
  });

  it("should return blockquote text as doc title", () => {
    expect(getDocAddition("# Nice\n> blockquote")).toEqual("blockquote");
  });

  it("should return ordered list text as doc title", () => {
    expect(
      getDocAddition("1. First item\n2. Second item\n3. Third item"),
    ).toEqual("Second item");
  });

  it("should return unordered list text as doc title", () => {
    expect(
      getDocAddition("# Nice\n- First item\n- Second item\n- Third item"),
    ).toEqual("First item");
  });

  it("should return code text as doc title", () => {
    expect(getDocAddition("# Nice\n`Hello`")).toEqual("Hello");
  });

  it("should return link text as doc title", () => {
    expect(getDocAddition("# Nice\n[Link](https://www.example.com)")).toEqual(
      "Link",
    );
  });
});
