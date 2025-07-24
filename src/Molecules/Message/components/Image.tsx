import { Box } from "@mui/material";

export const Image = ({ src }: { src: string }) => {
  return (
    <Box>
      <img
        src={src}
        style={{
          borderRadius: "10px",
        }}
        alt="message-image"
      />
    </Box>
  );
};
