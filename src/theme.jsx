import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#c2452d" },
    secondary: { main: "#d4a24c" },
    background: {
      default: "#f0ebe3",
      paper: "#faf6ef",
    },
    text: {
      primary: "#1a1a18",
      secondary: "#5c564a",
    },
    divider: "rgba(26, 26, 24, 0.15)",
  },
  typography: {
    fontFamily: '"Inter", "Helvetica Neue", "Arial", sans-serif',
    h3: { fontSize: "2.25rem", fontWeight: 700, letterSpacing: "-0.02em" },
    h4: { fontSize: "1.75rem", fontWeight: 700, letterSpacing: "-0.01em" },
    h5: { fontSize: "1.4rem", fontWeight: 700, letterSpacing: "-0.01em" },
    h6: { fontSize: "1.15rem", fontWeight: 600 },
    body1: { fontSize: "1rem", lineHeight: 1.75 },
    body2: { fontSize: "0.9rem", lineHeight: 1.6 },
  },
  shape: { borderRadius: 0 },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        "*, *::before, *::after": { boxSizing: "border-box" },
        "::selection": {
          background: "rgba(194, 69, 45, 0.2)",
          color: "#1a1a18",
        },
      },
    },
  },
});

export default theme;
