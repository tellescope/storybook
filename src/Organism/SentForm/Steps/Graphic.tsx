import { Box, Typography } from "@mui/material";

export default function Graphic() {
  return (
    <Box>
      <Box py="54px">
        {/* <img src="https://dummyimage.com/wuxga" alt="graphic" /> */}
        <Box width={"100%"} bgcolor={"gray"} height={640} borderRadius={"28px"}></Box>
      </Box>
      <Typography variant="caption" color="text.secondary">
        a longer label and will displayed at a smaller size in order to conserve valuable space. This can be used to display some disclaimer about terms or
        conditions that might be a bit too long for a normal label area
      </Typography>
    </Box>
  );
}
