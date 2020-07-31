import React, { useState } from 'react'
import { pico_y_cedula, pico_y_placa } from '../../data'
import { SetState, Entity, GoOutState } from './home.types'
import { getCurrentDate } from './helpers'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const setLastIDNumber = (lastIDNumber: number, entity: Entity, callback: SetState) => (_: unknown) => {
  callback(canGoOut(lastIDNumber, entity))
}

const canGoOut = (lastIDNumber: number, entity: Entity): GoOutState => {
  const data = { person: pico_y_cedula, vehicle: pico_y_placa }
  const validLastIDNumbers = data[entity][getCurrentDate()]
  if (!validLastIDNumbers) return 'ERROR'
  return validLastIDNumbers.some(v => v === lastIDNumber) ? 'YES' : 'NO'
}

const message = (state: GoOutState, entity: Entity): string => {
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
      <div>{message(canPersonGoOut, 'person')}</div>
      <div>{message(canVehicleGoOut, 'vehicle')}</div>
    </div>
  )
}

export { HomeComponent }
