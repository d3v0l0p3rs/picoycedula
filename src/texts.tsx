import { Entity, City, GoOutState, cities, Day } from 'components/index.types'

const labels: { [name: string]: string } = {
  title: 'Pico y Cédula',
  pickLastCCNumber: 'Seleccione el último dígito de su cédula',
  pickLastPlateNumber: 'Seleccione el último dígito de su placa',
  pickAnotherLastNumber: 'Seleccionar otro dígito',
  reportIssue: 'Reportar un problema',
  contact: 'Contáctenos',
  infoSource: 'Fuente',
  default: '¯\\_(ツ)_/¯',
}

const getLabel = (name: string): string => {
  return labels[name] || labels.default
}

const todayCanGoOutside = (entity: Entity, city: City): string => {
  return {
    person: `Hoy pueden salir en ${cities[city]} las personas cuyos números de cédula terminen en `,
    vehicle: `Hoy pueden rodar en ${cities[city]} los vehículos cuyas placas terminen en `,
  }[entity]
}

const noDataToday = (entity: Entity, city: City): string => {
  return {
    person: `No hay datos para pico y cédula en ${cities[city]} el día de hoy`,
    vehicle: `No hay datos para pico y placa en ${cities[city]} el día de hoy`,
  }[entity]
}

const messageForToday = (state: GoOutState, entity: Entity): string => {
  return {
    YES: { person: 'Puedes salir', vehicle: 'Puedes conducir' },
    NO: { person: 'Quédate en casa', vehicle: 'NO puedes conducir' },
    ERROR: {
      person: 'No encontramos información actual',
      vehicle: 'No encontramos información actual',
    },
    UNDEFINED: {
      person: 'Seleccione un dígito',
      vehicle: 'Seleccione un dígito',
    },
  }[state][entity]
}

export const canGoOutOnDay = (
  entity: Entity,
  state: GoOutState,
  date: string,
  day: Day,
  city: City,
): string => {
  if (state === 'ERROR') return `No hay información disponible para el día ${date} (${day}) en ${city}`
  const canGoOut = state === 'YES' ? 'SÍ' : 'NO'
  const verb = { person: 'salir', vehicle: 'manejar' }[entity]
  return `Usted ${canGoOut} puede ${verb} el día ${date} (${day}) en ${city}`
}

export { getLabel, todayCanGoOutside, noDataToday, messageForToday }
