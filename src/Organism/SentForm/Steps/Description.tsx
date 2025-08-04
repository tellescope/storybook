import { Box, Fade, Typography } from "@mui/material";
import { useEffect, useState } from "react";

export const Description = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <Box
      height={"100%"}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
    >
      <Box px="24px">
        <Fade in={show} timeout={2000}>
          <Typography variant="h3" color={"primary.light"} fontWeight={500}>
            Great, we have a variety of plans to fit your needs. Lets start with
            some questions about you, after that we’ll the plan thats a perfect
            fit!
          </Typography>
        </Fade>
      </Box>
    </Box>
  );
};
