import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    background: {
      default: "#fafafa",
    },
  },
  typography: {
    fontFamily: '"Inter", "Helvetica Neue", "Arial", sans-serif',
    h3: {
      fontSize: "2.25rem",
      fontWeight: 700,
      letterSpacing: "-0.02em",
    },
    h5: {
      fontSize: "1.4rem",
      fontWeight: 700,
      letterSpacing: "-0.01em",
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.75,
    },
    body2: {
      fontSize: "0.9rem",
      lineHeight: 1.6,
    },
  },
});

export default theme;
