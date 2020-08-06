import { Day } from '../index.types'

export const getCurrentDate = (date: Date = new Date()): string => {
  const d = date || new Date()
  const ts = (n: number): string => (n < 10 ? '0' + n : n >= 100 ? '' + (n - 2000) : '' + n)
  const strDate = `${ts(d.getFullYear())}/${ts(d.getMonth() + 1)}/${ts(d.getDate())}`
  return strDate
}

export const getCurrentWeek = (): string[] => {
  const d = new Date()
  const w0 = d.getDate()
  const dates: string[] = []
  for (let i = 0; i <= 6; i++) {
    dates.push(getCurrentDate(new Date(d.setDate(w0 + i))))
  }
  return dates
}

export const dayOfWeekString: { [n: number]: Day } = {
  0: 'Domingo',
  1: 'Lunes',
  2: 'Martes',
  3: 'Miércoles',
  4: 'Jueves',
  5: 'Viernes',
  6: 'Sábado',
  7: 'Domingo',
}

export const DIGITS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
