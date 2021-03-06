export type Entity = 'person' | 'vehicle'
export type GoOutState = 'YES' | 'NO' | 'ERROR' | 'UNDEFINED'
export type Day =
  | 'Domingo'
  | 'Lunes'
  | 'Martes'
  | 'Miércoles'
  | 'Jueves'
  | 'Viernes'
  | 'Sábado'
  | 'Domingo'
export type GoOutWeekState = { canGoOut: GoOutState; day: Day; date: string }[]
