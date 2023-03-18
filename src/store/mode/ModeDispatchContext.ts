import React from "react";
import { ModeStateAction } from "./type";

export type ModeDispatchContextType = {
  dispatch: (action: ModeStateAction) => void;
};

export function createInitialState(): ModeDispatchContextType {
  return {
    dispatch: () => {},
  };
}

export const ModeDispatchContext = React.createContext<ModeDispatchContextType>(
  {
    dispatch: () => {},
  },
);
