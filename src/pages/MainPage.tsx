import { NoteContentManager } from "~/components/NoteContentManager";
import { SideBar } from "~/components/SideBar";
import { MainLayout } from "~/layouts/MainLayout";
import { ModeStateProvider } from "~/store/mode/ModeStateProvider";

export default function MainPage() {
  return (
    <MainLayout>
      <SideBar />
      <ModeStateProvider>
        <NoteContentManager />
      </ModeStateProvider>
    </MainLayout>
  );
}
