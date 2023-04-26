import AppRouter from "./router/AppRouter";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./styles.css";
import { AppTheme } from "./theme";

export const SuperPetsApp = () => {
  return (
    <AppTheme>
      <AppRouter />
    </AppTheme>
  );
};
