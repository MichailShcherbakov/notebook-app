import React from "react";
import {
  NoteBookSchema,
  NOTEBOOK_DB,
  StoreEnum,
  useStorage,
} from "../storage/hooks";
import {
  createNoteAction,
  deleteNoteAction,
  setCurrentNoteAction,
  setNoteFilterAction,
  setNotesAction,
  updateNoteAction,
} from "./actions";
import { createNewNote } from "./helpers/createNewNote";
import { filterBy } from "./helpers/filterBy";
import { getUntitledNoteCount } from "./helpers/getUntitledNoteCount";
import { useDispatch, useStore } from "./store";
import { Note, NoteId, RawNote } from "./type";

export function useNoteState() {
  const store = useStore();

  const untitledNoteCount = React.useMemo(
    () => getUntitledNoteCount(store.notes),
    [store.notes],
  );

  const filteredNotes = React.useMemo(
    () =>
      store.filterBy ? filterBy(store.notes, store.filterBy) : store.notes,
    [store.filterBy, store.notes],
  );

  const currentNote = store.currentNoteId
    ? store.notes.get(store.currentNoteId)!
    : null;

  return {
    ...store,
    untitledNoteCount,
    currentNote,
    filteredNotes,
  };
}

export function useNoteActions() {
  const dispatch = useDispatch();

  const { putItem, deleteItem } = useStorage<NoteBookSchema>(
    NOTEBOOK_DB,
    StoreEnum.NOTES,
  );

  const setNotes = React.useCallback(
    (notes: RawNote[]) => {
      dispatch(setNotesAction(notes));
    },
    [dispatch],
  );

  const setCurrentNote = React.useCallback(
    (noteId: NoteId | null) => {
      dispatch(setCurrentNoteAction(noteId));
    },
    [dispatch],
  );

  const updateNote = React.useCallback(
    (note: Note) => {
      dispatch(updateNoteAction(note));

      putItem({ ...note, createdAt: note.createdAt.toISO() });
    },
    [dispatch, putItem],
  );

  const deleteNote = React.useCallback(
    (nodeId: NoteId) => {
      dispatch(deleteNoteAction(nodeId));

      deleteItem(nodeId);
    },
    [deleteItem, dispatch],
  );

  const setNoteFilter = React.useCallback(
    (filter: string) => {
      dispatch(setNoteFilterAction(filter));
    },
    [dispatch],
  );

  return {
    setNotes,
    updateNote,
    deleteNote,
    setCurrentNote,
    setNoteFilter,
  };
}

export function useNoteCreate() {
  const dispatch = useDispatch();

  const { untitledNoteCount } = useNoteState();

  const { addItem } = useStorage<NoteBookSchema>(NOTEBOOK_DB, StoreEnum.NOTES);

  const createEmptyNote = React.useCallback(() => {
    const note = createNewNote(untitledNoteCount);

    dispatch(createNoteAction(note));

    addItem({ ...note, createdAt: note.createdAt.toISO() });

    return note;
  }, [addItem, dispatch, untitledNoteCount]);

  return { createEmptyNote };
}
