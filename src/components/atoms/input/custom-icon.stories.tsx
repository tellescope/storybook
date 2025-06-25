import type { Meta, StoryObj } from '@storybook/react-vite';
import { Input } from './input';
import InputAdornment from '@mui/material/InputAdornment';
import StarIcon from '@mui/icons-material/Star';
import { Stack, Typography } from '@mui/material';

const meta = {
    title: 'ATOMS/Input',
    component: Input,
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CustomIcon: Story = {
    render: () => {
        const appearance: ["standard", "filled", "outlined"] = ["standard", "filled", "outlined"];
        return (
            <Stack direction={"row"} spacing={4} flexWrap="wrap">
                <Stack spacing={2}>
                    <Typography variant="h6">Custom icon start</Typography>
                    {
                        appearance.map((appearance) => (
                            <Input
                                key={appearance}
                                appearance={appearance}
                                size="medium"
                                disabled={false}
                                label="Label"
                                error={false}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <StarIcon />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        ))
                    }
                    <Input
                        appearance={"distinct"}
                        size="medium"
                        disabled={false}
                        label="Label"
                        error={false}
                        startAdornment={
                            <InputAdornment position="start">
                                <StarIcon />
                            </InputAdornment>
                        }
                    />
                </Stack>
                <Stack spacing={2}>
                    <Typography variant="h6">Custom icon end</Typography>
                    {
                        appearance.map((appearance) => (
                            <Input
                                key={appearance}
                                appearance={appearance}
                                size="medium"
                                disabled={false}
                                label="Label"
                                error={false}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <StarIcon />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        ))
                    }
                    <Input
                        appearance={"distinct"}
                        size="medium"
                        disabled={false}
                        label="Label"
                        error={false}
                        endAdornment={
                            <InputAdornment position="end">
                                <StarIcon />
                            </InputAdornment>
                        }
                    />
                </Stack>
            </Stack>
        )
    },
};
