import { type SxProps } from "@mui/material";

interface IChatStyles {
  container: SxProps;
  messagesContainer: (enableTeamChat: boolean, messagesLength: number) => SxProps;
  emptyContainer: SxProps;
  emptyMessageBox: SxProps;
  inputContainer: (enableTeamChat: boolean) => SxProps;
}

export const styles: IChatStyles = {
  container: {
    width: 800,
    boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.1)",
    borderRadius: 2,
    display: "flex",
    flexDirection: "column",
    height: 800,
  },
  messagesContainer: (enableTeamChat, messagesLength) => ({
    py: 2,
    overflow: "auto",
    flex: 1,
    bgcolor: enableTeamChat ? "#EFF0F2" : "",
    display: "flex",
    flexDirection: "column",
    justifyContent: messagesLength === 0 ? "center" : "flex-start",
    gap: messagesLength > 0 ? 2 : 0,
  }),
  emptyContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  emptyMessageBox: {
    bgcolor: "#EFF0F2",
    borderRadius: 20,
    px: 1.4,
    py: 0.5,
  },
  inputContainer: (enableTeamChat: boolean) => ({
    p: 2,
    alignItems: "center",
    gap: 2,
    display: enableTeamChat ? "flex" : "block",
    bgcolor: enableTeamChat ? "#F4F0FF" : "",
    transition: "all 0.3s ease-in-out",
  }),
}; 