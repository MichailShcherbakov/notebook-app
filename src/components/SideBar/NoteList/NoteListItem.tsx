import {
  ListItem,
  ListItemButton,
  ListItemProps,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";

export interface NoteListItemProps extends ListItemProps {
  id: string;
  title: string;
  createdAt: string;
  addition?: string;
}

function _NoteListItem({
  title,
  createdAt,
  addition,
  ...props
}: NoteListItemProps) {
  return (
    <ListItem
      {...props}
      sx={theme => ({
        width: "auto",
        overflow: "hidden",
        marginX: theme.spacing(4),
        paddingX: 0,
        paddingY: theme.spacing(1),
        borderBottom: `1px solid ${theme.palette.divider}`,

        "&:last-child": {
          borderBottom: 0,
        },
      })}
    >
      <ListItemButton
        dense
        sx={theme => ({
          width: "auto",
          overflow: "hidden",
          borderRadius: theme.spacing(0.5),
        })}
      >
        <ListItemText
          primary={
            <Typography
              sx={{ display: "block", width: "100%" }}
              component="span"
              variant="h6"
              color="text.primary"
              noWrap
            >
              {title}
            </Typography>
          }
          secondaryTypographyProps={{
            component: "span",
            variant: "body2",
            color: "text.secondary",
            noWrap: true,
          }}
          secondary={
            <>
              <Typography
                component="span"
                variant="body2"
                color="text.primary"
                sx={{ marginRight: 2 }}
              >
                {createdAt}
              </Typography>
              {addition}
            </>
          }
        />
      </ListItemButton>
    </ListItem>
  );
}

export const NoteListItem = React.memo(_NoteListItem);
