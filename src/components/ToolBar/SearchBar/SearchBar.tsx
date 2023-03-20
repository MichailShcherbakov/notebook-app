import SearchIcon from "@mui/icons-material/Search";
import React from "react";
import { useNoteActions, useNoteState } from "~/store/notes/hooks";
import { useEventDelay } from "~/tools/useEventDelay";
import { SearchIconWrapper } from "./SearchIconWrapper";
import { SearchInputBase } from "./SearchInputBase";
import { SearchLayout, SearchLayoutProps } from "./SearchLayout";

export interface SearchBarProps extends SearchLayoutProps {}

export function SearchBar(props: SearchBarProps) {
  const { setNoteFilter } = useNoteActions();
  const { filterBy } = useNoteState();

  const [input, setInput] = React.useState(filterBy);

  const emit = useEventDelay((filter: string) => setNoteFilter(filter));

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
