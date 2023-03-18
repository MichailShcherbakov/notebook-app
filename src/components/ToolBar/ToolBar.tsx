import SearchIcon from "@mui/icons-material/Search";
import FontDownloadOutlinedIcon from "@mui/icons-material/FontDownloadOutlined";
import { UiIconButton } from "~/ui-kit/IconButton";
import { ToolBarLayout, ToolBarLayoutProps } from "./ToolBarLayout";
import { Tooltip } from "@mui/material";
import React from "react";
import { ModeChangeButton } from "./ModeChangeButton";

export interface ToolBarProps extends ToolBarLayoutProps {}

function _ToolBar(props: ToolBarProps) {
  return (
    <ToolBarLayout {...props}>
      <ModeChangeButton />
      <Tooltip title="Text Format">
        <UiIconButton centerRipple={false}>
          <FontDownloadOutlinedIcon />
        </UiIconButton>
      </Tooltip>
      <Tooltip title="Note Search">
        <UiIconButton centerRipple={false}>
          <SearchIcon />
        </UiIconButton>
      </Tooltip>
    </ToolBarLayout>
  );
}

export const ToolBar = React.memo(_ToolBar);
