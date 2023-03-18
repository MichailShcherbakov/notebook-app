import { styled } from "@mui/material";

export interface TextViewerLayoutProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export const TextViewerLayout = styled("div")(({ theme }) => ({
  width: "100%",
  height: "100%",
  overflow: "auto",
  padding: theme.spacing(2.5),
}));
