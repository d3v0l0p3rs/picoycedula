import { Entity } from 'components/index.types'

export type City =
  | 'BARRANQUILLA'
  | 'BOGOTA'
  | 'BUCARAMANGA'
  | 'BUGA'
  | 'CALI'
  | 'CUCUTA'
  | 'JAMUNDI'
  | 'MEDELLIN'
  | 'PALMIRA'
  | 'YUMBO'

export const email = 'deft.soluciones@gmail.com'

export const subjects: { [type in 'issue' | 'contact']: string } = {
  issue: '?subject=Reporte%de%20un%20problema',
  contact: '?subject=Quiero%20contactar%20con%20ustedes',
}

export const cities: { [city in City]: string } = {
  BARRANQUILLA: 'Barranquilla',
  BOGOTA: 'Bogotá',
  BUCARAMANGA: 'Bucaramanga',
  BUGA: 'Buga',
  CALI: 'Cali',
  CUCUTA: 'Cúcuta',
  JAMUNDI: 'Jamundí',
  MEDELLIN: 'Medellín',
  PALMIRA: 'Palmira',
  YUMBO: 'Yumbo',
}

export const source: { [city in City]: string } = {
  CALI: 'https://twitter.com/AlcaldiaDeCali',
  BOGOTA: 'https://twitter.com/ClaudiaLopez/status/1297851145721745409/photo/1',
  BARRANQUILLA: 'https://twitter.com/alcaldiabquilla/header_photo',
  BUGA: 'https://twitter.com/AlcaldiaBuga/status/1289249870298009601',
  CUCUTA: 'https://www.instagram.com/p/CDWNXnPnruH',
  JAMUNDI:
    'https://www.facebook.com/AlcaldiaMunicipalJamundi/photos/a.1270549679660733/3193709250678090',
  PALMIRA:
    'https://www.palmira.gov.co/attachments/article/9120/2020%2008%2013%20-%20Decreto%20888%20Por%20el%20cual%20se%20dictan%20medidas%20de%20aislamiento%20en%20el%20Municipio%20de%20Palmira.pdf',
  YUMBO:
    'https://www.facebook.com/alcaldiayumbo/photos/pcb.2827031144223125/2826999070892999',
  MEDELLIN:
    'https://www.antena2.com/mas-alla-del-deporte/pico-y-cedula-en-medellin-desde-el-18-al-30-de-agosto',
  BUCARAMANGA: 'https://twitter.com/AlcaldiaBGA/status/1296036334541385730',
}

const pico_y_cedula: { [city in City]: { [date: string]: number[] } } = {
  CALI: {
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
    '20/08/24': [2, 4, 6, 8, 0],
    '20/08/25': [1, 3, 5, 7, 9],
    '20/08/26': [2, 4, 6, 8, 0],
    '20/08/27': [1, 3, 5, 7, 9],
    '20/08/28': [2, 4, 6, 8, 0],
    '20/08/29': [1, 3, 5, 7, 9],
    '20/08/30': [2, 4, 6, 8, 0],
  },
  BARRANQUILLA: {
    '20/08/24': [0, 2, 4, 6, 8],
    '20/08/25': [1, 3, 5, 7, 9],
    '20/08/26': [0, 2, 4, 6, 8],
    '20/08/27': [1, 3, 5, 7, 9],
    '20/08/28': [0, 2, 4, 6, 8],
    '20/08/29': [1, 3, 5, 7, 9],
    '20/08/30': [0, 2, 4, 6, 8],
    '20/08/31': [1, 3, 5, 7, 9],
  },
  BUGA: {
    '20/08/18': [1, 3, 5, 7, 9],
    '20/08/19': [0, 2, 4, 6, 8],
    '20/08/20': [1, 3, 5, 7, 9],
    '20/08/21': [0, 2, 4, 6, 8],
    '20/08/22': [1, 3, 5, 7, 9],
    '20/08/23': [0, 2, 4, 6, 8],
    '20/08/24': [1, 3, 5, 7, 9],
    '20/08/25': [0, 2, 4, 6, 8],
    '20/08/26': [1, 3, 5, 7, 9],
    '20/08/27': [0, 2, 4, 6, 8],
    '20/08/28': [1, 3, 5, 7, 9],
    '20/08/29': [0, 2, 4, 6, 8],
    '20/08/30': [1, 3, 5, 7, 9],
    '20/08/31': [0, 2, 4, 6, 8],
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
  JAMUNDI: {
    '20/08/24': [2, 4, 6, 8, 0],
    '20/08/25': [1, 3, 5, 7, 9],
    '20/08/26': [2, 4, 6, 8, 0],
    '20/08/27': [1, 3, 5, 7, 9],
    '20/08/28': [2, 4, 6, 8, 0],
    '20/08/29': [1, 3, 5, 7, 9],
    '20/08/30': [2, 4, 6, 8, 0],
    '20/08/31': [1, 3, 5, 7, 9],
  },
  PALMIRA: {
    '20/08/19': [5, 6, 7, 8],
    '20/08/20': [9, 0, 1, 2],
    '20/08/21': [3, 4, 5, 6],
    '20/08/22': [7, 8, 9, 0],
    '20/08/23': [],
    '20/08/24': [],
    '20/08/25': [1, 2, 3, 4],
    '20/08/26': [5, 6, 7, 8],
    '20/08/27': [9, 0, 1, 2],
    '20/08/28': [3, 4, 5, 6],
    '20/08/29': [7, 8, 9, 0],
    '20/08/30': [],
    '20/08/31': [],
  },
  YUMBO: {
    '20/08/19': [4, 5],
    '20/08/20': [6, 7],
    '20/08/21': [8, 9, 0],
    '20/08/22': [0, 2, 4, 6, 8],
    '20/08/23': [1, 3, 5, 7, 9],
    '20/08/24': [1, 2],
    '20/08/25': [3, 4],
    '20/08/26': [5, 6],
    '20/08/27': [7, 8],
    '20/08/28': [9, 0],
    '20/08/29': [0, 2, 4, 6, 8],
    '20/08/30': [1, 3, 5, 7, 9],
    '20/08/31': [1, 2],
  },
  MEDELLIN: {
    '20/08/19': [2, 3],
    '20/08/20': [4, 5],
    '20/08/21': [6, 7],
    '20/08/22': [8, 9],
    '20/08/23': [0, 1],
    '20/08/24': [0, 1],
    '20/08/25': [2, 3],
    '20/08/26': [4, 5],
    '20/08/27': [6, 7],
    '20/08/28': [8, 9],
    '20/08/29': [2, 3],
    '20/08/30': [4, 5],
  },
  BUCARAMANGA: {
    '20/08/19': [7, 8],
    '20/08/20': [9, 0],
    '20/08/21': [1, 2],
    '20/08/22': [3, 2],
    '20/08/23': [],
    '20/08/24': [5, 6],
    '20/08/25': [7, 8],
    '20/08/26': [9, 0],
    '20/08/27': [1, 2],
    '20/08/28': [3, 4],
    '20/08/29': [5, 6],
    '20/08/30': [],
    '20/08/31': [7, 8],
  },
}

const pico_y_placa: { [city in City]: { [date: string]: number[] } } = {
  CALI: { '20/07/31': [2, 0] },
  BOGOTA: {},
  BARRANQUILLA: {},
  BUGA: {},
  CUCUTA: {
    '20/08/15': [1, 3, 5, 7, 9],
    '20/08/16': [2, 4, 6, 8, 0],
    '20/08/22': [2, 4, 6, 8, 0],
    '20/08/23': [1, 3, 5, 7, 9],
    '20/08/29': [1, 3, 5, 7, 9],
    '20/08/30': [2, 4, 6, 8, 0],
  },
  JAMUNDI: {},
  PALMIRA: {},
  YUMBO: {},
  MEDELLIN: {},
  BUCARAMANGA: {},
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
    0: [],
    1: [],
    2: [],
    3: [],
    4: [],
    5: [],
    6: [],
  },
  BUGA: {},
  CUCUTA: {
    0: [],
    1: [1, 2],
    2: [3, 4],
    3: [5, 6],
    4: [7, 8],
    5: [9, 0],
    6: [],
  },
  JAMUNDI: {},
  PALMIRA: {},
  YUMBO: {},
  MEDELLIN: {},
  BUCARAMANGA: {},
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
