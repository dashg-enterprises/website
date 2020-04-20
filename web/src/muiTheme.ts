import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#00482b',
            light: '#367454',
            dark: '#002100',
            contrastText: '#ffffff',
        },
        secondary: {
            main: '#222222',
            light: '#494949',
            dark: '#000000',
            contrastText: '#ffffff',
        },
        grey: {
            300: '#e0e0e0',
            500: '#9e9e9e',
        },
        // Used by `getContrastText()` to maximize the contrast between
        // the background and the text.
        contrastThreshold: 3,
        // Used by the functions below to shift a color's luminance by approximately
        // two indexes within its tonal palette.
        // E.g., shift from Red 500 to Red 300 or Red 700.
        tonalOffset: 0.2,
      },
     
})

export default theme