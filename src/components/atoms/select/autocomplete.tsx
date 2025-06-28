// components/atoms/AtomAutocomplete.tsx

import React from 'react';
import {
    Autocomplete,
    TextField,
    Chip,
} from '@mui/material';

interface AtomAutocompleteProps {
    label: string;
    options: string[];
    multiple?: boolean;
    disabled?: boolean;
    error?: boolean;
    helperText?: string;
    value: string | string[];
    onChange: (value: string | string[]) => void;
}

export const AtomAutocomplete: React.FC<AtomAutocompleteProps> = ({
    label,
    options,
    multiple = false,
    disabled = false,
    error = false,
    helperText,
    value,
    onChange,
}) => {
    return (
        <Autocomplete
            multiple={multiple}
            disableCloseOnSelect
            options={options}
            value={value}
            onChange={(_, newValue) => onChange(newValue)}
            renderTags={(tagValue: string[], getTagProps) =>
                tagValue.map((option: string, index: number) => (
                    <Chip label={option} {...getTagProps({ index })} />
                ))
            }
            renderInput={(params) => (
                <TextField
                    {...params}
                    label={label}
                    error={error}
                    helperText={helperText}
                    disabled={disabled}
                />
            )}
        />
    );
};
