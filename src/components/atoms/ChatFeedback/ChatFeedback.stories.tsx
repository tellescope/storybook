import type { Meta, StoryObj } from "@storybook/react";
import { Box, Button, IconButton, Typography } from "@mui/material";
import ThumbsUpIcon from "../../../assets/thumbs-up.svg";
import ThumbsDownIcon from "../../../assets/thumbs-down.svg";
import ReturnIcon from "../../../assets/back.svg";
import ArrowUpIcon from "../../../assets/arrow-up.svg";

const meta: Meta = {
  title: "Atoms/Chat Feedback",
};

export default meta;

export const Default: StoryObj = {
  render() {
    return (
      <Box
        component="div"
        display="flex"
        alignItems="center"
        justifyContent="flex-start"
      >
        <IconButton aria-label="like">
          <img src={ThumbsUpIcon} alt="thumbs-up" />
        </IconButton>
        <IconButton aria-label="unlike">
          <img src={ThumbsDownIcon} alt="thumbs-down" />
        </IconButton>
      </Box>
    );
  },
};

export const Return: StoryObj = {
  render() {
    return (
      <Box
        component="div"
        display="flex"
        alignItems="center"
        justifyContent="flex-start"
      >
        <IconButton aria-label="like">
          <img src={ThumbsUpIcon} alt="thumbs-up" />
        </IconButton>

        <IconButton aria-label="unlike">
          <img src={ThumbsDownIcon} alt="thumbs-down" />
        </IconButton>
        <IconButton aria-label="unlike">
          <img src={ReturnIcon} alt="return" />
        </IconButton>
      </Box>
    );
  },
};

export const Use: StoryObj = {
  render() {
    return (
      <Box
        component="div"
        display="flex"
        alignItems="center"
        justifyContent="flex-start"
      >
        <IconButton aria-label="like">
          <img src={ThumbsUpIcon} alt="thumbs-up" />
        </IconButton>
        <IconButton aria-label="unlike">
          <img src={ThumbsDownIcon} alt="thumbs-down" />
        </IconButton>
        <Button
          color="inherit"
          sx={{
            borderRadius: "8px",
            height: "36px",
            maxHeight: "36px",
            marginLeft: "8px",
            minWidth: "63px",
            maxWidth: "63px",
          }}
        >
          <Typography
            sx={{
              color: "rgba(0, 0, 0, 0.12)",
              fontSize: "0.875rem",
              fontWeight: 500,
              textTransform: "capitalize",
              paddingRight: "8px",
            }}
          >
            Use
          </Typography>
          <img src={ArrowUpIcon} alt="arrow" />
        </Button>
      </Box>
    );
  },
};
