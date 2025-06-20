import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from '../Organisms/Avatar/Avatar';
import { Badge, AvatarGroup, Box } from '@mui/material';
import FolderIcon from '@mui/icons-material/Folder';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import StarIcon from '@mui/icons-material/Star';
import React from 'react';

const sizeMap = {
  'extra small': 24,
  small: 32,
  medium: 40,
  large: 56,
} as const;

type SizeKey = keyof typeof sizeMap;

const imageUrls = [
  'https://randomuser.me/api/portraits/women/44.jpg',
  'https://randomuser.me/api/portraits/men/46.jpg',
  'https://randomuser.me/api/portraits/men/47.jpg',
];

const meta: Meta<typeof Avatar> = {
  title: 'Components/Avatar',
  component: Avatar,
  tags: ['autodocs'],
};

export default meta;

type AvatarStory = StoryObj<{ size: SizeKey; badge: boolean }>;
type AvatarGroupStoryType = StoryObj<{ size: SizeKey }>;

// Helper for badge
const withBadge = (child: React.ReactNode, badge: boolean) =>
  badge ? (
    <Badge
      overlap="circular"
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      variant="dot"
      sx={{
        '& .MuiBadge-dot': {
          backgroundColor: '#44b700',
          width: 10,
          height: 10,
          borderRadius: '50%',
          border: '2px solid white',
        },
      }}
    >
      {child}
    </Badge>
  ) : (
    child
  );

// Helper for font size based on avatar size
const getFontSize = (size: SizeKey) => size === 'extra small' ? 12 : undefined;

// TEXT VARIANT
export const Text: AvatarStory = {
  render: (args) => (
    <Box display="flex" gap={3} justifyContent="center" alignItems="center">
      {['H', 'N', 'OP'].map((text, i) =>
        withBadge(
          <Avatar sx={{ width: sizeMap[args.size], height: sizeMap[args.size], bgcolor: ['#BDBDBD', '#FF5722', '#673AB7'][i], fontSize: getFontSize(args.size) }}>
            {text}
          </Avatar>,
          args.badge
        )
      )}
    </Box>
  ),
  args: { badge: false, size: 'medium' },
  argTypes: {
    size: {
      control: 'select',
      options: ['extra small', 'small', 'medium', 'large'],
    },
    badge: {
      control: 'boolean',
    },
  },
};

// ICON VARIANT
export const Icon: AvatarStory = {
  render: (args) => (
    <Box display="flex" gap={3} justifyContent="center" alignItems="center">
      {[
        <FolderIcon key="folder" />, <PlayCircleFilledIcon key="play" />, <StarIcon key="star" />,
      ].map((icon, i) =>
        withBadge(
          <Avatar sx={{ width: sizeMap[args.size], height: sizeMap[args.size], bgcolor: ['#BDBDBD', '#FF5722', '#673AB7'][i] }}>
            {icon}
          </Avatar>,
          args.badge
        )
      )}
    </Box>
  ),
  args: { badge: false, size: 'medium' },
  argTypes: {
    size: {
      control: 'select',
      options: ['extra small', 'small', 'medium', 'large'],
    },
    badge: {
      control: 'boolean',
    },
  },
};

// IMAGE VARIANT
export const Image: AvatarStory = {
  render: (args) => (
    <Box display="flex" gap={3} justifyContent="center" alignItems="center">
      {imageUrls.map((url) =>
        withBadge(
          <Avatar src={url} sx={{ width: sizeMap[args.size], height: sizeMap[args.size] }} />,
          args.badge
        )
      )}
    </Box>
  ),
  args: { badge: false, size: 'medium' },
  argTypes: {
    size: {
      control: 'select',
      options: ['extra small', 'small', 'medium', 'large'],
    },
    badge: {
      control: 'boolean',
    },
  },
};

// PRIMARY VARIANT (letter, blue border)
export const Primary: AvatarStory = {
  render: (args) => (
    <Box display="flex" gap={3} justifyContent="center" alignItems="center">
      {['OP', 'OP', 'OP'].map((text) =>
        withBadge(
          <Avatar
            sx={{
              width: sizeMap[args.size],
              height: sizeMap[args.size],
              bgcolor: '#BDBDBD',
              color: '#1976d2',
              border: '2px solid #1976d2',
              fontSize: getFontSize(args.size),
            }}
          >
            {text}
          </Avatar>,
          args.badge
        )
      )}
    </Box>
  ),
  args: { badge: false, size: 'medium' },
  argTypes: {
    size: {
      control: 'select',
      options: ['extra small', 'small', 'medium', 'large'],
    },
    badge: {
      control: 'boolean',
    },
  },
};

// SECONDARY VARIANT (letter, purple border)
export const Secondary: AvatarStory = {
  render: (args) => (
    <Box display="flex" gap={3} justifyContent="center" alignItems="center">
      {['OP', 'OP', 'OP'].map((text) =>
        withBadge(
          <Avatar
            sx={{
              width: sizeMap[args.size],
              height: sizeMap[args.size],
              bgcolor: '#BDBDBD',
              color: '#673AB7',
              border: '2px solid #673AB7',
              fontSize: getFontSize(args.size),
            }}
          >
            {text}
          </Avatar>,
          args.badge
        )
      )}
    </Box>
  ),
  args: { badge: false, size: 'medium' },
  argTypes: {
    size: {
      control: 'select',
      options: ['extra small', 'small', 'medium', 'large'],
    },
    badge: {
      control: 'boolean',
    },
  },
};

// AVATAR GROUP
export const AvatarGroupStory: AvatarGroupStoryType = {
  render: (args) => (
    <Box display="flex" justifyContent="center" alignItems="center">
      <AvatarGroup max={4} sx={{ '& .MuiAvatar-root': { width: sizeMap[args.size], height: sizeMap[args.size] } }}>
        <Avatar src={imageUrls[0]} />
        <Avatar src={imageUrls[1]} />
        <Avatar src={imageUrls[2]} />
        <Avatar>+3</Avatar>
      </AvatarGroup>
    </Box>
  ),
  args: { size: 'medium' },
  argTypes: {
    size: {
      control: 'select',
      options: ['extra small', 'small', 'medium', 'large'],
    },
  },
  name: 'Avatar Group',
};
