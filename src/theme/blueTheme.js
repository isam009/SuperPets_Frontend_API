import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

export const blueTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#039be5",
    },
    secondary: {
      main: "#ffb300",
    },
    error: {
      main: red.A400,
    },
  },
});
