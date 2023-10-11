import { ThemeOptions } from '@mui/material/styles'
import { roboto } from './ThemeRegistry'
import { colors } from '../customization'

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
}
