import {
    FormControl,
    FormHelperText,
    TextField as MuiTextField,
} from '@mui/material';
import InputDistinct from '@mui/material/OutlinedInput';
import type { TextFieldProps as MuiTextFieldProps } from '@mui/material/TextField';
import type { OutlinedInputProps as MuiInputDistinctProps } from '@mui/material/OutlinedInput';
import { useState, type ChangeEvent } from 'react';

type BaseProps = {
    size?: 'medium' | 'small';
    onClick?: () => void;
    disabled?: boolean;
    defaultValue?: string;
};

type DistinctProps = BaseProps & {
    appearance: 'distinct';
    label?: string;
    value?: string;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    error?: boolean;
    helperText?: string;
} & MuiInputDistinctProps;

type RegularTextFieldProps = BaseProps & {
    appearance?: 'filled' | 'outlined' | 'standard';
    value?: string;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    error?: boolean;
    helperText?: string;
} & Omit<MuiTextFieldProps, 'color' | 'placeholder'>;

export type InputProps = DistinctProps | RegularTextFieldProps;

export const Input = (props: InputProps) => {
    const isControlled = props.value !== undefined && props.onChange !== undefined;
    const [internalValue, setInternalValue] = useState(props.defaultValue ?? '');
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (isControlled) {
            props.onChange?.(e);
        } else {
            setInternalValue(e.target.value);
        }
    };
    const currentValue = isControlled ? props.value! : internalValue;

    if (props.appearance === 'distinct') {
        const {
            label = 'Label',
            size = 'medium',
            error,
            helperText,
            endAdornment,
            startAdornment,
            ...rest
        } = props;

        return (
            <FormControl variant="outlined" size={size} error={error}>
                <InputDistinct
                    {...rest}
                    value={currentValue}
                    onChange={handleChange}
                    placeholder={label}
                    notched={false}
                    endAdornment={endAdornment}
                    startAdornment={startAdornment}
                    sx={(theme) => {
                        const isSmall = size === 'small';
                        const isMedium = size === 'medium';

                        return {
                            '& .MuiOutlinedInput-notchedOutline': {
                                borderColor: isSmall ? 'rgba(28, 122, 224, 1)' : '',
                                borderWidth: '1px !important',
                                backgroundColor: isSmall ? 'rgba(87, 73, 63, 0.04)' : '',
                            },
                            '&:hover .MuiOutlinedInput-notchedOutline': {
                                borderColor: isSmall ? 'rgba(28, 122, 224, 1)' : 'rgba(121, 142, 208, 1)',
                            },
                            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                borderColor: isSmall ? 'rgba(28, 122, 224, 1)' : '',
                                boxShadow: isMedium ? '0px 0px 0 4px rgb(238, 237, 244)' : '',
                            },
                            '&.Mui-error .MuiOutlinedInput-notchedOutline': {
                                borderColor: theme.palette.error.main,
                                boxShadow: '0px 0px 0 4px rgba(255, 218, 214, 1)',
                                backgroundColor: isSmall ? 'transparent' : '',
                            },
                            '& .MuiOutlinedInput-input::placeholder': {
                                color: isSmall ? 'rgba(0, 0, 0, 1)' : 'rgba(0, 0, 0, 0.38)',
                            },
                            '&.Mui-disabled .MuiOutlinedInput-notchedOutline': {
                                borderColor: 'rgba(0, 0, 0, 0.23)',
                                boxShadow: 'none',
                                color: isSmall ? 'rgba(0, 0, 0, 0.38)' : '',
                                backgroundColor: isSmall ? 'transparent' : '',
                            },
                            '&.Mui-disabled .MuiInputBase-input': {
                                '-webkit-text-fill-color': 'rgba(0, 0, 0, 0.6)',
                            },
                        };
                    }}
                />
                {helperText && <FormHelperText>{helperText}</FormHelperText>}
            </FormControl>
        );
    }

    const {
        appearance = 'standard',
        InputProps,
        size,
        error,
        helperText,
        label = 'Label',
        ...rest
    } = props;
    const hasAdornment = !!InputProps?.startAdornment;
    const { x, y } = getPos(appearance);

    return (
        <FormControl variant={appearance} size={size} error={error}>
            <MuiTextField
                variant={appearance}
                value={currentValue}
                onChange={handleChange}
                InputLabelProps={{ shrink: currentValue.length > 0 }}
                size={size}
                label={label}
                helperText={helperText}
                error={error}
                sx={{
                    ...(hasAdornment && {
                        '& .MuiInputLabel-root[data-shrink="false"]': {
                            transform: `translate(${x}px, ${y}px) scale(1)`,
                        },
                    }),
                    '& .Mui-error.MuiInputLabel-root[data-shrink="false"]': {
                        color: currentValue.length > 0 ? undefined : 'rgba(0, 0, 0, 0.6) !important',
                    },
                    '& .Mui-focused.MuiInputLabel-outlined.MuiInputLabel-root[data-shrink="false"]': {
                        color: currentValue.length > 0 ? undefined : 'rgba(0, 0, 0, 0.87)',
                    },
                    '& .Mui-disabled .MuiOutlinedInput-notchedOutline': {
                        borderColor: appearance === 'outlined' ? 'rgba(0, 0, 0, 0.23) !important' : undefined,
                    },
                }}
                InputProps={{
                    ...InputProps,
                }}
                {...rest}
                type="text"
            />
        </FormControl>
    );
};

const getPos = (appearance: 'filled' | 'outlined' | 'standard') => {
    let x = 0,
        y = 0;
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
    return { x, y };
};
