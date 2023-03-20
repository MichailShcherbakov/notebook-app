import { styled } from "@mui/material";

export interface TextEditorLayoutProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export const TextEditorLayout = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  height: "100%",
  overflow: "hidden",
}));
