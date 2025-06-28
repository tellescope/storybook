import {
    FormControl,
    FormHelperText,
    InputAdornment,
    TextField as MuiTextField,
} from '@mui/material';
import InputDistinct from '@mui/material/OutlinedInput';
import type { TextFieldProps as MuiTextFieldProps } from '@mui/material/TextField';
import type { OutlinedInputProps as MuiInputDistinctProps } from '@mui/material/OutlinedInput';
import { useState, type ChangeEvent, type ReactNode } from 'react';

type BaseProps = {
    size?: 'medium' | 'small';
    onClick?: () => void;
    disabled?: boolean;
    defaultValue?: string;
    startIcon?: ReactNode;
    endIcon?: ReactNode;
};

type DistinctProps = BaseProps & {
    appearance: 'distinct';
    label?: string;
    value?: string;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    error?: boolean;
    helperText?: string;

} & Omit<MuiInputDistinctProps, 'startAdornment' | 'endAdornment'>;

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
            startIcon,
            endIcon,
            ...rest
        } = props;

        const hasStartAdornment = !!startIcon;
        const hasEndAdornment = !!endIcon;
        return (
            <FormControl variant="outlined" size={size} error={error}>
                <InputDistinct
                    {...rest}
                    value={currentValue}
                    onChange={handleChange}
                    placeholder={label}
                    notched={false}
                    startAdornment={
                        startIcon ?
                            <InputAdornment position="start">
                                {startIcon}
                            </InputAdornment> : null
                    }
                    endAdornment={
                        endIcon ?
                            <InputAdornment position="end">
                                {endIcon}
                            </InputAdornment> : null
                    }

                    sx={(theme) => {
                        const isSmall = size === 'small';
                        const isMedium = size === 'medium';

                        return {
                            '& .MuiOutlinedInput-notchedOutline': {
                                borderColor: isSmall ? 'rgba(28, 122, 224, 1)' : '',
                                // borderWidth: '1px !important',
                                borderWidth: isSmall ? '2px' : "1px",
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
                                borderWidth: "1px",
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
                            '& .MuiInputBase-input': {
                                padding: isSmall ? hasEndAdornment ? "4.5px 0 4.5px 14px" : hasStartAdornment ? "4.5px 14px 4.5px 0" : "4.5px 14px" : undefined // Adjust padding for small size when there are adornments and no adornments
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
        size,
        error,
        helperText,
        startIcon,
        endIcon,
        label = 'Label',
        ...rest
    } = props;
    const hasStartAdornment = !!startIcon;
    const pos = getPos(appearance);

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
                InputProps={{
                    startAdornment: startIcon ? (
                        <InputAdornment position="start">
                            {startIcon}
                        </InputAdornment>
                    ) : null,
                    endAdornment: endIcon ? (
                        <InputAdornment position="end">
                            {endIcon}
                        </InputAdornment>
                    ) : null,
                }}
                sx={() => {
                    const isMedium = size === 'medium';
                    return ({
                        ...(hasStartAdornment && {
                            '& .MuiInputLabel-root[data-shrink="false"]': {
                                transform: isMedium ? `translate(${pos.medium.x}px, ${pos.medium.y}px) scale(1) !important` : `translate(${pos.small.x}px, ${pos.small.y}px) scale(1) !important`,  // adjusted for filled appearance when there is a start adornment
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
                        '& .Mui-focused.MuiInputLabel-root.MuiInputLabel-filled[data-shrink="false"]': {
                            transform: `translate(12px, ${isMedium ? "24px" : "20px"}) scale(1)`, // adjusted for filled appearance
                        },
                    })
                }}
                {...rest}
                type="text"
            />
        </FormControl>
    );
};

const getPos = (appearance: 'filled' | 'outlined' | 'standard') => {
    const pos = {
        medium: {
            x: 0,
            y: 0,
        },
        small: {
            x: 0,
            y: 0,
        }
    }
    switch (appearance) {
        case 'standard':
            pos.medium.x = 32;
            pos.medium.y = 20;
            pos.small.x = 32;
            pos.small.y = 20;
            break;
        case 'filled':
            pos.medium.x = 45;
            pos.medium.y = 24;
            pos.small.x = 45;
            pos.small.y = 20;
            break;
        case 'outlined':
            pos.medium.x = 45;
            pos.medium.y = 16;
            pos.small.x = 45;
            pos.small.y = 9;
            break;
    }
    return pos;
};
