import { type FC, type ReactNode } from 'react';
import {
    FormControl, Select as MuiSelect,
    Chip, Stack,
    type Theme,
    InputLabel,
    type FormControlProps
} from '@mui/material';
import type { SelectChangeEvent } from '@mui/material/Select';
import { FormHelperText } from '@mui/material';
import type { SelectProps as MuiSelectProps } from '@mui/material/Select';


type VariantType = 'standard' | 'filled' | 'outlined' | 'patientForm' | 'table';
type OptionStyle = 'default' | 'checkmark' | 'checkbox';

interface SelectProps extends Omit<MuiSelectProps<string | string[]>, 'onChange' | 'value' | "variant"> {
    label?: string;
    value: string | string[];
    onChange: (event: SelectChangeEvent<string | string[]>) => void;
    // options: string[];
    multiple?: boolean;
    appearance?: VariantType;
    disabled?: boolean;
    error?: boolean;
    helperText?: string;
    optionStyle?: OptionStyle;
    size?: 'small' | 'medium';
    children: ReactNode;
    hiddenLabel?: boolean;
    FormControlProps?: FormControlProps;
}

const Select: FC<SelectProps> = ({
    label,
    value,
    onChange,
    // options,
    children,
    multiple = false,
    appearance = 'standard',
    disabled = false,
    error = false,
    helperText,
    size,
    hiddenLabel = false,
    FormControlProps,
    ...rest
}) => {
    const isCustomVariant = appearance === 'patientForm' || appearance === 'table';

    const renderValue = (selected: string | string[]) => {
        if (multiple && Array.isArray(selected)) {
            return (
                <Stack
                    component="div"
                    sx={{
                        flexDirection: "row",
                        gap: 1,
                        overflowX: 'auto',
                        overflowY: 'hidden',
                        maxWidth: "calc(100% - 40px)",
                        paddingRight: appearance === 'table' ? "40px" : undefined,
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
                            sx={{
                                textTransform: "capitalize",
                            }}
                        />
                    ))}
                </Stack>
            );
        }
        return selected;
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
                "& .MuiInputBase-root.MuiInput-root": {
                    marginTop: "0px !important",
                },
                '.MuiOutlinedInput-root': {
                    height: "auto",
                    padding: '24px',
                },
                '& .MuiInputLabel-root': {
                    display: 'none',
                },
                "& .MuiSvgIcon-root.MuiSelect-icon.MuiSelect-iconStandard": {
                    display: 'none',
                    backgroundColor: '#fff',
                    paddingRight: "8px",
                    paddingLeft: "8px",
                    // top: size === "medium" ? "4px" : "1px",
                    top: "4px",
                    width: "auto",
                    zIndex: 999
                },
                '&:hover': {
                    "& .MuiSvgIcon-root.MuiSelect-icon.MuiSelect-iconStandard": {
                        display: "block",
                        paddingLeft: "8px",
                    }
                },
                ".MuiSelect-select.MuiSelect-standard.MuiInputBase-input.MuiInput-input:focus": {
                    background: "transparent !important",
                },
                '& .Mui-focused ': {
                    "& .MuiSvgIcon-root.MuiSelect-icon.MuiSelect-iconStandard": {
                        display: "block",
                        paddingLeft: "8px",
                    }
                },
                ".MuiSelect-select.MuiSelect-standard.MuiSelect-multiple.MuiInputBase-input": {
                    paddingRight: "0 !important",
                    paddingY: "4px",

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

    const { sx } = FormControlProps || {}


    return (
        <FormControl
            fullWidth
            variant={appearance === "patientForm" ? "outlined" : appearance === "table" ? "standard" : appearance}
            {...FormControlProps}
            sx={(theme) => {
                return { ...getSx(theme), ...sx };
            }}
            error={error}
            disabled={disabled}
            size={size}
            hiddenLabel={hiddenLabel}

        >
            {!hiddenLabel ? <InputLabel variant={isCustomVariant ? "outlined" : appearance}>{label}</InputLabel> : null}

            <MuiSelect
                multiple={multiple}
                value={value}
                onChange={onChange}
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
                {children}
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