// theme.ts
import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {

    interface Palette {
        inheritWhite: Palette["primary"];
    }

    interface PaletteOptions {
        inheritWhite?: PaletteOptions["primary"];
    }
}

// Extend Button component to accept the custom color
declare module '@mui/material/Button' {
    interface ButtonPropsColorOverrides {
        inheritWhite: true;
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
        error: {
            main: "rgba(186, 26, 26, 1)",
        },
        warning: {
            main: "rgba(239, 108, 0, 1)",
        },
        info: {
            main: "rgba(2, 136, 209, 1)",
        },
        success: {
            main: "rgba(46, 125, 50, 1)",
        },
        inheritWhite: {
            main: "rgba(224, 224, 224, 1)",
            contrastText: "rgba(255, 255, 255, 1)",
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
                /* Error Appearance */
                {
                    props: { variant: 'contained', color: "error" },
                    style: {
                        '&:hover': {
                            backgroundColor: 'rgba(105, 0, 5, 1)', // hovered color
                        },
                        '&:active': {
                            backgroundColor: 'rgba(186, 26, 26, 1)', // pressed
                        },
                    },
                },
                {
                    props: { variant: "outlined", color: "error" },
                    style: {
                        borderColor: "rgba(186, 26, 26, 0.5)",
                    },
                },
                /* Warning Appearance */
                {
                    props: { variant: 'contained', color: "warning" },
                    style: {
                        '&:hover': {
                            backgroundColor: 'rgba(230, 81, 0, 1)', // hovered color
                        },
                        '&:active': {
                            backgroundColor: 'rgba(239, 108, 0, 1)', // pressed
                        },
                    },
                },
                {
                    props: { variant: "outlined", color: "warning" },
                    style: {
                        borderColor: "rgba(239, 108, 0, 0.5)",
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
                    },
                },
                /* success Appearance */
                {
                    props: { variant: 'contained', color: "success" },
                    style: {
                        '&:hover': {
                            backgroundColor: 'rgba(27, 94, 32, 1)', // hovered color
                        },
                        '&:active': {
                            backgroundColor: 'rgba(46, 125, 50, 1)', // pressed
                        },
                    },
                },
                {
                    props: { variant: "outlined", color: "success" },
                    style: {
                        borderColor: "rgba(46, 125, 50, 0.5)",
                    },
                },
                /* Inherit White Appearance */
                {
                    props: { variant: 'contained', color: "inheritWhite" },
                    style: {
                        '&:hover': {
                            backgroundColor: 'rgba(245, 245, 245, 1)', // hovered color
                        },
                        '&:active': {
                            backgroundColor: 'rgba(224, 224, 224, 1)', // pressed
                        },
                    },
                },
                {
                    props: { variant: "outlined", color: "inheritWhite" },
                    style: {
                        border: "1px solid rgba(255, 255, 255, 1)",
                        color: "rgba(255, 255, 255, 1)",
                        '&:hover': {
                            backgroundColor: 'rgba(0, 0, 0, 0.04)', // hovered color
                            borderColor: "rgba(255, 255, 255, 1)",
                        },
                        "&:focus": {
                            backgroundColor : "transparent", // focused color
                        },
                        '& .MuiTouchRipple-root': {
                            color: 'rgba(255, 255, 255, 0.3)'
                        },
                    },
                },
                {
                    props: { variant: "text", color: "inheritWhite" },
                    style: {
                        color: "rgba(255, 255, 255, 1)",
                        '&:hover': {
                            backgroundColor: 'rgba(0, 0, 0, 0.04)', // hovered color
                            borderColor: "rgba(255, 255, 255, 1)",
                        },
                        "&:focus": {
                            backgroundColor : "transparent", // focused color
                        },
                        '& .MuiTouchRipple-root': {
                            color: 'rgba(255, 255, 255, 0.3)'
                        },
                    },
                },
            ],
        },
    },
});
