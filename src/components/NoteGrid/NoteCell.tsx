import React from "react";
import { Button, Grid, GridProps, Stack, Typography } from "@mui/material";
import { NoteId } from "~/store/notes/type";

const NO_ADDITION = "No addition";

export interface NoteCellProps extends Omit<GridProps, "onClick"> {
  id: NoteId;
  title: string;
  createdAt: string;
  addition?: string | null;
  onClick?: (e: React.MouseEvent, id: NoteId) => void;
}

function _NoteCell({
  id,
  title,
  createdAt,
  addition,
  onClick,
  ...props
}: NoteCellProps) {
  function clickHandler(e: React.MouseEvent) {
    onClick?.(e, id);
  }

  return (
    <Grid {...props} item xs={6} sm={4} md={3} lg={3} xl={2}>
      <Stack
        direction="column"
        sx={theme => ({
          height: 205,
          borderWidth: 1,
          borderRadius: theme.spacing(0.5),
          borderStyle: "solid",
          borderColor: theme.palette.divider,
          padding: theme.spacing(2),
        })}
      >
        <Stack direction="column" sx={{ height: "100%" }} gap={0.5}>
          <Typography
            sx={{ display: "block" }}
            component="h3"
            variant="h5"
            color="text.primary"
            noWrap
          >
            {title}
          </Typography>
          <Typography
            sx={{ display: "block" }}
            component="p"
            variant="body2"
            color="text.secondary"
            noWrap
          >
            {createdAt}
          </Typography>
          <Typography
            sx={{ display: "block" }}
            component="p"
            variant="body2"
            color="text.primary"
            noWrap
          >
            {addition ?? NO_ADDITION}
          </Typography>
        </Stack>
        <Stack
          direction="row"
          sx={{
            flexShrink: 0,
          }}
        >
          <Button size="small" onClick={clickHandler}>
            Open
          </Button>
        </Stack>
      </Stack>
    </Grid>
  );
}

export const NoteCell = React.memo(_NoteCell);
