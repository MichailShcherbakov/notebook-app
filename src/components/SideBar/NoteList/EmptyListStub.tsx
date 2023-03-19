import { Stack, Typography } from "@mui/material";

export function EmptyListStub() {
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="center"
      width="100%"
      height="100%"
    >
      <Typography component="p" variant="h5">
        No Notes
      </Typography>
    </Stack>
  );
}
