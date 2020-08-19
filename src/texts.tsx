import { Entity, City, GoOutState, cities, Day } from 'components/index.types'

const labels: { [name: string]: string } = {
  title: 'Placa y Cédula',
  pickLastCCNumber: 'Seleccione el último dígito de su cédula',
  pickLastPlateNumber: 'Seleccione el último dígito de su placa',
  pickAnotherLastNumber: 'Seleccionar otro dígito',
  reportIssue: 'Reportar un problema',
  contact: 'Contáctenos',
  infoSource: 'Fuente',
  default: '¯\\_(ツ)_/¯',
}

export const getLabel = (name: string): string => {
  return labels[name] || labels.default
}

export const todayCanGoOutside = (entity: Entity, city: City): string => {
  return {
    person: `Hoy pueden salir en ${cities[city]} las personas cuyos números de cédula terminen en `,
    vehicle: `Hoy pueden rodar en ${cities[city]} los vehículos cuyas placas terminen en `,
  }[entity]
}

export const noDataToday = (entity: Entity, city: City): string => {
  return {
    person: `No hay datos para pico y cédula en ${cities[city]} el día de hoy`,
    vehicle: `No hay datos para pico y placa en ${cities[city]} el día de hoy`,
  }[entity]
}

export const messageForToday = (state: GoOutState, entity: Entity): string => {
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
  let newDate = date.split('/').reverse().join('/')
  newDate = newDate.slice(0, 6) + '20' + newDate.slice(6)
  if (state === 'ERROR')
    return `No hay información disponible para el día ${newDate} (${day}) en ${city}`
  const canGoOut = state === 'YES' ? 'SÍ' : 'NO'
  const verb = { person: 'salir', vehicle: 'manejar' }[entity]
  return `Usted ${canGoOut} puede ${verb} el día ${newDate} (${day}) en ${city}`
}

export const lastNumbersCanGoOut = (entity: Entity): string => {
  return {
    person: 'Las personas con cédulas terminadas en estos números pueden salir hoy',
    vehicle:
      'Los vehículos con placas terminadas en estos números NO pueden salir hoy',
  }[entity]
}
