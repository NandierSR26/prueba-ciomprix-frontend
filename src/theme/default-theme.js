import { createTheme } from "@mui/material"

export const defaultTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#ffffff'
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
    }
})