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
import { ViewModeEnum } from "~/store/view/type";
import { useNoteActions } from "~/store/notes/hooks";

export const LIST_TOOLTIP = "List";
export const GRID_TOOLTIP = "Grid";

export interface DisplayVariantSwitcherProps extends UiToggleButtonGroupProps {}

export function DisplayVariantSwitcher() {
  const { mode: displayVariant } = useViewState();
  const { setViewMode } = useViewStateActions();
  const { setCurrentNote } = useNoteActions();

  function displayVariantChangeHandler(
    _: React.MouseEvent<HTMLElement>,
    newDisplayVariant: ViewModeEnum | null,
  ) {
    if (!newDisplayVariant) return;

    setViewMode(newDisplayVariant);
    setCurrentNote(null);
  }

  return (
    <UiToggleButtonGroup
      size="small"
      value={displayVariant}
      exclusive
      onChange={displayVariantChangeHandler}
      aria-label="display variant"
    >
      <Tooltip title={LIST_TOOLTIP}>
        <UiToggleButton
          value={ViewModeEnum.LIST}
          aria-label={ViewModeEnum.LIST}
          selected={displayVariant === ViewModeEnum.LIST}
        >
          <ListIcon />
        </UiToggleButton>
      </Tooltip>
      <Tooltip title={GRID_TOOLTIP}>
        <UiToggleButton
          value={ViewModeEnum.GRID}
          aria-label={ViewModeEnum.GRID}
          selected={displayVariant === ViewModeEnum.GRID}
        >
          <GridViewIcon />
        </UiToggleButton>
      </Tooltip>
    </UiToggleButtonGroup>
  );
}
