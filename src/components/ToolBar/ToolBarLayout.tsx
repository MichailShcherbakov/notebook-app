import { styled } from "@mui/material/styles";

export interface ToolBarLayoutProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export const ToolBarLayout = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  flexShrink: 0,
  alignItems: "center",
  width: "100%",
  overflow: "hidden",
  height: theme.spacing(8.75),
  boxShadow: `0px 0px 1px 1px ${theme.palette.divider}`,
  zIndex: theme.zIndex.appBar,
}));
