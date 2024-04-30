import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "NewTimesRoman",
    title1: {
      fontSize: 28,
      fontWeight: "700",
    },
    subtitle1: {
      fontSize: 24,
      fontWeight: "700",
    },
    subtitle2: {
      fontSize: 20,
      fontWeight: "700",
    },
    body1: {
      fontSize: 16,
    },
    subtle1: {
      fontSize: 14,
    },
  },
});

export default theme;
