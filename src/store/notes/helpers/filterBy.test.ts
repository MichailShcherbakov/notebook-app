import { DateTime } from "luxon";
import { describe, it, expect } from "vitest";
import { createCollectionFrom } from "~/tools/collection";
import { NoteCollection } from "../type";
import { filterBy } from "./filterBy";

const NOTES: NoteCollection = createCollectionFrom([
  [
    "1",
    {
      id: "1",
      title: "Title",
      addition: null,
      text: "",
      createdAt: DateTime.now(),
    },
  ],

  [
    "2",
    {
      id: "2",
      title: "Hello",
      addition: "lofa",
      text: "",
      createdAt: DateTime.now(),
    },
  ],
  [
    "3",
    {
      id: "3",
      title: "Untitled 2",
      addition: "fa",
      text: "",
      createdAt: DateTime.now(),
    },
  ],
  [
    "4",
    {
      id: "4",
      title: "apple",
      addition: null,
      text: "",
      createdAt: DateTime.now(),
    },
  ],
]);

describe("filterBy", () => {
  it("filter by title", () => {
    const filteredNotes = filterBy(NOTES, "Title");

    expect(filteredNotes.get("1")).toBeDefined();
    expect(filteredNotes.get("3")).toBeDefined();
  });

  it("filter by title (trim)", () => {
    const filteredNotes = filterBy(NOTES, "   tIt ");

    expect(filteredNotes.get("1")).toBeDefined();
    expect(filteredNotes.get("3")).toBeDefined();
  });

  it("filter by addition ", () => {
    const filteredNotes = filterBy(NOTES, "f");

    expect(filteredNotes.get("2")).toBeDefined();
    expect(filteredNotes.get("3")).toBeDefined();
  });

  it("filter by addition (trim)", () => {
    const filteredNotes = filterBy(NOTES, "    fa  ");

    expect(filteredNotes.get("2")).toBeDefined();
    expect(filteredNotes.get("3")).toBeDefined();
  });
});
