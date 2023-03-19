import { DateTime } from "luxon";
import { RawNote } from "../notes/type";

export const NOTES: RawNote[] = [
  {
    id: "1",
    title: "Test Node",
    addition: "Something",
    text: "# Test Node\n#Something",
    createdAt: DateTime.now().toISO(),
  },
  {
    id: "2",
    title: "Test Node 2",
    addition: "Something 2",
    text: "# Test Node\n#Something",
    createdAt: DateTime.now().minus({ days: 1, hours: 10 }).toISO(),
  },
  {
    id: "3",
    title: "Test Node 3",
    addition: "Something 3",
    text: "# Test Node\n#Something",
    createdAt: DateTime.now().minus({ days: 2, hours: 3 }).toISO(),
  },
  {
    id: "4",
    title: "Test Node 4",
    addition: "Something",
    text: "# Test Node 4\n#Something",
    createdAt: DateTime.now().minus({ days: 5, hours: 5 }).toISO(),
  },
  {
    id: "41",
    title: "Test Node 41",
    addition: "Something",
    text: "# Test Node 41\n#Something",
    createdAt: DateTime.now().minus({ days: 6, hours: 5 }).toISO(),
  },
  {
    id: "42",
    title: "Test Node 42",
    addition: "Something",
    text: "# Test Node 42\n#Something",
    createdAt: DateTime.now().minus({ days: 10, hours: 1 }).toISO(),
  },
];
