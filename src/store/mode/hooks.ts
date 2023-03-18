import React from "react";
import { ModeDispatchContext } from "./ModeDispatchContext";
import { ModeStateContext } from "./ModeStateContext";
import { ModeActionEnum, ModeEnum } from "./type";

export function useCurrentMode() {
  const { state } = React.useContext(ModeStateContext);
  return state;
}

export function useModeActions() {
  const { dispatch } = React.useContext(ModeDispatchContext);

  function setCurrentMode(mode: ModeEnum) {
    dispatch({
      type: ModeActionEnum.SET_MODE,
      payload: mode,
    });
  }

  return {
    setCurrentMode,
  };
}
