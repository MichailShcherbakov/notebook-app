import { SideBarLayout, SideBarLayoutProps } from "./SideBarLayout";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { SideBarHeader } from "./SideBarHeader";
import { UiIconButton } from "~/ui-kit/IconButton";
import { NoteList } from "./NoteList";
import { DateTime } from "luxon";
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
      <NoteList
        notes={[
          {
            id: "1",
            title: "Test Node",
            createdAt: DateTime.now(),
            addition: "Something",
          },
          {
            id: "2",
            title: "Test Node 2",
            createdAt: DateTime.now().minus({ days: 1, hours: 10 }),
            addition: "Something",
          },
          {
            id: "3",
            title: "Test Node 3",
            createdAt: DateTime.now().minus({ days: 2, hours: 3 }),
            addition: "Something",
          },
          {
            id: "4",
            title: "Test Node 4",
            createdAt: DateTime.now().minus({ days: 5, hours: 5 }),
            addition: "Something",
          },
          {
            id: "41",
            title: "Test Node 41",
            createdAt: DateTime.now().minus({ days: 6, hours: 5 }),
            addition: "Something",
          },
          {
            id: "42",
            title: "Test Node 42",
            createdAt: DateTime.now().minus({ days: 10, hours: 1 }),
            addition: "Something",
          },
          /*{
            id: "5",
            title: "Test Node 5",
            createdAt: DateTime.now().minus({ days: 32, hours: 5 }),
            addition: "Something",
          },
          {
            id: "6",
            title:
              "Test Node 6dsaasdawet gre ew few fwerfgregertgwrwe grew gerw",
            createdAt: DateTime.now().minus({ days: 86, hours: 5 }),
            addition: "Something rewgerw gwregwer gwer gwer gew ger gerw g",
          },
          {
            id: "7",
            title: "Test Node 7",
            createdAt: DateTime.now().minus({ days: 785, hours: 5 }),
            addition: "Something",
          },
          {
            id: "876787",
            title: "Test Node 7",
            createdAt: DateTime.now().minus({ days: 785, hours: 5 }),
            addition: "Something",
          },
           {
            id: "76546",
            title: "Test Node 7",
            createdAt: DateTime.now().minus({ days: 785, hours: 5 }),
            addition: "Something",
          },
          {
            id: "7564",
            title: "Test Node 7",
            createdAt: DateTime.now().minus({ days: 785, hours: 5 }),
            addition: "Something",
          },
          {
            id: "56467",
            title: "Test Node 7",
            createdAt: DateTime.now().minus({ days: 785, hours: 5 }),
            addition: "Something",
          },
          {
            id: "7456",
            title: "Test Node 7",
            createdAt: DateTime.now().minus({ days: 785, hours: 5 }),
            addition: "Something",
          },
          {
            id: "546456",
            title: "Test Node 7",
            createdAt: DateTime.now().minus({ days: 785, hours: 5 }),
            addition: "Something",
          },
          {
            id: "546546",
            title: "Test Node 7",
            createdAt: DateTime.now().minus({ days: 785, hours: 5 }),
            addition: "Something",
          }, */
        ]}
      />
    </SideBarLayout>
  );
}
