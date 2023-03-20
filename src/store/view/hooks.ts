import React from "react";
import { setEditorModeAction, setViewModeAction } from "./actions";
import { useDispatch, useStore } from "./store";
import { EditorModeEnum, ViewModeEnum } from "./type";

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

  const setEditorMode = React.useCallback(
    (mode: EditorModeEnum) => {
      dispatch(setEditorModeAction(mode));
    },
    [dispatch],
  );

  return {
    setViewMode,
    setEditorMode,
  };
}
