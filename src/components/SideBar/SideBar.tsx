import { SideBarLayout, SideBarLayoutProps } from "./SideBarLayout";
import { NoteList } from "../NoteList";

export interface SideBarProps extends SideBarLayoutProps {}

export function SideBar(props: SideBarProps) {
  return (
    <SideBarLayout {...props}>
      <NoteList />
    </SideBarLayout>
  );
}
