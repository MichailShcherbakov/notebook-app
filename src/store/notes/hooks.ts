import React from "react";
import { fromCollection } from "~/tools/collection";
import {
  NoteBookSchema,
  NOTEBOOK_DB,
  StoreEnum,
  useStorage,
} from "../storage/hooks";
import { NoteDispatchContext } from "./NoteDispatchContext";
import { NoteStateContext } from "./NoteStateContext";
import { isUntitledNote, Note, NoteActionEnum, NoteId, RawNote } from "./type";

let isInit = false;

export function useNotes() {
  const { state } = React.useContext(NoteStateContext);

  const { setNotes } = useNoteActions();

  const untitledNoteCount = React.useMemo(
    () =>
      fromCollection(state.notes).reduce(
        (untitled, [_, note]) =>
          isUntitledNote(note.title) ? untitled + 1 : untitled,
        0,
      ),
    [state.notes],
  );

  const { getAllItems, addItem } = useStorage<NoteBookSchema>(
    NOTEBOOK_DB,
    StoreEnum.NOTES,
  );

  React.useEffect(() => {
    if (isInit) return;

    isInit = true;

    getAllItems().then(notes => {
      setNotes(notes);
    });
  }, [getAllItems, setNotes]);

  const currentNote = state.currentNoteId
    ? state.notes.get(state.currentNoteId)!
    : null;

  return {
    ...state,
    untitledNoteCount,
    currentNote,
  };
}

export function useNoteActions() {
  const { dispatch } = React.useContext(NoteDispatchContext);

  const { putItem } = useStorage<NoteBookSchema>(NOTEBOOK_DB, StoreEnum.NOTES);

  const setNotes = React.useCallback(
    (notes: RawNote[]) => {
      dispatch({
        type: NoteActionEnum.SET_NOTES,
        payload: notes,
      });
    },
    [dispatch],
  );

  const setCurrentNoteId = React.useCallback(
    (noteId: NoteId) => {
      dispatch({
        type: NoteActionEnum.SET_CURRENT_NOTE,
        payload: noteId,
      });
    },
    [dispatch],
  );

  const updateNote = React.useCallback(
    (note: Note) => {
      dispatch({
        type: NoteActionEnum.UPDATE_NOTE,
        payload: note,
      });

      putItem({ ...note, createdAt: note.createdAt.toISO() });
    },
    [dispatch, putItem],
  );

  return {
    setNotes,
    updateNote,
    setCurrentNoteId,
  };
}
