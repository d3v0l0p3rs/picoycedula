import React, { useState } from 'react'
import { pico_y_cedula, pico_y_placa, source } from '../../data'
import { Entity, GoOutState, GoOutWeekState, City } from '../index.types'
import { getCurrentDate, getCurrentWeek, dayOfWeekString, DIGITS } from './helpers'
import Button from '@material-ui/core/Button'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import { CardComponent } from '../index'
import { getLabel, todayCanGoOutside, noDataToday, currentLastIDNumber } from '../../texts'
import styles from './css.module.css'

const data = { person: pico_y_cedula, vehicle: pico_y_placa, source: source }

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

const messageForToday = (state: GoOutState, entity: Entity): string => {
  // Esto es solo para mostrar los datos y ya, se puede borrar eventualmente
  return {
    YES: { person: 'Puedes salir', vehicle: 'Puedes conducir' },
    NO: { person: 'NO puedes salir', vehicle: 'NO puedes conducir' },
    ERROR: {
      person: 'No hay información del pico y cédula de hoy',
      vehicle: 'No hay información del pico y placa de hoy',
    },
    UNDEFINED: {
      person: 'No ha ingresado el último dígito de su cédula',
      vehicle: 'No ha ingresado el último dígito de su placa',
    },
  }[state][entity]
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
      <h2>Pico y Colombia</h2>

      <div className={styles.citySelector}>
        <FormControl>
          <Select
            value={currentCity}
            onChange={e => {
              setCurrentCity(e.target.value as City)
            }}>
            <MenuItem value={'CALI'}>Cali</MenuItem>
          </Select>
        </FormControl>
      </div>

      <div className="person">
        {personIDNumber !== null ? (
          <div>{currentLastIDNumber('person', personIDNumber)}</div>
        ) : (
          <label>{getLabel('pickLastCCNumber')}</label>
        )}
        {personIDNumber !== null ? (
          <Button
            onClick={() => {
              setPersonIDNumber(null)
              setCanPersonGoOutToday('UNDEFINED')
              setCanPersonGoOutWeek([])
            }}
            color="secondary"
            variant="outlined"
            component="span">
            {getLabel('pickAnotherLastNumber')}
          </Button>
        ) : (
          DIGITS.map((value, index) => renderPersonDigits(value, index))
        )}
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
              {todayCanGoOutside('person', currentCity, data['person'][currentCity][getCurrentDate()])}
            </span>
          ) : (
            <span>{noDataToday('person', currentCity)}</span>
          )}
        </div>
      </div>

      <div className="vehicle">
        {vehicleIDNumber !== null ? (
          <div>{currentLastIDNumber('vehicle', vehicleIDNumber)}</div>
        ) : (
          <label>{getLabel('pickLastCCNumber')}</label>
        )}
        {vehicleIDNumber !== null ? (
          <Button
            onClick={() => {
              setVehicleIDNumber(null)
              setCanVehicleGoOutToday('UNDEFINED')
              setCanVehicleGoOutWeek([])
            }}
            color="secondary"
            variant="outlined"
            component="span">
            {getLabel('pickAnotherLastNumber')}
          </Button>
        ) : (
          DIGITS.map((value, index) => renderVehicleDigits(value, index))
        )}
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
              {todayCanGoOutside('vehicle', currentCity, data['vehicle'][currentCity][getCurrentDate()])}
            </span>
          ) : (
            <span>{noDataToday('vehicle', currentCity)}</span>
          )}
        </div>
      </div>

      <div className={styles.personWeekMsgsContainer}>
        <ul>
          {canPersonGoOutWeek.map((day, key) => (
            <li key={key}>
              {day.day}: {day.canGoOut === 'YES' ? '' : 'NO'} puedes salir
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.vehicleWeekMsgsContainer}>
        <ul>
          {canVehicleGoOutWeek.map((day, key) => (
            <li key={key}>
              {day.day}: {day.canGoOut === 'YES' ? '' : 'NO'} puedes salir
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.issuesSection}>
        <Button
          color="secondary"
          variant="contained"
          component="span"
          onClick={() => {
            alert('Tú no quieres reportar un problema :3')
          }}>
          Reportar un problema
        </Button>
      </div>

      <div className={styles.sourceSection}>
        <a target="_blank" rel="noopener noreferrer" href={data.source[currentCity]}>
          Fuente
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
