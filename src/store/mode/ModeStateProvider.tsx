import React, { Reducer } from "react";
import { isFunc } from "~/tools/isFunc";
import {
  ModeDispatchContext,
  ModeDispatchContextType,
} from "./ModeDispatchContext";
import {
  createInitialState,
  ModeStateContext,
  ModeStateContextType,
} from "./ModeStateContext";
import { reducer } from "./reducer";
import { ModeActionEnum, ModeEnum, ModeState, ModeStateAction } from "./type";

export interface ModeStateProviderProps {
  /**
   * @default ModeEnum.VIEWER
   */
  mode?: ModeEnum;
  children?: ((state: ModeState) => React.ReactNode) | React.ReactNode;
}

export function ModeStateProvider({
  mode = ModeEnum.VIEWER,
  children,
}: ModeStateProviderProps) {
  const [state, dispatch] = React.useReducer<
    Reducer<ModeState, ModeStateAction>,
    ModeEnum
  >(reducer, mode, createInitialState);

  React.useEffect(() => {
    dispatch({ type: ModeActionEnum.SET_MODE, payload: mode });
  }, [mode]);

  const stateContextValue = React.useMemo<ModeStateContextType>(
    () => ({
      state,
    }),
    [state],
  );

  const dispatchContextValue = React.useMemo<ModeDispatchContextType>(
    () => ({
      dispatch: dispatch as (action: ModeStateAction) => void,
    }),
    [dispatch],
  );

  return (
    <ModeStateContext.Provider value={stateContextValue}>
      <ModeDispatchContext.Provider value={dispatchContextValue}>
        {isFunc(children) ? children(state) : children}
      </ModeDispatchContext.Provider>
    </ModeStateContext.Provider>
  );
}
