import { DateTime } from "luxon";
import { describe, it, expect } from "vitest";
import {
  PREVIOUS_30_DAYS_NOTE_GROUP,
  TODAY_NOTE_GROUP,
  TOMORROW_NOTE_GROUP,
} from "../constants";
import { getNoteGroupTitleFromDate } from "./getNoteGroupTitleFromDate";

describe("getNoteGroupTitleFromDate", () => {
  const now = DateTime.fromObject({
    year: 2023,
    month: 3,
    day: 20,
    hour: 13,
    minute: 53,
    second: 12,
  });

  it(`should return '${TODAY_NOTE_GROUP}' group title`, () => {
    expect(getNoteGroupTitleFromDate(now.minus({ hours: 12 }), now)).toEqual(
      TODAY_NOTE_GROUP,
    );
  });

  it(`should return '${TOMORROW_NOTE_GROUP}' group title`, () => {
    expect(getNoteGroupTitleFromDate(now.minus({ hours: 20 }), now)).toEqual(
      TOMORROW_NOTE_GROUP,
    );
  });

  it(`should return '${PREVIOUS_30_DAYS_NOTE_GROUP}' group title`, () => {
    expect(
      getNoteGroupTitleFromDate(now.minus({ day: 1, hours: 20 }), now),
    ).toEqual(PREVIOUS_30_DAYS_NOTE_GROUP);
  });

  it(`should return 'January' group title`, () => {
    expect(
      getNoteGroupTitleFromDate(now.minus({ days: 66, hours: 20 }), now),
    ).toEqual("January");
  });

  it(`should return 'July 2022' group title`, () => {
    expect(getNoteGroupTitleFromDate(now.minus({ days: 253 }), now)).toEqual(
      "July 2022",
    );
  });
});
