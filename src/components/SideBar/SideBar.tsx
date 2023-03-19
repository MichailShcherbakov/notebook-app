import { SideBarLayout, SideBarLayoutProps } from "./SideBarLayout";
import { SideBarHeader } from "./SideBarHeader";
import { NoteList } from "./NoteList";

import { DisplayVariantSwitcher } from "./DisplayVariantSwitcher";
import { CreateNewNoteButton } from "./CrateNewNoteButton/CrateNewNoteButton";

export interface SideBarProps extends SideBarLayoutProps {}

export function SideBar(props: SideBarProps) {
  return (
    <SideBarLayout {...props}>
      <SideBarHeader>
        <DisplayVariantSwitcher />
        <CreateNewNoteButton />
      </SideBarHeader>
      <NoteList />
    </SideBarLayout>
  );
}
