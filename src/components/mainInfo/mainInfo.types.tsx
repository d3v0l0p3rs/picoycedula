import { City } from '../index.types'

export interface Props {
  currentCity: City
  setCurrentCity: (city: City) => void
  personIDNumber: number
  vehicleIDNumber: number
}
