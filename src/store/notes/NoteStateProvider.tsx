import React from "react";
import {
  NoteBookSchema,
  NOTEBOOK_DB,
  StoreEnum,
  useStorage,
} from "../storage/hooks";
import { useNoteActions } from "./hooks";
import { StoreProvider, useStoreContext } from "./store";

export interface NoteStateProviderProps {
  children?: React.ReactNode;
}

export function NoteStateProvider(props: NoteStateProviderProps) {
  const context = useStoreContext();

  return (
    <StoreProvider context={context}>
      <NoteStoreSync {...props} />
    </StoreProvider>
  );
}

export interface NoteStoreSyncProps {
  children?: React.ReactNode;
}

export function NoteStoreSync({ children = null }: NoteStoreSyncProps) {
  const isSync = React.useRef<boolean>(false);

  const { setNotes } = useNoteActions();

  const { getAllItems } = useStorage<NoteBookSchema>(
    NOTEBOOK_DB,
    StoreEnum.NOTES,
  );

  React.useEffect(() => {
    if (isSync.current) return;

    isSync.current = true;

    getAllItems().then(notes => setNotes(notes));
  }, [getAllItems, setNotes]);

  return <>{children}</>;
}
