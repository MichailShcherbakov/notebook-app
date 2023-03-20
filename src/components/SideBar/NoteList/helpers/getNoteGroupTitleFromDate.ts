import { DateTime } from "luxon";
import {
  PREVIOUS_30_DAYS_NOTE_GROUP,
  TODAY_NOTE_GROUP,
  TOMORROW_NOTE_GROUP,
} from "../constants";

export function getNoteGroupTitleFromDate(
  noteCreationDate: DateTime,
  now: DateTime,
) {
  if (Math.abs(now.day - noteCreationDate.day) < 1) return TODAY_NOTE_GROUP;

  if (Math.abs(now.day - noteCreationDate.day) < 2) return TOMORROW_NOTE_GROUP;

  if (Math.abs(now.month - noteCreationDate.month) < 1) {
    return PREVIOUS_30_DAYS_NOTE_GROUP;
  }

  if (Math.abs(now.year - noteCreationDate.year) < 1) {
    return noteCreationDate.toFormat("LLLL");
  }

  return noteCreationDate.toFormat("LLLL yyyy");
}
