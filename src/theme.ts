import { createTheme, responsiveFontSizes } from "@mui/material/styles";

export const theme = responsiveFontSizes(
  createTheme({
    palette: {
      primary: {
        main: "#FBE17F",
        contrastText: "#000000",
      },
      secondary: {
        main: "#6A6A6A",
        contrastText: "#000000",
      },
      text: {
        primary: "#3A3A3A",
      },
    },
    typography: {
      h5: {
        fontSize: "1.5rem",
        fontWeight: 500,
      },
      h6: {
        fontSize: "1rem",
        fontWeight: 600,
      },
    },
    components: {
      MuiButtonBase: {
        styleOverrides: {
          root: {
            "&.MuiButton-contained": {
              boxShadow: "none",
              textTransform: "none",

              "&:hover": {
                boxShadow: "none",
              },
            },
          },
        },
      },
    },
  }),
);
