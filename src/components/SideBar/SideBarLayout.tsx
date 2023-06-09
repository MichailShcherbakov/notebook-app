import { styled } from "@mui/material/styles";

export interface SideBarLayoutProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export const SideBarLayout = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  flexShrink: 0,
  width: 360,
  height: "100%",
  overflow: "hidden",
  borderRightWidth: 1,
  borderRightColor: theme.palette.divider,
  borderRightStyle: "solid",
}));
