import { styled } from "@mui/material";

export interface TextEditorLayoutProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export const TextEditorLayout = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  height: "100%",
  overflow: "hidden",
  padding: theme.spacing(2.5),
}));
