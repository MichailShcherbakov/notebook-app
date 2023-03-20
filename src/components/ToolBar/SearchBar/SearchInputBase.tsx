import { InputBase, styled } from "@mui/material";

export const SearchInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",

  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",

    textOverflow: "ellipsis",

    [theme.breakpoints.up("sm")]: {
      width: "12ch",

      "&:focus": {
        width: "20ch",
      },
    },
  },
}));
