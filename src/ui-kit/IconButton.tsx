import { IconButton, IconButtonProps } from "@mui/material";
import { styled } from "@mui/material/styles";

export interface UiIconButtonProps extends IconButtonProps {}

export const UiIconButton = styled(IconButton)(({ theme }) => ({
  borderRadius: theme.spacing(0.5),
}));
