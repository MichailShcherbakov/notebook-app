import { createTheme, responsiveFontSizes } from "@mui/material/styles";

export const theme = responsiveFontSizes(
  createTheme({
    palette: {
      primary: {
        main: "#FBE17F",
      },
      text: {
        primary: "#3A3A3A",
      },
    },
    typography: {
      h6: {
        fontSize: "1rem",
        fontWeight: 600,
      },
    },
  }),
);
