
import React, { useState, useRef } from 'react';
import {
  MenuItem as MuiMenuItem,
  ListItemIcon,
  ListItemText,
  Menu as MuiMenu,
  type MenuItemProps,
} from '@mui/material';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

type Props = Omit<MenuItemProps, 'children'> & {
  icon?: React.ReactNode;
  text: React.ReactNode;
  children: React.ReactNode;
};

export const SubMenuItem: React.FC<Props> = ({
  icon,
  text,
  children,
  ...props
}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const menuItemRef = useRef<HTMLLIElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLLIElement>) => {
    event.stopPropagation();
    if (anchorEl) {
      setAnchorEl(null);
    } else {
      setAnchorEl(event.currentTarget);
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <>
      <MuiMenuItem
        {...props}
        ref={menuItemRef}
        onClick={handleClick}
        sx={{
          p: 1,
          mx: 1,
          cursor: "pointer",
          "&:hover": {
            backgroundColor: "rgba(0, 0, 0, 0.04)",
          },
        }}
      >
        {icon && <ListItemIcon>{icon}</ListItemIcon>}
        <ListItemText>{text}</ListItemText>
        <ArrowRightIcon sx={{ marginLeft: 4 }} fontSize="small" />
      </MuiMenuItem>
      <MuiMenu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        sx={{
          ml: 1.2,
          mt: -1
        }}
      >
        {children}
      </MuiMenu>
    </>
  );
}; 