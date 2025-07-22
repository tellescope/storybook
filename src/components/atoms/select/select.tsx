import { type FC } from 'react';
import {
    FormControl,
    InputLabel,
    MenuItem,
    Select as MuiSelect,
    Chip,
    ListItemText, Stack,
    type Theme
} from '@mui/material';
import type { SelectChangeEvent } from '@mui/material/Select';
import CheckIcon from '@mui/icons-material/Check';
import CheckBox from '../checkbox/checkbox';
import { FormHelperText } from '@mui/material';
import type { SelectProps as MuiSelectProps } from '@mui/material/Select';
import { useWheel } from '../../../custom';


type VariantType = 'standard' | 'filled' | 'outlined' | 'patientForm' | 'table';
type OptionStyle = 'default' | 'checkmark' | 'checkbox';

interface SelectProps extends Omit<MuiSelectProps<string | string[]>, 'onChange' | 'value'> {
    label?: string;
    value: string | string[];
    onChange: (event: SelectChangeEvent<string | string[]>) => void;
    options: string[];
    multiple?: boolean;
    appearance?: VariantType;
    disabled?: boolean;
    error?: boolean;
    helperText?: string;
    optionStyle?: OptionStyle;
    size?: 'small' | 'medium';
}

const Select: FC<SelectProps> = ({
    label,
    value,
    onChange,
    options,
    multiple = false,
    appearance = 'standard',
    disabled = false,
    error = false,
    helperText,
    optionStyle = 'default',
    size,
    ...rest
}) => {
    const isCustomVariant = appearance === 'patientForm' || appearance === 'table';

    const scrollElementRef = useWheel<HTMLDivElement>();


    const renderValue = (selected: string | string[]) => {
        if (multiple && Array.isArray(selected)) {
            return (
                <Stack
                    component="div"
                    ref={scrollElementRef}
                    sx={{
                        flexDirection: "row",
                        gap: 1,
                        overflowX: 'auto',
                        overflowY: 'hidden',
                        maxWidth: '100%',
                        touchAction: 'pan-y',
                        paddingRight: appearance === 'table' ? "72px" : undefined,
                        "& > *": {
                            flexShrink: 0, // Prevent chips from shrinking and shifting
                        },
                        // Hide scrollbar for all major browsers
                        "&::-webkit-scrollbar": {
                            display: "none"
                        },
                        "-ms-overflow-style": "none", // IE and Edge
                        "scrollbarWidth": "none", // Firefox
                    }}
                >
                    {selected.map((val: string) => (
                        <Chip
                            disabled={disabled}
                            key={val}
                            label={val}
                            size="small"
                            clickable
                            onMouseDown={(e) => e.stopPropagation()}
                            onDelete={(e) => {
                                e.stopPropagation();
                                const filtered = selected.filter((item) => item !== val);
                                onChange({
                                    target: {
                                        value: filtered,
                                        name: label
                                    }
                                } as SelectChangeEvent<string | string[]>);
                            }}
                        />
                    ))}
                </Stack>
            );
        }
        return selected;
    };

    const renderMenuItem = (option: string) => {
        if (!multiple) return <MenuItem
            value={option}
            disableRipple
            sx={{
                "&.Mui-selected, &.Mui-selected:hover": {
                    backgroundColor: '#DDE1F9',
                }
            }}
        >{option}</MenuItem>;

        if (optionStyle === 'checkmark') {
            return (
                <MenuItem key={option} value={option} disableRipple sx={{
                    justifyContent: 'space-between',
                    "&.Mui-selected, &.Mui-selected:hover": {
                        backgroundColor: '#DDE1F9',
                    }
                }}>
                    {option}
                    {value.includes(option) && <CheckIcon />}
                </MenuItem>
            );
        }

        if (optionStyle === 'checkbox') {
            return (
                <MenuItem key={option} value={option} disableRipple
                    sx={{
                        "&.Mui-selected, &.Mui-selected:hover": {
                            backgroundColor: '#DDE1F9',
                        }
                    }}
                >
                    <CheckBox checked={(value as string[]).includes(option)} />
                    <ListItemText primary={option} />
                </MenuItem>
            );
        }

        return <MenuItem
            key={option}
            value={option}
            disableRipple
            sx={{
                "&.Mui-selected, &.Mui-selected:hover": {
                    backgroundColor: '#DDE1F9',
                }
            }}
        >
            {option}
        </MenuItem>;
    };

    const getSx = (theme: Theme) => {
        if (appearance === 'patientForm') {
            return {
                '& .MuiInputLabel-outlined, & .MuiOutlinedInput-notchedOutline > legend': {
                    display: 'none',
                },
                "& .MuiOutlinedInput-notchedOutline": {
                    top: 0,
                    // borderColor: '#0000003B',
                },
                '&:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#798ED0 !important',
                },
                '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderWidth: "2px",
                    borderColor: '#798ED0 !important',
                    boxShadow: '0px 0px 0 4px rgb(238, 237, 244) !important',
                },
                // "&:focus .MuiOutlinedInput-notchedOutline": {
                //     borderColor: '#0000003B !important',
                // },
                "& .Mui-disabled .MuiOutlinedInput-notchedOutline": {
                    borderColor: '#0000003B !important',
                },
                '& .Mui-error .MuiOutlinedInput-notchedOutline': {
                    borderColor: `${theme.palette.error.main} !important`,
                    boxShadow: '0px 0px 0 4px rgba(255, 218, 214, 1) !important',
                    borderWidth: "1px !important",
                },
            };
        }
        if (appearance === 'table') {
            return {
                minWidth: 220,
                maxWidth: "100%",
                '.MuiOutlinedInput-root': {
                    height: "auto",
                    padding: '24px',
                },
                '& .MuiInputLabel-root': {
                    display: 'none',
                },
                "& .MuiSvgIcon-root.MuiSelect-icon.MuiSelect-iconStandard": {
                    // display: 'none',
                    backgroundColor: '#fff',
                    paddingRight: "24px",
                    paddingLeft: "24px",
                    top: size === "medium" ? "4px" : "1px",
                    width: "auto",
                    zIndex: 999
                },
                '&:hover': {
                    "& .MuiSvgIcon-root.MuiSelect-icon.MuiSelect-iconStandard": {
                        display: "block",
                        paddingLeft: "24px",
                    }
                },
                ".MuiSelect-select.MuiSelect-standard.MuiInputBase-input.MuiInput-input:focus": {
                    background: "transparent !important",
                },
                '& .Mui-focused ': {
                    "& .MuiSvgIcon-root.MuiSelect-icon.MuiSelect-iconStandard": {
                        display: "block",
                        paddingLeft: "24px",
                    }
                },
                ".MuiSelect-select.MuiSelect-standard.MuiSelect-multiple.MuiInputBase-input": {
                    paddingRight: "0 !important"
                },
                '& .MuiOutlinedInput-notchedOutline': {
                    display: 'none',
                },
                ".MuiInputBase-root.MuiInput-root.MuiInput-underline::before, .MuiInputBase-root.MuiInput-root.MuiInput-underline::after": {
                    borderColor: "transparent"
                },
                ".MuiInputBase-root.MuiInput-root.MuiInput-underline.Mui-error::before, .MuiInputBase-root.MuiInput-root.MuiInput-underline.Mui-error::after": {
                    borderColor: `${theme.palette.error.main}`,
                    borderWidth: "2px !important"
                },
                '& .MuiSelect-select.MuiSelect-standard.MuiSelect-multiple.Mui-error.MuiInputBase-input': {
                    padding: "0 0 2px 0 !important"
                },
            };
        }
    };

    return (
        <FormControl
            fullWidth
            variant={appearance === "patientForm" ? "outlined" : appearance === "table" ? "standard" : appearance}
            sx={(theme) => ({ ...getSx(theme) })}
            error={error}
            disabled={disabled}
            size={size}
        >
            <InputLabel variant={isCustomVariant ? "outlined" : appearance}>{label}</InputLabel>
            <MuiSelect
                label={label}
                multiple={multiple}
                value={value}
                onChange={onChange}
                // input={multiple ? <Input label={label} /> : undefined}
                renderValue={renderValue}
                error={error}
                disabled={disabled}
                MenuProps={isCustomVariant ? {
                    PaperProps: {
                        sx: {
                            mt: 1,
                            overflowY: 'auto',
                        },
                    },
                } : undefined}
                {...rest}
            >
                {options.map(renderMenuItem)}
            </MuiSelect>
            {helperText && (
                <FormHelperText error={error}>
                    {helperText}
                </FormHelperText>
            )}
        </FormControl>
    );
};

export default Select;