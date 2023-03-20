import FontDownloadOutlinedIcon from "@mui/icons-material/FontDownloadOutlined";
import { UiIconButton } from "~/ui-kit/IconButton";
import { ToolBarLayout, ToolBarLayoutProps } from "./ToolBarLayout";
import { Stack, Tooltip } from "@mui/material";
import { ModeChangeButton } from "./ModeChangeButton";
import { DeleteNoteButton } from "./DeleteNoteButton";
import { DisplayVariantSwitcher } from "./DisplayVariantSwitcher";
import { CreateNewNoteButton } from "./CreateNewNoteButton";
import { useNotes } from "~/store/notes/hooks";

export const TEXT_FORMAT_TOOLTIP = "Text Format";

export interface ToolBarProps extends ToolBarLayoutProps {}

export function ToolBar(props: ToolBarProps) {
  const { currentNote } = useNotes();

  return (
    <ToolBarLayout {...props}>
      <Stack
        direction="row"
        gap={1}
        sx={theme => ({
          width: 360,
          height: "100%",
          alignItems: "center",
          justifyContent: "space-between",
          padding: theme.spacing(1.5),
          flexShrink: 0,
          borderRightWidth: 1,
          borderRightColor: theme.palette.divider,
          borderRightStyle: "solid",
        })}
      >
        <DisplayVariantSwitcher />
        <CreateNewNoteButton />
      </Stack>
      {currentNote && (
        <>
          <Stack
            direction="row"
            gap={1}
            sx={theme => ({
              width: "100%",
              height: "100%",
              alignItems: "center",
              justifyContent: "left",
              padding: theme.spacing(1.5),
            })}
          >
            <ModeChangeButton />
            <DeleteNoteButton />
          </Stack>
          <Stack
            direction="row"
            gap={1}
            sx={theme => ({
              width: "100%",
              height: "100%",
              alignItems: "center",
              justifyContent: "center",
              padding: theme.spacing(1.5),
            })}
          >
            <Tooltip title={TEXT_FORMAT_TOOLTIP}>
              <UiIconButton centerRipple={false}>
                <FontDownloadOutlinedIcon />
              </UiIconButton>
            </Tooltip>
          </Stack>
          <Stack
            direction="row"
            gap={1}
            sx={theme => ({
              width: "100%",
              height: "100%",
              alignItems: "center",
              justifyContent: "right",
              padding: theme.spacing(1.5),
            })}
          ></Stack>
        </>
      )}
    </ToolBarLayout>
  );
}
