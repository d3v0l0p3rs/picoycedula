import React, { useState } from 'react'
import { getData } from 'data'
import { Entity, GoOutState, GoOutWeekState, City } from 'components/index.types'
import { getCurrentDate, getCurrentWeek, dayOfWeekString, DIGITS } from './helpers'
import {
  getLabel,
  todayCanGoOutside,
  noDataToday,
  messageForToday,
  canGoOutOnDay,
  lastNumbersCanGoOut,
} from 'texts'
import Button from '@material-ui/core/Button'
import Popover from '@material-ui/core/Popover'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Typography from '@material-ui/core/Typography'
import { Collapse } from '@material-ui/core'
import { CardComponent } from '../index'
import styles from './scss.module.scss'
import { icon } from '../card/helper'
import { cardColor } from '../card/card'
import { Props } from './mainInfo.types'

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
  const validLastIDNumbers = getData(entity, city, date || getCurrentDate())
  if (!validLastIDNumbers) return 'ERROR'
  return validLastIDNumbers.some(v => v === lastIDNumber) ? 'YES' : 'NO'
}

export const canGoOutWeek = (
  lastIDNumber: number,
  entity: Entity,
  city: City,
): GoOutWeekState => {
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

const openPopover = (
  event: { currentTarget: Element },
  message: string,
  popoverCallback: (value: boolean) => void,
  anchorCallback: (value: Element | null) => void,
  setPopoverMessage: (message: string) => void,
) => {
  anchorCallback(event.currentTarget)
  setPopoverMessage(message)
  popoverCallback(true)
}
const closePopover = (
  popoverCallback: (value: boolean) => void,
  anchorCallback: (value: Element | null) => void,
  setPopoverMessage: (message: string) => void,
) => {
  anchorCallback(null)
  setPopoverMessage('')
  popoverCallback(false)
}

const MainInfoComponent: React.FC<Props> = (props: Props): JSX.Element => {
  const [popover, setPopover] = useState<boolean>(false)
  const [popoverMessage, setPopoverMessage] = useState<string>('')
  const [anchorEl, setAnchorEl] = useState<Element | null>(null)

  return (
    <div>
      <Collapse in={props.IDNumber === null}>
        <Typography variant="h6" color="textPrimary">
          {
            {
              person: getLabel('pickLastCCNumber'),
              vehicle: getLabel('pickLastPlateNumber'),
            }[props.entity]
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
          {DIGITS.map((value: number, index: number) => (
            <span key={'span' + index + props.IDNumber + props.currentCity}>
              {index % 3 === 0 && <br />}
              <Button
                key={'' + index + props.IDNumber + props.currentCity}
                className={styles.digitButton}
                onClick={setLastIDNumber(value, props.entity, props.currentCity, {
                  set: props.setIDNumber,
                  day: props.setCanGoOutToday,
                  week: props.setCanGoOutWeek,
                })}
                color="secondary"
                variant="outlined"
                component="span">
                {value}
              </Button>
            </span>
          ))}
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
        {getData(props.entity, props.currentCity, getCurrentDate()) ? (
          <>
            <Typography
              variant="body1"
              color="textPrimary"
              style={{ paddingBottom: '10px' }}>
              {todayCanGoOutside(props.entity, props.currentCity)}
            </Typography>
            <ButtonGroup color="secondary" variant="text" size="large">
              {(
                getData(props.entity, props.currentCity, getCurrentDate()) || []
              ).map((value, index) => (
                <Button
                  style={{ display: 'block' }}
                  color="secondary"
                  key={'' + index + props.IDNumber + props.currentCity}
                  onClick={event => {
                    openPopover(
                      event,
                      lastNumbersCanGoOut(props.entity),
                      setPopover,
                      setAnchorEl,
                      setPopoverMessage,
                    )
                  }}>
                  {value}
                </Button>
              ))}
            </ButtonGroup>
          </>
        ) : (
          <Typography
            variant="body1"
            color="textPrimary"
            style={{ paddingBottom: '10px' }}>
            {noDataToday(props.entity, props.currentCity)}
          </Typography>
        )}
      </div>
      <Collapse in={props.canGoOutWeek.length > 0}>
        <div className={styles.weekMsgsContainer}>
          <ButtonGroup
            color="secondary"
            variant="text"
            size="small"
            style={{ width: '350px' }}>
            {props.canGoOutWeek.map((value, index) => (
              <Button
                style={{ display: 'block' }}
                color="secondary"
                key={'' + index + props.IDNumber + props.currentCity}
                onClick={event => {
                  openPopover(
                    event,
                    canGoOutOnDay(
                      props.entity,
                      value.canGoOut,
                      value.date,
                      value.day,
                      props.currentCity,
                    ),
                    setPopover,
                    setAnchorEl,
                    setPopoverMessage,
                  )
                }}>
                {value.day.slice(0, 3)}{' '}
                {value.date.slice(3).split('/').reverse().join('/')}
                <Typography style={{ color: cardColor(value.canGoOut) }}>
                  {icon(value.canGoOut, props.entity)}
                </Typography>
              </Button>
            ))}
          </ButtonGroup>
          <Popover
            open={popover}
            anchorEl={anchorEl}
            onClose={() => {
              closePopover(setPopover, setAnchorEl, setPopoverMessage)
            }}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}>
            {popoverMessage}
          </Popover>
        </div>
      </Collapse>
    </div>
  )
}

export { MainInfoComponent }
