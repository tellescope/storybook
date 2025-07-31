import React, { useEffect, useRef, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import type { IMessage } from "../types";

import { MessageBubble } from "../MessageItem/MessageBubble/MessageBubble";
import { styles } from "../MessageInput/styles/maps";
import { DateSeparator } from "../MessageItem/DateSeparator";
import { EmojiPicker } from "../../EmojiPicker/EmojiPicker";

export interface ChatProps {
  content: IMessage[];
  enableTeamChat: boolean;
}

export const Messages = ({ content, enableTeamChat }: ChatProps) => {
  const messagesRef = useRef<HTMLDivElement>(null);
  const [activeEmojiPicker, setActiveEmojiPicker] = useState<string | null>(null);
  const [emojiPickerPosition, setEmojiPickerPosition] = useState<{ x: number; y: number; messageType: string } | null>(null);
  const emojiPickerRef = useRef<HTMLDivElement>(null);
  let lastDate: Date | null = null;

  const handleEmojiSelect = (emoji: any) => {
    console.log("Selected emoji:", emoji);
    setActiveEmojiPicker(null);
    setEmojiPickerPosition(null);
  };

  const handleAddReactionClick = (messageId: string, buttonElement: HTMLElement, messageType: string) => {
    if (activeEmojiPicker === messageId) {
      setActiveEmojiPicker(null);
      setEmojiPickerPosition(null);
    } else {
      setActiveEmojiPicker(messageId);
      
      // Calculate position for the emoji picker
      const rect = buttonElement.getBoundingClientRect();
      const containerRect = messagesRef.current?.getBoundingClientRect();
      
      if (containerRect) {
        const x = messageType === "INCOMING" ? rect.right - 350 : rect.left; // Adjust width as needed
        const y = rect.bottom + 10;
        
        setEmojiPickerPosition({ x, y, messageType });
      }
    }
  };

  // Handle click outside to close emoji picker
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (emojiPickerRef.current && !emojiPickerRef.current.contains(event.target as Node)) {
        setActiveEmojiPicker(null);
        setEmojiPickerPosition(null);
      }
    };

    if (activeEmojiPicker) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [activeEmojiPicker]);

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
    <>
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
            const messageId = `message-${index}`;

            return (
              <React.Fragment key={index}>
                {showDateSeparator && message.createdAt && <DateSeparator date={message.createdAt} />}
                <MessageBubble 
                  message={message} 
                  messageId={messageId}
                  isEmojiPickerActive={activeEmojiPicker === messageId}
                  onAddReactionClick={handleAddReactionClick}
                />
              </React.Fragment>
            );
          })
        ) : (
          <Stack 
            sx={{
              ...styles.emptyContainer,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              minHeight: "200px"
            }}
          >
            <Box sx={styles.emptyMessageBox}>
              <Typography variant="body2" fontWeight={600} color="text.secondary">
                You must specify a subject to send a chat
              </Typography>
            </Box>
          </Stack> 
        )}
      </Box>
      
      {/* Single EmojiPicker rendered at MessageList level */}
      {activeEmojiPicker && emojiPickerPosition && (
        <Box
          ref={emojiPickerRef}
          sx={{
            position: 'fixed',
            left: emojiPickerPosition.x,
            top: emojiPickerPosition.y,
            zIndex: 1000,
          }}
        >
          <EmojiPicker onEmojiSelect={handleEmojiSelect} />
        </Box>
      )}
    </>
  );
};
