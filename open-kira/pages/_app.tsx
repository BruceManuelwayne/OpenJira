import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material'
import { lightTheme } from '../themes'
import { UIProvider } from '../context/ui';
import { EntriesProvider } from '../context/entries';
import { darkTheme } from '../themes/dark-theme';

function MyApp({ Component, pageProps }: AppProps) {

  return(
    <EntriesProvider>
       <UIProvider>
          <ThemeProvider theme={darkTheme}>
            <CssBaseline/>
            <Component {...pageProps} />
          </ThemeProvider>
        </UIProvider>
    </EntriesProvider>
   
  
  ) 
}

export default MyApp
