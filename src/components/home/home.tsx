import React, { useState } from 'react'
import { pico_y_cedula, pico_y_placa, source, cities } from '../../data'
import { Entity, GoOutState, GoOutWeekState, City } from '../index.types'
import { getCurrentDate, getCurrentWeek, dayOfWeekString, DIGITS } from './helpers'
import Button from '@material-ui/core/Button'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import { Collapse } from '@material-ui/core'
import { CardComponent } from '../index'
import {
  getLabel,
  todayCanGoOutside,
  noDataToday,
  currentLastIDNumber,
  messageForToday,
} from '../../texts'
import styles from './scss.module.scss'
import Grid from '@material-ui/core/Grid'

const data = { person: pico_y_cedula, vehicle: pico_y_placa }

const setLastIDNumber = (
  lastIDNumber: number,
  entity: Entity,
  city: City,
  callbacks: {
    set: (lastIDNumber: number) => void
    day?: (canGoOut: GoOutState) => void
    week?: (goOutWeekState: GoOutWeekState) => void
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
) => (_: unknown) => {
  callbacks.set(lastIDNumber)
  if (callbacks.day) {
    callbacks.day(canGoOut(lastIDNumber, entity, city))
  }
  if (callbacks.week) {
    callbacks.week(canGoOutWeek(lastIDNumber, entity, city))
  }
}

const canGoOut = (lastIDNumber: number, entity: Entity, city: City, date = ''): GoOutState => {
  const validLastIDNumbers = data[entity][city][date || getCurrentDate()]
  if (!validLastIDNumbers) return 'ERROR'
  return validLastIDNumbers.some(v => v === lastIDNumber) ? 'YES' : 'NO'
}

const canGoOutWeek = (lastIDNumber: number, entity: Entity, city: City): GoOutWeekState => {
  const currentWeek = getCurrentWeek()
  const result: GoOutWeekState = []
  currentWeek.forEach((date, i) => {
    result.push({
      canGoOut: canGoOut(lastIDNumber, entity, city, date),
      day: dayOfWeekString[i],
    })
  })
  return result
}

const HomeComponent: React.FC = (): JSX.Element => {
  const [currentCity, setCurrentCity] = useState<City>('CALI')
  const [personIDNumber, setPersonIDNumber] = useState<number | null>(null)
  const [vehicleIDNumber, setVehicleIDNumber] = useState<number | null>(null)
  const [canPersonGoOutToday, setCanPersonGoOutToday] = useState<GoOutState>('UNDEFINED')
  const [canPersonGoOutWeek, setCanPersonGoOutWeek] = useState<GoOutWeekState>([])
  const [canVehicleGoOutToday, setCanVehicleGoOutToday] = useState<GoOutState>('UNDEFINED')
  const [canVehicleGoOutWeek, setCanVehicleGoOutWeek] = useState<GoOutWeekState>([])

  return (
    <div className="App">
      <h2>{getLabel('title')}</h2>

      <div className={styles.citySelector}>
        <FormControl>
          <Select
            value={currentCity}
            onChange={e => {
              setCurrentCity(e.target.value as City)
            }}
            className={styles.selectedCity}>
            {Object.entries(cities).map(([key, value]) => (
              <MenuItem key={key} value={key} className={styles.cityContainer}>
                {value}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>

      <Grid container spacing={0}>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <div className="person">
            <Collapse in={personIDNumber !== null}>
              <div>{currentLastIDNumber('person', personIDNumber as number)}</div>
            </Collapse>
            <Collapse in={personIDNumber === null}>
              <label>{getLabel('pickLastCCNumber')}</label>
            </Collapse>
            <Collapse in={personIDNumber !== null}>
              <Button
                onClick={() => {
                  setPersonIDNumber(null)
                  setCanPersonGoOutToday('UNDEFINED')
                  setCanPersonGoOutWeek([])
                }}
                className={styles.selectOtherDigitButton}
                variant="outlined"
                component="span">
                {getLabel('pickAnotherLastNumber')}
              </Button>
            </Collapse>
            <Collapse in={personIDNumber === null}>
              <>{DIGITS.map((value, index) => renderPersonDigits(value, index))}</>
            </Collapse>

            <div>
              <CardComponent
                canGoOut={canPersonGoOutToday}
                entity="person"
                text={messageForToday(canPersonGoOutToday, 'person')}
              />
            </div>
            <div className={styles.personMsgsContainer}>
              {data['person'][currentCity][getCurrentDate()] ? (
                <span>
                  {todayCanGoOutside(
                    'person',
                    currentCity,
                    data['person'][currentCity][getCurrentDate()],
                  )}
                </span>
              ) : (
                <span>{noDataToday('person', currentCity)}</span>
              )}
            </div>
          </div>

          <Collapse in={canPersonGoOutWeek.length > 0}>
            <div className={styles.personWeekMsgsContainer}>
              <ul>
                {canPersonGoOutWeek.map((day, key) => (
                  <li key={key}>
                    {day.day}: {day.canGoOut === 'YES' ? getLabel('canGoOut') : getLabel('canNotGoOut')}
                  </li>
                ))}
              </ul>
            </div>
          </Collapse>
        </Grid>

        <Grid item xs={12} sm={12} md={6} lg={6}>
          <div className="vehicle">
            <Collapse in={vehicleIDNumber !== null}>
              <div>{currentLastIDNumber('vehicle', vehicleIDNumber as number)}</div>
            </Collapse>
            <Collapse in={vehicleIDNumber === null}>
              <label>{getLabel('pickLastPlateNumber')}</label>
            </Collapse>
            <Collapse in={vehicleIDNumber !== null}>
              <Button
                onClick={() => {
                  setVehicleIDNumber(null)
                  setCanVehicleGoOutToday('UNDEFINED')
                  setCanVehicleGoOutWeek([])
                }}
                variant="outlined"
                className={styles.selectOtherDigitButton}
                component="span">
                {getLabel('pickAnotherLastNumber')}
              </Button>
            </Collapse>
            <Collapse in={vehicleIDNumber === null}>
              <>{DIGITS.map((value, index) => renderVehicleDigits(value, index))}</>
            </Collapse>

            <div>
              <CardComponent
                canGoOut={canVehicleGoOutToday}
                entity="vehicle"
                text={messageForToday(canVehicleGoOutToday, 'vehicle')}
              />
            </div>
            <div className={styles.vehicleMsgsContainer}>
              {data['vehicle'][currentCity][getCurrentDate()] ? (
                <span>
                  {todayCanGoOutside(
                    'vehicle',
                    currentCity,
                    data['vehicle'][currentCity][getCurrentDate()],
                  )}
                </span>
              ) : (
                <span>{noDataToday('vehicle', currentCity)}</span>
              )}
            </div>
          </div>

          <Collapse in={canPersonGoOutWeek.length > 0}>
            <div className={styles.vehicleWeekMsgsContainer}>
              <ul>
                {canVehicleGoOutWeek.map((day, key) => (
                  <li key={key}>
                    {day.day}: {day.canGoOut === 'YES' ? getLabel('canDrive') : getLabel('canNotDrive')}
                  </li>
                ))}
              </ul>
            </div>
          </Collapse>
        </Grid>
      </Grid>

      <div className={styles.issuesSection}>
        <Button
          color="secondary"
          variant="contained"
          component="span"
          onClick={() => {
            alert('Tú no quieres reportar un problema :3')
          }}>
          {getLabel('reportIssue')}
        </Button>
      </div>

      <div className={styles.sourceSection}>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={source[currentCity]}
          className={styles.sourceInfo}>
          {getLabel('infoSource')}
        </a>
      </div>
    </div>
  )

  function renderPersonDigits(value: number, index: number) {
    return (
      <>
        {index % 3 === 0 ? <br /> : ''}
        <Button
          key={index}
          className={styles.digitButton}
          onClick={setLastIDNumber(value, 'person', currentCity, {
            set: setPersonIDNumber,
            day: setCanPersonGoOutToday,
            week: setCanPersonGoOutWeek,
          })}
          color="primary"
          variant="outlined"
          component="span">
          {value}
        </Button>
      </>
    )
  }

  function renderVehicleDigits(value: number, index: number) {
    return (
      <>
        {index % 3 === 0 ? <br /> : ''}
        <Button
          key={index}
          className={styles.digitButton}
          onClick={setLastIDNumber(value, 'vehicle', currentCity, {
            set: setVehicleIDNumber,
            day: setCanVehicleGoOutToday,
            week: setCanVehicleGoOutWeek,
          })}
          color="primary"
          variant="outlined"
          component="span">
          {value}
        </Button>
      </>
    )
  }
}

export { HomeComponent }
