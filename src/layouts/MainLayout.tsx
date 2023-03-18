import { styled, ThemeProvider } from "@mui/material/styles";
import { theme } from "~/theme";
import CssBaseline from "@mui/material/CssBaseline";

export interface MainLayoutContainerProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export const MainLayoutContainer = styled("div")(() => ({
  display: "flex",
  flexDirection: "row",
  width: "100vw",
  height: "100vh",
  overflow: "auto",
}));

export interface MainLayoutProps extends MainLayoutContainerProps {}

export function MainLayout(props: MainLayoutProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MainLayoutContainer {...props} />
    </ThemeProvider>
  );
}
