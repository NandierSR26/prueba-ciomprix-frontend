import { createTheme } from "@mui/material"

export const defaultTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#ffffff'
        },
        secondary: {
            main: '#eef2f6',
        },
        info: {
            main: '#ff6c9e',
            dark: '#e65584'
        },
        text: {
            primary: '#3e4b5f',
            secondary: '#8e99ac'
        }
    },
    components: {
        MuiAppBar: {
            defaultProps: {
                elevation: 0,
            },
        }
    }
})