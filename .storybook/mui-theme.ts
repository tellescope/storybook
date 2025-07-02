// theme.ts
import { createTheme } from '@mui/material/styles';


declare module '@mui/material/IconButton' {
    interface IconButtonPropsSizeOverrides {
        table: true;
    }
    
}

declare module '@mui/material/Radio' {
    interface RadioPropsSizeOverrides {
        large: true;
    }
    
}

declare module '@mui/material/Select' {
    interface SelectPropsVariantOverrides {
        table: true;
    }
}


export const theme = createTheme({
    palette: {
        primary: {
            main: "rgba(74, 92, 146, 1)",
        },
        secondary: {
            main: "rgba(88, 94, 114, 1)",
        },
        info: {
            main: "rgba(2, 136, 209, 1)",
        },
        // error: {
        //     main: "#BA1A1A"
        // },
        error: {
            main: "#BA1A1A"
        },
        action: {
            disabled: "rgba(0, 0, 0, 0.38)",
        }
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 999,
                    fontWeight: 600,
                },
                sizeLarge: {
                    padding: '8px 24px',
                },
                sizeMedium: {
                    padding: '8px 16px',
                },
                sizeSmall: {
                    padding: '4px 12px',
                },
            },
            variants: [
                /* Box Shadow */
                {
                    props: { variant: 'contained' },
                    style: {
                        boxShadow: '0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14),  0 1px 5px 0 rgba(0, 0, 0, 0.12)', // enabled
                        '&:hover': {
                            boxShadow: '0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14) ,  0 1px 10px 0 rgba(0, 0, 0, 0.12)', // hovered
                        },
                        '&.Mui-focusVisible': {
                            boxShadow: '0 3px 5px -1px rgba(0,0,0,0.2), 0 6px 10px 0 rgba(0,0,0,0.14) ,  0 1px 18px 0 rgba(0, 0, 0, 0.12)', // focused
                        },
                        '&:active': {
                            boxShadow: '0 3px 5px -1px rgba(0,0,0,0.2), 0 6px 10px 0 rgba(0,0,0,0.14) ,  0 1px 18px 0 rgba(0, 0, 0, 0.12)', // pressed
                        },
                    },
                },
                /* Primary Appearance */
                {
                    props: { variant: 'contained', color: 'primary' },
                    style: {
                        '&:hover': {
                            backgroundColor: 'rgba(19, 45, 104, 1)', // hovered color
                        },
                        '&:active': {
                            backgroundColor: 'rgba(74, 92, 146, 1)', // pressed
                        },
                    },
                },
                {
                    props: { variant: "outlined", color: "primary" },
                    style: {
                        borderColor: "rgba(74, 92, 146, 0.5)",
                    },
                },
                /* Secondary Appearance */
                {
                    props: { variant: 'contained', color: "secondary" },
                    style: {
                        '&:hover': {
                            backgroundColor: 'rgba(44, 48, 62, 1)', // hovered color
                        },
                        '&:active': {
                            backgroundColor: 'rgba(88, 94, 114, 1)', // pressed
                        },
                    },
                },
                {
                    props: { variant: "outlined", color: "secondary" },
                    style: {
                        borderColor: "rgba(88, 94, 114, 0.5)",
                    },
                },
                /* Info Appearance */
                {
                    props: { variant: 'contained', color: "info" },
                    style: {
                        '&:hover': {
                            backgroundColor: 'rgba(1, 87, 155, 1)', // hovered color
                        },
                        '&:active': {
                            backgroundColor: 'rgba(2, 136, 209, 1)', // pressed
                        },
                    },
                },
                {
                    props: { variant: "outlined", color: "info" },

                    style: {
                        borderColor: "rgba(2, 136, 209, 0.5)",
                        '& .MuiTouchRipple-root': {
                            color: 'rgba(74, 92, 146, 0.3)'
                        }
                    },
                },
                {
                    props: { variant: "text", color: "info" },
                    style: {
                        '& .MuiTouchRipple-root': {
                            color: 'rgba(74, 92, 146, 0.3)'
                        }
                    },
                },
            ],
        },
        MuiIconButton: {
            variants: [
                /* Primary Appearance */
                {
                    props: { color: 'primary' },
                    style: {
                        "&:hover": {
                            backgroundColor : "rgba(74, 92, 146, 0.04)", // focused color
                        },
                        "&:focus": {
                            backgroundColor : "rgba(74, 92, 146, 0.3)", // focused color
                        },
                        '&:active': {
                            backgroundColor: 'rgba(74, 92, 146, 0.3)', // pressed
                        },
                    },
                },
                /* Secondary Appearance */
                {
                    props: { color: "secondary" },
                    style: {
                        "&:hover": {
                            backgroundColor : "rgba(88, 94, 114, 0.04)", // focused color
                        },
                        "&:focus": {
                            backgroundColor : "rgba(88, 94, 114, 0.3)", // focused color
                        },
                        '&:active': {
                            backgroundColor: 'rgba(88, 94, 114, 0.3)', // pressed
                        },
                    },
                },
                /* Info Appearance */
                {
                    props: { color: "info" },
                    style: {
                        "&:hover": {
                            backgroundColor : "rgba(2, 136, 209, 0.04)", // focused color
                        },
                        "&:focus": {
                            backgroundColor : "rgba(2, 136, 209, 0.3)", // focused color
                        },
                        '&:active': {
                            backgroundColor: 'rgba(2, 136, 209, 0.3)', // pressed
                        },
                    },
                },
                /* Default Appearance */
                {
                    props: { color: "default" },
                    style: {
                        "&:hover": {
                            backgroundColor : "rgba(0, 0, 0, 0.04)", // focused color
                        },
                        "&:focus": {
                            backgroundColor : "rgba(0, 0, 0, 0.12)", // focused color
                        },
                        
                        '&:active': {
                            backgroundColor: 'rgba(0, 0, 0, 0.12)', // pressed
                        },
                    },
                },
                /* Default Appearance & Size Table */
                {
                    props: { size: "table"},
                    style: {
                        borderRadius: "4px !important",
                        width: "24px",
                        height: "24px",
                        "&>svg": {
                            width: "20px",
                            height: "19px",
                        },
                    },
                },
            ],
        },
        MuiCheckbox: {
            variants: [
                {
                    props: { color: 'primary' },
                    style: {
                        "&:hover": {
                            backgroundColor : "rgba(74, 92, 146, 0.04)", // focused color
                        },
                        "&:active": {
                            backgroundColor : "rgba(0, 0, 0, 0.12)", // focused color when Checked : false
                        },
                        "&.MuiCheckbox-root.Mui-checked:active": {
                            backgroundColor : "rgba(74, 92, 146, 0.3)", // focused color
                        }
                    },
                },
                {
                    props: { color: 'secondary' },
                    style: {
                        "&:hover": {
                            backgroundColor : "rgba(88, 94, 114, 0.04)", // focused color
                        },
                        "&:active": {
                            backgroundColor : "rgba(0, 0, 0, 0.12)", // focused color when Checked : false
                        },
                        "&.MuiCheckbox-root.Mui-checked:active": {
                            backgroundColor : "rgba(88, 94, 114, 0.3)", // focused color
                        }
                    },
                },
                {
                    props: { color: 'info' },
                    style: {
                        "&:hover": {
                            backgroundColor : "rgba(2, 136, 209, 0.04)", // focused color
                        },
                        "&:active": {
                            backgroundColor : "rgba(0, 0, 0, 0.12)", // focused color when Checked : false
                        },
                        "&.MuiCheckbox-root.Mui-checked:active": {
                            backgroundColor : "rgba(2, 136, 209, 0.3)", // focused color
                        }
                    },
                }
            ]
        },
        MuiRadio: {
            variants: [
                {
                    props: { size: 'large' },
                    style: {
                        padding: "11.33px",
                        '& .MuiSvgIcon-root': {
                            width: '23.33px',
                            height: '23.33px',
                        },
                    },
                },
                {
                    props: { size: 'medium' },
                    style: {
                        padding: "11px",
                        '& .MuiSvgIcon-root': {
                            width: '20px',
                            height: '20px',
                        },
                    },
                },
                {
                    props: { size: 'small' },
                    style: {
                        padding: "10.67px",
                        '& .MuiSvgIcon-root': {
                            width: '16.67px',
                            height: '16.67px',
                        },
                    },
                },
                {
                    props: { color: 'default' },
                    style: {
                        "&:hover": {
                            backgroundColor : "rgba(0, 0, 0, 0.04)", // focused color
                        },
                        "&:active": {
                            backgroundColor: "rgba(0, 0, 0, 0.12)", // focus visible color
                        },
                        
                    },
                },
                {
                    props: { color: 'primary' },
                    style: {
                        "&:hover": {
                            backgroundColor : "rgba(74, 92, 146, 0.04)", // focused color
                        },
                        "&:active": {
                            backgroundColor : "rgba(0, 0, 0, 0.12)", // focused color when Checked : false
                        },
                        "&.MuiRadio-root.Mui-checked:active": {
                            backgroundColor : "rgba(74, 92, 146, 0.3)", // focused color
                        }
                    },
                },
                {
                    props: { color: 'secondary' },
                    style: {
                        "&:hover": {
                            backgroundColor : "rgba(88, 94, 114, 0.04)", // focused color
                        },
                        "&:active": {
                            backgroundColor : "rgba(0, 0, 0, 0.12)", // focused color when Checked : false
                        },
                        "&.MuiRadio-root.Mui-checked:active": {
                            backgroundColor : "rgba(88, 94, 114, 0.3)", // focused color
                        }
                    },
                },
                {
                    props: { color: 'info' },
                    style: {
                        "&:hover": {
                            backgroundColor : "rgba(2, 136, 209, 0.04)", // focused color
                        },
                        "&:active": {
                            backgroundColor : "rgba(0, 0, 0, 0.12)", // focused color when Checked : false
                        },
                        "&.MuiRadio-root.Mui-checked:active": {
                            backgroundColor : "rgba(2, 136, 209, 0.3)", // focused color
                        }
                    },
                }
            ]
        },
        MuiAutocomplete: {
            styleOverrides: {
                option: {
                    '&[aria-selected="true"], &[aria-selected="true"].Mui-focused': {
                        backgroundColor: '#DDE1F9 !important',
                    },
                },
            },
        },
    },
});
