import { alpha, styled } from "@mui/material";

export interface SearchLayoutProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export const SearchLayout = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.divider, 0.08),
  marginLeft: 0,
  width: "100%",

  "&:hover": {
    backgroundColor: alpha(theme.palette.divider, 0.12),
  },

  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));
