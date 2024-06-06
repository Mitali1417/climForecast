import { createTheme } from "@mui/material/styles";
import { deepOrange, grey, lightGreen, red } from "@mui/material/colors";

const baseTheme = createTheme();

const customTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      light: "#0f1f52",
      main: "#0c1942",
      dark: "#081029",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ccff90",
      main: "#b2ff59",
      dark: "#64dd17",
      contrastText: "#fff",
    },
    error: {
      light: red[300],
      main: red[500],
      dark: red[700],
      contrastText: "#fff",
    },
    warning: {
      light: deepOrange[300],
      main: deepOrange[500],
      dark: deepOrange[700],
      contrastText: "#000",
    },
    info: {
      light: grey[300],
      main: grey[500],
      dark: grey[700],
      contrastText: "#000",
    },
    success: {
      light: lightGreen[300],
      main: lightGreen[500],
      dark: lightGreen[700],
      contrastText: "#fff",
    },
    background: {
      default: "#091331",
      paper: "#0f1f52",
      customLight: "#f5f5f5",
      customDark: "#1a1a1a",
      customGradient: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    },
    text: {
      primary: "#ffffff",
      secondary: grey[500],
      success: "#b2ff59",
    },
  },
  typography: {
    fontFamily: '"Railway", sans-serif',
    fontSize: 14,
    h1: {
      fontFamily: '"Quicksand", sans-serif',
      fontSize: "2.5rem",
      [baseTheme.breakpoints.up("sm")]: {
        fontSize: "4rem",
      },
      [baseTheme.breakpoints.up("md")]: {
        fontSize: "6rem",
      },
      fontWeight: 700,
      color: "#fff",
    },

    h2: {
      fontFamily: '"Quicksand",sans-serif',
      fontSize: "2rem",
      [baseTheme.breakpoints.up("sm")]: {
        fontSize: "3rem",
      },
      [baseTheme.breakpoints.up("md")]: {
        fontSize: "4.5rem",
      },
      fontWeight: 500,
      color: "#fff",
    },
    h3: {
      fontFamily: '"Quicksand",sans-serif',
      fontSize: "1.20rem",
      [baseTheme.breakpoints.up("md")]: {
        fontSize: "1.5rem",
      },
      fontWeight: 500,
      color: "#b2ff59",
    },
    body1: {
      fontFamily: '"Inter",sans-serif',
      fontSize: "0.85rem",
      [baseTheme.breakpoints.up("md")]: {
        fontSize: "1.25rem",
      },
      fontWeight: 400,
      color: grey[600],
    },
    body2: {
      fontFamily: '"Quicksand",sans-serif',
      fontSize: "1.25rem",
      fontWeight: 300,
      color: "#ffffff",
    },
    body3: {
      fontFamily: '"Quicksand",sans-serif',
      fontSize: "0.9rem",
      [baseTheme.breakpoints.up("sm")]: {
        fontSize: "1rem",
      },
      [baseTheme.breakpoints.up("md")]: {
        fontSize: "1.15rem",
      },
      fontWeight: 300,
      color: "#ffffff9c",
    },
    button: {
      textTransform: "none",
      fontWeight: 600,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "40px",
          padding: "8px 16px",
          background: "transparent",
          color: "#fff",
          border: "1.5px solid #64DD17",
          fontWeight: "400",
          fontFamily: '"Quicksand", sans-serif',
          fontSize: "0.75rem",
          [baseTheme.breakpoints.up("sm")]: {
            fontSize: "1rem",
          },
          "&:hover": {
            background: "#64DD173c",
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          padding: "14px 20px",
          borderRadius: 8,
          border: "1.75px solid transparent",
          background: "#070f27",
          "&:hover": {
            background: "linear-gradient(65deg, #070f27 30%, #b2ff591d 100%)",
            borderRadius: 8,
            border: "1.75px solid #b2ff59bf",
            boxShadow: "0 2px 10px #6ADF1E8c",
          },
          backdropFilter: "blur(10px)",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
          "&:hover": {
            background: "linear-gradient(45deg, #FF8E53 30%, #FE6B8B 90%)",
          },
        },
      },
    },
  },
});

export default customTheme;
