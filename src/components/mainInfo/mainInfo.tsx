import React from 'react'
import { pico_y_cedula, pico_y_placa } from 'data'
import { Entity, GoOutState, GoOutWeekState, City } from 'components/index.types'
import { getCurrentDate, getCurrentWeek, dayOfWeekString, DIGITS } from './helpers'
import { getLabel, todayCanGoOutside, noDataToday, messageForToday } from 'texts'
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Typography from '@material-ui/core/Typography'
import { Collapse } from '@material-ui/core'
import { CardComponent } from '../index'
import styles from './scss.module.scss'
import { icon } from '../card/helper'
import { cardColor } from '../card/card'

const data = { person: pico_y_cedula, vehicle: pico_y_placa }

const setLastIDNumber = (
  lastIDNumber: number,
  entity: Entity,
  city: City,
  callbacks: {
    set: (lastIDNumber: number) => void
    day: (canGoOut: GoOutState) => void
    week: (goOutWeekState: GoOutWeekState) => void
  },
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
) => (_: unknown): void => {
  callbacks.set(lastIDNumber)
  callbacks.day(canGoOutToday(lastIDNumber, entity, city))
  callbacks.week(canGoOutWeek(lastIDNumber, entity, city))
}

export const canGoOutToday = (
  lastIDNumber: number,
  entity: Entity,
  city: City,
  date = '',
): GoOutState => {
  const validLastIDNumbers = data[entity][city][date || getCurrentDate()]
  if (!validLastIDNumbers) return 'ERROR'
  return validLastIDNumbers.some(v => v === lastIDNumber) ? 'YES' : 'NO'
}

export const canGoOutWeek = (lastIDNumber: number, entity: Entity, city: City): GoOutWeekState => {
  const currentWeek: string[] = getCurrentWeek()
  let currentDay = new Date().getDay()
  const result: GoOutWeekState = []
  currentWeek.forEach(date => {
    result.push({
      canGoOut: canGoOutToday(lastIDNumber, entity, city, date),
      day: dayOfWeekString[currentDay % 7],
      date: date,
    })
    currentDay = currentDay + 1
  })
  return result
}

export interface Props {
  IDNumber: number | null
  canGoOutToday: GoOutState
  canGoOutWeek: GoOutWeekState
  entity: Entity
  currentCity: City
  setIDNumber: (lastIDNumber: number | null) => void
  setCanGoOutToday: (canGoOut: GoOutState) => void
  setCanGoOutWeek: (goOutWeekState: GoOutWeekState) => void
}

const MainInfoComponent: React.FC<Props> = (props: Props): JSX.Element => {
  return (
    <div>
      <Collapse in={props.IDNumber === null}>
        <Typography variant="h6" color="textPrimary">
          {
            { person: getLabel('pickLastCCNumber'), vehicle: getLabel('pickLastPlateNumber') }[
              props.entity
            ]
          }
        </Typography>
      </Collapse>
      <Collapse in={props.IDNumber !== null}>
        <Button
          color="secondary"
          onClick={() => {
            props.setIDNumber(null)
            props.setCanGoOutToday('UNDEFINED')
            props.setCanGoOutWeek([])
          }}
          className={styles.selectOtherDigitButton}
          variant="outlined"
          component="span">
          <Typography variant="body1" color="textPrimary">
            {getLabel('pickAnotherLastNumber')}
          </Typography>
        </Button>
      </Collapse>
      <Collapse in={props.IDNumber === null}>
        <>
          {DIGITS.map((value: number, index: number) =>
            renderDigits(value, index, props.entity, props.currentCity, {
              setIDNumber: props.setIDNumber,
              setCanGoOutToday: props.setCanGoOutToday,
              setCanGoOutWeek: props.setCanGoOutWeek,
            }),
          )}
        </>
      </Collapse>

      <div>
        <CardComponent
          canGoOut={props.canGoOutToday}
          entity={props.entity}
          text={messageForToday(props.canGoOutToday, props.entity)}
        />
      </div>
      <div className={styles.msgsContainer}>
        {data[props.entity][props.currentCity][getCurrentDate()] ? (
          <>
            <Typography variant="body1" color="textPrimary" style={{ paddingBottom: '10px' }}>
              {todayCanGoOutside(props.entity, props.currentCity)}
            </Typography>
            <ButtonGroup color="secondary" variant="text" size="large">
              {data[props.entity][props.currentCity][getCurrentDate()].map((v, k) => (
                <Button style={{ display: 'block' }} color="secondary" key={k}>
                  {v}
                </Button>
              ))}
            </ButtonGroup>
          </>
        ) : (
          <Typography variant="body1" color="textPrimary" style={{ paddingBottom: '10px' }}>
            {noDataToday(props.entity, props.currentCity)}
          </Typography>
        )}
      </div>
      <Collapse in={props.canGoOutWeek.length > 0}>
        <div className={styles.weekMsgsContainer}>
          <ButtonGroup color="secondary" variant="text" size="small" style={{ width: '350px' }}>
            {props.canGoOutWeek.map((v, k) => (
              <Button style={{ display: 'block' }} color="secondary" key={k}>
                {v.day.slice(0, 3)} {v.date.slice(3)}
                <Typography style={{ color: cardColor(v.canGoOut) }}>
                  {icon(v.canGoOut, props.entity)}
                </Typography>
              </Button>
            ))}
          </ButtonGroup>
        </div>
      </Collapse>
    </div>
  )

  function renderDigits(
    value: number,
    index: number,
    entity: Entity,
    currentCity: City,
    callbacks: {
      setIDNumber: (lastIDNumber: number | null) => void
      setCanGoOutToday: (canGoOut: GoOutState) => void
      setCanGoOutWeek: (goOutWeekState: GoOutWeekState) => void
    },
  ) {
    return (
      <>
        {index % 3 === 0 ? <br /> : ''}
        <Button
          key={index}
          className={styles.digitButton}
          onClick={setLastIDNumber(value, entity, currentCity, {
            set: callbacks.setIDNumber,
            day: callbacks.setCanGoOutToday,
            week: callbacks.setCanGoOutWeek,
          })}
          color="secondary"
          variant="outlined"
          component="span">
          {value}
        </Button>
      </>
    )
  }
}

export { MainInfoComponent }
