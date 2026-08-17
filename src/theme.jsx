import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#be422b" },
    secondary: { main: "#8b5e13" },
    background: {
      default: "#f3efe9",
      paper: "#faf8f4",
    },
    text: {
      primary: "#1a1a18",
      secondary: "#5c564a",
    },
    divider: "rgba(26, 26, 24, 0.14)",
  },
  typography: {
    fontFamily:
      '"SF Pro Display", "Inter", -apple-system, BlinkMacSystemFont, "Helvetica Neue", "Arial", sans-serif',
    h3: { fontSize: "2.25rem", fontWeight: 700, letterSpacing: "-0.025em" },
    h4: { fontSize: "1.65rem", fontWeight: 700, letterSpacing: "-0.02em" },
    h5: { fontSize: "1.3rem", fontWeight: 650, letterSpacing: "-0.01em" },
    h6: { fontSize: "1.1rem", fontWeight: 600 },
    body1: { fontSize: "0.975rem", lineHeight: 1.75 },
    body2: { fontSize: "0.875rem", lineHeight: 1.65 },
  },
  shape: { borderRadius: 16 },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        "*, *::before, *::after": { boxSizing: "border-box" },
        "::selection": {
          background: "rgba(190, 66, 43, 0.16)",
          color: "#1a1a18",
        },
      },
    },
  },
});

export default theme;
