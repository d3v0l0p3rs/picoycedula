import { City } from '../index.types'

export interface Props {
  currentCity: City
  personIDNumber: number | null
  vehicleIDNumber: number | null
  darkMode: boolean
  setDarkMode: (value: boolean) => void
  updateData: (data: {
    personIDNumber?: number | null
    vehicleIDNumber?: number | null
    currentCity?: City
  }) => void
}
