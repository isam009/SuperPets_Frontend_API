import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { blueTheme } from './blueTheme';

export const AppTheme = ({children}) => { //HigerOrden Component recibiendo el children
  return (
    <ThemeProvider theme={blueTheme}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      
      {children} {/* Recibe el children como componente hijo */}
    </ThemeProvider>
  )
}
