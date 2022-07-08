import {createTheme} from '@mui/material/styles';


const theme = createTheme({
    palette: {
        primary: {
            main: 'hsl(0, 0, 100%)'
        },

        orange: {
            main: 'hsl(26, 100%, 55%)',
        },

        white: {
            main: 'hsl(0, 0, 100%)'
        },
    }
});

export default theme;