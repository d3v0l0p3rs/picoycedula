import React, { useState, useEffect } from 'react'
import { source, email, subjects } from 'data'
import {
  HeaderComponent,
  MainInfoComponent,
  canGoOutToday,
  canGoOutWeek,
} from 'components/index'
import {
  getPersonIDNumber,
  getVehicleIDNumber,
  getCity,
  getTheme,
  setAllLocalStorageData,
} from 'components/localStorage/localStorage'
import { darkTheme, lightTheme } from './themeProvider'
import { GoOutState, GoOutWeekState, City } from 'components/index.types'
import { getLabel } from 'texts'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'
import CssBaseline from '@material-ui/core/CssBaseline'
import { MuiThemeProvider } from '@material-ui/core/styles'

const HomeComponent: React.FC = (): JSX.Element => {
  const [currentCity, setCurrentCity] = useState<City>('CALI')
  const [darkMode, setDarkMode] = useState<boolean>(true)
  const [personIDNumber, setPersonIDNumber] = useState<number | null>(null)
  const [canPersonGoOutToday, setCanPersonGoOutToday] = useState<GoOutState>(
    'UNDEFINED',
  )
  const [canPersonGoOutWeek, setCanPersonGoOutWeek] = useState<GoOutWeekState>([])
  const [vehicleIDNumber, setVehicleIDNumber] = useState<number | null>(null)
  const [canVehicleGoOutToday, setCanVehicleGoOutToday] = useState<GoOutState>(
    'UNDEFINED',
  )
  const [canVehicleGoOutWeek, setCanVehicleGoOutWeek] = useState<GoOutWeekState>([])

  const updateData = (data: {
    personIDNumber?: number | null
    vehicleIDNumber?: number | null
    currentCity?: City
  }): void => {
    const newPersonIDNumber =
      data.personIDNumber !== undefined ? data.personIDNumber : personIDNumber
    const newVehicleIDNumber =
      data.vehicleIDNumber !== undefined ? data.vehicleIDNumber : vehicleIDNumber
    if (newPersonIDNumber !== personIDNumber) setPersonIDNumber(newPersonIDNumber)
    if (newVehicleIDNumber !== vehicleIDNumber)
      setVehicleIDNumber(newVehicleIDNumber)
    if (data.currentCity !== undefined) setCurrentCity(data.currentCity)
    if (newPersonIDNumber !== null)
      setCanPersonGoOutToday(
        canGoOutToday(newPersonIDNumber, 'person', data.currentCity || currentCity),
      )
    if (newPersonIDNumber !== null)
      setCanPersonGoOutWeek(
        canGoOutWeek(newPersonIDNumber, 'person', data.currentCity || currentCity),
      )
    if (newVehicleIDNumber !== null)
      setCanVehicleGoOutToday(
        canGoOutToday(
          newVehicleIDNumber,
          'vehicle',
          data.currentCity || currentCity,
        ),
      )
    if (newVehicleIDNumber !== null)
      setCanVehicleGoOutWeek(
        canGoOutWeek(newVehicleIDNumber, 'vehicle', data.currentCity || currentCity),
      )
  }

  const restoreAndUpdateData = (): void => {
    const personIDNumberLS = getPersonIDNumber()
    const vehicleIDNumberLS = getVehicleIDNumber()
    const currentCityLS = getCity() || 'CALI'
    const darkModeLS = getTheme() === 'dark'
    setPersonIDNumber(personIDNumberLS)
    setVehicleIDNumber(vehicleIDNumberLS)
    setCurrentCity(currentCityLS)
    setDarkMode(darkModeLS)
    updateData({
      personIDNumber: personIDNumberLS,
      vehicleIDNumber: vehicleIDNumberLS,
      currentCity: currentCityLS,
    })
  }

  // eslint-disable-next-line
  useEffect(() => restoreAndUpdateData(), [])

  useEffect(() => {
    setAllLocalStorageData(personIDNumber, vehicleIDNumber, currentCity, darkMode)
  })

  return (
    <MuiThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <div className="App">
        <HeaderComponent
          currentCity={currentCity}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          updateData={updateData}
          personIDNumber={personIDNumber}
          vehicleIDNumber={vehicleIDNumber}></HeaderComponent>

        <div className="Content" style={{ width: '95%', margin: 'auto' }}>
          <Grid container spacing={0}>
            <Grid item xs={12} sm={12} md={6} lg={6} style={{ paddingTop: '25px' }}>
              <Typography variant="h4" style={{ padding: '0px 15px 15px 15px' }}>
                Pico y Cédula
              </Typography>
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
              <Typography variant="h4" style={{ padding: '0px 15px 15px 15px' }}>
                Pico y Placa
              </Typography>
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

          <Typography style={{ paddingTop: '20px', paddingBottom: '5px' }}>
            <Link href={`mailto:${email}${subjects['issue']}`} color="secondary">
              {getLabel('reportIssue')}
            </Link>
            {' | '}
            <Link
              href={source[currentCity]}
              color="secondary"
              target="_blank"
              rel="noopener">
              {getLabel('infoSource')}
            </Link>
            {' | '}
            <Link href={`mailto:${email}${subjects['contact']}`} color="secondary">
              {getLabel('contact')}
            </Link>
          </Typography>
        </div>
      </div>
    </MuiThemeProvider>
  )
}

export { HomeComponent }
