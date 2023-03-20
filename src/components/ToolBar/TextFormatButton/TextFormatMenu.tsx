import { Menu, MenuItem, MenuProps, Stack } from "@mui/material";
import Divider from "@mui/material/Divider";
import { TEXT_FORMATS } from "./formats";
import { TextFormatEnum } from "./type";

export type TextFormat = {
  id: string;
  label: string;
  icon?: React.ReactNode;
  format: (text: string) => string;
  pinned: boolean;
  group: string;
};

export interface TextFormatMenuProps extends MenuProps {
  currentFormat: TextFormatEnum;
  onTextFormatSelect?: (format: TextFormat) => void;
}

export function TextFormatMenu({
  currentFormat,
  onTextFormatSelect,
  ...props
}: TextFormatMenuProps) {
  let lastFormatGroup: string | null = null;

  const pinnedFormats = TEXT_FORMATS.filter(f => f.pinned).map(format => {
    return (
      <MenuItem
        key={format.id}
        onClick={() =>
          format.id !== currentFormat && onTextFormatSelect?.(format)
        }
        selected={format.id === currentFormat}
        sx={theme => ({
          "&.Mui-selected": {
            backgroundColor: theme.palette.primary.main,
          },

          "&.Mui-selected:hover": {
            backgroundColor: theme.palette.primary.main,
          },
        })}
      >
        {format.icon}
      </MenuItem>
    );
  });

  const unpinnedFormats = TEXT_FORMATS.filter(f => !f.pinned).reduce<
    React.ReactElement[]
  >((all, format) => {
    if (lastFormatGroup && lastFormatGroup !== format.group) {
      all.push(
        <Divider
          key={`divider-${lastFormatGroup}`}
          sx={{
            marginY: 1,
          }}
        />,
      );
    }

    all.push(
      <MenuItem
        key={format.id}
        onClick={() =>
          format.id !== currentFormat && onTextFormatSelect?.(format)
        }
        selected={format.id === currentFormat}
        sx={theme => ({
          "&.Mui-selected": {
            backgroundColor: theme.palette.primary.main,
          },

          "&.Mui-selected:hover": {
            backgroundColor: theme.palette.primary.main,
          },
        })}
      >
        {format.label}
      </MenuItem>,
    );

    lastFormatGroup = format.group;

    return all;
  }, []);

  return (
    <Menu
      {...props}
      elevation={2}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
    >
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        {pinnedFormats}
      </Stack>
      <Divider
        sx={{
          marginY: 1,
        }}
      />
      {unpinnedFormats}
    </Menu>
  );
}
