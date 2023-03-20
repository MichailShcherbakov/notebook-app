import { Tooltip } from "@mui/material";
import React from "react";
import {
  UiToggleButton,
  UiToggleButtonGroup,
  UiToggleButtonGroupProps,
} from "~/ui-kit/ToggleButton";
import ListIcon from "@mui/icons-material/List";
import GridViewIcon from "@mui/icons-material/GridView";
import { useViewState, useViewStateActions } from "~/store/view/hooks";
import { EditorModeEnum, ViewModeEnum } from "~/store/view/type";
import { useNoteActions } from "~/store/notes/hooks";

export const LIST_TOOLTIP = "List";
export const GRID_TOOLTIP = "Grid";

export interface ViewModeSwitcherProps extends UiToggleButtonGroupProps {}

export function ViewModeSwitcher() {
  const { viewMode } = useViewState();
  const { setViewMode, setEditorMode } = useViewStateActions();
  const { setCurrentNote } = useNoteActions();

  function viewModeChangeHandler(
    _: React.MouseEvent<HTMLElement>,
    newViewMode: ViewModeEnum | null,
  ) {
    if (!newViewMode) return;

    setViewMode(newViewMode);
    setEditorMode(EditorModeEnum.READ);
    setCurrentNote(null);
  }

  return (
    <UiToggleButtonGroup
      size="small"
      value={viewMode}
      exclusive
      onChange={viewModeChangeHandler}
      aria-label="display variant"
    >
      <Tooltip title={LIST_TOOLTIP}>
        <UiToggleButton
          value={ViewModeEnum.LIST}
          aria-label={ViewModeEnum.LIST}
          selected={viewMode === ViewModeEnum.LIST}
        >
          <ListIcon />
        </UiToggleButton>
      </Tooltip>
      <Tooltip title={GRID_TOOLTIP}>
        <UiToggleButton
          value={ViewModeEnum.GRID}
          aria-label={ViewModeEnum.GRID}
          selected={viewMode === ViewModeEnum.GRID}
        >
          <GridViewIcon />
        </UiToggleButton>
      </Tooltip>
    </UiToggleButtonGroup>
  );
}
