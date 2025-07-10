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
import { useState } from "react";

enum ToolType {
  CHAT = "chat",
  TEXT = "text",
  MAIL = "mail",
  GROUP = "group",
  ASSIGNMENT = "assignment",
  NOTE = "note",
  LINK = "link",
  ATTACH = "attach",
  MESSAGE = "message",
  TICKET = "ticket",
  LIGHTBULB = "lightbulb",
  EXPAND = "expand",
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
          backgroundColor: isSelected ? backgroundColor : "#F3F4F6",
        },
      }}
    >
      {children}
    </IconButton>
  );
};

export const Toolbar = () => {
  const [selectedTool, setSelectedTool] = useState<ToolType | null>(null);
  
  const handleToolClick = (tool: ToolType) => {
    setSelectedTool(selectedTool === tool ? null : tool);
  };

  const toolColors: Partial<Record<ToolType, string>> = {
    [ToolType.CHAT]: "#1C7AE0",        // Blue
    [ToolType.TEXT]: "#8B5CF2",        // Green
    [ToolType.MAIL]: "#6466F1",        // Orange
    [ToolType.GROUP]: "#15B8A6",       // Purple
    // Only first 4 tools have background colors
  };

  const tools = [
    { type: ToolType.CHAT, icon: <ChatBubbleOutline /> },
    { type: ToolType.TEXT, icon: <TextsmsOutlined /> },
    { type: ToolType.MAIL, icon: <LocalPostOfficeOutlined /> },
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
    <Box sx={{ display: "flex", alignItems: "center" }}>
      {tools.slice(0, 6).map(({ type, icon }) => {
        const backgroundColor = toolColors[type];
        
        if (backgroundColor) {
          return (
            <IconWrapper
              key={type}
              isSelected={selectedTool === type}
              backgroundColor={backgroundColor}
              onClick={() => handleToolClick(type)}
            >
              {icon}
            </IconWrapper>
          );
        } else {
          return (
            <IconButton
              key={type}
              onClick={() => handleToolClick(type)}
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
          onClick={() => handleToolClick(type)}
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
