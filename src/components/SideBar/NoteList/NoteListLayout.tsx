import { styled } from "@mui/material/styles";

export interface NoteListLayoutProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export const NoteListLayout = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  height: "100%",
  overflow: "auto",
}));
