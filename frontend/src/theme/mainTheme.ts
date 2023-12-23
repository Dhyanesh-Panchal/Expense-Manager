// src/theme.tsx or src/App.tsx (if you've defined your theme directly in here)

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        mode: 'light', // Light mode
        primary: {
            main: '#ADD8E6', // Light blue
        },
        secondary: {
            main: '#90EE90', // Light green
        },
        // Add any additional colors you may need for error, warning, info, success states
    },
    // You can also define typography, spacing, breakpoints, etc.
});

export default theme;