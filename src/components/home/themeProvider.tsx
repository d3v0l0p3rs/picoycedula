/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable react/prop-types */
import React from 'react'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'

export const ThemeContext = React.createContext((): void => {})

const ThemeProvider: React.FC = props => {
  const theme = createMuiTheme({})
  const set = (): void => {}

  return (
    <ThemeContext.Provider value={set}>
      <MuiThemeProvider theme={theme}>{props.children}</MuiThemeProvider>
    </ThemeContext.Provider>
  )
}

export default ThemeProvider

export const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#3949ab',
    },
    secondary: {
      main: '#40c4ff',
    },
    text: {
      secondary: '#e0e0e0',
    },
  },
})

export const lightTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#3949ab',
    },
    secondary: {
      main: '#3949ab',
    },
    text: {
      secondary: '#e0e0e0',
    },
  },
})
