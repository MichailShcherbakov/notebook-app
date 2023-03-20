import SearchIcon from "@mui/icons-material/Search";
import { useNoteActions, useNoteState } from "~/store/notes/hooks";
import { useViewStateActions } from "~/store/view/hooks";
import { EditorModeEnum } from "~/store/view/type";
import { useDelayedChangeEvent } from "~/tools/useDelayedChangeEvent";
import { SearchIconWrapper } from "./SearchIconWrapper";
import { SearchInputBase } from "./SearchInputBase";
import { SearchLayout, SearchLayoutProps } from "./SearchLayout";

export interface SearchBarProps extends SearchLayoutProps {}

export function SearchBar(props: SearchBarProps) {
  const { setNoteFilter, setCurrentNote } = useNoteActions();
  const { setEditorMode } = useViewStateActions();
  const { filterBy } = useNoteState();

  const [value, onChange] = useDelayedChangeEvent<HTMLInputElement>(e => {
    setNoteFilter(e.target.value);
    setCurrentNote(null);
    setEditorMode(EditorModeEnum.READ);
  }, filterBy ?? "");

  return (
    <SearchLayout {...props}>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <SearchInputBase
        placeholder="Search…"
        value={value}
        onChange={onChange}
      />
    </SearchLayout>
  );
}
