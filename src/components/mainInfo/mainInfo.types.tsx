import { City, GoOutState, GoOutWeekState, Entity } from '../index.types'

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
