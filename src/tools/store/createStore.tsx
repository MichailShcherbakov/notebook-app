import React from "react";

export type DispatchContextType<TAction> = {
  dispatch: (action: TAction) => void;
};

export type StateContextType<TState> = {
  state: TState;
};

export interface StoreProviderProps<TState, TAction> {
  context: {
    state: StateContextType<TState>;
    dispatch: DispatchContextType<TAction>;
  };
  children?: React.ReactNode;
}

export function createStore<
  TState,
  TAction = any,
  TArgs extends Array<unknown> = Array<unknown>,
>(
  reducer: React.Reducer<TState, TAction>,
  createInitialState: (args: TArgs) => TState,
  ...args: TArgs
) {
  const DispatchContext = React.createContext<DispatchContextType<TAction>>({
    dispatch: () => {},
  });

  const StateContext = React.createContext<StateContextType<TState>>({
    // not used
    state: null as any,
  });

  function useStoreContext() {
    const [state, dispatch] = React.useReducer(
      reducer,
      args,
      createInitialState,
    );

    const stateContextValue = React.useMemo<StateContextType<TState>>(
      () => ({
        state,
      }),
      [state],
    );

    const dispatchContextValue = React.useMemo<DispatchContextType<TAction>>(
      () => ({
        dispatch,
      }),
      [dispatch],
    );

    return { state: stateContextValue, dispatch: dispatchContextValue };
  }

  function useDispatch() {
    const { dispatch } = React.useContext(DispatchContext);
    return dispatch;
  }

  function useStore() {
    const { state } = React.useContext(StateContext);
    return state;
  }

  function StoreProvider({
    context,
    children,
  }: StoreProviderProps<TState, TAction>) {
    return (
      <StateContext.Provider value={context.state}>
        <DispatchContext.Provider value={context.dispatch}>
          {children}
        </DispatchContext.Provider>
      </StateContext.Provider>
    );
  }

  return {
    StoreProvider,
    useStoreContext,
    useDispatch,
    useStore,
  };
}
