import React from "react";
import { isFunc } from "~/tools/isFunc";
import {
  NoteDispatchContext,
  NoteDispatchContextType,
} from "./NoteDispatchContext";
import {
  createInitialState,
  NoteStateContext,
  NoteStateContextType,
} from "./NoteStateContext";
import { reducer } from "./reducer";
import { NoteActionEnum, NoteState, NoteStateAction, RawNote } from "./type";

export interface NoteStateProviderProps {
  notes: RawNote[];
  children?: ((state: NoteState) => React.ReactNode) | React.ReactNode;
}

export function NoteStateProvider({ notes, children }: NoteStateProviderProps) {
  const [state, dispatch] = React.useReducer(
    reducer,
    notes,
    createInitialState,
  );

  React.useEffect(() => {
    dispatch({
      type: NoteActionEnum.SET_NOTES,
      payload: notes,
    });
  }, [notes]);

  const stateContextValue = React.useMemo<NoteStateContextType>(
    () => ({
      state,
    }),
    [state],
  );

  const dispatchContextValue = React.useMemo<NoteDispatchContextType>(
    () => ({
      dispatch: dispatch as (action: NoteStateAction) => void,
    }),
    [dispatch],
  );

  return (
    <NoteStateContext.Provider value={stateContextValue}>
      <NoteDispatchContext.Provider value={dispatchContextValue}>
        {isFunc(children) ? children(state) : children}
      </NoteDispatchContext.Provider>
    </NoteStateContext.Provider>
  );
}
