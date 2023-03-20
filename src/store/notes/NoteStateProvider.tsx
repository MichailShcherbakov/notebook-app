import React from "react";
import { StoreProvider, useStoreContext } from "./store";

export interface NoteStateProviderProps {
  children?: React.ReactNode;
}

export function NoteStateProvider(props: NoteStateProviderProps) {
  const context = useStoreContext();
  return <StoreProvider context={context} {...props} />;
}
