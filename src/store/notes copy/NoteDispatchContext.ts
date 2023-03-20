import React from "react";
import { NoteStateAction } from "./type";

export type NoteDispatchContextType = {
  dispatch: (action: NoteStateAction) => void;
};

export function createInitialState(): NoteDispatchContextType {
  return {
    dispatch: () => {},
  };
}

export const NoteDispatchContext = React.createContext<NoteDispatchContextType>(
  {
    dispatch: () => {},
  },
);
