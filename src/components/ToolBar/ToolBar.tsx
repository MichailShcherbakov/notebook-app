import FontDownloadOutlinedIcon from "@mui/icons-material/FontDownloadOutlined";
import { UiIconButton } from "~/ui-kit/IconButton";
import { ToolBarLayout, ToolBarLayoutProps } from "./ToolBarLayout";
import { Stack, Tooltip } from "@mui/material";
import React from "react";
import { ModeChangeButton } from "./ModeChangeButton";
import { DeleteNoteButton } from "./DeleteNoteButton";

export const TEXT_FORMAT_TOOLTIP = "Text Format";

export interface ToolBarProps extends ToolBarLayoutProps {}

function _ToolBar(props: ToolBarProps) {
  return (
    <ToolBarLayout {...props}>
      <Stack
        direction="row"
        width="100%"
        alignItems="center"
        justifyContent="left"
        gap={1}
      >
        <ModeChangeButton />
        <DeleteNoteButton />
      </Stack>
      <Stack
        direction="row"
        width="100%"
        alignItems="center"
        justifyContent="center"
        gap={1}
      >
        <Tooltip title={TEXT_FORMAT_TOOLTIP}>
          <UiIconButton centerRipple={false}>
            <FontDownloadOutlinedIcon />
          </UiIconButton>
        </Tooltip>
      </Stack>
      <Stack
        direction="row"
        width="100%"
        alignItems="center"
        justifyContent="right"
        gap={1}
      ></Stack>
    </ToolBarLayout>
  );
}

export const ToolBar = React.memo(_ToolBar);
