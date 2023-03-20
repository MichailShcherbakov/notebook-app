import { ListSubheader, ListSubheaderProps, styled } from "@mui/material";
import { paddingX, paddingY } from "~/tools/spacing";

export interface NoteListSubHeaderProps extends ListSubheaderProps {}

export const NoteListSubHeader = styled(ListSubheader)(({ theme }) => ({
  ...paddingX(theme.spacing(3)),
  ...paddingY(theme.spacing(1.25)),
  lineHeight: "normal",
}));
