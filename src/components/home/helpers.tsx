export const getCurrentDate = (): string => {
  const d = new Date()
  const ts = (n: number): string => (n < 10 ? '0' + n : n >= 100 ? '' + (n - 2000) : '' + n)
  const strDate = `${ts(d.getFullYear())}/${ts(d.getMonth())}/${ts(d.getDate())}`
  return strDate
}
