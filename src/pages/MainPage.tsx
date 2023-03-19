import { NoteContentManager } from "~/components/NoteContentManager";
import { SideBar } from "~/components/SideBar";
import { MainLayout } from "~/layouts/MainLayout";
import { ModeStateProvider } from "~/store/mode/ModeStateProvider";
import { NoteStateProvider } from "~/store/notes/NoteStateProvider";

export default function MainPage() {
  return (
    <MainLayout>
      <NoteStateProvider notes={[]}>
        <SideBar />
        <ModeStateProvider>
          <NoteContentManager />
        </ModeStateProvider>
      </NoteStateProvider>
    </MainLayout>
  );
}
