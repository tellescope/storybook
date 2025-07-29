import React, { useEffect, useRef } from "react";
import { Box, Stack, Typography } from "@mui/material";
import type { IMessage } from "../types";

import { MessageBubble } from "../components/MessageBubble/MessageBubble";
import { styles } from "../MessageInput/styles/maps";
import { DateSeparator } from "../components/DateSeparator";

export interface ChatProps {
  content: IMessage[];
  enableTeamChat: boolean;
}

export const Messages = ({ content, enableTeamChat }: ChatProps) => {
  const messagesRef = useRef<HTMLDivElement>(null);
  let lastDate: Date | null = null;

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    if (messagesRef.current && content && content.length > 0) {
      const scrollToBottom = () => {
        if (messagesRef.current) {
          messagesRef.current.scrollTo({
            top: messagesRef.current.scrollHeight,
            behavior: 'smooth'
          });
        }
      };
      
      // Use setTimeout to ensure DOM is updated
      setTimeout(scrollToBottom, 100);
    }
  }, [content]);

  // Initial scroll to bottom when component mounts
  useEffect(() => {
    if (messagesRef.current) {
      const scrollToBottom = () => {
        if (messagesRef.current) {
          messagesRef.current.scrollTo({
            top: messagesRef.current.scrollHeight,
            behavior: 'auto'
          });
        }
      };
      
      // Initial scroll to bottom
      setTimeout(scrollToBottom, 50);
    }
  }, []);

  return (
    <Box 
      ref={messagesRef}
      sx={{
        ...styles.messagesContainer(content?.length, enableTeamChat),
        flex: 1, // Take remaining space
        overflowY: "auto", // Enable scrolling
        display: "flex",
        flexDirection: "column", // Normal column direction
        gap: 1,
        maxHeight: "100vh", // Set a max height to enable scrolling
        // Hide scrollbar for cleaner look
        "&::-webkit-scrollbar": {
          display: "none"
        },
        "-ms-overflow-style": "none", // IE and Edge
        "scrollbarWidth": "none", // Firefox
      }}
    >
      {/* Spacer to push content to bottom */}
      <Box sx={{ flexGrow: 1, minHeight: 0 }} />
      
      {content?.length > 0 ? (
        content.map((message, index) => {
          const showDateSeparator = message.createdAt && (!lastDate || lastDate.toDateString() !== message.createdAt.toDateString());
          lastDate = message.createdAt ? new Date(message.createdAt) : lastDate;

          return (
            <React.Fragment key={index}>
              {showDateSeparator && message.createdAt && <DateSeparator date={message.createdAt} />}
              <MessageBubble message={message} />
            </React.Fragment>
          );
        })
      ) : (
        <Stack sx={styles.emptyContainer}>
          <Box sx={styles.emptyMessageBox}>
            <Typography variant="body2" fontWeight={600} color="text.secondary">
              You must specify a subject to send a chat
            </Typography>
          </Box>
        </Stack> 
      )}
    </Box>
  );
};
