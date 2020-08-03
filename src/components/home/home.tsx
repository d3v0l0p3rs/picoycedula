import React, { useState } from 'react'
import { pico_y_cedula, pico_y_placa, source } from '../../data'
import { Entity, GoOutState, GoOutWeekState, City } from '../index.types'
import { getCurrentDate, getCurrentWeek, dayOfWeekString, DIGITS } from './helpers'
import Button from '@material-ui/core/Button'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import { CardComponent } from '../index'
import styles from './css.module.css'

const data = { person: pico_y_cedula, vehicle: pico_y_placa, source: source }

const setLastIDNumber = (
  lastIDNumber: number,
  entity: Entity,
  city: City,
  callbacks: {
    day?: (canGoOut: GoOutState) => void
    week?: (goOutWeekState: GoOutWeekState) => void
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
) => (_: unknown) => {
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
  const [canPersonGoOutToday, setCanPersonGoOutToday] = useState<GoOutState>('UNDEFINED')
  const [canPersonGoOutWeek, setCanPersonGoOutWeek] = useState<GoOutWeekState>([])
  const [canVehicleGoOutToday, setCanVehicleGoOutToday] = useState<GoOutState>('UNDEFINED')
  const [canVehicleGoOutWeek, setCanVehicleGoOutWeek] = useState<GoOutWeekState>([])
  return (
    <div className="App">
      <div className={styles.citySelector}>
        <h2>Pico y Colombia</h2>
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
      <div className="person-last-id-number">
        <p>Último número de tu cédula</p>
        {DIGITS.map((value, index) => renderPersonDigits(value, index))}
      </div>
      <div className="vehicle-last-id-number">
        <p>Último número de tu placa</p>
        {DIGITS.map((value, index) => renderVehicleDigits(value, index))}
      </div>
      <div className="card-stack">
        <CardComponent
          canGoOut={canPersonGoOutToday}
          entity="person"
          text={messageForToday(canPersonGoOutToday, 'person')}
        />
        <CardComponent
          canGoOut={canVehicleGoOutToday}
          entity="vehicle"
          text={messageForToday(canVehicleGoOutToday, 'vehicle')}
        />
      </div>

      <div className={styles.personMsgsContainer}>
        {data['person'][currentCity][getCurrentDate()] ? (
          <span>
            Hoy pueden salir en {currentCity} las personas cuyos números de cédula terminen en
            {data['person'][currentCity][getCurrentDate()].reduce((a, v) => a + ' ' + v, '')}
          </span>
        ) : (
            <span>No hay datos para pico y cédula en {currentCity} el día de hoy</span>
          )}
      </div>

      <div className={styles.vehicleMsgsContainer}>
        {data['vehicle'][currentCity][getCurrentDate()] ? (
          <span>
            Hoy pueden rodar en {currentCity} los vehículos cuyas placas terminen en
            {data['vehicle'][currentCity][getCurrentDate()].reduce((a, v) => a + ' ' + v, '')}
          </span>
        ) : (
            <span>No hay datos para pico y placa en {currentCity} el día de hoy</span>
          )}
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
      <div className={styles.sourceSection} >
        <a target="_blank" rel="noopener noreferrer" href={data.source[currentCity]}>
          Fuente
        </a>
      </div>
    </div>
  )

  function renderPersonDigits(value: number, index: number) {
    if (index % 3 === 0) {
      return (
        <>
          <br />
          <Button
            key={index}
            onClick={setLastIDNumber(value, 'person', currentCity, {
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
    } else {
      return (
        <Button
          key={index}
          onClick={setLastIDNumber(value, 'person', currentCity, {
            day: setCanPersonGoOutToday,
            week: setCanPersonGoOutWeek,
          })}
          color="primary"
          variant="outlined"
          component="span">
          {value}
        </Button>
      )
    }
  }

  function renderVehicleDigits(value: number, index: number) {
    if (index % 3 === 0) {
      return (
        <>
          <br />
          <Button
            key={index}
            onClick={setLastIDNumber(value, 'vehicle', currentCity, {
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
    } else {
      return (
        <Button
          key={index}
          onClick={setLastIDNumber(value, 'vehicle', currentCity, {
            day: setCanVehicleGoOutToday,
            week: setCanVehicleGoOutWeek,
          })}
          color="primary"
          variant="outlined"
          component="span">
          {value}
        </Button>
      )
    }
  }

}

export { HomeComponent }
