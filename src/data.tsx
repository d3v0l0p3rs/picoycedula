import { Entity } from 'components/index.types'

export type City =
 /* | 'BARRANQUILLA'
  | 'BUCARAMANGA'
  | 'BUGA'*/
  | 'BOGOTA'
  | 'CALI'
 /* | 'CUCUTA'
  | 'JAMUNDI'
  | 'MEDELLIN'
  | 'PALMIRA'
  | 'YUMBO'
  | 'CERRITO'
  | 'MANIZALES'
  | 'ARMENIA'
  | 'CARTAGENA'
  | 'POPAYAN'
  | 'BUENAVENTURA'*/

export const email = 'deft.soluciones@gmail.com'

export const subjects: { [type in 'issue' | 'contact']: string } = {
  issue: '?subject=Reporte%de%20un%20problema',
  contact: '?subject=Quiero%20contactar%20con%20ustedes',
}

export const cities: { [city in City]: string } = {
 /* ARMENIA: 'Armenia',
  BARRANQUILLA: 'Barranquilla',
  BUCARAMANGA: 'Bucaramanga',
  BUENAVENTURA: 'Buenaventura',
  BUGA: 'Buga',*/
  BOGOTA: 'Bogotá',
  CALI: 'Cali',
 /* CARTAGENA: 'Cartagena',
  CERRITO: 'El Cerrito',
  CUCUTA: 'Cúcuta',
  JAMUNDI: 'Jamundí',
  MANIZALES: 'Manizales',
  MEDELLIN: 'Medellín',
  PALMIRA: 'Palmira',
  POPAYAN: 'Popayán',
  YUMBO: 'Yumbo',*/
}

export const source: { [city: string]: string } = {
  CALI: 'https://twitter.com/AlcaldiaDeCali',
  BOGOTA: 'https://twitter.com/Bogota',
  /*BARRANQUILLA: 'https://twitter.com/alcaldiabquilla/header_photo',
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
  CERRITO: 'https://twitter.com/MPIOELCERRITO/status/1291863312175640576/photo/1',
  MANIZALES: 'https://twitter.com/CiudadManizales',
  ARMENIA:'https://twitter.com/AlcaldiaArmenia/status/1297574950556053505',
  CARTAGENA: 'https://twitter.com/AlcaldiaCTG/status/1294006124056915968/photo/1',
  POPAYAN: 'https://twitter.com/AlcaldiaPopayan/status/1289316849826635777/photo/1',
  BUENAVENTURA: 'https://www.facebook.com/AlcaldiaBuenaventura/photos/a.625253074254338/3002690809843874',*/
}

const pico_y_cedula: { [city: string]: { [date: string]: number[] } } = {
  CALI: {
    '20/12/25': [1, 3, 5, 7, 9],
    '20/12/26': [2, 4, 6, 8, 0],
    '20/12/27': [1, 3, 5, 7, 9],
    '20/12/28': [2, 4, 6, 8, 0],
    '20/12/29': [1, 3, 5, 7, 9],
    '20/12/30': [2, 4, 6, 8, 0],
    '20/12/31': [1, 3, 5, 7, 9],
    '21/12/01': [2, 4, 6, 8, 0],
    '21/12/02': [1, 3, 5, 7, 9],
    '21/12/03': [2, 4, 6, 8, 0],
    '21/12/04': [1, 3, 5, 7, 9],
  },
BOGOTA: {
    '20/12/21': [1, 3, 5, 7, 9],
    '20/12/22': [2, 4, 6, 8, 0],
    '20/12/23': [1, 3, 5, 7, 9],
    '20/12/24': [2, 4, 6, 8, 0],
    '20/12/25': [1, 3, 5, 7, 9],
    '20/12/26': [2, 4, 6, 8, 0],
    '20/12/27': [1, 3, 5, 7, 9],
    '20/12/28': [2, 4, 6, 8, 0],
    '20/12/29': [1, 3, 5, 7, 9],
    '20/12/30': [2, 4, 6, 8, 0],
    '20/12/31': [1, 3, 5, 7, 9],
    '20/12/01': [1, 3, 5, 7, 9],
    '20/12/02': [2, 4, 6, 8, 0],
    '20/12/03': [1, 3, 5, 7, 9],
    '20/12/04': [2, 4, 6, 8, 0],
    '20/12/05': [1, 3, 5, 7, 9],
    '20/12/06': [2, 4, 6, 8, 0],
    '20/12/07': [1, 3, 5, 7, 9],
    '20/12/08': [2, 4, 6, 8, 0],
    '20/12/09': [1, 3, 5, 7, 9],
    '20/12/10': [2, 4, 6, 8, 0],
    '20/12/11': [1, 3, 5, 7, 9],
    '20/12/12': [2, 4, 6, 8, 0],
    '20/12/13': [1, 3, 5, 7, 9],
    '20/12/14': [2, 4, 6, 8, 0],
    '20/12/15': [1, 3, 5, 7, 9],
  },
}

const pico_y_placa: { [city: string]: { [date: string]: number[] } } = {
  CALI: { '20/07/31': [2, 0] },
}

const pico_y_placa_week: { [city: string]: { [day: number]: number[] } } = {
  CALI: {
    0: [],
    1: [3, 4],
    2: [5, 6],
    3: [7, 8],
    4: [9, 0],
    5: [1, 2],
    6: [],
  },
}

export const getData = (
  entity: Entity,
  city: City,
  date: string,
): number[] | null => {
  if (entity === 'person') {
    return pico_y_cedula[city] && pico_y_cedula[city][date] || null
  } else if (entity === 'vehicle') {
    let result = pico_y_placa[city] && pico_y_placa[city][date] || null
    if (!result) {
      const [year, month, day] = date
        .split('/')
        .map((v, i) => parseInt(v) + (i === 0 ? 2000 : 0))
      const newDate = new Date(year, month - 1, day)
      result = pico_y_placa_week[city] && pico_y_placa_week[city][newDate.getDay()]
    }
    return result
      ? [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].filter(n => !result.includes(n))
      : null
  }
  return null
}
