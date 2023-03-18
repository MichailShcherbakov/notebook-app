import { SideBarLayout, SideBarLayoutProps } from "./SideBarLayout";
import ListIcon from "@mui/icons-material/List";
import GridViewIcon from "@mui/icons-material/GridView";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { UiToggleButton, UiToggleButtonGroup } from "~/ui-kit/ToggleButton";
import React from "react";
import { SideBarLHeader } from "./SideBarHeader";
import { UiIconButton } from "~/ui-kit/IconButton";
import { NoteList } from "./NoteList";
import { DateTime } from "luxon";

type DisplayVariant = "list" | "grid";

export interface SideBarProps extends SideBarLayoutProps {}

export function SideBar(props: SideBarProps) {
  const [displayVariant, setDisplayVariant] =
    React.useState<DisplayVariant>("list");

  function displayVariantChangeHandler(
    _event: React.MouseEvent<HTMLElement>,
    newDisplayVariant: DisplayVariant | null,
  ) {
    if (!newDisplayVariant) return;

    setDisplayVariant(newDisplayVariant);
  }

  return (
    <SideBarLayout {...props}>
      <SideBarLHeader>
        <UiToggleButtonGroup
          size="small"
          value={displayVariant}
          exclusive
          onChange={displayVariantChangeHandler}
          aria-label="display variant"
        >
          <UiToggleButton value="list" aria-label="list">
            <ListIcon />
          </UiToggleButton>
          <UiToggleButton value="grid" aria-label="grid">
            <GridViewIcon />
          </UiToggleButton>
        </UiToggleButtonGroup>
        <UiIconButton centerRipple={false}>
          <DeleteOutlineIcon />
        </UiIconButton>
      </SideBarLHeader>
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
          {
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
          },
        ]}
      />
    </SideBarLayout>
  );
}
