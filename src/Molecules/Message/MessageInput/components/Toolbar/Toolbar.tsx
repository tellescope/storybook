import {
  ChatBubbleOutline,
  TextsmsOutlined,
  AttachFile,
  MessageOutlined,
  Link,
  LocalPostOfficeOutlined,
  GroupOutlined,
  AssignmentOutlined,
  StickyNote2Outlined,
} from "@mui/icons-material";
import { Box, Divider, IconButton } from "@mui/material";
import { AddTicket, Lightbulb, OpenInFull } from "../../../Icons";
import type { ChatInterface } from "../../../../../Organism/ItemViewer/types";

enum ToolType {
  CHAT = "CHAT",
  SMS = "SMS",
  EMAIL = "EMAIL",
  GROUP = "GROUP",
  ASSIGNMENT = "ASSIGNMENT",
  NOTE = "NOTE",
  LINK = "LINK",
  ATTACH = "ATTACH",
  MESSAGE = "MESSAGE",
  TICKET = "TICKET",
  LIGHTBULB = "LIGHTBULB",
  EXPAND = "EXPAND",
}

interface IconWrapperProps {
  children: React.ReactNode;
  isSelected: boolean;
  backgroundColor: string;
  onClick: () => void;
}

const IconWrapper = ({ children, isSelected, backgroundColor, onClick }: IconWrapperProps) => {
  return (
    <IconButton
      onClick={onClick}
      sx={{
        color: isSelected ? "white" : "black",
        backgroundColor: isSelected ? backgroundColor : "transparent",
        transition: "background-color 0.2s ease-in-out, color 0.2s ease-in-out",
        "&:hover": {
          backgroundColor
        },
      }}
    >
      {children}
    </IconButton>
  );
};

export const Toolbar = ({ chatInterface }: { chatInterface: ChatInterface }) => {


  const toolColors: Partial<Record<ToolType, string>> = {
    [ToolType.CHAT]: "#1C7AE0",        // Blue
    [ToolType.SMS]: "#8B5CF2",        // Green
    [ToolType.EMAIL]: "#6466F1",        // Orange
    [ToolType.GROUP]: "#15B8A6",       // Purple
    // Only first 4 tools have background colors
  };

  const tools = [
    { type: ToolType.CHAT, icon: <ChatBubbleOutline /> },
    { type: ToolType.SMS, icon: <TextsmsOutlined /> },
    { type: ToolType.EMAIL, icon: <LocalPostOfficeOutlined /> },
    { type: ToolType.GROUP, icon: <GroupOutlined /> },
    { type: ToolType.ASSIGNMENT, icon: <AssignmentOutlined /> },
    { type: ToolType.NOTE, icon: <StickyNote2Outlined /> },
    { type: ToolType.LINK, icon: <Link /> },
    { type: ToolType.ATTACH, icon: <AttachFile /> },
    { type: ToolType.MESSAGE, icon: <MessageOutlined /> },
    { type: ToolType.TICKET, icon: <AddTicket /> },
    { type: ToolType.LIGHTBULB, icon: <Lightbulb /> },
    { type: ToolType.EXPAND, icon: <OpenInFull /> },
  ];
  
  return (
    <Box sx={{ display: "flex", alignItems: "center", width: "100%", justifyContent: "space-between" }}>
      {tools.slice(0, 6).map(({ type, icon }) => {
        const backgroundColor = toolColors[type];
        
        if (backgroundColor) {
          return (
            <IconWrapper
              key={type}
              isSelected={chatInterface === type}
              backgroundColor={backgroundColor}
              onClick={() => {}}
            >
              {icon}
            </IconWrapper>
          );
        } else {
          return (
            <IconButton
              key={type}
              onClick={() => {}}
              sx={{
                color: "black",
                transition: "color 0.2s ease-in-out",
              }}
            >
              {icon}
            </IconButton>
          );
        }
      })}
      <Divider orientation="vertical" sx={{ height: 32, borderColor: '#E2E8F0' }} />
      {tools.slice(6).map(({ type, icon }) => (
        <IconButton
          key={type}
          onClick={() => {}}
          sx={{
            color: "black",
            transition: "color 0.2s ease-in-out",
          }}
        >
          {icon}
        </IconButton>
      ))}
    </Box>
  );
};
