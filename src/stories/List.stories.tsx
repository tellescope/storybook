import { List, ListSubheader, ListItemText, ListItemIcon } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import DraftsIcon from '@mui/icons-material/Drafts';
import InboxIcon from '@mui/icons-material/Inbox';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import WifiIcon from '@mui/icons-material/Wifi';
import BluetoothIcon from '@mui/icons-material/Bluetooth';
import Switch from '@mui/material/Switch';
import StarIcon from '@mui/icons-material/Star';
import { ListItem } from "../Atoms/feedback/ListItem/ListItem";

export default {
  title: "Components/List",
  component: List,
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

export const NestedList = (args: { dense: boolean }) => (
  <List
    dense={args.dense}
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
NestedList.storyName = "Nested List";

export const SwitchList = (args: { dense: boolean }) => (
  <List
    dense={args.dense}
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
SwitchList.storyName = "Switch List"; 