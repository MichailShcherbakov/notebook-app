import React from "react";
import { ModeEnum, ModeState } from "./type";

export function createInitialState(mode: ModeEnum): ModeState {
  return {
    mode,
  };
}

export type ModeStateContextType = {
  state: ModeState;
};

export const ModeStateContext = React.createContext<ModeStateContextType>({
  state: {
    mode: ModeEnum.VIEWER,
  },
});
