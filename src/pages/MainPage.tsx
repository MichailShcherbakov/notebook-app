import { ToolBar } from "~/components/ToolBar";
import { ViewContentManager } from "~/components/ViewContentManager";
import { MainLayout } from "~/layouts/MainLayout";
import { NoteStateProvider } from "~/store/notes/NoteStateProvider";
import { ViewStateProvider } from "~/store/view/ViewStateProvider";

export default function MainPage() {
  return (
    <MainLayout>
      <NoteStateProvider>
        <ViewStateProvider>
          <ToolBar />
          <ViewContentManager />
        </ViewStateProvider>
      </NoteStateProvider>
    </MainLayout>
  );
}
