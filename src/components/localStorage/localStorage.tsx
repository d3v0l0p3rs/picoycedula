import { City } from 'components/index.types'

const personIDNumberKey = 'id'
const vehicleIDNumberKey = 'plate'
const cityKey = 'placityte'
type Theme = 'light' | 'dark'
const themeKey = 'theme'

export const setPersonIDNumber = (personIDNumber: number): void => {
  localStorage.setItem(personIDNumberKey, personIDNumber + '')
}

export const getPersonIDNumber = (): number | null => {
  const personIDstring = localStorage.getItem(personIDNumberKey)
  return personIDstring ? parseInt(personIDstring) : null
}

export const clearPersonIDNumber = (): void => {
  localStorage.removeItem(personIDNumberKey)
}

export const setVehicleIDNumber = (vehicleIDNumber: number): void => {
  localStorage.setItem(vehicleIDNumberKey, vehicleIDNumber + '')
}

export const getVehicleIDNumber = (): number | null => {
  const personIDstring = localStorage.getItem(vehicleIDNumberKey)
  return personIDstring ? parseInt(personIDstring) : null
}

export const clearVehicleIDNumber = (): void => {
  localStorage.removeItem(vehicleIDNumberKey)
}

export const setCity = (city: City): void => {
  localStorage.setItem(cityKey, city)
}

export const getCity = (): City | null => {
  return localStorage.getItem(cityKey) as City
}

export const clearCity = (): void => {
  localStorage.removeItem(cityKey)
}

export const setTheme = (theme: Theme): void => {
  localStorage.setItem(themeKey, theme)
}

export const getTheme = (): Theme | null => {
  return localStorage.getItem(themeKey) as Theme
}

export const clearTheme = (): void => {
  localStorage.removeItem(themeKey)
}

export const setAllLocalStorageData = (
  personIDNumber: number | null,
  vehicleIDNumber: number | null,
  currentCity: City | null,
  darkMode: boolean | null,
): void => {
  if (personIDNumber !== null) {
    setPersonIDNumber(personIDNumber)
  } else {
    clearPersonIDNumber()
  }
  if (vehicleIDNumber !== null) {
    setVehicleIDNumber(vehicleIDNumber)
  } else {
    clearVehicleIDNumber()
  }
  if (currentCity !== null) {
    setCity(currentCity)
  } else {
    clearCity()
  }
  if (darkMode !== null) {
    setTheme(darkMode ? 'dark' : 'light')
  } else {
    clearTheme()
  }
}
