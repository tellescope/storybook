import { Box, Typography } from "@mui/material";

interface TextProps {
  children: React.ReactNode;
  reactions?: {
    icon: string;
    count: number;
  }[];
}

const data = [
  {
    icon: "😭",
    count: 1,
  },
  {
    icon: "😭",
    count: 2,
  },
  {
    icon: "😭",
    count: 3,
  },
];

export const MessageText = ({ children, reactions = data }: TextProps) => {
  return (
    <Box>
      <Box
        sx={{
          borderBottomLeftRadius: "8px",
          borderBottomRightRadius: "20px",
          borderTopRightRadius: "20px",
          borderTopLeftRadius: "20px",
        }}
        px={2}
        py={1.2}
        bgcolor={"#EFF0F2"}
      >
        <Typography variant="body1" sx={{ color: "#1D1B20", fontSize: "16px" }}>
          {children}
        </Typography>
      </Box>
      {reactions && reactions.length > 0 && (
        <Box
          mt="3px"
          width={"fit-content"}
          px={1}
          py={"2px"}
          borderRadius={"100px"}
          bgcolor={"#EFF0F2"}
          display={"flex"}
          alignItems={"center"}
          gap={0.4}
        >
          <Box display={"flex"} alignItems={"center"} gap={1}>
            {reactions.map((reaction) => (
              <Box
                key={reaction.icon}
                display={"flex"}
                alignItems={"center"}
                gap={0.4}
              >
                <Box>{reaction.icon}</Box>
                <Typography variant="caption" color={"black"}>
                  {reaction.count}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      )}
    </Box>
  );
};
