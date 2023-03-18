import { Tooltip } from "@mui/material";
import React from "react";
import {
  UiToggleButton,
  UiToggleButtonGroup,
  UiToggleButtonGroupProps,
} from "~/ui-kit/ToggleButton";
import ListIcon from "@mui/icons-material/List";
import GridViewIcon from "@mui/icons-material/GridView";

enum DisplayVariantEnum {
  LIST = "LIST",
  GRID = "GRID",
}

export const LIST_TOOLTIP = "List";
export const GRID_TOOLTIP = "Grid";

export interface DisplayVariantSwitcherProps extends UiToggleButtonGroupProps {}

export function DisplayVariantSwitcher() {
  const [displayVariant, setDisplayVariant] =
    React.useState<DisplayVariantEnum>(DisplayVariantEnum.LIST);

  function displayVariantChangeHandler(
    _event: React.MouseEvent<HTMLElement>,
    newDisplayVariant: DisplayVariantEnum | null,
  ) {
    if (!newDisplayVariant) return;

    setDisplayVariant(newDisplayVariant);
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
          value={DisplayVariantEnum.LIST}
          aria-label={DisplayVariantEnum.LIST}
          selected={displayVariant === DisplayVariantEnum.LIST}
        >
          <ListIcon />
        </UiToggleButton>
      </Tooltip>
      <Tooltip title={GRID_TOOLTIP}>
        <UiToggleButton
          value={DisplayVariantEnum.GRID}
          aria-label={DisplayVariantEnum.GRID}
          selected={displayVariant === DisplayVariantEnum.GRID}
        >
          <GridViewIcon />
        </UiToggleButton>
      </Tooltip>
    </UiToggleButtonGroup>
  );
}
