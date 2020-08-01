import React, { useState } from 'react'
import { pico_y_cedula, pico_y_placa } from '../../data'
import { SetState, Entity, GoOutState, GoOutWeekState } from './home.types'
import { getCurrentDate, getCurrentWeek, dayOfWeekString } from './helpers'

const data = { person: pico_y_cedula, vehicle: pico_y_placa }

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const setLastIDNumber = (lastIDNumber: number, entity: Entity, callback: SetState) => (_: unknown) => {
  callback(canGoOut(lastIDNumber, entity))
}

const canGoOut = (lastIDNumber: number, entity: Entity, date = ''): GoOutState => {
  const validLastIDNumbers = data[entity][date || getCurrentDate()]
  if (!validLastIDNumbers) return 'ERROR'
  return validLastIDNumbers.some(v => v === lastIDNumber) ? 'YES' : 'NO'
}

const canGoOutWeek = (lastIDNumber: number, entity: Entity): GoOutWeekState => {
  const currentWeek = getCurrentWeek()
  const result: GoOutWeekState = []
  currentWeek.forEach((date, i) => {
    result.push({ canGoOut: canGoOut(lastIDNumber, entity, date), day: dayOfWeekString[i] })
  })
  return result
}

const messageForToday = (state: GoOutState, entity: Entity): string => {
  // Esto es solo para mostrar los datos y ya, se puede borrar eventualmente
  const messages = {
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
  }
  return messages[state][entity]
}

const HomeComponent: React.FC = (): JSX.Element => {
  const [canPersonGoOut, setCanPersonGoOut] = useState<GoOutState>('UNDEFINED')
  const [canVehicleGoOut, setCanVehicleGoOut] = useState<GoOutState>('UNDEFINED')
  return (
    <div className="App">
      <div className="person-last-id-number">
        <button onClick={setLastIDNumber(1, 'person', setCanPersonGoOut)}>1</button>
        <button onClick={setLastIDNumber(2, 'person', setCanPersonGoOut)}>2</button>
        <button onClick={setLastIDNumber(3, 'person', setCanPersonGoOut)}>3</button>
        <button onClick={setLastIDNumber(4, 'person', setCanPersonGoOut)}>4</button>
        <button onClick={setLastIDNumber(5, 'person', setCanPersonGoOut)}>5</button>
        <button onClick={setLastIDNumber(6, 'person', setCanPersonGoOut)}>6</button>
        <button onClick={setLastIDNumber(7, 'person', setCanPersonGoOut)}>7</button>
        <button onClick={setLastIDNumber(8, 'person', setCanPersonGoOut)}>8</button>
        <button onClick={setLastIDNumber(9, 'person', setCanPersonGoOut)}>9</button>
        <button onClick={setLastIDNumber(0, 'person', setCanPersonGoOut)}>0</button>
      </div>
      <div className="vehicle-last-id-number">
        <button onClick={setLastIDNumber(1, 'vehicle', setCanVehicleGoOut)}>1</button>
        <button onClick={setLastIDNumber(2, 'vehicle', setCanVehicleGoOut)}>2</button>
        <button onClick={setLastIDNumber(3, 'vehicle', setCanVehicleGoOut)}>3</button>
        <button onClick={setLastIDNumber(4, 'vehicle', setCanVehicleGoOut)}>4</button>
        <button onClick={setLastIDNumber(5, 'vehicle', setCanVehicleGoOut)}>5</button>
        <button onClick={setLastIDNumber(6, 'vehicle', setCanVehicleGoOut)}>6</button>
        <button onClick={setLastIDNumber(7, 'vehicle', setCanVehicleGoOut)}>7</button>
        <button onClick={setLastIDNumber(8, 'vehicle', setCanVehicleGoOut)}>8</button>
        <button onClick={setLastIDNumber(9, 'vehicle', setCanVehicleGoOut)}>9</button>
        <button onClick={setLastIDNumber(0, 'vehicle', setCanVehicleGoOut)}>0</button>
      </div>
      <div>{messageForToday(canPersonGoOut, 'person')}</div>
      <div>{messageForToday(canVehicleGoOut, 'vehicle')}</div>
      {/* Estos json son para mostrar los datos planos porque me dio pereza organizarlos */}
      <div>{JSON.stringify(canGoOutWeek(0, 'person'))}</div>
      <div>{JSON.stringify(canGoOutWeek(0, 'vehicle'))}</div>
    </div>
  )
}

export { HomeComponent }
