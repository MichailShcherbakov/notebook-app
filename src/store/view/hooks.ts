import React from "react";
import { setViewModeAction } from "./actions";
import { useDispatch, useStore } from "./store";
import { ViewModeEnum } from "./type";

export function useViewState() {
  return useStore();
}

export function useViewStateActions() {
  const dispatch = useDispatch();

  const setViewMode = React.useCallback(
    (mode: ViewModeEnum) => {
      dispatch(setViewModeAction(mode));
    },
    [dispatch],
  );

  return {
    setViewMode,
  };
}
