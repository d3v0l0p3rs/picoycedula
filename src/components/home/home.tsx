import React, { useState } from 'react'
import { pico_y_cedula, pico_y_placa } from '../../data'
import { SetState, Entity, GoOutState, GoOutWeekState } from '../index.types'
import { getCurrentDate, getCurrentWeek, dayOfWeekString } from './helpers'
import Button from '@material-ui/core/Button'
import { CardComponent } from '../index'

const data = { person: pico_y_cedula, vehicle: pico_y_placa }

const setLastIDNumber = (
  lastIDNumber: number,
  entity: Entity,
  callback: SetState,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
) => (_: unknown) => {
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
    result.push({
      canGoOut: canGoOut(lastIDNumber, entity, date),
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
  const [canPersonGoOut, setCanPersonGoOut] = useState<GoOutState>('UNDEFINED')
  const [canVehicleGoOut, setCanVehicleGoOut] = useState<GoOutState>('UNDEFINED')
  return (
    <div className="App">
      <div className="person-last-id-number">
        <Button
          onClick={setLastIDNumber(1, 'person', setCanPersonGoOut)}
          color="primary"
          variant="outlined"
          component="span">
          1
        </Button>
        <Button
          onClick={setLastIDNumber(2, 'person', setCanPersonGoOut)}
          color="primary"
          variant="outlined"
          component="span">
          2
        </Button>
        <Button
          onClick={setLastIDNumber(3, 'person', setCanPersonGoOut)}
          color="primary"
          variant="outlined"
          component="span">
          3
        </Button>
        <Button
          onClick={setLastIDNumber(4, 'person', setCanPersonGoOut)}
          color="primary"
          variant="outlined"
          component="span">
          4
        </Button>
        <Button
          onClick={setLastIDNumber(5, 'person', setCanPersonGoOut)}
          color="primary"
          variant="outlined"
          component="span">
          5
        </Button>
        <Button
          onClick={setLastIDNumber(6, 'person', setCanPersonGoOut)}
          color="primary"
          variant="outlined"
          component="span">
          6
        </Button>
        <Button
          onClick={setLastIDNumber(7, 'person', setCanPersonGoOut)}
          color="primary"
          variant="outlined"
          component="span">
          7
        </Button>
        <Button
          onClick={setLastIDNumber(8, 'person', setCanPersonGoOut)}
          color="primary"
          variant="outlined"
          component="span">
          8
        </Button>
        <Button
          onClick={setLastIDNumber(9, 'person', setCanPersonGoOut)}
          color="primary"
          variant="outlined"
          component="span">
          9
        </Button>
        <Button
          onClick={setLastIDNumber(0, 'person', setCanPersonGoOut)}
          color="primary"
          variant="outlined"
          component="span">
          0
        </Button>
      </div>
      <div className="vehicle-last-id-number">
        <Button
          onClick={setLastIDNumber(1, 'vehicle', setCanVehicleGoOut)}
          color="primary"
          variant="outlined"
          component="span">
          1
        </Button>
        <Button
          onClick={setLastIDNumber(2, 'vehicle', setCanVehicleGoOut)}
          color="primary"
          variant="outlined"
          component="span">
          2
        </Button>
        <Button
          onClick={setLastIDNumber(3, 'vehicle', setCanVehicleGoOut)}
          color="primary"
          variant="outlined"
          component="span">
          3
        </Button>
        <Button
          onClick={setLastIDNumber(4, 'vehicle', setCanVehicleGoOut)}
          color="primary"
          variant="outlined"
          component="span">
          4
        </Button>
        <Button
          onClick={setLastIDNumber(5, 'vehicle', setCanVehicleGoOut)}
          color="primary"
          variant="outlined"
          component="span">
          5
        </Button>
        <Button
          onClick={setLastIDNumber(6, 'vehicle', setCanVehicleGoOut)}
          color="primary"
          variant="outlined"
          component="span">
          6
        </Button>
        <Button
          onClick={setLastIDNumber(7, 'vehicle', setCanVehicleGoOut)}
          color="primary"
          variant="outlined"
          component="span">
          7
        </Button>
        <Button
          onClick={setLastIDNumber(8, 'vehicle', setCanVehicleGoOut)}
          color="primary"
          variant="outlined"
          component="span">
          8
        </Button>
        <Button
          onClick={setLastIDNumber(9, 'vehicle', setCanVehicleGoOut)}
          color="primary"
          variant="outlined"
          component="span">
          9
        </Button>
        <Button
          onClick={setLastIDNumber(0, 'vehicle', setCanVehicleGoOut)}
          color="primary"
          variant="outlined"
          component="span">
          0
        </Button>
      </div>
      <div className="card-stack">
        <CardComponent
          canGoOut={canPersonGoOut}
          entity="person"
          text={messageForToday(canPersonGoOut, 'person')}
        />
        <CardComponent
          canGoOut={canVehicleGoOut}
          entity="vehicle"
          text={messageForToday(canVehicleGoOut, 'vehicle')}
        />
      </div>
      {/* Estos json son para mostrar los datos planos porque me dio pereza organizarlos */}
      <div style={{ padding: '20px' }}>
        {JSON.stringify(canGoOutWeek(0, 'person'))}
      </div>
      <div style={{ padding: '20px' }}>
        {JSON.stringify(canGoOutWeek(0, 'vehicle'))}
      </div>
    </div>
  )
}

export { HomeComponent }
