import { Box, Button, IconButton, Typography } from "@mui/material";

import {
  InfoOutlined,
  CallOutlined,
  VideocamOutlined,
  CloseOutlined,
} from "@mui/icons-material";
import type { IMessage, Reaction } from "../../Molecules/Message/types";

const incomingMessage: IMessage = {
  type: "INCOMING",
  text: "Healthy dumpling recipes!",
};

const outgoingMessage: IMessage = {
  type: "OUTGOING",
  text: "I'm looking for some healthy dumpling recipes, can you share some?",
};

const teamChatMessage: IMessage = {
  type: "TEAM_CHAT",
  text: "I'm looking for some healthy dumpling recipes, can you share some?",
};

const reactions: Reaction[] = [
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

// const Header = () => {
//   return (
//     <Box
//       display={"flex"}
//       bgcolor={"#E2E8F0"}
//       justifyContent={"space-between"}
//       alignItems={"center"}
//       p={2}
//     >
//       <Box display={"flex"} gap={2} alignItems={"center"}>
//         <Typography variant="h5">Patient Name</Typography>
//         <InfoOutlined />

//         <Typography variant="caption" color={"#1C7AE0"}>
//           Show all threads
//         </Typography>
//       </Box>
//       <Box display={"flex"} gap={2} alignItems={"center"}>
//         <IconButton>
//           <CallOutlined />
//         </IconButton>
//         <IconButton>
//           <VideocamOutlined />
//         </IconButton>
//         <IconButton>
//           <CloseOutlined />
//         </IconButton>
//       </Box>
//     </Box>
//   );
// };

export const ItemViewer = () => {
  return (
    <Box
      width={800}
      boxShadow={"0px 0px 10px 0px rgba(0, 0, 0, 0.1)"}
      borderRadius={2}
      display={"flex"}
      flexDirection={"column"}
      gap={4}
      height={600}
    >
      {/* <Header /> */}
      {/* <MessageItem message={incomingMessage} />
      <MessageItem reactions={reactions} message={outgoingMessage} />
      <MessageItem reactions={reactions} message={teamChatMessage} />


      <Box p={3}>
        <MessageInput />
      </Box> */}
    </Box>
  );
};
