import { List, ListSubheader, ListItemText, ListItemIcon, Box } from "@mui/material";
import StarIcon from '@mui/icons-material/Star';
import { ListItem } from "../Atoms/feedback/ListItem/ListItem";
import SendIcon from '@mui/icons-material/Send';
import DraftsIcon from '@mui/icons-material/Drafts';
import InboxIcon from '@mui/icons-material/Inbox';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Switch from '@mui/material/Switch';
import WifiIcon from '@mui/icons-material/Wifi';
import BluetoothIcon from '@mui/icons-material/Bluetooth';


export default {
  title: "Components/List",
  component: ListItem,
  tags: ['autodocs'],
};

// ListSubheader: Default only
export const ListSubheaderDefault = () => (
  <ListSubheader>Subheader</ListSubheader>
);
ListSubheaderDefault.storyName = "ListSubheader - Default";

// ListItem: Default
export const ListItemDefault = () => (
  <List>
    <ListItem>
      <ListItemText primary="List item" />
    </ListItem>
  </List>
);
ListItemDefault.storyName = "ListItem - Default";

// ListItem: Dense
export const ListItemDense = () => (
  <List dense>
    <ListItem>
      <ListItemText primary="List item" />
    </ListItem>
  </List>
);
ListItemDense.storyName = "ListItem - Dense";

// Left slot: Density Normal
export const LeftSlotNormal = () => (
  <List style={{ background: '#fff' }}>
    <ListItem>
      <ListItemIcon>
        <StarIcon />
      </ListItemIcon>
      <ListItemText primary="List item" />
    </ListItem>
  </List>
);
LeftSlotNormal.storyName = "Left Slot - Density: Normal";

// Left slot: Density Dense
export const LeftSlotDense = () => (
  <List dense style={{ background: '#f6f4f8' }}>
    <ListItem>
      <ListItemIcon>
        <StarIcon />
      </ListItemIcon>
      <ListItemText primary="List item" />
    </ListItem>
  </List>
);
LeftSlotDense.storyName = "Left Slot - Density: Dense";

// Right slot: Density Normal
export const RightSlotNormal = () => (
  <List style={{ background: '#fff' }}>
    <ListItem>
      <ListItemText primary="List item" />
      <ListItemIcon>
        <StarIcon />
      </ListItemIcon>
    </ListItem>
  </List>
);
RightSlotNormal.storyName = "Right Slot - Density: Normal";

// Right slot: Density Dense
export const RightSlotDense = () => (
  <List dense style={{ background: '#f6f4f8' }}>
    <ListItem>
      <ListItemText primary="List item" />
      <ListItemIcon>
        <StarIcon />
      </ListItemIcon>
    </ListItem>
  </List>
);
RightSlotDense.storyName = "Right Slot - Density: Dense";

// Disabled Gutters: Density Normal
export const DisabledGuttersNormal = () => (
  <List style={{ background: '#fff' }}>
    <ListItem disableGutters>
      <ListItemText primary="List item" />
    </ListItem>
  </List>
);
DisabledGuttersNormal.storyName = "Disabled Gutters - Density: Normal";

// Disabled Gutters: Density Dense
export const DisabledGuttersDense = () => (
  <List dense style={{ background: '#f6f4f8' }}>
    <ListItem disableGutters>
      <ListItemText primary="List item" />
    </ListItem>
  </List>
);
DisabledGuttersDense.storyName = "Disabled Gutters - Density: Dense";

// Selected Side Bar Item: Density Normal
export const SelectedSideBarItemNormal = () => (
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
      <List style={{ background: 'transparent', margin: 0, padding: 0, width: '100%' }}>
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
SelectedSideBarItemNormal.storyName = "Selected Side Bar Item - Density: Normal";

// Nested List: Density Normal
export const NestedListNormal = () => (
  <List
    subheader={<ListSubheader>Nested list</ListSubheader>}
  >
    <ListItem>
      <ListItemText primary="Nested List Items" />
    </ListItem>
    <List component="div" disablePadding>
      <ListItem>
        <ListItemIcon><SendIcon /></ListItemIcon>
        <ListItemText primary="Sent mail" />
      </ListItem>
      <ListItem>
        <ListItemIcon><DraftsIcon /></ListItemIcon>
        <ListItemText primary="Drafts" />
      </ListItem>
      <ListItem>
        <ListItemIcon><InboxIcon /></ListItemIcon>
        <ListItemText primary="Inbox" />
        <ListItemIcon><ExpandMoreIcon /></ListItemIcon>
      </ListItem>
      <ListItem>
        <ListItemIcon><StarIcon /></ListItemIcon>
        <ListItemText primary="List item" />
      </ListItem>
    </List>
  </List>
);
NestedListNormal.storyName = "Nested List - Density: Normal";

// Nested List: Density Dense
export const NestedListDense = () => (
  <List
    dense
    subheader={<ListSubheader>Nested list</ListSubheader>}
  >
    <ListItem>
      <ListItemText primary="Nested List Items" />
    </ListItem>
    <List component="div" disablePadding>
      <ListItem>
        <ListItemIcon><SendIcon /></ListItemIcon>
        <ListItemText primary="Sent mail" />
      </ListItem>
      <ListItem>
        <ListItemIcon><DraftsIcon /></ListItemIcon>
        <ListItemText primary="Drafts" />
      </ListItem>
      <ListItem>
        <ListItemIcon><InboxIcon /></ListItemIcon>
        <ListItemText primary="Inbox" />
        <ListItemIcon><ExpandMoreIcon /></ListItemIcon>
      </ListItem>
      <ListItem>
        <ListItemIcon><StarIcon /></ListItemIcon>
        <ListItemText primary="List item" />
      </ListItem>
    </List>
  </List>
);
NestedListDense.storyName = "Nested List - Density: Dense";

// Switch List: Density Normal
export const SwitchListNormal = () => (
  <List
    subheader={<ListSubheader>Switch</ListSubheader>}
  >
    <ListItem>
      <ListItemIcon><WifiIcon /></ListItemIcon>
      <ListItemText primary="Wi-Fi" />
      <Switch defaultChecked />
    </ListItem>
    <ListItem>
      <ListItemIcon><BluetoothIcon /></ListItemIcon>
      <ListItemText primary="Bluetooth" />
      <Switch />
    </ListItem>
  </List>
);
SwitchListNormal.storyName = "Switch List - Density: Normal";

// Switch List: Density Dense
export const SwitchListDense = () => (
  <List
    dense
    subheader={<ListSubheader>Switch</ListSubheader>}
  >
    <ListItem>
      <ListItemIcon><WifiIcon /></ListItemIcon>
      <ListItemText primary="Wi-Fi" />
      <Switch defaultChecked />
    </ListItem>
    <ListItem>
      <ListItemIcon><BluetoothIcon /></ListItemIcon>
      <ListItemText primary="Bluetooth" />
      <Switch />
    </ListItem>
  </List>
);
SwitchListDense.storyName = "Switch List - Density: Dense";
