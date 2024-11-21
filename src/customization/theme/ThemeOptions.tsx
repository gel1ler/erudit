import { ThemeOptions } from '@mui/material/styles'
import { colors, headerProps } from '../customization'
import { Montserrat } from 'next/font/google'

export const montserrat = Montserrat({
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal'],
  subsets: ['cyrillic', 'latin'],
  display: 'swap'
})


export const themeOptions: ThemeOptions = {
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  palette: {
    primary: {
      main: colors.primary,
    },
    secondary: {
      main: '#303030',
      light: '#a3b18a',
    },
    text: {
      primary: '#303030',
      secondary: '#fff'
    },
  },
  typography: {
    fontFamily: montserrat.style.fontFamily,
    fontWeightRegular: 500
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          height: '112px',
          boxShadow: headerProps.withShadow ? '0px 1px 10px rgba(0,0,0,.3)' : 'none',
        }
      }
    }
  }
}
