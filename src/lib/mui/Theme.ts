import { createTheme } from '@mui/material/styles';

// Create a theme instance.
const theme = createTheme({
    typography: {
        fontFamily: 'Alata, sans-serif',
        fontSize: 13,
    },
    palette: {
        mode: 'dark',
        primary: {
            main: '#fff',
        },
        background: {
            default: '#263238',
            paper: '#0f1416',
        },
        text: {
            primary: '#fff',
            secondary: '#fff',
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                },
            },
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    '&.Mui-focused': {
                        '& .MuiOutlinedInput-notchedOutline': {
                            borderWidth: '1px',
                        },
                    },
                },
            },
        },
        MuiCssBaseline: {
            styleOverrides: {
                html: {
                    '& ::-webkit-scrollbar': {
                        width: '5px',
                    },
                    '& ::-webkit-scrollbar-track': {
                        backgroundColor: '#0f1416',
                    },
                    '& ::-webkit-scrollbar-thumb': {
                        backgroundColor: 'red',
                    },
                    '& ::-webkit-scrollbar-thumb:hover': {},
                },
            },
        },
    },

    breakpoints: {
        values: {
            xs: 0,
            sm: 768,
            md: 993,
            lg: 1200,
            xl: 1536,
        },
    },
});

export default theme;
