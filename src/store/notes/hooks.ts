import React from "react";
import { ModeEnum } from "~/store/notes/type";
import {
  NoteBookSchema,
  NOTEBOOK_DB,
  StoreEnum,
  useStorage,
} from "../storage/hooks";
import { createNewNote } from "./helpers/createNewNote";
import { getUntitledNoteCount } from "./helpers/getUntitledNoteCount";
import { NoteDispatchContext } from "./NoteDispatchContext";
import { NoteStateContext } from "./NoteStateContext";
import {
  CurrentNoteOptions,
  Note,
  NoteActionEnum,
  NoteId,
  RawNote,
} from "./type";

let isInit = false;

export function useNotes() {
  const { state } = React.useContext(NoteStateContext);

  const { setNotes } = useNoteActions();

  const untitledNoteCount = React.useMemo(
    () => getUntitledNoteCount(state.notes),
    [state.notes],
  );

  const { getAllItems } = useStorage<NoteBookSchema>(
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

  const { putItem, deleteItem } = useStorage<NoteBookSchema>(
    NOTEBOOK_DB,
    StoreEnum.NOTES,
  );

  const setNotes = React.useCallback(
    (notes: RawNote[]) => {
      dispatch({
        type: NoteActionEnum.SET_NOTES,
        payload: notes,
      });
    },
    [dispatch],
  );

  const setCurrentNote = React.useCallback(
    (noteId: NoteId | null, options: Partial<CurrentNoteOptions> = {}) => {
      dispatch({
        type: NoteActionEnum.SET_CURRENT_NOTE,
        payload: {
          id: noteId,
          options: {
            mode: ModeEnum.VIEWER,
            ...options,
          },
        },
      });
    },
    [dispatch],
  );

  const setCurrentNoteOptions = React.useCallback(
    (options: CurrentNoteOptions) => {
      dispatch({
        type: NoteActionEnum.SET_CURRENT_NOTE_OPTIONS,
        payload: options,
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

  const deleteNote = React.useCallback(
    (nodeId: NoteId) => {
      dispatch({
        type: NoteActionEnum.DELETE_NOTE,
        payload: nodeId,
      });

      deleteItem(nodeId);
    },
    [deleteItem, dispatch],
  );

  return {
    setNotes,
    updateNote,
    deleteNote,
    setCurrentNote,
    setCurrentNoteOptions,
  };
}

export function useNoteCreate() {
  const { state } = React.useContext(NoteStateContext);
  const { dispatch } = React.useContext(NoteDispatchContext);

  const { addItem } = useStorage<NoteBookSchema>(NOTEBOOK_DB, StoreEnum.NOTES);

  const untitledNoteCount = React.useMemo(
    () => getUntitledNoteCount(state.notes),
    [state.notes],
  );

  const createEmptyNote = React.useCallback(() => {
    const note = createNewNote(untitledNoteCount);

    dispatch({
      type: NoteActionEnum.CREATE_NOTE,
      payload: note,
    });

    addItem({ ...note, createdAt: note.createdAt.toISO() });

    return note;
  }, [addItem, dispatch, untitledNoteCount]);

  return { createEmptyNote };
}
