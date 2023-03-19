import { NoteContentManager } from "~/components/NoteContentManager";
import { SideBar } from "~/components/SideBar";
import { MainLayout } from "~/layouts/MainLayout";
import { NoteStateProvider } from "~/store/notes/NoteStateProvider";

export default function MainPage() {
  return (
    <MainLayout>
      <NoteStateProvider notes={[]}>
        <SideBar />
        <NoteContentManager />
      </NoteStateProvider>
    </MainLayout>
  );
}
