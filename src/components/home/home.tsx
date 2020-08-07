import React, { useState, useEffect, MouseEvent } from 'react'
import { source, email, subjects } from 'data'
import {
  HeaderComponent,
  MainInfoComponent,
  canGoOutToday,
  canGoOutWeek,
} from 'components/index'
import { getPersonIDNumber, getVehicleIDNumber, getCity, getTheme, setAllLocalStorageData } from 'components/localStorage/localStorage'
import { GoOutState, GoOutWeekState, City } from 'components/index.types'
import { getLabel } from 'texts'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'
import CssBaseline from '@material-ui/core/CssBaseline'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'

const darkTheme = createMuiTheme({
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

const lightTheme = createMuiTheme({
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

const HomeComponent: React.FC = (): JSX.Element => {
  const [currentCity, setCurrentCity] = useState<City>('CALI')
  const [darkMode, setDarkMode] = useState<boolean>(true)
  const [personIDNumber, setPersonIDNumber] = useState<number | null>(null)
  const [canPersonGoOutToday, setCanPersonGoOutToday] = useState<GoOutState>('UNDEFINED')
  const [canPersonGoOutWeek, setCanPersonGoOutWeek] = useState<GoOutWeekState>([])
  const [vehicleIDNumber, setVehicleIDNumber] = useState<number | null>(null)
  const [canVehicleGoOutToday, setCanVehicleGoOutToday] = useState<GoOutState>('UNDEFINED')
  const [canVehicleGoOutWeek, setCanVehicleGoOutWeek] = useState<GoOutWeekState>([])

  const restoreAndUpdateData = (): void => {
    const personIDNumberLS = getPersonIDNumber()
    const vehicleIDNumberLS = getVehicleIDNumber()
    const currentCityLS = getCity() || 'CALI'
    const darkModeLS = getTheme() === 'dark'
    setPersonIDNumber(personIDNumberLS)
    setVehicleIDNumber(vehicleIDNumberLS)
    setCurrentCity(currentCityLS)
    setDarkMode(darkModeLS)
    if (personIDNumberLS !== null ) setCanPersonGoOutToday(canGoOutToday(personIDNumberLS, 'person', currentCityLS))
    if (personIDNumberLS !== null ) setCanPersonGoOutWeek(canGoOutWeek(personIDNumberLS, 'person', currentCityLS))
    if (vehicleIDNumberLS !== null ) setCanVehicleGoOutToday(canGoOutToday(vehicleIDNumberLS, 'vehicle', currentCityLS))
    if (vehicleIDNumberLS !== null ) setCanVehicleGoOutWeek(canGoOutWeek(vehicleIDNumberLS, 'vehicle', currentCityLS))
  }

  // eslint-disable-next-line
  useEffect(() => restoreAndUpdateData(), [])

  useEffect(() => {
    setAllLocalStorageData(personIDNumber, vehicleIDNumber, currentCity, darkMode)
  })

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <div className="App">
        <HeaderComponent
          currentCity={currentCity}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          setCurrentCity={setCurrentCity}
          personIDNumber={personIDNumber}
          vehicleIDNumber={vehicleIDNumber}></HeaderComponent>

        <Grid container spacing={0}>
          <Grid item xs={12} sm={12} md={6} lg={6} style={{ paddingTop: '25px' }}>
            <MainInfoComponent
              entity={'person'}
              IDNumber={personIDNumber}
              canGoOutToday={canPersonGoOutToday}
              canGoOutWeek={canPersonGoOutWeek}
              currentCity={currentCity}
              setIDNumber={setPersonIDNumber}
              setCanGoOutToday={setCanPersonGoOutToday}
              setCanGoOutWeek={setCanPersonGoOutWeek}></MainInfoComponent>
            <Divider variant="middle" />
          </Grid>

          <Grid item xs={12} sm={12} md={6} lg={6} style={{ paddingTop: '25px' }}>
            <MainInfoComponent
              entity={'vehicle'}
              IDNumber={vehicleIDNumber}
              canGoOutToday={canVehicleGoOutToday}
              canGoOutWeek={canVehicleGoOutWeek}
              currentCity={currentCity}
              setIDNumber={setVehicleIDNumber}
              setCanGoOutToday={setCanVehicleGoOutToday}
              setCanGoOutWeek={setCanVehicleGoOutWeek}></MainInfoComponent>
            <Divider variant="middle" />
          </Grid>
        </Grid>

        <Typography>
          <Link href={`mailto:${email}${subjects['issue']}`} color="secondary">
            {getLabel('reportIssue')}
          </Link>
          {' | '}
          <Link
            href={source[currentCity]}
            color="secondary"
            target="_blank"
            rel="noopener"
            onClick={(event: MouseEvent) => event.preventDefault()}>
            {getLabel('infoSource')}
          </Link>
          {' | '}
          <Link href={`mailto:${email}${subjects['contact']}`} color="secondary">
            {getLabel('contact')}
          </Link>
        </Typography>
      </div>
    </ThemeProvider>
  )
}

export { HomeComponent }
