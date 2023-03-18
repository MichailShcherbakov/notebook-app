import { styled } from "@mui/material/styles";

export interface SideBarLHeaderProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export const SideBarLHeader = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
  padding: theme.spacing(2),
}));
