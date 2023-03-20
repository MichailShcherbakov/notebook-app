import SearchIcon from "@mui/icons-material/Search";
import React from "react";
import { useNoteActions, useNoteState } from "~/store/notes/hooks";
import { useViewStateActions } from "~/store/view/hooks";
import { EditorModeEnum } from "~/store/view/type";
import { useEventDelay } from "~/tools/useEventDelay";
import { SearchIconWrapper } from "./SearchIconWrapper";
import { SearchInputBase } from "./SearchInputBase";
import { SearchLayout, SearchLayoutProps } from "./SearchLayout";

export interface SearchBarProps extends SearchLayoutProps {}

export function SearchBar(props: SearchBarProps) {
  const { setNoteFilter, setCurrentNote } = useNoteActions();
  const { setEditorMode } = useViewStateActions();
  const { filterBy } = useNoteState();

  const [input, setInput] = React.useState(filterBy ?? "");

  const emit = useEventDelay((filter: string) => {
    setNoteFilter(filter);
    setCurrentNote(null);
    setEditorMode(EditorModeEnum.READ);
  });

  function changeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    emit(e.target.value);

    setInput(e.target.value);
  }

  return (
    <SearchLayout {...props}>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <SearchInputBase
        placeholder="Search…"
        value={input}
        onChange={changeHandler}
      />
    </SearchLayout>
  );
}
