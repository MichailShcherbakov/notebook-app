import { SideBarLayout, SideBarLayoutProps } from "./SideBarLayout";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { SideBarHeader } from "./SideBarHeader";
import { UiIconButton } from "~/ui-kit/IconButton";
import { NoteList } from "./NoteList";
import { Tooltip } from "@mui/material";
import { DisplayVariantSwitcher } from "./DisplayVariantSwitcher";

export interface SideBarProps extends SideBarLayoutProps {}

export function SideBar(props: SideBarProps) {
  return (
    <SideBarLayout {...props}>
      <SideBarHeader>
        <DisplayVariantSwitcher />
        <Tooltip title="Delete The Note">
          <UiIconButton centerRipple={false}>
            <DeleteOutlineIcon />
          </UiIconButton>
        </Tooltip>
      </SideBarHeader>
      <NoteList />
    </SideBarLayout>
  );
}
