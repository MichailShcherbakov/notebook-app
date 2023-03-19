import { describe, it, expect } from "vitest";
import { getDocTitle } from "./getDocTitle";

describe("getDocTitle", () => {
  it("should return simple text as doc title", () => {
    expect(getDocTitle("Hello")).toEqual("Hello");
    expect(getDocTitle("Hello    \nnice")).toEqual("Hello");
  });

  it("should return simple text as doc title (several lines)", () => {
    expect(getDocTitle("\n\n\n\n\nHello\nnice")).toEqual("Hello");
  });

  it("should return heading text as doc title", () => {
    expect(getDocTitle("# Hello")).toEqual("Hello");
    expect(getDocTitle("## Hello")).toEqual("Hello");
    expect(getDocTitle("### Hello")).toEqual("Hello");
    expect(getDocTitle("#### Hello")).toEqual("Hello");
    expect(getDocTitle("##### Hello")).toEqual("Hello");
    expect(getDocTitle("###### Hello")).toEqual("Hello");
  });

  it("should return bold text as doc title", () => {
    expect(getDocTitle("**bold**")).toEqual("bold");
  });

  it("should return italic text as doc title", () => {
    expect(getDocTitle("*italic*")).toEqual("italic");
  });

  it("should return blockquote text as doc title", () => {
    expect(getDocTitle("> blockquote")).toEqual("blockquote");
  });

  it("should return ordered list text as doc title", () => {
    expect(getDocTitle("1. First item\n2. Second item\n3. Third item")).toEqual(
      "First item",
    );
  });

  it("should return unordered list text as doc title", () => {
    expect(getDocTitle("- First item\n- Second item\n- Third item")).toEqual(
      "First item",
    );
  });

  it("should return code text as doc title", () => {
    expect(getDocTitle("`Hello`")).toEqual("Hello");
  });

  it("should return link text as doc title", () => {
    expect(getDocTitle("[Link](https://www.example.com)")).toEqual("Link");
  });
});
