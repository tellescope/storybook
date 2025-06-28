import { type FC } from 'react';
import {
    FormControl,
    InputLabel,
    MenuItem,
    Select as MuiSelect,
    Chip,
    Checkbox,
    ListItemText,
    OutlinedInput,
    Stack,
} from '@mui/material';
import type { SelectChangeEvent } from '@mui/material/Select';


type VariantType = 'standard' | 'filled' | 'outlined' | 'patientForm' | 'table';
type OptionStyle = 'default' | 'checkmark' | 'checkbox';

interface SelectProps {
    label: string;
    value: string | string[];
    onChange: (event: SelectChangeEvent<string | string[]>) => void;
    options: string[];
    multiple?: boolean;
    variant?: VariantType;
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
    variant = 'standard',
    disabled = false,
    error = false,
    helperText,
    optionStyle = 'default',
    size
}) => {
    const isCustomVariant = variant === 'patientForm' || variant === 'table';

    const renderValue = (selected: string | string[]) => {
        if (multiple && Array.isArray(selected)) {
            return (
                <Stack style={{ flexDirection: "row", flexWrap: 'wrap', gap: 4 }}>
                    {selected.map((val: string) => (
                        <Chip key={val} label={val} />
                    ))}
                </Stack>
            );
        }
        return selected;
    };

    const renderMenuItem = (option: string) => {
        if (!multiple) return <MenuItem value={option}>{option}</MenuItem>;

        if (optionStyle === 'checkmark') {
            return (
                <MenuItem key={option} value={option}>
                    {value.includes(option) && '✓'} {option}
                </MenuItem>
            );
        }

        if (optionStyle === 'checkbox') {
            return (
                <MenuItem key={option} value={option}>
                    <Checkbox checked={(value as string[]).includes(option)} />
                    <ListItemText primary={option} />
                </MenuItem>
            );
        }

        return <MenuItem key={option} value={option}>{option}</MenuItem>;
    };

    const getSx = () => {
        if (variant === 'patientForm') {
            return {
                minWidth: 240,
                '.MuiOutlinedInput-root': {
                    // padding: '6px',
                },
            };
        }
        if (variant === 'table') {
            return {
                minWidth: 200,
                '.MuiOutlinedInput-root': {
                    height: "auto",
                    padding: '0',
                },
                '.MuiChip-root': {
                    height: 20,
                    fontSize: 12,
                },
                '& .MuiInputLabel-root': {
                    display: 'none',
                },
                '& .MuiOutlinedInput-notchedOutline': {
                    display: 'none',
                }
            };
        }
        // return {};
    };

    return (
        <FormControl
            fullWidth
            variant={variant === "patientForm" ? 'outlined' : variant === "table" ? "standard" : variant}
            sx={{ m: 1, ...getSx() }}
            error={error}
            disabled={disabled}
            size={size}
        >
            <InputLabel variant={isCustomVariant ? 'outlined' : variant}>{label}</InputLabel>
            <MuiSelect
                label={label}
                multiple={multiple}
                value={value}
                onChange={onChange}
                input={multiple ? <OutlinedInput label={label} /> : undefined}
                renderValue={renderValue}
            >
                {options.map(renderMenuItem)}
            </MuiSelect>
            {helperText && (
                <p style={{ color: 'red', fontSize: '0.75rem', marginLeft: '14px' }}>
                    {helperText}
                </p>
            )}
        </FormControl>
    );
};

export default Select;