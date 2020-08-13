import { Entity } from 'components/index.types'

export type City = 'CALI' | 'BOGOTA' | 'BARRANQUILLA' | 'CUCUTA'

export const email = 'deft.soluciones@gmail.com'

export const subjects: { [type in 'issue' | 'contact']: string } = {
  issue: '?subject=Reporte%de%20un%20problema',
  contact: '?subject=Quiero%20contactar%20con%20ustedes',
}

export const cities: { [city in City]: string } = {
  CALI: 'Cali',
  BOGOTA: 'Bogotá',
  BARRANQUILLA: 'Barranquilla',
  CUCUTA: 'Cúcuta',
}

export const source: { [city in City]: string } = {
  CALI: 'https://twitter.com/AlcaldiaDeCali',
  BOGOTA: 'https://twitter.com/Bogota',
  BARRANQUILLA: 'https://twitter.com/alcaldiabquilla?s=20',
  CUCUTA: 'https://twitter.com/AlcaldiaCucuta',
}

const pico_y_cedula: { [city in City]: { [date: string]: number[] } } = {
  CALI: {
    '20/08/01': [1, 3, 5, 7, 9],
    '20/08/02': [0, 2, 4, 6, 8],
    '20/08/03': [1, 3, 5, 7, 9],
    '20/08/04': [0, 2, 4, 6, 8],
    '20/08/05': [1, 3, 5, 7, 9],
    '20/08/06': [0, 2, 4, 6, 8],
    '20/08/07': [1, 3, 5, 7, 9],
    '20/08/08': [0, 2, 4, 6, 8],
    '20/08/09': [1, 3, 5, 7, 9],
    '20/08/10': [0, 2, 4, 6, 8],
    '20/08/11': [1, 3, 5, 7, 9],
    '20/08/12': [0, 2, 4, 6, 8],
    '20/08/13': [1, 3, 5, 7, 9],
    '20/08/14': [0, 2, 4, 6, 8],
    '20/08/15': [1, 3, 5, 7, 9],
    '20/08/16': [0, 2, 4, 6, 8],
    '20/08/17': [1, 3, 5, 7, 9],
    '20/08/18': [0, 2, 4, 6, 8],
    '20/08/19': [1, 3, 5, 7, 9],
    '20/08/20': [0, 2, 4, 6, 8],
    '20/08/21': [1, 3, 5, 7, 9],
    '20/08/22': [0, 2, 4, 6, 8],
    '20/08/23': [1, 3, 5, 7, 9],
    '20/08/24': [0, 2, 4, 6, 8],
    '20/08/25': [1, 3, 5, 7, 9],
    '20/08/26': [0, 2, 4, 6, 8],
    '20/08/27': [1, 3, 5, 7, 9],
    '20/08/28': [0, 2, 4, 6, 8],
    '20/08/29': [1, 3, 5, 7, 9],
    '20/08/30': [0, 2, 4, 6, 8],
    '20/08/31': [1, 3, 5, 7, 9],
  },
  BOGOTA: {
    '20/08/13': [0, 2, 4, 6, 8],
    '20/08/14': [1, 3, 5, 7, 9],
    '20/08/15': [0, 2, 4, 6, 8],
    '20/08/16': [1, 3, 5, 7, 9],
  },
  BARRANQUILLA: {
    '20/08/13': [1, 3, 5, 7, 9],
    '20/08/14': [0, 2, 4, 6, 8],
    '20/08/15': [1, 3, 5, 7, 9],
    '20/08/16': [0, 2, 4, 6, 8],
    '20/08/17': [1, 3, 5, 7, 9],
    '20/08/18': [0, 2, 4, 6, 8],
    '20/08/19': [1, 3, 5, 7, 9],
    '20/08/20': [0, 2, 4, 6, 8],
    '20/08/21': [1, 3, 5, 7, 9],
    '20/08/22': [0, 2, 4, 6, 8],
    '20/08/23': [1, 3, 5, 7, 9],
  },
  CUCUTA: {
    '20/08/13': [7, 8],
    '20/08/14': [9, 0],
    '20/08/15': [1, 3, 5, 7, 9],
    '20/08/16': [0, 2, 4, 6, 8],
    '20/08/17': [1, 2],
    '20/08/18': [3, 4],
    '20/08/19': [5, 6],
    '20/08/20': [7, 8],
    '20/08/21': [9, 0],
    '20/08/22': [0, 2, 4, 6, 8],
    '20/08/23': [1, 3, 5, 7, 9],
    '20/08/24': [1, 2],
    '20/08/25': [3, 4],
    '20/08/26': [5, 6],
    '20/08/27': [7, 8],
    '20/08/28': [9, 0],
    '20/08/29': [1, 3, 5, 7, 9],
    '20/08/30': [0, 2, 4, 6, 8],
    '20/08/31': [1, 2],
  },
}

const pico_y_placa: { [city in City]: { [date: string]: number[] } } = {
  CALI: { '20/07/31': [2, 0] },
  BOGOTA: {},
  BARRANQUILLA: {},
  CUCUTA: {
     '20/08/15': [1, 3, 5, 7, 9]
     '20/08/16': [2, 4, 6, 8, 0]
     '20/08/22': [2, 4, 6, 8, 0]
     '20/08/23': [1, 3, 5, 7, 9]
     '20/08/29': [1, 3, 5, 7, 9]
     '20/08/30': [2, 4, 6, 8, 0]
  },
}

const pico_y_placa_week: { [city in City]: { [day: number]: number[] } } = {
  CALI: {
    0: [],
    1: [3, 4],
    2: [5, 6],
    3: [7, 8],
    4: [9, 0],
    5: [1, 2],
    6: [],
  },
  BOGOTA: {
    0: [],
    1: [0, 2, 4, 6, 8],
    2: [1, 3, 5, 7, 9],
    3: [0, 2, 4, 6, 8],
    4: [1, 3, 5, 7, 9],
    5: [0, 2, 4, 6, 8],
    6: [],
  },
  BARRANQUILLA: {
    0: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
    1: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
    2: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
    3: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
    4: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
    5: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
    6: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
  },
  CUCUTA: {
    0: [],
    1: [1, 2],
    2: [3, 4],
    3: [5, 6],
    4: [7, 8],
    5: [9, 0],
    6: [],
}

export const getData = (
  entity: Entity,
  city: City,
  date: string,
): number[] | null => {
  if (entity === 'person') {
    return pico_y_cedula[city][date] || null
  } else if (entity === 'vehicle') {
    let result = pico_y_placa[city][date] || null
    if (!result) {
      const [year, month, day] = date
        .split('/')
        .map((v, i) => parseInt(v) + (i === 0 ? 2000 : 0))
      const newDate = new Date(year, month - 1, day)
      result = pico_y_placa_week[city][newDate.getDay()]
    }
    return result
      ? [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].filter(n => !result.includes(n))
      : null
  }
  return null
}
