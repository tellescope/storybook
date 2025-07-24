import { Box, Stack, Typography } from "@mui/material";
import TranslateIcon from "@mui/icons-material/Translate";

type TranslatedProps = {
  isTranslated: boolean;
};
export const Translated = ({ isTranslated }: TranslatedProps) => {
  if (!isTranslated) {
    return null;
  }
  return (
    <Box>
      <Stack display="flex" flexDirection="row" alignItems="center" gap={0.5} px={1.5} py={0.5} borderRadius={10} bgcolor={"#EFF0F2"}>
        <TranslateIcon sx={{ fontSize: 16 }} />
        <Typography variant="caption">Translated from Spanish</Typography>
      </Stack>
    </Box>
  );
};
