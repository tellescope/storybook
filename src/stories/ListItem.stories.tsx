import { List, ListItemText, ListItemIcon, Box } from "@mui/material";
import StarIcon from '@mui/icons-material/Star';
import { ListItem } from "../Atoms/feedback/ListItem/ListItem";

export default {
  title: "Components/ListItem",
  component: ListItem,
  argTypes: {
    dense: {
      control: 'boolean',
      description: 'Dense mode',
      defaultValue: false,
    },
  },
  args: {
    dense: false,
  },
  tags: ["autodocs"],
};

// Default
export const Default = (args: { dense: boolean }) => (
  <List dense={args.dense}>
    <ListItem>
      <ListItemText primary="List item" />
    </ListItem>
  </List>
);
Default.storyName = "Default";

// Dense (handled by control)

// Left slot
export const LeftSlot = (args: { dense: boolean }) => (
  <List dense={args.dense}>
    <ListItem>
      <ListItemIcon>
        <StarIcon />
      </ListItemIcon>
      <ListItemText primary="List item" />
    </ListItem>
  </List>
);
LeftSlot.storyName = "Left Slot";

// Right slot
export const RightSlot = (args: { dense: boolean }) => (
  <List dense={args.dense}>
    <ListItem>
      <ListItemText primary="List item" />
      <ListItemIcon>
        <StarIcon />
      </ListItemIcon>
    </ListItem>
  </List>
);
RightSlot.storyName = "Right Slot";

// Disable gutters
export const DisableGutters = (args: { dense: boolean }) => (
  <List dense={args.dense}>
    <ListItem disableGutters>
      <ListItemText primary="List item" />
    </ListItem>
  </List>
);
DisableGutters.storyName = "Disable Gutters";

// Selectable side bar
export const SelectableSideBar = (args: { dense: boolean }) => (
  <Box
    sx={{
      background: '#dddddd',
      width: 924,
      height: 102,
      p: '64px 48px',
      boxSizing: 'border-box',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      position: 'relative',
    }}
  >
    <Box sx={{ fontWeight: 600, fontSize: 24, height: 56, display: 'flex', alignItems: 'center' }}>
      Selected side bar item focused
    </Box>
    <Box
      sx={{
        background: '#fff',
        position: 'absolute',
        width: 340,
        right:0,
        top: '50%',
        transform: 'translateY(-50%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: 56,
        boxSizing: 'border-box',
      }}
    >
      <List dense={args.dense} style={{ background: 'transparent', margin: 0, padding: 0, width: '100%' }}>
        <ListItem style={{ minHeight: 56 }}>
          <ListItemIcon>
            <StarIcon />
          </ListItemIcon>
          <ListItemText primary="List item" />
        </ListItem>
      </List>
    </Box>
  </Box>
);
SelectableSideBar.storyName = "Selectable Side Bar";
