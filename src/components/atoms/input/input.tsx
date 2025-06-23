import { FormControl, TextField as MuiTextField } from '@mui/material';
import InputDistinct from '@mui/material/OutlinedInput';
import type { TextFieldProps as MuiTextFieldProps } from '@mui/material/TextField';
import type { OutlinedInputProps as MuiInputDistinctProps } from '@mui/material/OutlinedInput';
import { useState } from 'react';


type BaseProps = {
    size?: 'medium' | 'small';
    onClick?: () => void;
    disabled?: boolean;
};

type DistinctProps = BaseProps & {
    appearance: 'distinct';
    label?: string;
} & MuiInputDistinctProps;

type RegularTextFieldProps = BaseProps & {
    appearance?: 'filled' | 'outlined' | 'standard';
} & Omit<MuiTextFieldProps, 'color' | 'placeholder'>;

export type InputProps = DistinctProps | RegularTextFieldProps;

export const Input = (props: InputProps) => {
    const [value, setValue] = useState<string>(typeof props.defaultValue === 'string' ? props.defaultValue : '');

    if (props.appearance === 'distinct') {
        const { label = '', size = 'medium', ...rest } = props;

        return (
            <FormControl variant="outlined" size={size}>
                <InputDistinct
                    {...rest}
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    placeholder={label}
                    notched={false}
                    label="sqdqsd" // Ensure the label does not render a floating label
                    sx={{
                        '& .MuiOutlinedInput-notchedOutline': {
                            borderColor: 'rgba(28, 122, 224, 1)', // default
                            borderWidth: '2px !important',
                        },
                        '&:hover .MuiOutlinedInput-notchedOutline': {
                            borderColor: 'rgba(28, 122, 224, 1) ', // hovered
                        },
                        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                            borderColor: 'rgba(28, 122, 224, 1)', // focused
                        },
                        '&.Mui-error .MuiOutlinedInput-notchedOutline': {
                            boxShadow: "0px 0px 0 4px rgba(255, 218, 214, 1)"
                        }
                    }}
                />
            </FormControl>
        );
    }

    const { appearance = 'standard', InputProps, ...rest } = props;
    const hasAdornment =
        !!InputProps?.startAdornment;
    const { x, y } = getPos(appearance);
    return (
        <MuiTextField
            variant={appearance}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            InputLabelProps={{ shrink: (value as string).length > 0 }}
            size="medium"
            label="Label"
            sx={{
                ...(hasAdornment && {
                    '& .MuiInputLabel-root[data-shrink="false"]': {
                        transform: `translate(${x}px, ${y}px) scale(1)`
                    }
                }),
            }}
            InputProps={{
                ...InputProps,
            }}
            {...rest}
        />
    );
};


const getPos = (appearance: "filled" | "outlined" | "standard") => {
    let x, y = 0;
    switch (appearance) {
        case 'standard':
            x = 32;
            y = 20;
            break;
        case 'filled':
            x = 45;
            y = 24;
            break;
        case 'outlined':
            x = 45;
            y = 16;
            break;
    }
    return { x, y }
}