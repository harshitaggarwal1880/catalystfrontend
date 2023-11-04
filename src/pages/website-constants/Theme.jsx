import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
  CssBaseline,
  createGlobalStyle,
} from "@mui/material";

var theme = createTheme({
  typography: {
    fontFamily: [
      "-apple-system",
      "Avenir",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
  palette: {
    background: {
      default: "#000000",
    },
    primary: {
      light: '#ffffff',
      main: '#ffffff',
      dark: '#ffffff',
      contrastText: '#ffffff',
    },
    secondary: {
      light: '#03add5',
      main: '#03add5',
      dark: '#03add5',
      contrastText: '#03add5',
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
