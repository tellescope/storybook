import { Box, Typography } from "@mui/material";

export const Description = () => {
  return (
    <Box height={"100%"} display={"flex"} flexDirection={"column"} justifyContent={"center"}>
      <Box px="24px">
        <Typography variant="h3" color={"primary.light"} fontWeight={500}>
          Great, we have a variety of plans to fit your needs. Lets start with
          some questions about you, after that we’ll the plan thats a perfect
          fit!
        </Typography>
      </Box>
    </Box>
  );
};
