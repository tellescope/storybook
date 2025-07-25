interface MessageInputStyleProps {
    disabled?: boolean;
    error?: boolean;
  }
  
  const getBorderColor = ({ disabled, error }: MessageInputStyleProps) => {
    if (disabled) return "1px solid rgb(172, 172, 172)";
    if (error) return "1px solid #DC2626";
    return "1px solid #E2E8F0";
  };
  
  const getFocusStyles = ({ disabled, error }: MessageInputStyleProps) => {
    if (disabled || error) {
      return {};
    }
  
    return {
      borderColor: "#1C7AE0",
      "& .send-button": {
        backgroundColor: "#1C7AE0",
        color: "white",
        "& svg": {
          color: "white",
          fill: "white",
        },
      },
    };
  };
  
  export const useMessageInputStyles = ({
    disabled,
    error,
  }: MessageInputStyleProps) => {
    const root = {
      borderRadius: 28,
      border: getBorderColor({ disabled, error }),
      display: "flex",
      alignItems: "center",
      padding: 0.8,
      justifyContent: "space-between",
      transition: "border-color 0.2s ease-in-out",
      "&:focus-within": getFocusStyles({ disabled, error }),
    };
  
    const textFieldsButton = {
      color: "black",
      ":disabled": { color: "rgb(163, 163, 163)" },
    };
  
    const inputBase = {
      flex: 1,
      marginLeft: 1,
    };
  
    const micButton = {
      color: "black",
      ":disabled": {
        color: "rgb(163, 163, 163)",
      },
      transition: "background-color 0.2s ease-in-out, color 0.2s ease-in-out",
    };
  
    const sendButton = {
      color: "black",
      ":disabled": {
        color: "rgb(163, 163, 163)",
      },
      transition: "background-color 0.2s ease-in-out, color 0.2s ease-in-out",
    };
  
    return { root, textFieldsButton, inputBase, micButton, sendButton };
  }; 