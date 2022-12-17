import { createTheme } from "@mui/material"

export const defaultTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#ff6c9e'
        },
        secondary: {
            main: '#eef2f6',
        }
    },
    components: {
        MuiAppBar: {
            defaultProps: {
                elevation: 0,
            },
        }
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 768
        }
    }
})