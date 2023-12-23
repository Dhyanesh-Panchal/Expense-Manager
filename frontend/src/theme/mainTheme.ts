// src/theme.tsx or src/App.tsx (if you've defined your theme directly in here)

import { createTheme } from '@mui/material/styles';

// const theme = createTheme({
//     palette: {
//         mode: 'light', // Light mode
//         primary: {
//             main: '#90EE90', // Light blue
//         },
//         secondary: {
//             main: '#ADD8E6', // Light green
//         },
//         // Add any additional colors you may need for error, warning, info, success states
//     },
//     // You can also define typography, spacing, breakpoints, etc.
// });


const theme = createTheme({
    palette: {
        mode: 'light',
        background: {
            default: '#f0f5f4', // A very light green or off-white
        },
        primary: {
            main: '#4caf50', // A mid-tone green
        },
        secondary: {
            main: '#087f23', // A darker shade of green
        },
        text: {
            primary: '#263238', // A dark grey that ensures readability
            secondary: '#4f5b62', // A lighter grey for secondary text
        },
    },
    // other theme settings
});


export default theme;