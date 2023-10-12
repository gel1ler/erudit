import { ThemeOptions } from '@mui/material/styles'
import { roboto } from './ThemeRegistry'
import { colors, headerProps } from '../customization'

export const themeOptions: ThemeOptions = {
  palette: {
    primary: {
      main: colors.primary,
    },
    secondary: {
      main: colors.secondary
    },
    background: {
      default: colors.bg
    }
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
    fontSize: 14
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
