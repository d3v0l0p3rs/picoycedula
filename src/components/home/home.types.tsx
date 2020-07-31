export interface SetState {
  (canGoOut: GoOutState): void
}
export type Entity = 'person' | 'vehicle'
export type GoOutState = 'YES' | 'NO' | 'ERROR' | 'UNDEFINED'
