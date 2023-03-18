import {
  ToggleButton,
  ToggleButtonGroup,
  ToggleButtonGroupProps,
  ToggleButtonProps,
} from "@mui/material";
import { styled } from "@mui/material/styles";

export interface UiToggleButtonProps extends ToggleButtonProps {}

export const UiToggleButton = ToggleButton;

export interface UiToggleButtonGroupProps extends ToggleButtonGroupProps {}

export const UiToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  "& .MuiToggleButtonGroup-grouped": {
    margin: theme.spacing(0.5),
    border: 0,
    "&.Mui-disabled": {
      border: 0,
    },
    "&:not(:first-of-type)": {
      borderRadius: theme.shape.borderRadius,
    },
    "&:first-of-type": {
      borderRadius: theme.shape.borderRadius,
    },
  },
}));
