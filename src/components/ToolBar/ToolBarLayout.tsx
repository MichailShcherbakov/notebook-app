import { styled } from "@mui/material/styles";

export interface ToolBarLayoutProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export const ToolBarLayout = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  flexShrink: 0,
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
  height: theme.spacing(8.75),
  padding: theme.spacing(1.5),
  boxShadow: `0px 0px 1px 1px ${theme.palette.divider}`,
  zIndex: theme.zIndex.appBar,
}));
