import produce, { enableMapSet } from "immer";
import { DateTime } from "luxon";
import { toCollection } from "~/tools/collection";
import {
  Note,
  NoteActionEnum,
  NoteState,
  NoteStateAction,
  RawNote,
} from "./type";

enableMapSet();

export function reducer(state: NoteState, action: NoteStateAction): NoteState {
  switch (action.type) {
    case NoteActionEnum.SET_NOTES: {
      return produce(state, draft => {
        draft.notes = toCollection<RawNote, "id", Note>(
          action.payload,
          "id",
          note => ({
            ...note,
            createdAt: DateTime.fromISO(note.createdAt),
          }),
        );
      });
    }
    case NoteActionEnum.SET_CURRENT_NOTE: {
      return produce(state, draft => {
        draft.currentNoteId = action.payload;
      });
    }
    case NoteActionEnum.UPDATE_NOTE: {
      return produce(state, draft => {
        draft.notes.set(action.payload.id, action.payload);
      });
    }
    case NoteActionEnum.CREATE_NOTE: {
      return produce(state, draft => {
        draft.notes.set(action.payload.id, action.payload);
      });
    }
    case NoteActionEnum.DELETE_NOTE: {
      return produce(state, draft => {
        draft.notes.delete(action.payload);
      });
    }
    default: {
      return state;
    }
  }
}
